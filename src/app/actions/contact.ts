"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limiter";

export type ActionResponse = {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
};

// Initialize Resend with API key
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "contact@capyco.ca";

const FROM_EMAIL = process.env.FROM_EMAIL || "contact@capyco.dev";

// Next.js 15 Server Action
export async function submitContactForm(
    data: ContactFormValues,
    clientIp?: string
): Promise<ActionResponse> {
    // Validate the incoming data with Zod
    const validationResult = contactFormSchema.safeParse(data);

    if (!validationResult.success) {
        return {
            success: false,
            message: "Please fix the errors in the form.",
            errors: validationResult.error.flatten().fieldErrors,
        };
    }

    const { name, email, company, message, website, loadTime } = validationResult.data;

    // -- ANTI-BOT LAYER 1: Honeypot Validation --
    // If the hidden 'website' field is filled out, it's definitely a bot
    if (website && website.length > 0) {
        console.warn(`[Bot Blocked] Honeypot triggered. Data:`, { name, email });
        // We return success to confuse the bot (silent drop)
        return { success: true, message: "Thanks! We'll be in touch soon." };
    }

    // -- ANTI-BOT LAYER 2: Timing Validation --
    // If form was submitted in less than 3 seconds, it's a bot
    const submissionTime = Date.now();
    const timeTaken = submissionTime - loadTime;

    if (timeTaken < 3000) {
        console.warn(`[Bot Blocked] Form submitted too fast (${timeTaken}ms).`);
        // Again, silent drop
        return { success: true, message: "Thanks! We'll be in touch soon." };
    }

    // -- ANTI-BOT LAYER 3: Rate Limiting --
    const ip = clientIp || "unknown";
    const rateLimitResult = checkRateLimit(ip, {
        maxRequests: 5,
        windowMs: 60 * 60 * 1000, // 1 hour
    });

    if (!rateLimitResult.allowed) {
        console.warn(`[Rate Limited] Too many requests from IP: ${ip}`);
        return {
            success: false,
            message: "You've sent too many messages recently. Please try again later."
        };
    }

    // -- SUCCESS LOGIC: Send Email --
    try {
        const submissionDetails = {
            name,
            email,
            company: company || "N/A",
            message,
            source: "CapyCo Website",
            submittedAt: new Date().toISOString(),
        };

        // Log submission for debugging
        console.log("New valid contact submission:", submissionDetails);

        // Send email via Resend if configured
        if (resend) {
            const emailResult = await resend.emails.send({
                from: `CapyCo Contact <${FROM_EMAIL}>`,
                to: CONTACT_EMAIL_TO,
                replyTo: email,
                subject: `New Contact Form Submission from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || "N/A"}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="border-left: 4px solid #D4952B; padding-left: 16px; margin-left: 0;">
                        ${message.replace(/\n/g, "<br>")}
                    </blockquote>
                    <hr style="margin: 20px 0;" />
                    <p style="color: #666; font-size: 12px;">
                        Submitted from: ${submissionDetails.source}<br>
                        Time taken: ${timeTaken}ms<br>
                        Timestamp: ${submissionDetails.submittedAt}
                    </p>
                `,
                text: `New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}

---
Submitted from: ${submissionDetails.source}
Time taken: ${timeTaken}ms
Timestamp: ${submissionDetails.submittedAt}`,
            });

            if (emailResult.error) {
                console.error("Resend error:", emailResult.error);
                // Still return success to user, but log the error
                // In production, you might want to retry or use a fallback
            } else {
                console.log("Email sent successfully:", emailResult.data?.id);
            }
        } else {
            console.log("Resend not configured - email would be sent in production");
            console.log("To enable emails, set RESEND_API_KEY in .env.local");
        }

        return {
            success: true,
            message: "Thanks! Your message has been sent successfully. We'll be in touch soon.",
        };
    } catch (error) {
        console.error("Error sending email:", error);

        // Return success anyway - we don't want to lose leads due to email errors
        // In production, you should set up proper error monitoring
        return {
            success: true,
            message: "Thanks! Your message has been received. We'll be in touch soon.",
        };
    }
}

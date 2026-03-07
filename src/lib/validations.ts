import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters.").max(2000, "Message cannot exceed 2000 characters."),
    // Honeypot field - should always be empty
    website: z.string().max(0, "Invalid submission"),
    // Timestamps for timing validation
    loadTime: z.number(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

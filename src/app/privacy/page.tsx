import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "CapyCo Privacy Policy - How we handle your data.",
};

/**
 * Privacy Policy Page
 *
 * Placeholder privacy policy that follows best practices.
 * Update with actual legal text when ready.
 */
export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background py-24 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-syne text-foreground">
                        Privacy Policy
                    </h1>
                </div>

                <div className="prose prose-slate max-w-none">
                    <p className="text-muted-foreground mb-8">
                        Last updated: March 7, 2026
                    </p>

                    <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                        <p className="text-foreground/80 leading-relaxed">
                            CapyCo ("we," "us," or "our") is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard
                            your information when you visit our website or use our services.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Information We Collect
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        We may collect information about you in a variety of ways, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                        <li>
                            <strong>Personal Data:</strong> Name, email address, and company information
                            voluntarily provided through our contact form.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how you use our website,
                            collected automatically via cookies and analytics tools.
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser type, and device information.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        How We Use Your Information
                    </h2>
                    <p className="text-foreground/80 mb-4">
                        We may use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                        <li>Responding to your inquiries and providing customer support</li>
                        <li>Improving our website and services</li>
                        <li>Sending you updates and marketing communications (with your consent)</li>
                        <li>Protecting against spam and abuse</li>
                    </ul>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Data Protection
                    </h2>
                    <p className="text-foreground/80 mb-6">
                        We implement appropriate technical and organizational measures to protect
                        your personal data against unauthorized access, alteration, disclosure, or
                        destruction. Our contact form uses multiple layers of bot protection including
                        honeypot fields and rate limiting.
                    </p>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Third-Party Services
                    </h2>
                    <p className="text-foreground/80 mb-6">
                        We may use third-party service providers to help us operate our business
                        and website. These providers have access to your personal information
                        only to perform specific tasks on our behalf and are obligated not to
                        disclose or use it for any other purpose.
                    </p>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Your Rights
                    </h2>
                    <p className="text-foreground/80 mb-6">
                        Depending on your location, you may have certain rights regarding your
                        personal information, including the right to access, correct, or delete
                        your data. To exercise these rights, please contact us at{" "}
                        <a href="mailto:contact@capyco.ca" className="text-primary hover:underline">
                            contact@capyco.ca
                        </a>.
                    </p>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Changes to This Policy
                    </h2>
                    <p className="text-foreground/80 mb-6">
                        We may update this Privacy Policy from time to time. We will notify you
                        of any changes by posting the new Privacy Policy on this page and updating
                        the "Last updated" date.
                    </p>

                    <h2 className="text-2xl font-bold font-syne text-foreground mt-8 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-foreground/80 mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:{" "}
                        <a href="mailto:contact@capyco.ca" className="text-primary hover:underline">
                            contact@capyco.ca
                        </a>
                    </p>
                </div>

                {/* Back to Home */}
                <div className="mt-12 pt-8 border-t border-border">
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

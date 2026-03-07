'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

/**
 * Not Found (404) - Page not found error
 *
 * Displayed when a user navigates to a non-existent route.
 * Includes the CapyCo mascot for brand consistency.
 */
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <div className="mb-8 animate-fade-in">
                    <h1 className="text-[8rem] md:text-[12rem] font-black font-outfit text-foreground/10 leading-none select-none">
                        404
                    </h1>
                </div>

                {/* Mascot Image */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                    <Image
                        src="/images/capyco-mascot.png"
                        alt="Confused CapyCo mascot"
                        fill
                        className="object-contain opacity-80 grayscale"
                    />
                </div>

                {/* Error Message */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-foreground mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                        Oops! Looks like this page wandered off into the digital wilderness.
                        Even capybaras get lost sometimes.
                    </p>

                    {/* Back to Home Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

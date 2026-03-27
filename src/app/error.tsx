'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryProps {
    error: Error & { digest?: string }
    reset: () => void
}

/**
 * Error Boundary - Global error handler for the app
 *
 * Catches runtime errors in React components and displays
 * a user-friendly error page with recovery options.
 */
export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    useEffect(() => {
        // Log error to error tracking service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
            <div className="max-w-md w-full text-center animate-fade-in">
                {/* Error Icon */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-12 h-12 text-destructive" />
                </div>

                {/* Error Message */}
                <h1 className="text-3xl font-bold font-syne text-foreground mb-4">
                    Something went wrong!
                </h1>

                <p className="text-muted-foreground mb-2">
                    We encountered an unexpected error. Don&apos;t worry, even capybaras have bad days.
                </p>

                {/* Error details (only in development) */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="my-6 p-4 bg-muted rounded-lg text-left">
                        <p className="text-xs font-mono text-muted-foreground mb-2">
                            Error details (dev only):
                        </p>
                        <p className="text-sm font-mono text-destructive break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-xs font-mono text-muted-foreground mt-2">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-foreground/10 text-foreground font-medium hover:bg-foreground/5 transition-colors"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Go Home
                    </Link>
                </div>

                {/* Mascot illustration hint */}
                <div className="mt-12 text-sm text-muted-foreground">
                    <p>If the problem persists, please contact us at{' '}
                        <a href="mailto:hello@capyco.dev" className="text-primary hover:underline">
                            hello@capyco.dev
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

import { Loader2 } from 'lucide-react'

/**
 * Loading - Global loading state for the app
 *
 * Displayed while page content is loading.
 * Uses the warm CapyCo color scheme for consistency.
 */
export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                {/* Animated spinner */}
                <Loader2 className="w-12 h-12 text-primary animate-spin" />

                {/* Loading text */}
                <p className="text-muted-foreground font-medium animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    )
}

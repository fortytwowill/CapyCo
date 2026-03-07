/**
 * Rate Limiter - Utility for rate limiting API requests
 *
 * Uses in-memory storage for demo purposes.
 * For production, use Redis (e.g., Upstash) for distributed rate limiting.
 */

interface RateLimitConfig {
    /** Maximum number of requests allowed in the window */
    maxRequests: number;
    /** Time window in milliseconds */
    windowMs: number;
}

interface RateLimitResult {
    /** Whether the request is allowed */
    allowed: boolean;
    /** Number of remaining requests in the current window */
    remaining: number;
    /** Time until the rate limit resets (in milliseconds) */
    resetTime: number;
}

/**
 * In-memory store for rate limiting
 * Key: IP address or identifier
 * Value: Array of timestamps for requests
 */
const requestStore = new Map<string, number[]>();

/**
 * Default configuration
 * 5 requests per hour per IP
 */
const defaultConfig: RateLimitConfig = {
    maxRequests: 5,
    windowMs: 60 * 60 * 1000, // 1 hour
};

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns RateLimitResult with allowed status and remaining count
 *
 * @example
 * const result = checkRateLimit('192.168.1.1');
 * if (!result.allowed) {
 *   return { error: 'Rate limited' };
 * }
 */
export function checkRateLimit(
    identifier: string,
    config: Partial<RateLimitConfig> = {}
): RateLimitResult {
    const { maxRequests, windowMs } = { ...defaultConfig, ...config };
    const now = Date.now();

    // Get existing requests for this identifier
    const userRequests = requestStore.get(identifier) || [];

    // Filter out requests older than the window
    const recentRequests = userRequests.filter(
        (timestamp) => now - timestamp < windowMs
    );

    // Check if limit exceeded
    if (recentRequests.length >= maxRequests) {
        // Calculate reset time (oldest request + window)
        const oldestRequest = Math.min(...recentRequests);
        const resetTime = oldestRequest + windowMs - now;

        return {
            allowed: false,
            remaining: 0,
            resetTime: Math.max(0, resetTime),
        };
    }

    // Add current request
    recentRequests.push(now);
    requestStore.set(identifier, recentRequests);

    return {
        allowed: true,
        remaining: maxRequests - recentRequests.length,
        resetTime: windowMs,
    };
}

/**
 * Get the current rate limit status without consuming a request
 *
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns Current rate limit status
 */
export function getRateLimitStatus(
    identifier: string,
    config: Partial<RateLimitConfig> = {}
): Omit<RateLimitResult, "allowed"> & { allowed: boolean } {
    const { maxRequests, windowMs } = { ...defaultConfig, ...config };
    const now = Date.now();

    const userRequests = requestStore.get(identifier) || [];
    const recentRequests = userRequests.filter(
        (timestamp) => now - timestamp < windowMs
    );

    const remaining = Math.max(0, maxRequests - recentRequests.length);
    const allowed = remaining > 0;

    let resetTime = windowMs;
    if (recentRequests.length > 0) {
        const oldestRequest = Math.min(...recentRequests);
        resetTime = Math.max(0, oldestRequest + windowMs - now);
    }

    return { allowed, remaining, resetTime };
}

/**
 * Clear all rate limit data (useful for testing)
 */
export function clearRateLimitStore(): void {
    requestStore.clear();
}

/**
 * Create a rate limiter with custom configuration
 *
 * @example
 * const rateLimiter = createRateLimiter({ maxRequests: 10, windowMs: 60000 });
 * const result = rateLimiter.check('user-id');
 */
export function createRateLimiter(config: Partial<RateLimitConfig>) {
    const store = new Map<string, number[]>();
    const fullConfig = { ...defaultConfig, ...config };

    return {
        check(identifier: string): RateLimitResult {
            const now = Date.now();
            const userRequests = store.get(identifier) || [];
            const recentRequests = userRequests.filter(
                (timestamp) => now - timestamp < fullConfig.windowMs
            );

            if (recentRequests.length >= fullConfig.maxRequests) {
                const oldestRequest = Math.min(...recentRequests);
                const resetTime = oldestRequest + fullConfig.windowMs - now;

                return {
                    allowed: false,
                    remaining: 0,
                    resetTime: Math.max(0, resetTime),
                };
            }

            recentRequests.push(now);
            store.set(identifier, recentRequests);

            return {
                allowed: true,
                remaining: fullConfig.maxRequests - recentRequests.length,
                resetTime: fullConfig.windowMs,
            };
        },

        getStatus(identifier: string) {
            const now = Date.now();
            const userRequests = store.get(identifier) || [];
            const recentRequests = userRequests.filter(
                (timestamp) => now - timestamp < fullConfig.windowMs
            );

            return {
                allowed: recentRequests.length < fullConfig.maxRequests,
                remaining: Math.max(0, fullConfig.maxRequests - recentRequests.length),
                resetTime: recentRequests.length > 0
                    ? Math.min(...recentRequests) + fullConfig.windowMs - now
                    : fullConfig.windowMs,
            };
        },

        clear() {
            store.clear();
        },
    };
}

/**
 * Array of public Routes!
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/']
/**
 * Array of routes related to auth!
 * @type {string[]}
 */
export const authRoutes: string[] = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot',
]
/**
 * prefix for API Auth routes
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth'
/**
 * default redirect path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/settings'

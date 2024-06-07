"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.DEFAULT_LOGIN_REDIRECT = exports.apiAuthPrefix = exports.authRoutes = exports.publicRoutes = void 0;
/**
 * Array of public Routes!
 * @type {string[]}
 */
exports.publicRoutes = ['/'];
/**
 * Array of routes related to auth!
 * @type {string[]}
 */
exports.authRoutes = ['/auth/login', '/auth/register', '/auth/forgot'];
/**
 * prefix for API Auth routes
 * @type {string}
 */
exports.apiAuthPrefix = '/api/auth';
/**
 * default redirect path after logged in
 * @type {string}
 */
exports.DEFAULT_LOGIN_REDIRECT = '/settings';

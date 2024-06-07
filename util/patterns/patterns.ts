/**
 * Regular expression pattern for validating names.
 * @type {RegExp}
 * @constant
 */
export const namePattern: RegExp = /^[a-zA-Z ]*$/

/**
 * Regular expression pattern for validating email addresses.
 *
 * @type {RegExp}
 * @memberOf validate
 */
export const emailPattern: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

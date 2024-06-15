const WEAK_LENGTH = 6
const NORMAL_LENGTH = 8
const STRONG_LENGTH = 12
const VERY_STRONG_LENGTH = 15

/**
 * Calculates the strength of a given password.
 *
 * @param {string} password - The password to check.
 * @returns {number} - The strength of the password (-1 if invalid).
 */
export const checkPasswordStrength = (password: string): number => {
  let strength = -1
  const isInvalidPassword = /\s/.test(password)
  if (isInvalidPassword) {
    return -1
  }
  if (password.length >= WEAK_LENGTH) strength = 1
  if (password.length >= NORMAL_LENGTH && /[A-Z]/.test(password)) strength = 2
  if (
    password.length >= STRONG_LENGTH &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    strength = 3
  }
  if (
    password.length >= VERY_STRONG_LENGTH &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    strength = 4
  }
  return strength
}

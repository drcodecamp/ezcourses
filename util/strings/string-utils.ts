/**
 * Returns the initials characters of a full name.
 *
 * @param {string} fullName - The full name.
 * @return {string} The initials characters of the full name.
 */
export function getInitialsCharacters(fullName: string): string {
    const words = fullName.split(' ')
    const initial1 = words[0].charAt(0).toUpperCase()
    const initial2 = words[1].charAt(0).toUpperCase()
    return initial1 + initial2
}

/**
 * Pipes long strings by cutting them off at a maximum length and adding '...' at the end.
 *
 * @param {string} str - The input string to be piped if it exceeds the maximum length.
 * @returns {string} The piped string, which is either the input string or a modified string with '...' added.
 */
export function pipeLongStrings(str: string): string {
    const maxLength = 18
    if (str.length <= maxLength) {
        return str
    }
    return str.substring(0, 15) + '...'
}

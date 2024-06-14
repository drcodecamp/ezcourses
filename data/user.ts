import { db } from '@/lib/db'

/**
 * Retrieves a user from the database using their email.
 *
 * @async
 * @param {string} email - The email of the user to retrieve.
 */
export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({ where: { email } })
  } catch (err) {
    return null
  }
}
/**
 * Retrieves a user from the database by their ID.
 *
 * @param {string} id - The ID of the user to retrieve.
 */
export const getUserByID = async (id: string) => {
  try {
    return await db.user.findUnique({ where: { id } })
  } catch (err) {
    return null
  }
}

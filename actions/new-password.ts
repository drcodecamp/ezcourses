'use server'

import * as z from 'zod'
import { newPasswordSchema } from '@/schemas'
import { getPasswordRestTokenByToken } from '@/data/password-token'
import { getUserByEmail } from '@/data/user'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export const newPassword = async (
  values: z.infer<typeof newPasswordSchema>,
  token?: string | null
) => {
  //
  if (!token) {
    return {
      type: 'error',
      message: 'Token does not exist!',
    }
  }

  const validatedFields = newPasswordSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      type: 'error',
      message: 'Invalid fields!',
    }
  }
  const { password } = validatedFields.data

  const existingToken = await getPasswordRestTokenByToken(token)

  if (!existingToken) {
    return {
      type: 'error',
      message: 'Invalid token!',
    }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return {
      type: 'error',
      message: 'Token has expired!',
    }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return {
      type: 'error',
      message: 'Email does not exist!',
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  })

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  })

  return {
    type: 'success',
    message: 'Password updated!',
  }
}

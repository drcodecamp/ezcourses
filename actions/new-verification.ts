'use server'

import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { getVerificationByToken } from '@/data/verification-token'

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationByToken(token)
  if (!existingToken) {
    return {
      type: 'error',
      message: 'Token does not exist!',
    }
  }
  const isExpiredToken = new Date(existingToken.expires) < new Date()
  if (isExpiredToken) {
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
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  })
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  })
  return {
    type: 'success',
    message: 'Email has been verified!',
  }
}

import { db } from '@/lib/db'
import { getVerificationTokenByEmail } from '@/data/verification-token'
import { getPasswordRestTokenByEmail } from '@/data/password-token'
import { randomUUID } from 'node:crypto'

export const generatePasswordResetToken = async (email: string) => {
  const token = randomUUID()
  const expires = new Date(new Date().getTime() + 3600 * 1000) // 1Hr
  const existingToken = await getPasswordRestTokenByEmail(email)
  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    })
  }
  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })
  return passwordResetToken
}

export const generateVerificationToken = async (email: string) => {
  const token = randomUUID()
  const expires = new Date(new Date().getTime() + 3600 * 1000) // 1Hr
  const existingToken = await getVerificationTokenByEmail(email)
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })
  return verificationToken
}

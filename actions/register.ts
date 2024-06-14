'use server'

import { registerSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { z } from 'zod'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'

export const register = async (userInfo: z.infer<typeof registerSchema>) => {
  const validate = registerSchema.safeParse(userInfo)
  if (!validate.success) {
    return {
      type: 'error',
      message: 'Invalid fields',
    }
  }
  const { email, password, name } = validate.data
  const hashedPassword = bcrypt.hashSync(password, 10)
  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return {
      type: 'error',
      message: 'Email already taken!',
    }
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })
  const verificationToken = await generateVerificationToken(email)

  await sendVerificationEmail(email, verificationToken.token)

  return {
    type: 'success',
    message: 'Confirmation email sent!',
  }
}

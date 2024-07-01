'use server'

import { loginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { z } from 'zod'
import { getUserByEmail } from '@/data/user'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'
import bcrypt from 'bcryptjs'

export const login = async (userInfo: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(userInfo)
  if (!validatedFields.success) {
    return {
      type: 'error',
      message: 'Invalid fields!',
    }
  }
  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      type: 'error',
      message: 'Email does not exist!',
    }
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password)
  if (!isValidPassword) {
    return {
      type: 'error',
      message: 'Invalid password',
    }
  }

  if (isValidPassword && !existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )
    return {
      type: 'success',
      message: 'Confirmation email sent!',
    }
  }

  try {
    const user = await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
    return {
      type: 'success',
      message: 'Success login!',
      data: user,
    }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CallbackRouteError':
          return {
            type: 'error',
            message: 'Invalid credentials!',
          }
        default:
          return {
            type: 'error',
            message: 'Something went wrong!',
          }
      }
    }
    throw error
  }
}

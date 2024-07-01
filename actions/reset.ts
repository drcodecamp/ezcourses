'use server'

import * as z from 'zod'
import { resetSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { sendPasswordResetEmail } from '@/lib/mail'
import { generatePasswordResetToken } from '@/lib/tokens'

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      type: 'error',
      message: 'Invalid email',
    }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return {
      type: 'error',
      message: 'Email not found!',
    }
  }

  const passwordResetToken = await generatePasswordResetToken(email)
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )
  return {
    type: 'success',
    message: 'Reset email sent!',
  }
}

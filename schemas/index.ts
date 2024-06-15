import * as z from 'zod'

export const newPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required!',
  }),
})

export const resetSchema = z.object({
  email: z.string().email('Please enter a valid email!'),
})

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email!'),
  password: z.string().min(1, 'Please fill in your password!'),
})

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required!',
  }),
  name: z.string().min(2, {
    message: 'Name is required',
  }),
})

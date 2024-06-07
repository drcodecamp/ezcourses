'use server'

import {LoginSchema} from '@/schemas'
import {signIn} from '@/auth'
import {DEFAULT_LOGIN_REDIRECT} from '@/routes'
import {AuthError} from 'next-auth'
import {z} from 'zod'

export const login = async (userInfo: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(userInfo)
    if (!validatedFields.success) {
        return {
            type: 'error',
            message: 'Invalid fields!',
        }
    }
    const {email, password} = validatedFields.data
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
                case 'CredentialsSignin':
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

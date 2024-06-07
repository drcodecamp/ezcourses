import Credentials from 'next-auth/providers/credentials'
import {LoginSchema} from '@/schemas'
import {getUserByEmail} from '@/data/user'
import bcrypt from 'bcryptjs'

import Github from 'next-auth/providers/github'
import type {NextAuthConfig} from 'next-auth'

export default {
    providers: [
        Github,
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)
                if (validatedFields.success) {
                    const {email, password} = validatedFields.data
                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null
                    const isValidPassword = await bcrypt.compare(password, user.password)
                    if (isValidPassword) return user
                }
                return null
            },
        }),
    ],
} satisfies NextAuthConfig

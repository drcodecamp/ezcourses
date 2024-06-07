'use server'

import {RegisterSchema} from '@/schemas'
import bcrypt from 'bcryptjs'
import {db} from '@/lib/db'
import {getUserByEmail} from '@/data/user'
import {z} from 'zod'

export const register = async (userInfo: z.infer<typeof RegisterSchema>) => {
    const validate = RegisterSchema.safeParse(userInfo)
    if (!validate.success) {
        return {
            type: 'error',
            message: 'Invalid fields',
        }
    }
    const {email, password, name} = validate.data
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
    return {
        type: 'success',
        message: 'User created!',
    }
}

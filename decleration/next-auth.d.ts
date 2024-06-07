import {DefaultSession} from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            address: string
            role: string
        } & DefaultSession['user']
    }
}

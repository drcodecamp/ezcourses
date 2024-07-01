import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db: PrismaClient = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  ;(globalThis as typeof globalThis & { prisma?: PrismaClient }).prisma = db
}

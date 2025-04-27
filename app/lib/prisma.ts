import { PrismaClient } from '@/app/generated/prisma/client'
const prisma =
	new PrismaClient() as unknown as import('@prisma/client').PrismaClient
export default prisma

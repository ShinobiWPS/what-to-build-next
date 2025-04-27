// app/lib/auth-utils.ts
import { authOptions } from '@/app/lib/auth-options'
import { getServerSession } from 'next-auth/next'

export async function auth() {
	return getServerSession(authOptions)
}

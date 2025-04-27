import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// This middleware protects the dashboard routes
export default withAuth(
	function middleware(req) {
		return NextResponse.next()
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
		pages: {
			signIn: '/',
		},
	},
)

export const config = { matcher: ['/dashboard/:path*'] }

import { Navbar } from '@/app/components/navbar'
import { authOptions } from '@/app/lib/auth-options'
import SessionProvider from '@/app/session-provider'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'What to build Next',
	description: 'Decide your next project',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const serverSession = await getServerSession(authOptions)

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={serverSession}>
					<Navbar />
					<main className="container mx-auto p-4">{children}</main>
				</SessionProvider>
			</body>
		</html>
	)
}

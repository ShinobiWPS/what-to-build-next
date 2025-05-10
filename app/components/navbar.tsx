'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

interface NavBarProps {
	children: React.ReactNode
}

export function Navbar() {
	const { data: sessionData } = useSession()
	let logButton
	if (sessionData) {
		logButton = (
			<>
				<u>{sessionData?.user?.name}-</u>
				<button onClick={() => signOut()}>
					<i>logout</i>
				</button>
			</>
		)
	} else {
		logButton = (
			<>
				<button onClick={() => signIn()}>
					<b>login</b>
				</button>
			</>
		)
	}
	return (
		<nav className="bg-gray-800 text-white p-4">
			<ul className="flex space-x-4">
				<li className="">{logButton}</li>

				<li className="">
					<Link href="/" className="hover:text-gray-300">
						Home
					</Link>
				</li>
				{sessionData && (
					<li className="">
						<Link href="/dashboard" className="hover:text-gray-300">
							Dashboard
						</Link>
					</li>
				)}
				<li className="">
					<Link href="/about" className="hover:text-gray-300">
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}

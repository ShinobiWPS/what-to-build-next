// app/components/LoginButton.tsx
'use client'

import { signIn } from 'next-auth/react'

export function LoginButton() {
	const handleLogin = () => {
		
	}

	return <button onClick={handleLogin}>Continue as Guest</button>
}

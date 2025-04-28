'use client'

interface Props {
	params: {
		id: string
	}
}

export default function Page({ params }: Props) {
	const { id } = params

	return (
		<>
			<h1>Page {id}</h1>
			<p>About</p>
		</>
	)
}

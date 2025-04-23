import prisma from '@/app/lib/prisma'

interface Props {
	params: {
		id: string
	}
}

export default async function Page({ params }: Props) {
	const { id } = params
	const projectListRetrieved = await prisma.project.findMany()

	return (
		<>
			<h1>Page {id}</h1>
			<p>Page content</p>
			<br />
			{projectListRetrieved.map((project) => (
				<p key={project.id}>{project.title}</p>
			))}
		</>
	)
}

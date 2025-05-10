import { authOptions } from '@/app/lib/auth-options'
import prisma from '@/app/lib/prisma'
import { getServerSession } from 'next-auth/next'

export default async function DashboardPage() {
	const session = await getServerSession(authOptions)

	const userData = session?.user?.id
		? await prisma.user.findUnique({
				where: { id: session.user.id },
				include: { projects: true },
		  })
		: null

	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">Dashboard</h1>

			<div className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">User Info</h2>
				{session ? (
					<div>
						<p>Logged in as: {session.user?.name || 'Unknown'}</p>
						<p>User ID: {session.user?.id || 'N/A'}</p>
					</div>
				) : (
					<p>Not logged in</p>
				)}
			</div>

			<div className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Projects</h2>
				{userData?.projects?.length ? (
					<ul className="list-disc pl-6">
						{userData.projects.map((project) => (
							<li key={project.id}>{project.title}</li>
						))}
					</ul>
				) : (
					<p>No projects yet</p>
				)}
			</div>
		</div>
	)
}

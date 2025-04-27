export default function Home() {
	return (
		<div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md my-8">
			<h1 className="text-3xl font-bold mb-6 text-center">
				What to Build Next
			</h1>

			<div className="bg-blue-50 p-6 rounded-lg mb-8">
				<h2 className="text-xl font-semibold mb-3">Get Started</h2>
				<p className="mb-4">Sign in to start planning your next project!</p>
				<div className="flex justify-center">Login button</div>
			</div>

			<div className="grid gap-6 grid-cols-1 md:grid-cols-2">
				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold text-lg mb-2">Track Projects</h3>
					<p className="text-gray-600">
						Keep all your project ideas in one place.
					</p>
				</div>

				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold text-lg mb-2">Prioritize Ideas</h3>
					<p className="text-gray-600">
						Focus on what matters most for your goals.
					</p>
				</div>

				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold text-lg mb-2">
						Share &amp; Collaborate
					</h3>
					<p className="text-gray-600">
						Get feedback from others on your ideas.
					</p>
				</div>

				<div className="bg-gray-50 p-4 rounded-lg">
					<h3 className="font-semibold text-lg mb-2">Track Progress</h3>
					<p className="text-gray-600">
						See how you&apos;re advancing on your projects.
					</p>
				</div>
			</div>
		</div>
	)
}

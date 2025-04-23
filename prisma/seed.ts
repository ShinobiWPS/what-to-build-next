// prisma/seed.ts
import { readFileSync } from 'fs'
import { join } from 'path'
import { PrismaClient } from '../app/generated/prisma/client'

const prisma = new PrismaClient()

type GuestData = {
	project_list_placeholder: Array<{
		id: string
		ownerId: string
		title: string
		type: 'personal' | 'contribution'
	}>
}

async function main() {
	// 1. Read your sample JSON
	const filePath = join(process.cwd(), 'data/sample-guest.json')
	const json = readFileSync(filePath, 'utf-8')
	const data: GuestData = JSON.parse(json)

	// 2. Upsert the Guest user
	const guest = await prisma.user.upsert({
		where: { id: 'guest' },
		update: {},
		create: {
			id: 'guest',
			// store an empty array in JSON column
			userKnownStacks: [],
			followJobMarketSkillsDemand: false,
			learnNewTech: false,
		},
	})

	console.log('🌱 Guest user upserted:', guest.id)

	// 3. Insert/replace projects
	for (const pj of data.project_list_placeholder) {
		await prisma.project.upsert({
			where: { id: pj.id },
			update: {
				title: pj.title,
				type: pj.type,
				ownerId: guest.id,
			},
			create: {
				id: pj.id,
				title: pj.title,
				type: pj.type,
				ownerId: guest.id,
			},
		})
		console.log(`  • project ${pj.id} – "${pj.title}"`)
	}

	console.log('✅ Seed complete.')
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})

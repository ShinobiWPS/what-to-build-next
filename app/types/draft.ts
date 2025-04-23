type User = {
	id: string // what is gonna generate it?
	userKnownStacks: string[]
	followJobMarketSkillsDemand: boolean //default: false, this ignores the best tool for the job and forces job market most demanded tech to be used. This does not allow to enable `learnNewTech` to true
	learnNewTech: boolean //default: false, this ignores the best tool for the job and uses as much technologies already known as possible.This does not allow to enable `followJobMarketSkillsDemand` to true
	gaveAccessTo: User['id'][] | [] //a user shares his projects list entirely with other users
}

type ProjectType = 'personal' | 'contribution'
// if 'contribution' is selected,deny Priority['profit'] from the options of Priority
//type ProjectContext = 'web' | 'fullstack' | 'script' | 'mobile' | '3d'

// project shape
type Project = {
	id: string
	ownerId: User['id']
	title: string
	type: ProjectType
}
type ProjectList = Project[]

type Priority = 'profit' | 'exposure' | 'personal need'

type ProjectListOrderQuery = {
	priority: Priority
	featureWannaBuild: string //150 chars free text. Possible prompt injection warning?
	followJobMarketSkillsDemand: User['followJobMarketSkillsDemand']
	learnNewTech: User['learnNewTech']
	userKnownStacks: User['userKnownStacks'] // maybe a list of most common programming languages (like the onesin the top 10 languages of Stackoverflow?), required only if User didn't filled what techs already knows
	techPreferences: string[] // regardless of followJobMarketSkillsDemand or learnNewTech are valued or not, if Projects Query gets some tech preferences by the user,they will be included and considered with higher priority
}
type ProjectListOrderResponse = ProjectList // order matters

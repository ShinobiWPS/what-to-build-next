import { create } from 'zustand'

type StoreState = {}

export const useUserState = create<StoreState>((set) => ({
	// typeFilters: [],
	// prioritySort: null,
	// toggleType: (t) => set((s) => ({
	//   typeFilters: s.typeFilters.includes(t)
	//     ? s.typeFilters.filter(x => x !== t)
	//     : [...s.typeFilters, t]
	// })),
	// setSort: (p) => set({ prioritySort: p }),
	id: '',
	userKnownStacks: [''],
	followJobMarketSkillsDemand: false, //default: false, this ignores the best tool for the job and forces job market most demanded tech to be used. This does not allow to enable `learnNewTech` to true
	learnNewTech: false, //default: false, this ignores the best tool for the job and uses as much technologies already known as possible.This does not allow to enable `followJobMarketSkillsDemand` to true
	gaveAccessTo: [], //a user shares his projects list entirely with other users
}))

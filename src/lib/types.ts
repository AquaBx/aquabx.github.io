export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	repository?: string
	homepage?: string
	name: string
	tags?: string[]
	startDate: Date
	endDate?: Date
	slug: string
	type: string
}

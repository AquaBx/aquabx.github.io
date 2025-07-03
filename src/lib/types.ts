export type Categories = 'sveltekit' | 'svelte'

export type LocalizedString = {
	[lang: string]: string
}

export type Post = {
	repository?: string
	homepage?: string
	description?: LocalizedString
	location?: string
	name: LocalizedString
	tags?: string[]
	dates: { start?: Date, end?: Date }[]
	slug: string
	type: string
}

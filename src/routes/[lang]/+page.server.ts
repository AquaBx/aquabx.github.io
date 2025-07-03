import type { Post } from '$lib/types'
import { profile } from '../../consts.js'

async function getAll(lang: string) {
	let posts: Post[] = []

	const paths = import.meta.glob(`/static/content/**/*.md`, { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const pathS = path.split('/')

		if (pathS.includes("photos")) continue

		const slug = pathS.at(-1)?.replace('.md', '')
		const type = pathS.at(-2) as string

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Omit<Post, 'slug'>, 'type'>
			const post = { ...metadata, slug, type } satisfies Post

			

			post.dates.forEach((l) => {
				l.start = l.start ? new Date(l.start) : undefined
				l.end = l.end ? new Date(l.end) : undefined
			})
			posts.push(post)
		}
	}

	posts.forEach(p => {
		
		if (p.description) {
			p.description = p.description[lang]
		}
		p.name = p.name[lang]
	})

	return posts.sort((first, second) => {
		let d1 = first.dates[0].end ? first.dates[0].end.getTime() : Date.now()
		let d2 = second.dates[0].end ? second.dates[0].end.getTime() : Date.now()
		return d2 - d1
	})
}

export async function load({ params }) {
	let { lang } = params

	const posts = await getAll(lang)
	const companies = posts.filter((p) => p.type === "companies")
	const contests = posts.filter((p) => p.type === "contests")
	const projects = posts.filter((p) => p.type === "projects")
	const associations = posts.filter((p) => p.type === "associations")
	const studies = posts.filter((p) => p.type === "schools")

	return { companies, contests, projects, studies, associations, profile }
}

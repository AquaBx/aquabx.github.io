import type { Post } from '$lib/types'

async function getAll() {
	let posts: Post[] = []

	const paths = import.meta.glob(`/static/content/**/*.md`, { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const pathS = path.split('/')
		const slug = pathS.at(-1)?.replace('.md', '')
		const type = pathS.at(-2) as string

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Omit<Post, 'slug'>, 'type'>
			const post = { ...metadata, slug, type } satisfies Post

			post.startDate = new Date(post.startDate)
			post.endDate = post.endDate ? new Date(post.endDate) : undefined

			posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
		new Date(second.startDate).getTime() - new Date(first.startDate).getTime()
	)

	return posts
}

export async function load() {
	const posts = await getAll()
	const companies = posts.filter((p) => p.type === "companies")
	const contests = posts.filter((p) => p.type === "contests")
	const projects = posts.filter((p) => p.type === "projects")
	const studies = posts.filter((p) => p.type === "schools")

	return { companies, contests, projects, studies }
}

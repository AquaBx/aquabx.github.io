import type { Post } from '$lib/types'
async function getAll() {
    let posts = []

    const paths = import.meta.glob(`/static/content/photos/*`, { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const link = path.split("/").slice(-3).join("/")
        posts.push(link)
    }

    return posts
}

export async function load() {
    const items = await getAll()

    return { items }
}

import type { Post } from '$lib/types'

async function getAll() {
    let posts = []

    const paths = import.meta.glob(`/static/content/photos/*`, { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const post = await import(path)
        posts.push(post.default.replace("/static",""))
    }

    return posts
}

export async function load() {
    const items = await getAll()

    return { items }
}

import type { Post } from '$lib/types'
async function getAll() {
    let posts = []

    const paths = import.meta.glob(`/static/content/photos/*`, {
        eager: true,
        query: {
            enhanced: true
        }
    })

    return Object.entries(paths).map(i=>i[1].default)
}

export async function load() {
    const items = await getAll()
    return { items }
}

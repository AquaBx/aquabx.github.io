import {json} from "@sveltejs/kit"

async function getPosts() {
    let paths = import.meta.glob('/src/posts/*.md')

    let articles = []
    
    for ( let key in paths ) {
        let article = paths[key]
        let slug = key.split("/").at(-1)
        let metadatas = (await article()).metadata
        articles.push({...metadatas,slug})
    }

    return articles
}

export async function GET() {
    const articles = await getPosts()
    return json(articles);
};

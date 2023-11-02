import {json} from "@sveltejs/kit"

async function getPosts() {
    let insta = await fetch(`https://graph.instagram.com/me/media?fields=media_url&access_token=${process.env.instaAPI}`)

    let json = await insta.json()

    return json
}

export async function GET() {
    
    const articles = await getPosts()

    let list = []

    for (let item of articles.data){
        let url = item.url
        list.push( url )
    }

    return json(articles);
};

export async function load({ params }) {
    try{
        const post = await import(`../../../posts/${params.title}`)

        return {
            content: post.default,
            meta: post.metadata
        }
    }
    catch(e) {
        return{
            content: e
        }
    }
}
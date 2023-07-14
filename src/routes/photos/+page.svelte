<script>
    import { onMount } from "svelte";

    let photos = []

    let token = "IGQVJXOGxEYXRwaF9iUjlrUmVVYWprLXcwaEt4SlVXS2Y5Xzh0aHo2NFJhUWhuVFkxLWcxUFFNMENTWGNMZAEI4dmFvVm1rNlBVNVh1eWhBU2lzM2tieXhNNFhuQms0bmQ1MjJiSkhtSUV4N2IwblhzTQZDZD"

    onMount(async()=> {
        let api =  await (await fetch(`https://graph.instagram.com/v17.0/me?fields=media&access_token=${token}`)).json()

        for ( let id of api[data] ) {
            let photo =  await(await fetch`https://graph.instagram.com/v17.0/${id}?fields=media_url,permalink&access_token=${token}`).json()
            photos.append(photo)
        }
    })




</script>

{#each photos as photo}

    <a href={photo["permalink"]}>
        <img src={photo["media_url"]}>
    </a>

{/each}
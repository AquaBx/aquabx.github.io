<script>
    export let data

    console.log(data.insta.data)

</script>
<h3>Les Dernières photos de mon compte Instagram</h3>

<div>



{#each data.insta.data as photo}


    {#if photo.media_url != undefined } 
        {#if photo.media_url.includes(".jpg") }
            <img src={photo.media_url}>
        {/if}
    {/if}
{/each}

</div>
<style>

    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, 220px);
        gap:16px;

    }
    
    div > img, div > video {
        aspect-ratio: 1/1;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
</style>
<script>
    export let data
</script>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <p>{data.meta.description}</p>
    </hgroup>


    <div class="tags">
        {#each data.meta.tags as tag }
            <span>{tag}</span>
        {/each}
    </div>

    <main class="md">
        <svelte:component this={data.content}></svelte:component>
    </main>
</article>

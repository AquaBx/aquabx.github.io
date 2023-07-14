<script>
    export let title;
    export let description;
    export let tags;
</script>


<a href={"./blog/"+title} class="card">

    <h2>{title}</h2>
    <p>{description}</p>


    <div class="taglist">
        {#each tags as tag}
            <span class="tag">{tag}</span>
        {/each}
    </div>

</a>


<style>

    .taglist {
        display: flex;
        gap: 1em;
    }

    .tag {
        background-color: var(--blue);
        padding: 0 1em;
        border-radius:  1em ;
    }

    .card {
        all:unset;
        cursor: pointer;
        background-color: var(--compl);
        padding:1em;
        border-radius:  1em ;
    }

    .card h2 {
        margin:0;
    }


</style>
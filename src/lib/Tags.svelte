<script>
    export let metadata = {}
    import Icon from "./Icon.svelte";
</script>

<div class="taglist">
    {#if metadata.github }
        <a target="_blank" href={metadata.github} class='tag'>
            <Icon width="1em" height="1em" name="github"></Icon>
            Github
        </a>
    {/if}

    {#if metadata.link }
        <a target="_blank" href={metadata.link} class='tag'>
            <Icon width="1em" height="1em" name="link"></Icon>
            Website
        </a>
    {/if}

    {#if metadata.codepen }
        <a target="_blank" href={metadata.codepen} class='tag'>
            <Icon width="1em" height="1em" name="codepen"></Icon>
            Codepen
        </a>
    {/if}

    {#each metadata.tags as tag }
        <span class='tag'>
            {tag}
        </span>
    {/each}
</div>

<style>
    
    .taglist {
        display: flex;
        gap: 1em;
    }

    .tag {
        background-color: var(--blue);
        padding: 0 1em;
        border-radius:  1em ;
        display: flex;

        gap:0.5em;
        align-items: center;
    }

    .tag:hover {
        background-color: var(--red);
    }

</style>
<script>
    export let data
    import Tags from '../../../lib/Tags.svelte';
</script>

<article>
    <hgroup>
        <h1>{data.meta.title}</h1>
        <Tags metadata={data.meta}></Tags>
    </hgroup>

    <hr>

    <main class="md">
        <svelte:component this={data.content}></svelte:component>
    </main>
</article>

<style>

    article {
        display: flex;
        gap:2em;
        flex-direction: column;
    }

    hgroup {
        display: flex;
        flex-direction: column;
        gap:0.5em;
    }

    hr {
        border-bottom: 1px solid var(--text);
        width:99.8%;
    }

</style>
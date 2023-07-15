<script lang="ts">
    import Card from "../../lib/Card.svelte";
    export let data
</script>


<main>
    <div class="cardcontainer">
        {#each data.posts as post} 
            <Card title={post.title} slug={post.slug} description={post.description} tags={post.tags}></Card>
        {/each}
    </div>

</main>

<style>
    .cardcontainer {
        display: flex;
        flex-direction: column;
        gap:1em;
    }
</style>
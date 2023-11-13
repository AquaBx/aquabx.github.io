<script lang="ts">
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    import Mansory from "./Mansory.svelte";
    export let posts

	onMount(async() => {
		const response = await fetch('api/blog')
		posts = await response.json()
	})
	
</script>

{#if posts}
<main>
    <Mansory>
        {#each posts as post} 
            <Card post={post}></Card>
        {/each}
    </Mansory>

</main>
{/if}

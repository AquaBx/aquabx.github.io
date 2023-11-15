<script lang="ts">
    import { json } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import Mansory from "./Mansory.svelte";

	let resp 

	onMount(async() => {
		let req = await fetch('api/instagram')
		resp = req.json()
	})

</script>

{#await resp}
	loading
{:then data}
	{#if data != null}

		<Mansory>
			{#each data.data as photo}
				{#if photo.media_url != undefined } 
					{#if photo.media_url.includes(".jpg") }

						<img src={photo.media_url} loading="lazy">

					{/if}
				{/if}
			{/each}
		</Mansory>

	{/if}
{/await}

<style>
	img {
		border-radius: 16px;
		width: calc(100% - 16px);
        margin:8px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

	}
</style>

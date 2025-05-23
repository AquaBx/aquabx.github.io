<script lang="ts">
	import { Gallery } from "flowbite-svelte";
	let { data } = $props();
	let { items } = data;

	let l = items.length;
</script>

<div class="flex gap-2">
	{#each [0, 1, 2, 3] as i}
		<div class="flex flex-col flex-1 gap-2">
			{#each items.slice(Math.floor((i * l) / 4), Math.floor(((i + 1) * l) / 4)) as item}
				<img class="rounded-xl" src={item} />
			{/each}
		</div>
	{/each}
</div>

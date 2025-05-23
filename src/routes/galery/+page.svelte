<script lang="ts">
	import Masonry from "svelte-bricks";
	let { data } = $props();
	let { items } = data;

	let [minColWidth, maxColWidth, gap] = [200, 800, 20];
	let width = $state(0),
		height = $state(0);
</script>

<Masonry
	{items}
	{minColWidth}
	{maxColWidth}
	{gap}
	class="p-4"
	bind:masonryWidth={width}
	bind:masonryHeight={height}
>
	{#snippet children({ item })}
		<img class="rounded-xl" src={item} />
	{/snippet}
</Masonry>

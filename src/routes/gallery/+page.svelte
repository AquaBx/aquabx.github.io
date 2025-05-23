<script lang="ts">
	let { data } = $props();
	let { items } = data;

	let l = items.length;
</script>

<div class="block columns-[3_200px] gap-0">
	{#each items as item}
		<div class="m-2 inline-block">
			<img class="rounded-xl w-full" src={item} />
		</div>
	{/each}
</div>

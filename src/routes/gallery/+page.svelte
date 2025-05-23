<script lang="ts">
	let { data } = $props();
	let { items } = data;
</script>

<div class="block columns-[3_200px] gap-0">
	{#each items as src}
		<div class="m-2 inline-block">
			<enhanced:img class="rounded-xl w-full" {src} alt="picture" />
		</div>
	{/each}
</div>

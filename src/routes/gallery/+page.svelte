<script lang="ts">
	let { data } = $props();
	let { items } = data;
</script>

<div class="block columns-[3_200px] gap-0">
	{#each items as src}
		<div class="m-2 inline-block">
			<enhanced:img
				class="rounded-xl w-full"
				{src}
				alt="picture"
				sizes="(max-width:431px) 1280px, (max-width:631px) 800px, (min-width:632px) 400px"
			/>
		</div>
	{/each}
</div>

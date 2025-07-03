<script lang="ts">
	import CvRow from "./CVRow.svelte";

	const { posts, title } = $props();
</script>

<section>
	<h2
		class="text-xs font-extrabold text-sky-800 mb-1 tracking-wide uppercase border-b-2 border-sky-200 pb-1 pl-1"
	>
		{title}
	</h2>
	<div class="flex flex-col bg-white/80">
		{#each posts as post}
			<CvRow {post}></CvRow>
		{/each}
	</div>
</section>

<script lang="ts">
	import { Calendar } from "@lucide/svelte";
	import FormattedDate from "../FormattedDate.svelte";
	const { post } = $props();

	let hidden = $state(false);

	function hide() {
		hidden = !hidden;
	}
</script>

<div
	class="flex flex-col gap-1 group p-1 hover:bg-sky-100 transition-all duration-200 cursor-pointer {hidden
		? ' print:hidden opacity-20'
		: ''}"
	onclick={hide}
>
	<span
		class="font-bold text-sky-900 text-[12px] leading-tight group-hover:text-sky-700 transition-colors tracking-wide"
		>{post.name}</span
	>
	{#if post.location}
		<span class="text-[9px] text-sky-600 italic">{post.location}</span>
	{/if}
	{#if post.dates && post.dates.length > 0}
		<div class="flex flex-col flex-wrap gap-1 text-sky-700">
			{#each post.dates as d}
				<span class="flex items-center font-mono gap-1">
					<Calendar size="12" />
					{#if d.start && d.end}
						<FormattedDate date={d.start} /> – <FormattedDate
							date={d.end}
						/>
					{:else if d.start && !d.end}
						<FormattedDate date={d.start} /> – Aujourd'hui
					{:else if !d.start && d.end}
						<!-- Jusqu'à <FormattedDate date={d.end} /> -->
					{/if}
				</span>
			{/each}
		</div>
	{/if}
	{#if post.description}
		<div class=" text-sky-800">
			{@html post.description}
		</div>
	{/if}
</div>

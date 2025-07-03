<script lang="ts">
	import FormattedDate from "./FormattedDate.svelte";
	import Tag from "./Tag.svelte";

	const { post } = $props();
</script>

<div class="block px-6 py-4 bg-gray-200 border-none rounded-3xl shadow w-full">
	<div class="flex flex-wrap items-center gap-2">
		{#if post.name}
			<h5 class="text-2xl font-bold tracking-tight text-primary-900 pb-2">
				{post.name}
			</h5>
		{/if}
		{#if post.location}
			<h4 class="text-sm">{post.location}</h4>
		{/if}
		{#if post.repository}
			<a
				target="blank"
				class="text-sm text-primary-500 hover:underline"
				href={post.repository}
			>
				Repository ↗
			</a>
		{/if}
		{#if post.homepage}
			<a
				target="blank"
				class="text-sm text-blue-500 hover:underline"
				href={post.homepage}
			>
				Homepage ↗
			</a>
		{/if}
	</div>

	<div class="block">
		{#if post.tags}
			{#each post.tags.sort() as t}
				<Tag icon={t} />
			{/each}
		{/if}
	</div>

	<p>{@html post.description}</p>

	<p class="text-xs m-0 mt-4 text-gray-900">
		{#if post.startDate && post.endDate}
			From <FormattedDate date={post.startDate} /> to <FormattedDate
				date={post.endDate}
			/>
		{:else if post.startDate && !post.endDate}
			Since <FormattedDate date={post.startDate} />
		{:else if !post.startDate && post.endDate}
			Until <FormattedDate date={post.endDate} />
		{/if}
	</p>
</div>

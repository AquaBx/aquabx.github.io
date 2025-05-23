<script lang="ts">
	import * as Carousel from "$lib/components/ui/carousel/index.js";

	let { data } = $props();
	let { items } = data;
</script>

<div class="block columns-[3_200px] gap-0">
	{#each items as post}
		<div class="m-2 inline-block">
			{#if post.sources.length > 1}
				<Carousel.Root
					class="w-full max-w-xs block rounded-xl overflow-hidden"
				>
					<Carousel.Content>
						{#each post.sources as src}
							<Carousel.Item>
								<enhanced:img
									class="rounded-xl"
									{src}
									alt="picture"
									sizes="(max-width:431px) 1280px, (max-width:631px) 800px, (min-width:632px) 400px"
								/>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="left-1" />
					<Carousel.Next class="right-1" />
				</Carousel.Root>
			{:else}
				<enhanced:img
					class="rounded-xl w-full"
					src={post.sources[0]}
					alt="picture"
					sizes="(max-width:431px) 1280px, (max-width:631px) 800px, (min-width:632px) 400px"
				/>
			{/if}
		</div>
	{/each}
</div>

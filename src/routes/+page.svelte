<script>
	import Card from "$lib/components/Card.svelte";
	let { data } = $props();
	let { companies, contests, studies, projects } = data;
</script>


<article class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">😊 Hi!</h1>

	<p>
		I am Tom Chauvel and I am {Math.floor(
			(Date.now() - new Date(2003, 5, 19).getTime()) / 31556952000
		)} years old. Since my childhood I've been interested in science, especially
		computer science. To graduate in this field, I have been studying at the
		ESIR since 2021, at the University of Rennes (my heart's city).
	</p>
</article>
<article class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">
		Professional and associative experience
	</h1>

	<div class="flex flex-col gap-4">
		{#each companies as post}
			<Card {post}></Card>
		{/each}
	</div>
</article>
<article class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">Studies</h1>

	<div class="flex flex-col gap-4">
		{#each studies as post}
			<Card {post}></Card>
		{/each}
	</div>
</article>
<article class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">Contests</h1>

	<div class="flex flex-col gap-4">
		{#each contests as post}
			<Card {post}></Card>
		{/each}
	</div>
</article>
<article class="flex flex-col gap-8">
	<h1 class="text-5xl font-semibold">🧑‍💻 My Projects</h1>

	<div class="flex flex-col gap-4">
		{#each projects as post}
			<Card {post}></Card>
		{/each}
	</div>
</article>

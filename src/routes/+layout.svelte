<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import "../app.css";
	import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

	let { children, data } = $props();

	let { host, url } = data;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og_site_name" content={host} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta property="og:description" content={SITE_DESCRIPTION} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="“example.com" />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<main class="max-w-2xl m-auto w-full flex flex-col gap-12 py-16 px-4">
	<nav class="flex gap-2 flex-col">
		<h1 class="text-5xl font-semibold text-center">Tom Chauvel</h1>
		<div class="flex items-center justify-center gap-4">
			<a href="/">Home</a>
			<a href="/gallery">Gallery</a>
		</div>
	</nav>

	{@render children()}
	<Footer />
</main>

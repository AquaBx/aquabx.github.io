<script>
	const today = new Date();

	import {siLinkedin, siGithub, siCodepen, siFigma } from "simple-icons";
	import { SITE_TITLE } from "../../consts";

	let networks = [
		{
			icon: siLinkedin.svg,
			href: "https://linkedin.com/in/tom-chauvel",
		},
		{
			icon: siGithub.svg,
			href: "https://github.com/aquabx",
		},
		{
			icon: siCodepen.svg,
			href: "https://codepen.io/AquaBx/pens/public",
		},
		{
			icon: siFigma.svg,
			href: "https://www.figma.com/@aquabx",
		},
	];
</script>

<footer class="p-8 grid place-center w-full text-center gap-4">
	&copy; {today.getFullYear()}
	{SITE_TITLE}. All rights reserved.
	<div class="flex gap-4 justify-center">
		{#each networks as n}
			<a target="blank" class="h-8 aspect-square" href={n.href}>
				{@html n.icon}
			</a>
		{/each}
	</div>
</footer>
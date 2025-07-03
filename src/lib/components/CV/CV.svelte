<script lang="ts">
	import CvBlock from "./CVBlock.svelte";
	import {
		Github,
		Globe,
		Home,
		Icon,
		Linkedin,
		Mail,
		Phone,
	} from "@lucide/svelte";

	let { data } = $props();
	let { contests, projects, studies, companies, associations, profile } =
		data;

	// Adaptation du format d'entrée YAML/frontmatter pour studies et companies
	function formatDateRange(start, end) {
		if (start && end) {
			return `${formatDate(start)} – ${formatDate(end)}`;
		} else if (start && !end) {
			return `Depuis ${formatDate(start)}`;
		} else if (!start && end) {
			return `Jusqu'à ${formatDate(end)}`;
		} else {
			return "";
		}
	}

	function formatDate(dateStr) {
		if (!dateStr) return "";
		const date = new Date(dateStr);
		if (isNaN(date.getTime())) return dateStr;
		// Format mois/année
		return date.toLocaleDateString("fr-FR", {
			month: "2-digit",
			year: "numeric",
		});
	}
</script>

<main
	class="m-auto relative w-full flex flex-row p-4 gap-4 bg-gradient-to-br min-h-screen text-[8px] max-w-[21cm]"
>
	<!-- Colonne latérale -->
	<aside
		class="cv-aside print:static flex flex-col items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 w-[8cm] mx-auto"
	>
		<div
			class="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-300 shadow-lg"
		>
			<img
				class="object-cover w-full h-full"
				src={profile.avatar}
				alt="Avatar"
			/>
		</div>
		<div class="text-center">
			<h1
				class="text-2xl font-extrabold text-sky-900 tracking-tight leading-tight print:text-xl"
			>
				{profile.name}
			</h1>
		</div>

		<!-- Résumé -->
		<section class="w-full">
			<h2
				class="text-sm font-bold text-sky-800 mb-1 pl-2 border-l-4 border-sky-200 tracking-wide uppercase"
			>
				Résumé
			</h2>
			<p class="text-sky-700 leading-snug text-[10px] print:text-[9px]">
				{profile.summary}
			</p>
		</section>
		<hr class="w-full border-t border-gray-200" />

		<!-- Bloc Contact -->
		<section class="w-full">
			<h2
				class="text-sm font-bold text-sky-800 mb-1 pl-2 border-l-4 border-sky-200 tracking-wide uppercase"
			>
				Contact
			</h2>
			<ul class="cv-list text-[10px] print:text-[9px] space-y-1">
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Home size="12" />
					</span>
					<a
						href={profile.address.url}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						{profile.address.value}
					</a>
				</li>
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Globe size="12" />
					</span>
					<a
						href={profile.website.url}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						{profile.website.value}
					</a>
				</li>
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Phone size="12" />
					</span>
					<a href={profile.phone.url} class="hover:underline">
						{profile.phone.value}
					</a>
				</li>
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Mail size="12" />
					</span>
					<a href={profile.email.url} class="hover:underline">
						{profile.email.value}
					</a>
				</li>
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Linkedin size="12" />
					</span>
					<a
						href={profile.linkedin.url}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						{profile.linkedin.value}
					</a>
				</li>
				<li class="flex items-center gap-2 text-sky-700">
					<span
						class="inline-flex items-center justify-center w-4 h-4"
					>
						<Github size="12" />
					</span>
					<a
						href={profile.github.url}
						target="_blank"
						rel="noopener noreferrer"
						class="hover:underline"
					>
						{profile.github.value}
					</a>
				</li>
			</ul>
		</section>
		<hr class="w-full border-t border-gray-200" />

		<!-- Bloc Langues -->
		<section class="w-full">
			<h2
				class="text-sm font-bold text-sky-800 mb-1 pl-2 border-l-4 border-sky-200 tracking-wide uppercase"
			>
				Langues
			</h2>
			<ul
				class="flex flex-col gap-1 w-full text-[10px] print:text-[9px] space-y-1"
			>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>🇫🇷 Français — <span class="text-sky-500"
								>Natif</span
							></span
						>
					</div>
				</li>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>🇬🇧 Anglais —
							<span class="text-sky-500">C1</span>
						</span>
					</div>
				</li>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>🇪🇸 Espagnol —
							<span class="text-sky-500">B1</span>
						</span>
					</div>
				</li>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>🇵🇱 Polonais —
							<span class="text-sky-500">Notions</span>
						</span>
					</div>
				</li>
			</ul>
		</section>
		<hr class="w-full border-t border-gray-200" />

		<!-- Bloc Diplômes et certifications -->
		<section class="w-full">
			<h2
				class="text-sm font-bold text-sky-800 mb-1 pl-2 border-l-4 border-sky-200 tracking-wide uppercase"
			>
				Diplômes et certifications
			</h2>
			<ul
				class="flex flex-col gap-1 w-full text-[10px] print:text-[9px] space-y-1"
			>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>Toeic — <span class="text-sky-600">965/990</span>
						</span>
						<span class="text-sky-500">2024</span>
					</div>
				</li>
				<li class="flex flex-col gap-0.5">
					<div class="flex justify-between">
						<span
							>Baccalauréat — <span class="text-sky-600"
								>Mention Très Bien</span
							></span
						>
						<span class="text-sky-500">2021</span>
					</div>
				</li>
				<li>Sensibilisation aux ODD</li>
				<li>Permis B</li>
				<li>PSC1</li>
			</ul>
		</section>
		<hr class="w-full border-t border-gray-200" />

		<!-- Bloc Compétences (Skills) dynamique -->
		<section class="w-full">
			<h2
				class="text-sm font-bold text-sky-800 mb-1 pl-2 border-l-4 border-sky-200 tracking-wide uppercase"
			>
				Compétences
			</h2>
			<div class="flex flex-col gap-2 text-[10px] print:text-[9px]">
				<div>
					<span class="font-semibold text-sky-700">Frontend :</span>
					<span class="ml-1"
						>Svelte, Tailwind CSS, Vue.js, Angular, React, Astro</span
					>
				</div>
				<div>
					<span class="font-semibold text-sky-700">Backend :</span>
					<span class="ml-1"
						>NestJS, Node.js, PHP, Python, Java, Kotlin (KTor)</span
					>
				</div>
				<div>
					<span class="font-semibold text-sky-700"
						>Développement mobile et desktop :</span
					>
					<span class="ml-1">Tauri, Flutter</span>
				</div>
				<div>
					<span class="font-semibold text-sky-700">Langages :</span>
					<span class="ml-1"
						>TypeScript, JavaScript, HTML, CSS, Python, Java, C++,
						PHP, C#, Go, Rust</span
					>
				</div>
				<div>
					<span class="font-semibold text-sky-700"
						>Outils et Devops :</span
					>
					<span class="ml-1"
						>Bun, Node.js, Docker, Git, GitHub, Figma</span
					>
				</div>
				<div>
					<span class="font-semibold text-sky-700">Soft skills :</span
					>
					<span class="ml-1"
						>Travail en équipe, communication, adaptabilité,
						créativité, gestion du temps, résolution de problèmes,
						autonomie, curiosité, esprit d'initiative</span
					>
				</div>
			</div>
		</section>
	</aside>

	<!-- Colonne principale -->
	<section class="flex-1 flex flex-col gap-2">
		<CvBlock title="Expériences professionnelles" posts={companies} />
		<CvBlock title="Associations" posts={associations} />
		<CvBlock title="Projets" posts={projects} />
		<CvBlock title="Scolarité" posts={studies} />
	</section>
</main>

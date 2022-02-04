<script>
    import Card from "$lib/Card.svelte"
    import Social from "$lib/Social.svelte"

    const projets = [
        {
            title:"Tableau d'avancement",
            description:"Un super tableau d'avancement",
            source:"https://aquabx.github.io/Tableau-d-avancement/main.webp",
            link:"https://aquabx.github.io/Tableau-d-avancement/"
        },
        {
            title:"Météo",
            description:"Une super app météo",
            source:"https://aquabx.github.io/meteo/main.webp",
            link:"https://aquabx.github.io/meteo/"
        },
        {
            title:"Chatbox",
            description:"",
            source:"https://aquabx.github.io/chatbox/main.webp",
            link:"https://aquabx.github.io/chatbox/"
        },
        {
            title:"Audio Player",
            description:"",
            source:"https://aquabx.github.io/audio-player/main.webp",
            link:"https://aquabx.github.io/audio-player/"
        },
        {
            title:"Social Network Post",
            description:"",
            source:"https://aquabx.github.io/social-network-post/main.webp",
            link:"https://aquabx.github.io/social-network-post/"
        },
        {
            title:"Guide Python",
            description:"Si vous voulez apprendre certaines bases de Python",
            link:"https://aquabx.ovh/python"
        },
        {
            title:"Illusions d'optique",
            description:"Un projet de MPS réalisé en seconde. Il mélange programation et illusions d'optiques",
            link:"https://aquabx.ovh/illusion"
        },
        {
            title:"StreamKit",
            description:"Outil qui permet de créer des bannières",
            link:"https://github.com/AquaBx/streamkit/"
        },
        {
            title:"Univ",
            description:"Mini ENT qui peut être pratique",
            link:"https://aquabx.github.io/univ/",
            github:"https://github.com/aquabx/univ"
        },
        {
            title:"Wikipedia Game",
            description:"Jeu du Wikipédia",
            link:"https://aquabx.ovh/wikipedia/"
        }
    ]
</script>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de Tom Chauvel / AquaBx, étudiant à l'ESIR à Rennes.">

</svelte:head>

<h1 class="font-bold text-4xl text-center py-8">Tom "Aqua" Chauvel</h1>
<h2 class="font-bold text-2xl text-center p-b-4">🚧 En travaux 🚧</h2>

<Social/>

<p class="text-justify text-lg max-w-2xl m-auto py-8">
    J'ai actuellement {parseInt((Date.now()-(new Date(2003, 5, 19)).getTime())/31556952000)} ans et je suis Rennais #BZH. Étudiant à l'ESIR (École supérieure d'ingénieurs de Rennes). J'aime bien les animés (pas très original aujourd'hui) tel que Shingeki No Kyojin, My Hero Academia ou bien encore Hunter Hunter. J'ai aussi bien aimé la série Arcane que je vous recommande 😊. Sinon plus sérieusement j'adore tout ce qui touche à la science, au spatial ou bien à l'informatique. Aussi détenteur du Baccalauréat Général mention Très Bien, à nuancer bien sur du fait qu'il est de la promo 2020-2021 (promo COVID-19).
</p>

<h2 class="font-bold text-2xl text-center py-4">Mes Projets</h2>

<div class="columns-[20em] max-w-[100em] m-auto text-center py-8">
    {#each projets as projet}
        <Card title={projet.title} link={projet.link} source={projet.source} github={projet.github}>{projet.description}</Card>
    {/each}
</div>

<footer class="font-bold text-lg text-center py-8">
    Copyright © 2018-{(new Date()).getFullYear()} <a href="https://www.aquabx.ovh" class="text-[#3282B8] hover:text-[#EE6F57] transition-colors">AquaBx</a>. Tous droits réservés
</footer>
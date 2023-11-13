<script>
    import Doodle from "$lib/Doodle.svelte";
import Homecard from "$lib/Homecard.svelte";
    import Photos from "$lib/Photos.svelte";
    import Projects from "$lib/Projects.svelte";
import Terminal from "$lib/Terminal.svelte";

    var term = "term"

</script>
<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de Tom Chauvel / AquaBx, étudiant à l'ESIR à Rennes.">
</svelte:head>

<header>
    <h1>Tom <br> Chauvel</h1>
    <Terminal></Terminal>
</header>

<Doodle></Doodle>

<Homecard title="Présentation">
<div>


    <h2>🚧 En travaux 🚧</h2>

    <p>
        Moi c'est Tom Chauvel. J'ai {parseInt((Date.now()-(new Date(2003, 5, 19)).getTime())/31556952000)} ans et je suis Rennais #BZH. Étudiant à l'ESIR (École supérieure d'ingénieurs de Rennes). J'aime bien les animés (pas très original aujourd'hui) tel que Shingeki No Kyojin, My Hero Academia ou bien encore Hunter × Hunter. J'ai aussi bien aimé la série Arcane que je vous recommande 😊. Sinon plus sérieusement j'adore tout ce qui touche à la science, au spatial ou bien à l'informatique. Aussi détenteur du Baccalauréat Général mention Très Bien, à nuancer bien sur du fait qu'il est de la promo 2020-2021 (promo COVID-19).
    </p>
</div>
</Homecard>

<Homecard title="Projets">

    <Projects></Projects>
</Homecard>


<Homecard title="Photos">

    <Photos></Photos>

</Homecard>


<Homecard title="Contact">


</Homecard>

<style>
    header {
        font-size: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
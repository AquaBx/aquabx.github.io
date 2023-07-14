<script>
    import Card from "../../lib/Card.svelte";

    const projets = [
        {
            title:"Tableau d'avancement",
            description:"Un super tableau d'avancement",
            source:"https://aquabx.github.io/Tableau-d-avancement/main.webp",
            link:"https://aquabx.github.io/Tableau-d-avancement/",
            tags:["Dev"]
        },
        {
            title:"Météo",
            description:"Une super app météo",
            source:"https://aquabx.github.io/meteo/main.webp",
            link:"https://aquabx.github.io/meteo/",
            tags:["Dev"]
        },
        {
            title:"Chatbox",
            description:"",
            source:"https://aquabx.github.io/chatbox/main.webp",
            link:"https://aquabx.github.io/chatbox/",
            tags:["Dev"]
        },
        {
            title:"Audio Player",
            description:"",
            source:"https://aquabx.github.io/audio-player/main.webp",
            link:"https://aquabx.github.io/audio-player/",
            tags:["Dev"]
        },
        {
            title:"Social Network Post",
            description:"",
            source:"https://aquabx.github.io/social-network-post/main.webp",
            link:"https://aquabx.github.io/social-network-post/",
            tags:["Dev"]
        },
        {
            title:"Guide Python",
            description:"Si vous voulez apprendre certaines bases de Python",
            link:"https://aquabx.ovh/python/index.html",
            tags:["Dev"]
        },
        {
            title:"Illusions d'optique",
            description:"Un projet de MPS réalisé en seconde. Il mélange programation et illusions d'optiques",
            link:"https://aquabx.ovh/illusion.html",
            tags:["Dev"]
        },
        {
            title:"StreamKit",
            description:"Outil qui permet de créer des bannières",
            github:"https://github.com/AquaBx/streamkit/",
            tags:["Dev"]
        },
        {
            title:"Univ",
            description:"Mini ENT qui peut être pratique",
            link:"https://aquabx.github.io/univ/",
            github:"https://github.com/aquabx/univ",
            tags:["Dev"]
        },
        {
            title:"Wikipedia Game",
            description:"Jeu du Wikipédia",
            link:"https://aquabx.ovh/wikipedia/",
            tags:["Dev"]
        }
    ]
</script>


<main>
    <div class="cardcontainer">
        {#each projets as post} 
            <Card title={post.title} description={post.description} tags={post.tags}></Card>
        {/each}
    </div>

</main>


<style>
    .cardcontainer {
        display: flex;
        flex-direction: column;
        gap:1em;
    }
</style>
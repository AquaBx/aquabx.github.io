# Bienvenue sur mon site


<Parser/>

<Container>
    <p class="text-justify text-lg max-w-2xl m-auto py-8">

    </p>
</Container>

<Parser/>

<h2 class="font-bold text-2xl text-center py-4">Mes Projets</h2>
<Container>
    <div class="columns-[20em] max-w-[100em] m-auto text-center py-8">
        {#each projets as projet}
            <Card title={projet.title} link={projet.link} source={projet.source} github={projet.github}>{projet.description}</Card>
        {/each}
    </div>
</Container>
<Parser/>
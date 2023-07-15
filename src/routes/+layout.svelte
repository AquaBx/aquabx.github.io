<script>
    import Header from "../lib/Header.svelte"
    import Footer from "../lib/Footer.svelte"
    import "../app.css"
    import { fade  } from 'svelte/transition';
    
    export let data

</script>

<svelte:head>
    <title>Tom Chauvel</title>
    <meta name="description" content="Site de Tom Chauvel / AquaBx, étudiant à l'ESIR à Rennes.">
</svelte:head>


<div class="app">

    <Header></Header>
    
    {#key data.pathname}
    <div id="content" in:fade={{ duration: 1000}}>
        <slot></slot>
    </div>
    {/key}
    
    <Footer></Footer>
    
</div>

<style>
    div.app{
        display: flex;
        flex-direction: column;
        gap:1em;
    }

    #content {
        overflow:auto;
        width:clamp(100px,calc(100% - 40px),19cm);
        margin: auto;
        min-height:calc(100vh - 12.5em);
    }

</style>
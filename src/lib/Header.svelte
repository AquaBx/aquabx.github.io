<script>

</script>
<nav>
    <img src="/logo.png">
    <h1>AquaBx</h1>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Mes Projets</a></li>
        <li><a href="/photos">Mes Photos</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>

    nav {
        display: grid;
        grid-template-columns: 5em 10em 1fr;
        height: 5em;
        align-items: center;
        gap:1em;
        padding:1em;
        background-color: var(--compl);
        position: sticky;
        top:0;
        left:0;
    }

    nav img {
        height: 5em;
        border-radius: 15em;

    } 

    nav ul, nav ul li {
        all:unset;
    }

    nav ul {
        display:flex;
        width:100%;
    }

    nav ul li a {
        padding:1em;
        text-align: center;
        transition: 0.2s;
    }


</style>
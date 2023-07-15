<script>
    export let post;
    import Tags from "./Tags.svelte";
</script>


<a href={"./blog/"+post.slug} class="card">

    <h2>{post.title}</h2>
    <p>{post.description}</p>

    <Tags metadata={post}></Tags>

</a>


<style>

    .card {
        all:unset;
        cursor: pointer;
        background-color: var(--compl);
        padding:1em;
        border-radius:  1em ;
    }

    .card h2 {
        margin:0;
    }


</style>
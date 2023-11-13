<script>
    export let post;
    import Tags from "./Tags.svelte";
</script>


<div class="card">

    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <!-- <p>{post.date}</p> -->

    <Tags metadata={post}></Tags>

</div>


<style>

    .card {
        all:unset;
        user-select: none;
        
        padding:16px;
        display: inline-block;
        width: calc(100% - 16px - 2em);
        margin:8px;

        background: rgba(var(--compl2), 0.6);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.7px);
        -webkit-backdrop-filter: blur(6.7px);
        border: 1px solid rgba(255, 255, 255, 0.3);

    }

    .card h2 {
        margin:0;
    }


</style>
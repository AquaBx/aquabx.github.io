<script>
    import { onMount } from "svelte";
    import md from 'markdown-it';

    import { page } from "$app/stores";
    const { title } = $page.params;

    const md_render = md({
        html: true
    })

    let content = ""

    onMount( async ()=>{

        let req = await fetch("/articles/" + title + ".md")
        if (req.status !== 200){
            content = "Le post n'est pas créé ou n'existe pas :("
        }
        else{
            let raw = await req.text();
            content = md_render.render(raw);
        }
        
    })

</script>


<main class="md">
    {@html content }
</main>
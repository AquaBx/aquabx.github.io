<script>
    export let icon;
    export let color = "#"+icon.hex;
    export let size = "3rem";
    export let redirect_uri = ""
</script>

<a target="_blank" rel="noreferrer" href={redirect_uri}>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24">
        <title>{icon.title}</title>
        <path d={icon.path}/>
    </svg>
</a>
    


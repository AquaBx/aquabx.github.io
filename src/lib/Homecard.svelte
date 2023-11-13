<style>
	main {
		width: 100%;
		/* min-height:100dvh; */
		/* overflow: hidden; */
		position: relative;
		display:grid;
		grid-template-columns: 90px 1fr;
		grid-template-rows: 90px 1fr;
		align-items: center;
	}

	.point{
		width: 15px;
		aspect-ratio: 1/1;
		border-radius: 100% ;
		box-shadow: 0 0 15px 5px var(--blue);
	}
	
	.line, .point{
		background-color: var(--blue);
		margin: auto;
	}
	
	.line {
		width: 5px;
		height: 100%;
		border-radius: 36px ;
	}

	h1 {
		background-color: var(--text);
        width: fit-content;
        height: fit-content;
        padding: 16px 16px;
		font-weight: 600;
        font-family: "MonaspaceNeonVarVF";
        color:var(--text-reverse);
	}

</style>

<script lang="ts">

export let title = "Tom Chauvel"
</script>

<main>
	
	<div class="point"></div> <h1>{title}</h1>
	<div class="line"></div>  <slot></slot>

</main>
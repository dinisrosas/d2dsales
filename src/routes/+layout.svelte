<script>
	import { navigating } from '$app/stores';
	import ThemeToggler from '$lib/theme_toggler.svelte';
	import '../app.css';
</script>

{#if $navigating}
	<p>navigating...</p>
{/if}

<main>
	<slot />
</main>

<ThemeToggler />

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

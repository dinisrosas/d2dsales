<script>
	import { navigating } from '$app/stores';
	import Nav from '$lib/nav.svelte';
	import ThemeToggler from '$lib/theme_toggler.svelte';
	import '../app.css';

	// import { pwaInfo } from 'virtual:pwa-info';
	// $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<!-- <svelte:head>
	{@html webManifestLink}
</svelte:head> -->

{#if $navigating}
	<p>navigating...</p>
{/if}

<Nav />

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

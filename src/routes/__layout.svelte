<script lang="ts">
	import { showTextAfterFontsLoad } from '../utils/showTextAfterFontsLoad';
</script>

<svelte:window on:load={showTextAfterFontsLoad} />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Poppins&display=swap"
		rel="stylesheet" />

	<title>The Academy</title>
</svelte:head>

<slot />

<style lang="scss">
	:global(*) {
		box-sizing: border-box;

		--font-heading: 'Nunito Sans', sans-serif;
		--font-content: 'Poppins', sans-serif;

		--color-hidden: transparent;
		--color-darker-gray: #282828;
		--color-dark-gray: #404040;
		--color-blue: #0258a0;
		--color-purple: #6018f8;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	:global(html:not(.loaded)) {
		--color-heading: var(--color-hidden);
		--color-content: var(--color-hidden);
		--color-link-fresh: var(--color-hidden);
		--color-link-viewed: var(--color-hidden);
	}

	:global(html.loaded) {
		--color-heading: var(--color-darker-gray);
		--color-content: var(--color-dark-gray);
		--color-link-fresh: var(--color-blue);
		--color-link-viewed: var(--color-purple);
	}
</style>

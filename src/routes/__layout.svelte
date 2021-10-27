<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Poppins&display=swap"
		rel="stylesheet" />
</svelte:head>

<slot />

<style lang="scss">
	:global(*) {
		box-sizing: border-box;

		--font-heading: 'Nunito Sans', sans-serif;
		--font-content: 'Poppins', sans-serif;

		--color-heading: #282828;
		--color-content: #404040;
		--color-link-fresh: #0258a0;
		--color-link-viewed: #6018f8;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
</style>

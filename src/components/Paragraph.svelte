<p><slot /></p>

<style>
	p {
		font-family: var(--font-content);
		font-size: var(--size-5);
		color: var(--color-content);
		hyphens: auto;
	}

	p:not(:first-child) {
		margin-top: var(--size-5);
	}
</style>

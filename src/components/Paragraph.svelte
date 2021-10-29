<p><slot /></p>

<style lang="scss">
	p {
		font-family: var(--font-content);
		font-size: 20px;
		color: var(--color-content);
		hyphens: auto;

		&:not(:first-child) {
			margin-top: 16px;
		}
	}
</style>

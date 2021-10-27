<script lang="ts">
	export let to: string;
</script>

<a href={to}><slot /></a>

<style lang="scss">
	a {
		color: var(--color-link-fresh);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}

		&:visited {
			color: var(--color-link-viewed);
		}
	}
</style>

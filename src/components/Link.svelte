<script lang="ts">
	export let to;
</script>

<a href={to}><slot /></a>

<style>
	a {
		color: var(--color-link-fresh);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: var(--color-link-viewed);
	}
</style>

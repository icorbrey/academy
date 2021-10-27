<script lang="ts">
	import Paragraph from '../components/Paragraph.svelte';
	import Heading from '../components/Heading.svelte';
	import Link from '../components/Link.svelte';

	const github = 'https://github.com/icorbrey';
</script>

<main>
	<article>
		<Heading level={1}>Welcome to the Academy!</Heading>

		<Paragraph>
			This site is still under construction. If you're interested, check
			out
			<Link to={github}>the rest of my projects on GitHub</Link>!
		</Paragraph>
	</article>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		padding: 40px 20px;

		article {
			max-width: 1000px;
		}
	}
</style>

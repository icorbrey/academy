<script lang="ts">
	import ContentColumn from '../components/ContentColumn.svelte';
	import Paragraph from '../components/Paragraph.svelte';
	import Hero from '../components/Hero.svelte';
</script>

<Hero
	heading="Learn at the Academy."
	subheading="Free. Open. Ready for collaboration."
	actionLink="https://github.com/icorbrey/academy"
	actionText="Join us on GitHub" />
<main>
	<ContentColumn>
		<article>
			<Paragraph>
				The Academy project's goal is to create a collaborative
				repository of knowledge in various subjects, including higher
				level mathematics, computer science fundamentals and complex
				concepts, and more. The project is currently in development, so
				if you are interested in contributing please join us on GitHub
				using the link above.
			</Paragraph>
			<Paragraph>Thanks!</Paragraph>
		</article>
	</ContentColumn>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;

		width: 100%;
		height: 100%;
		margin-top: 32px;
		margin-bottom: 32px;
	}
</style>

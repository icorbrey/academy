<script lang="ts">
	import ContentColumn from './ContentColumn.svelte';

	export let heading: string;
	export let actionLink: string;
	export let actionText: string;
	export let subheading: string;
</script>

<section>
	<ContentColumn>
		<div class="side-by-side">
			<div class="left">
				<h1>{heading}</h1>
				<p>{subheading}</p>
			</div>
			<a class="right" href={actionLink}>
				{actionText}
			</a>
		</div>
	</ContentColumn>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;

		width: 100%;
		padding: 160px 0 48px;

		color: var(--color-hero-foreground);
		background-color: var(--color-hero-background);

		.side-by-side {
			display: flex;
			flex-flow: row wrap;
			align-items: flex-end;
			justify-content: space-between;

			.left {
				h1 {
					font-family: var(--font-heading);
					font-size: 64px;

					@media screen and (max-width: 1000px) {
						font-size: 56px;
					}
				}

				p {
					font-family: var(--font-content);
					font-size: 32px;

					@media screen and (max-width: 1000px) {
						font-size: 24px;
					}
				}
			}

			a.right {
				padding: 16px;
				margin-top: 24px;
				border: solid 2px var(--color-hero-action);
				border-radius: 7px;

				font-family: var(--font-content);
				font-size: 24px;

				@media screen and (max-width: 1000px) {
					font-size: 20px;
				}

				color: var(--color-hero-action);
				text-decoration: none;
			}
		}
	}
</style>

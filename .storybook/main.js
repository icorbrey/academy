module.exports = {
	'stories': [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	'addons': [
		'@storybook/addon-a11y',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf',
		'storybook-addon-outline',
		'storybook-dark-mode',
		'storybook-addon-pseudo-states',
	],
	'svelteOptions': {
		'preprocess': import('../svelte.config.js').preprocess
	}
}

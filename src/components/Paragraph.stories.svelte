<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import Paragraph from './Paragraph.svelte';
</script>

<Meta title="Paragraph" component={Paragraph} />

<Story name="Single Paragraph">
	<Paragraph>This is a test.</Paragraph>
</Story>

<Story name="Multiple Paragraphs">
	<Paragraph>This is the first test.</Paragraph>
	<Paragraph>This is the second test.</Paragraph>
	<Paragraph>This is the third test.</Paragraph>
</Story>

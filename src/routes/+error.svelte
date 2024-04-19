<script>
	import Layout from '$lib/components/Layout.svelte';
</script>

<Layout>
	<svelte:fragment slot="title">Whoops!</svelte:fragment>
	<p>
		Something went wrong... 😅
		<br />
		Very likely, this page does not exist (or the server went crazy).
		<br />
		Go back <a href="/">home</a> and start over.
	</p>
</Layout>

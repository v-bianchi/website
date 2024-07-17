<script>
	import { page } from '$app/stores';
	import notFound from '$lib/assets/images/404.gif';
</script>

<h1>{$page.status}</h1>

{#if $page.status === 404}
	<p>Not found</p>
	<img src={notFound} alt="" />
{/if}

{#if $page.status >= 500}
	<p>Internal server error</p>
{/if}
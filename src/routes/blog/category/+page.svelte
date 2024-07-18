<script>
  import { metadata } from '$lib/content/config.js'

	export let data
  const { uniqueCategories } = data
</script>


<svelte:head>
	<title>{metadata.title} Blog | Categories</title>
</svelte:head>


<h1>All blog categories</h1>

<!-- TODO: this is element is duplicated on /blog home page -->
<ul>
	{#each uniqueCategories as category}
		<li>
			<a href="/blog/category/{category.title}">
				{ category.title }
			</a>
			({category.count})
		</li>
	{/each}
</ul>
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { metadata } from '$lib/config'

	export let data
	const { posts, total, uniqueCategories } = data
</script>

<svelte:head>
	<title>{metadata.title} | Blog</title>
</svelte:head>

<h1>Blog</h1>

{#if posts.length}
	<PostsList posts={posts} />

	<Pagination currentPage={1} totalPosts={total} />

	<h2>Categories</h2>

	<!-- TODO: this is element is duplicated on /blog/category home page -->
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
{:else}
	<p>Nothing to see here yet. Stay tuned!</p>
{/if}

<style>
	h2 {
		margin-top: var(--spacer-l);
	}
</style>
<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

	const { title, excerpt, date, updated, categories } = data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/blog-post.css" />
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<!-- <meta property="og:image:width" content={coverWidth} /> -->
	<!-- <meta property="og:image:height" content={coverHeight} /> -->
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article>
  <h1>{title}</h1>
  {#if excerpt}
    <p class="excerpt">{excerpt}</p>
  {/if}
  <div class="metadata">
    {#if date}
      <p><span>published at: </span>{date}</p>
    {/if}
    {#if updated}
      <p><span>updated at: </span>{updated}</p>
    {/if}
  </div>

  <svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul class="post-footer__categories">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>


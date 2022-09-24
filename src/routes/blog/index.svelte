<script>
  export let sortedPosts;
  export let home;
  export let blog;
</script>

<svelte:head>
  <title>{blog.title ?? home.title}</title>
  <meta name="description" content={blog.description ?? home.description} />
  <meta property="og:title" content={blog.title ?? home.title} />
  <meta property="og:description" content={blog.description ?? home.description} />
</svelte:head>

<h1>Blog</h1>

<ul>
  {#each sortedPosts as post}
    <li>
      <a href={post.path}>
        <h2>{post.meta.title}</h2>
      </a>
      <p>{post.meta.tagline}</p>
    </li>
  {:else}
    <p>Nothing to see here yet. Stay tuned!</p>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacer-m);
  }

  li {
    padding: var(--spacer-m);
    background-color: var(--color-background-alt);
    border-radius: var(--spacer-s);
  }

  h2 {
    margin-bottom: var(--spacer-s);
  }
  a,
  a h2 {
    color: var(--color-foreground);
  }
</style>

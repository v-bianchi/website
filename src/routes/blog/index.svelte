<script>
  export let sortedPosts;
</script>

<svelte:head>
  <title>Victor Bianchi | Software developer | Blog</title>
  <meta name="description" content="This is my blog!" />
  <meta property="og:title" content="Blog" />
  <meta property="og:description" content="This is my blog!" />
</svelte:head>

<h1>Blog</h1>

<p>These are a few articles I wrote.</p>

<ul>
  {#each sortedPosts as post}
    <li>
      <a href={post.path}>
        <h2>{post.meta.title}</h2>
      </a>
      <p>{post.meta.tagline}</p>
    </li>
  {:else}
    <p>No blog posts yet. Stay tuned!</p>
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

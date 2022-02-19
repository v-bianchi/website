<script>
  export let posts;
</script>

<h1>Blog</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias amet cumque.</p>

<ul>
  {#each posts as post}
    <li>
      <a href={`/blog/${post.slug}`}>
        <p>{post.title}</p>
        <p>{post.tagline}</p>
      </a>
    </li>
  {:else}
    <p>No blog posts yet. Stay tuned!</p>
  {/each}
</ul>

<style>
  a {
    text-decoration: none;
  }
  a p {
    margin-bottom: 0;
    color: var(--color-foreground);
  }

  a p:first-of-type {
    font-size: 2em;
    line-height: 1.25;
    font-weight: bold;
  }

  li:not(:last-of-type) {
    margin-bottom: 2rem;
  }
</style>
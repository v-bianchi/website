<script>
	export let posts = []
</script>

<ul>
  {#each posts as post}
    <li>
      <a href="/blog/{post.slug}">
        <h2>{post.title}</h2>
      </a>
      <p>{post.excerpt}</p>
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

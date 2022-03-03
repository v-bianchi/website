<script>
  import '$lib/styles/blog-post.css';

  export let title;
  export let tagline;
  export let published;
  export let updated;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={tagline} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={tagline} />
</svelte:head>

<article>
  <h1>{title}</h1>
  {#if tagline}
    <p class="tagline">{tagline}</p>
  {/if}
  <div class="metadata">
    {#if published}
      <p><span>published at: </span>{published}</p>
    {/if}
    {#if updated}
      <p><span>updated at: </span>{updated}</p>
    {/if}
  </div>

  <slot />
</article>

<style>
  .tagline {
    font-size: 1.5rem;
    line-height: 1.2;
  }
  .metadata {
    width: fit-content;
    border-top: 2px solid currentColor;
    padding-top: var(--spacer-s);
    margin-bottom: var(--spacer-xl);
  }

  .metadata p {
    font-size: 0.75rem;
  }

  .metadata span {
    text-transform: uppercase;
    font-weight: bold;
  }
  h1 {
    margin-bottom: var(--spacer-m);
  }
</style>

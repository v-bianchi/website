<script>
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

<h1>{title}</h1>
<p>{tagline}</p>
<p><small>published at {published}</small></p>
{#if updated}
  <p><small>updated at {updated}</small></p>
{/if}

<slot />

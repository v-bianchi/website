<script>
  export let title;
  export let tagline;
  export let published;
  export let updated;
</script>

<h1>{title}</h1>
<p>{tagline}</p>
<p><small>published at {published}</small></p>
{#if updated}
  <p><small>updated at {updated}</small></p>
{/if}

<slot/>
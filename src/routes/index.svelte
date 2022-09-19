<script context="module">
  import { metadata, heading, tagline, htmlContent, imageUrl, imageCredit } from '$lib/content/home.json';
  export function load() {
    return {
      props: {
        metadata,
        heading,
        tagline,
        htmlContent,
        imageUrl,
        imageCredit,
      },
    };
  }
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta property="og:description" content={metadata.description} />
</svelte:head>

<div class="container">
  <div>
    <h1>{heading}<span>👋</span></h1>
    {#if tagline}
      <p>{tagline}</p>
    {/if}
    {#if htmlContent}
      {@html htmlContent}
    {/if}
    {#if imageCredit}
      <p class="artwork-credit">
        <small>{imageCredit}</small>
      </p>
    {/if}
  </div>
  {#if imageUrl}
    <div>
      <img src={imageUrl} loading="lazy" alt="" />
    </div>
  {/if}
</div>

<style>
  .container {
    display: flex;
  }
  h1 > span {
    color: initial;
    margin-left: var(--spacer-s);
    line-height: 1.4;
  }

  p:first-of-type {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: var(--spacer-l);
  }

  .artwork-credit {
    color: var(--color-foreground-faded);
  }

  @media screen and (max-width: 800px) {
    img,
    .artwork-credit {
      display: none;
    }
  }
</style>

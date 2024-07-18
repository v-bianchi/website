<script>
	import { homepage } from '$lib/content/config'
</script>

<div class="container">
  <div>
    <h1>{homepage.heading}<span>👋</span></h1>
    {#if homepage.tagline}
      <p>{homepage.tagline}</p>
    {/if}
    {#if homepage.htmlContent}
      {@html homepage.htmlContent}
    {/if}
    {#if homepage.imageCredit}
      <p class="artwork-credit">
        <small>{homepage.imageCredit}</small>
      </p>
    {/if}
  </div>
  {#if homepage.imageUrl}
    <div>
      <img src={homepage.imageUrl} loading="lazy" alt="" />
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

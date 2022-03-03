<script>
  import Image from '$lib/components/Image.svelte';

  export let filename;
  export let alt = '';
  export let caption;
  export let credit = '';
</script>

<figure>
  <Image {filename} {alt} />
  <figcaption>
    {caption}
    {#if credit}
      <small>{credit}</small>
    {/if}
  </figcaption>
</figure>

<style>
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  figcaption {
    color: var(--color-foreground-faded);
    margin-top: var(--spacer-s);
  }
</style>

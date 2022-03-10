<script>
  export let title;
  export let heading = '';
  export let image = '';
  export let description = '';
  export let startTime = null;
  export let endTime = null;
  export let bottomText = '';
  export let linkUrl = '';

  const formattingOptions = { month: 'short', year: 'numeric' };

  let formattedEndTime = endTime
    ? new Date(endTime.split('-')).toLocaleString('en', formattingOptions)
    : null;

  let formattedStartTime = startTime
    ? new Date(startTime.split('-')).toLocaleString('en', formattingOptions)
    : null;
</script>

<li>
  <article>
    <header>
      {#if image}
        <img src={image} alt="" />
      {/if}
      <h3>{title}</h3>
      {#if formattedStartTime || formattedEndTime}
        <p class="time">
          {#if formattedStartTime}
            <time datetime={startTime}>{formattedStartTime}</time>
            <span> — </span>
          {/if}
          <time datetime={endTime}>{formattedEndTime}</time>
        </p>
      {/if}
      {#if heading}
        {#if linkUrl}
          <a href={linkUrl} target="_blank" rel="noopener noreferrer nofollow">
            <p class="heading">{heading}</p>
          </a>
        {:else}
          <p class="heading">{heading}</p>
        {/if}
      {/if}
    </header>
    {#if description}
      <p class="description">{description}</p>
    {/if}
    {#if bottomText}
      <footer class="bottom-text">{bottomText}</footer>
    {/if}
  </article>
</li>

<style>
  h3 {
    font-size: 1.5rem;
    line-height: 1.2;
    grid-area: titl;
  }

  header {
    display: grid;
    grid-template-areas:
      'imag titl time'
      'imag hdng .';
    grid-template-columns: minmax(40px, 10%) auto max-content;
    align-items: center;
    gap: 0 var(--spacer-s);
    margin-bottom: var(--spacer-m);
  }

  footer {
    font-style: italic;
  }

  li {
    padding: var(--spacer-m);
    background-color: var(--color-background-alt);
    border-radius: var(--spacer-s);
  }

  img {
    height: 100%;
    max-height: 4rem;
    object-fit: contain;
    grid-area: imag;
  }

  .time {
    color: var(--color-foreground-faded);
    grid-area: time;
    margin-bottom: 0;
  }

  .heading {
    font-weight: bold;
    grid-area: hdng;
  }

  a {
    color: var(--color-foreground);
    width: fit-content;
  }

  @media screen and (max-width: 512px) {
    header {
      grid-template-areas:
        'titl'
        'hdng'
        'time';
      grid-template-columns: unset;
    }

    img {
      display: none;
    }
  }
</style>

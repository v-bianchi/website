<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ status }) {
    return {
      props: { status },
    };
  }
</script>

<script>
  import notFound from '$lib/images/404.gif';
  export let status;
</script>

<h1>{status.toString().trim()}</h1>

{#if status.toString()[0] === '4'}
  <p>Not found</p>
  <img src={notFound} alt="" />
{:else if status.toString()[0] === '5'}
  <p>Internal server error</p>
{/if}

<style>
  h1,
  p {
    margin: 0 auto var(--spacer-l);
    text-align: center;
  }

  img {
    margin-left: 1rem;
  }
</style>

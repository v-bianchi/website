<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.css';
</script>

<svelte:head>
  <title>Victor Bianchi | Software developer</title>
  <meta name="author" content="Victor Bianchi" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Victor Bianchi | Software developer" />
</svelte:head>

<a href="#main" id="skip-to-main">Skip to main content</a>

<Header />

<main id="main">
  <slot />
</main>

<Footer />

<style>
  #skip-to-main {
    position: absolute;
    padding: var(--spacer-m);
    top: -100%;
    left: var(--spacer-s);
    background-color: var(--color-background);
    font-size: 1.25rem;
  }

  #skip-to-main:focus {
    top: var(--spacer-s);
  }
  main {
    max-width: 40rem;
    padding: 0 var(--spacer-m);
    flex-grow: 1;
    align-self: center;
  }
</style>

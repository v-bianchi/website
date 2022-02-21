<svelte:head>
  <title>Victor Bianchi | Software developer</title>
  <meta name="author" content="Victor Bianchi">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Victor Bianchi | Software developer">
</svelte:head>

<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.css'
</script>

<a href="#main" id="skip-to-main">Skip to main content</a>

<Header />

<main id="main">
  <slot></slot>
</main>

<Footer />

<style>
  #skip-to-main {
    position: absolute;
    padding: 1rem;
    top: -100%;
    left: .5rem;
    background-color: var(--color-background);
    font-size: 1.25rem;
  }

  #skip-to-main:focus {
    top: .5rem;
  }
  main {
    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
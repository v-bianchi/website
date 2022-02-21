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

<Header />

<main id="main">
  <slot></slot>
</main>

<Footer />

<style>
  main {
    max-width: 40rem;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
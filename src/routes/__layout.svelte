<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.css'
</script>

<Header />

<main>
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
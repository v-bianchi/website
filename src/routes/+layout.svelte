<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import { onMount } from 'svelte'

	import { preloadCode } from '$app/navigation'
	import { navItems, metadata } from '$lib/config'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	export let data

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		const navRoutes = navItems.map((item) => item.route)
		preloadCode(...navRoutes)
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/global.css" />
	<!-- <link
		rel="alternate"
		type="application/rss+xml"
		title={metadata.title}
		href="http://{metadata.URL}/api/rss.xml"
	/> -->
	<title>{metadata.title}</title>
  <meta name="author" content={metadata.author} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={metadata.title} />
	<meta data-key="description" name="description" content={metadata.description}>
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
    width: 100%;
    max-width: 80ch;
    padding: 0 var(--spacer-m);
    flex-grow: 1;
    align-self: center;
  }
</style>

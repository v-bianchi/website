<script context="module">
  import { home, projects } from '$lib/content/metadata.json';
  export function load() {
    return {
      props: {
        home,
        projects,
      },
    };
  }
</script>

<svelte:head>
  <title>{projects.title ?? home.title}</title>
  <meta name="description" content={projects.description ?? home.description} />
  <meta property="og:title" content={projects.title ?? home.title} />
  <meta property="og:description" content={projects.description ?? home.description} />
</svelte:head>

<h1>Some of my projects</h1>

<p>Nothing to see here yet. Stay tuned!</p>

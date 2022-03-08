<svelte:head>
  <meta name="description" content="This is my home page!" />
  <meta
    property="og:description"
    content="I'm a software developer, teacher, and cybersecurity student based in Montreal 🇨🇦. Welcome to my website!"
  />
</svelte:head>

<h1>Hi, I'm Victor<span>👋</span></h1>

<p>I'm a software developer, teacher, and cybersecurity student based in Montreal 🇨🇦</p>

<p>
  I can't stop learning new stuff and love to share what I have learned. In this website you can
  find my résumé, my personal projects, and stories about how I created them.
</p>

<style>
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
</style>

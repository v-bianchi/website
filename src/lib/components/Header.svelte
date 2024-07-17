<script>
  import { navItems } from "$lib/config"
</script>

<header>
  <nav>
    <a id="home-link" href="/">
      <span aria-hidden="true">&lt;</span>
      Victor&nbsp;Bianchi
      <span aria-hidden="true">&gt;</span>
    </a>
    <ul>
      {#each navItems as page}
        <li>
          <a href={page.route}>{page.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacer-xl);
    padding: var(--spacer-m);
    background-color: var(--color-background-alt);
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: var(--spacer-m);
  }

  a {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--color-foreground);
    padding: var(--spacer-s) 0;
    text-decoration: none;
    transition: color 0.1s ease-in;
  }

  a:hover {
    color: var(--color-accent-primary);
  }

  #home-link {
    font-family: var(--font-family-monospace);
    text-transform: lowercase;
  }

  @media screen and (max-width: 512px) {
    nav {
      flex-direction: column;
      align-items: center;
      gap: var(--spacer-m);
      padding: 0 var(--spacer-m) var(--spacer-m);
    }

    ul {
      width: 100%;
      justify-content: space-around;
    }

    a {
      padding: var(--spacer-m);
    }
  }

  @media print {
    header {
      display: none;
    }
  }
</style>

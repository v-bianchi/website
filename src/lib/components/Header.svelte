<header>
  <nav>
    <ul>
      <li>
        <a href="/">
          <span aria-hidden="true">&lt;</span>
          Victor&nbsp;Bianchi
          <span aria-hidden="true">&gt;</span>
        </a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
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

  li:first-child {
    font-family: var(--font-family-monospace);
    text-transform: lowercase;
    margin-right: auto;
  }

  @media screen and (max-width: 512px) {
    ul {
      flex-direction: column;
      gap: var(--spacer-l);
    }

    li:first-child {
      margin-right: unset;
    }

    a {
      padding: 0.75rem;
    }
  }
</style>

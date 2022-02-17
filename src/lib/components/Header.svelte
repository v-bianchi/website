<header>
  <nav>
    <ul>
      <li>
        <a href="/">
          <span aria-hidden="true">&lt;</span>Victor&nbsp;Bianchi<span aria-hidden="true">&gt;</span>
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
    padding: 1rem;
    background-color: var(--color-background-alt);
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--color-foreground);
    padding: .5rem 0;
    text-decoration: none;
    transition: color .1s ease-in;
  }
  
  a:hover, a:focus-visible {
    color: var(--color-accent-primary);
  }

  li:first-child {
    font-family: var(--font-family-monospace);
    text-transform: lowercase;
    margin-right: auto;
  }

</style>
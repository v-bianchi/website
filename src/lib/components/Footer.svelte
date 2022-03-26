<footer>
  <a href="https://github.com/v-bianchi/website">
    <small>source code</small>
  </a>
  <ul>
    <li>
      <a href="https://github.com/v-bianchi" target="_blank" rel="noopener noreferrer nofollow">
        <svg role="img" width="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>
    </li>
    <li>
      <a href="mailto:hello@victorbianchi.dev" target="_blank" rel="noopener noreferrer nofollow">
        <svg role="img" width="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title>Email</title>
          <path
            d="M425.367,72.125H86.633C38.752,72.125,0,111.131,0,158.759v194.482    c0,47.839,38.98,86.633,86.633,86.633h338.734c47.741,0,86.633-38.888,86.633-86.633V158.759    C512,111.069,473.187,72.125,425.367,72.125z M425.367,110.411c9.804,0,18.928,2.942,26.556,7.976l-184.231,120.58    c-7.102,4.649-16.282,4.649-23.386,0l-184.23-120.58C76.732,107.394,58.236,110.411,425.367,110.411z M39.03,150.368    l126.776,82.975L38.286,350.222C38.286,142.169,37.967,156.414,39.03,150.368z M425.367,401.589H86.633    c-12.865,0-24.563-5.061-33.235-13.284l145.463-133.326c59.59,39.003,66.629,31.186,114.278,0l145.463,133.326    C449.931,396.528,438.232,401.589,425.367,401.589z M473.716,350.222l-127.52-116.879l126.776-82.975    C474.035,156.414,473.716,142.206,473.716,350.222z"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/vbianchi/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <svg role="img" width="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
    </li>
  </ul>
  <span>
    <small>© 2022 Victor Bianchi</small>
  </span>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacer-m);
    margin-top: var(--spacer-xl);
    background-color: var(--color-background-alt);
  }

  footer > *:last-child {
    text-align: right;
  }

  a {
    color: var(--color-foreground);
    transition: color 0.15s ease-in;
  }

  a:hover {
    color: var(--color-accent-primary);
  }

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: var(--spacer-m);
  }

  svg {
    fill: currentColor;
    width: var(--spacer-l);
  }

  @media screen and (max-width: 512px) {
    footer {
      flex-direction: column;
      gap: var(--spacer-l);
    }

    ul {
      gap: unset;
      width: 100%;
      justify-content: space-around;
    }

    svg {
      width: 3rem;
    }
  }
</style>

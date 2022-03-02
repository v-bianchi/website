<div>
  <slot />
</div>

<style>
  div {
    background-color: var(--color-background-alt);
    font-size: 1.2rem;
    line-height: 1.4;
    padding: var(--spacer-m);
  }
  
  div:not(:last-child) {
    margin-bottom: var(--spacer-m);
  }
</style>
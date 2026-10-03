<!-- Call-to-action link. Every CTA on the site navigates somewhere, so it renders an <a>. -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href,
    variant = 'primary',
    external = false,
    class: className = '',
    children
  }: {
    href: string;
    variant?: 'primary' | 'secondary' | 'light' | 'text';
    external?: boolean;
    class?: string;
    children: Snippet;
  } = $props();
</script>

<a
  {href}
  class="btn btn-{variant} {className}"
  target={external ? '_blank' : undefined}
  rel={external ? 'noreferrer' : undefined}
>
  {@render children()}
</a>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    min-height: 3.25rem;
    padding: 0.85rem 1.9rem;
    border-radius: 999px;
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    transition:
      background-color 0.5s var(--ease-calm),
      color 0.5s var(--ease-calm),
      border-color 0.5s var(--ease-calm),
      box-shadow 0.5s var(--ease-calm);
  }

  .btn-primary {
    background: var(--color-forest);
    color: var(--color-on-forest);
    border: 1px solid var(--color-forest);
  }

  .btn-primary:hover {
    background: var(--color-forest-deep);
    box-shadow: 0 12px 30px -16px rgb(31 52 25 / 0.55);
  }

  .btn-secondary {
    background: transparent;
    color: var(--color-forest);
    border: 1px solid rgb(44 74 37 / 0.45);
  }

  .btn-secondary:hover {
    background: rgb(44 74 37 / 0.06);
    border-color: var(--color-forest);
  }

  .btn-light {
    background: var(--color-cream);
    color: var(--color-forest-deep);
    border: 1px solid var(--color-cream);
  }

  .btn-light:hover {
    background: var(--color-paper);
  }

  .btn-text {
    min-height: 2.75rem;
    padding: 0.25rem 0;
    border-radius: 0;
    color: var(--color-forest);
    border-bottom: 1px solid rgb(44 74 37 / 0.35);
  }

  .btn-text:hover {
    border-bottom-color: var(--color-forest);
  }
</style>

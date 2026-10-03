<script lang="ts">
  import { resolve } from '$app/paths';
  import { tick } from 'svelte';
  import { navLinks } from '$lib/content/site';
  import Emblem from './brand/Emblem.svelte';
  import Wordmark from './brand/Wordmark.svelte';
  import Icon from './Icon.svelte';

  const home = resolve('/');

  let isMenuOpen = $state(false);
  let isScrolled = $state(false);
  let menuButton: HTMLButtonElement | undefined = $state();
  let firstMenuLink: HTMLAnchorElement | undefined = $state();

  async function openMenu() {
    isMenuOpen = true;
    await tick();
    firstMenuLink?.focus();
  }

  function closeMenu({ restoreFocus = false } = {}) {
    isMenuOpen = false;
    if (restoreFocus) menuButton?.focus();
  }

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMenuOpen) closeMenu({ restoreFocus: true });
  }

  function onScroll() {
    isScrolled = window.scrollY > 12;
  }

  // Keep the page from scrolling behind the open mobile menu.
  $effect(() => {
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
  });
</script>

<svelte:window onkeydown={onKeydown} onscroll={onScroll} />

<a
  href="#main"
  class="sr-only z-60 rounded-full bg-forest px-5 py-3 font-sans text-sm text-on-forest focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
  >Skip to content</a
>

<header
  class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-700"
  class:scrolled={isScrolled || isMenuOpen}
>
  <nav class="container-page flex h-20 items-center justify-between gap-6" aria-label="Main">
    <a href={home} class="flex min-h-12 items-center gap-3 text-forest" aria-label="Yoga with Ann Scarab — home">
      <Emblem class="h-9 w-9 shrink-0" />
      <Wordmark class="h-7 w-auto sm:h-8" />
    </a>

    <ul class="hidden items-center gap-8 lg:flex">
      {#each navLinks as link (link.hash)}
        <li>
          <a href="{home}#{link.hash}" class="nav-link">{link.label}</a>
        </li>
      {/each}
    </ul>

    <div class="flex items-center gap-2">
      <a href="{home}#contact" class="book-link hidden sm:inline-flex">Book a Class</a>
      <button
        bind:this={menuButton}
        type="button"
        class="flex h-12 w-12 items-center justify-center rounded-full text-forest lg:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        onclick={() => (isMenuOpen ? closeMenu() : openMenu())}
      >
        <Icon name={isMenuOpen ? 'close' : 'menu'} class="h-7 w-7" />
      </button>
    </div>
  </nav>
</header>

{#if isMenuOpen}
  <div id="mobile-menu" class="mobile-menu fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto lg:hidden">
    <nav class="container-page flex min-h-full flex-col pt-6 pb-10" aria-label="Mobile">
      <ul>
        {#each navLinks as link, i (link.hash)}
          <li>
            {#if i === 0}
              <a bind:this={firstMenuLink} href="{home}#{link.hash}" class="mobile-link" onclick={() => closeMenu()}
                >{link.label}</a
              >
            {:else}
              <a href="{home}#{link.hash}" class="mobile-link" onclick={() => closeMenu()}>{link.label}</a>
            {/if}
          </li>
        {/each}
      </ul>
      <a
        href="{home}#contact"
        class="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-forest px-8 font-sans text-sm tracking-[0.2em] text-on-forest uppercase"
        onclick={() => closeMenu()}>Book a Class</a
      >
    </nav>
  </div>
{/if}

<style>
  header.scrolled {
    background-color: rgb(248 244 235 / 0.92);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 1px 0 rgb(44 74 37 / 0.08);
  }

  .nav-link {
    position: relative;
    font-family: var(--font-sans);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-ink);
    padding-block: 0.5rem;
    transition: color 0.4s var(--ease-calm);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.15rem;
    height: 1px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s var(--ease-calm);
  }

  .nav-link:hover {
    color: var(--color-forest);
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  .book-link {
    align-items: center;
    min-height: 2.75rem;
    padding: 0 1.4rem;
    border-radius: 999px;
    background: var(--color-forest);
    color: var(--color-on-forest);
    font-family: var(--font-sans);
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    transition: background-color 0.5s var(--ease-calm);
  }

  .book-link:hover {
    background: var(--color-forest-deep);
  }

  .mobile-menu {
    background: var(--color-cream);
    animation: menu-in 0.45s var(--ease-calm);
  }

  .mobile-link {
    display: block;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--color-line);
    font-family: var(--font-display);
    font-size: 2rem;
    line-height: 1.2;
    color: var(--color-forest);
  }

  @keyframes menu-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

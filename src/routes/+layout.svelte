<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onNavigate } from '$app/navigation';

  let { children }: { children: Snippet } = $props();

  // Use the View Transitions API for smooth page transitions.
  // SvelteKit calls this before every navigation; returning a Promise
  // lets SvelteKit coordinate the old-page exit and new-page enter.
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    // Same-page hash links (e.g. /#classes) should just scroll, not cross-fade.
    if (navigation.from?.url.pathname === navigation.to?.url.pathname) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />
  <main id="main" tabindex="-1" class="flex-1 outline-none" style="view-transition-name: page-content;">
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  /* Only animate the page-content area — navbar is excluded */
  :global(::view-transition-old(page-content)) {
    animation: fade-out 0.3s ease-out both;
  }

  :global(::view-transition-new(page-content)) {
    animation: fade-in 0.45s ease-in both;
  }

  /* Prevent the root transition from animating (just swap instantly) */
  :global(::view-transition-old(root)),
  :global(::view-transition-new(root)) {
    animation: none;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(::view-transition-old(page-content)),
    :global(::view-transition-new(page-content)) {
      animation: none;
    }
  }

  @keyframes fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>

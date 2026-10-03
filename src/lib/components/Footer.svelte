<script lang="ts">
  import { resolve } from '$app/paths';
  import { navLinks, site } from '$lib/content/site';
  import LogoLockup from './LogoLockup.svelte';
  import ContactBlock from './ContactBlock.svelte';

  const home = resolve('/');
  const year = new Date().getFullYear();
</script>

<footer class="bg-forest-deep text-on-forest">
  <div class="container-page grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-24">
    <div class="flex w-fit flex-col items-center md:col-span-5">
      <a href={home} class="block" aria-label="{site.name} — home">
        <LogoLockup size="md" class="text-on-forest" />
      </a>
      <p class="mt-6 text-center font-sans text-xs tracking-[0.26em] text-on-forest-muted uppercase">
        {site.subtitle}
      </p>
    </div>

    <nav class="md:col-span-3" aria-label="Footer">
      <h2 class="eyebrow mb-6 text-on-forest-muted">Explore</h2>
      <ul class="space-y-3 text-lg">
        {#each navLinks as link (link.hash)}
          <li><a class="footer-link" href="{home}#{link.hash}">{link.label}</a></li>
        {/each}
        <li><a class="footer-link" href={resolve('/about')}>Ann's Story</a></li>
      </ul>
    </nav>

    <div class="md:col-span-4">
      <h2 class="eyebrow mb-6 text-on-forest-muted">Contact</h2>
      <ContactBlock tone="dark" />
    </div>
  </div>

  <div class="border-t border-white/10">
    <div
      class="container-page flex flex-col gap-3 py-8 font-sans text-xs tracking-wide text-on-forest-muted md:flex-row md:items-center md:justify-between"
    >
      <p>© {year} {site.name}. All rights reserved.</p>
      <p>
        Website by Brian Nguyen (<a class="footer-link" href="https://hoangdesu.com" target="_blank" rel="noreferrer"
          >hoangdesu.com</a
        >) with 🧡
      </p>
    </div>
  </div>
</footer>

<style>
  .footer-link {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 0.3em;
    transition: text-decoration-color 0.4s var(--ease-calm), color 0.4s var(--ease-calm);
  }

  .footer-link:hover {
    color: var(--color-on-forest);
    text-decoration-color: currentColor;
  }
</style>

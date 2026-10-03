<!-- Friendly, on-brand page for missing URLs (served by GitHub Pages as 404.html). -->
<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import Emblem from '$lib/components/brand/Emblem.svelte';
  import Button from '$lib/components/Button.svelte';

  const home = resolve('/');
</script>

<svelte:head>
  <title>Page not found | Yoga with Ann Scarab</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="sunlit flex min-h-[80svh] items-center pt-28 pb-20" style="--sun-x: 50%; --sun-y: 0%;">
  <div class="container-page text-center">
    <Emblem class="mx-auto w-16 text-forest" />
    <p class="eyebrow mt-8">{page.status === 404 ? 'Page not found' : 'Something went wrong'}</p>
    <h1 class="mt-5 text-5xl sm:text-6xl">Take a slow breath</h1>
    <p class="mx-auto mt-6 max-w-md text-lg text-ink-muted">
      {page.status === 404
        ? "The page you're looking for isn't here. Let's find our way back."
        : 'Please try again in a moment.'}
    </p>
    <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button href={home}>Back to home</Button>
      <Button href="{home}#contact" variant="secondary">Contact Ann</Button>
    </div>
  </div>
</section>

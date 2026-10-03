<!-- A class offering with a “Book a class” link that pre-selects it in the contact form. -->
<script lang="ts">
  import { resolve } from '$app/paths';
  import { reveal } from '$lib/actions/reveal';
  import { booking } from '$lib/booking.svelte';
  import Icon from './Icon.svelte';

  let {
    title,
    description,
    index,
    delay = 0
  }: { title: string; description: string; index: number; delay?: number } = $props();

  const bookHref = `${resolve('/')}#contact`;
</script>

<article use:reveal={delay} class="class-card flex h-full flex-col rounded-panel bg-paper p-8 sm:p-9">
  <span class="font-display text-lg text-sage italic" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
  <h3 class="mt-3 text-[1.9rem] leading-tight">{title}</h3>
  <p class="mt-4 flex-1 text-[1.0625rem] text-ink-muted">{description}</p>
  <a href={bookHref} class="book mt-7 inline-flex items-center gap-2 self-start" onclick={() => (booking.interest = title)}>
    Book a class<span class="sr-only">: {title}</span>
    <Icon name="arrow" class="h-4 w-4" />
  </a>
</article>

<style>
  .class-card {
    border: 1px solid rgb(44 74 37 / 0.08);
    transition: box-shadow 0.6s var(--ease-calm), transform 0.6s var(--ease-calm);
  }

  .class-card:hover {
    box-shadow: 0 22px 44px -30px rgb(31 52 25 / 0.4);
  }

  .book {
    min-height: 2.75rem;
    font-family: var(--font-sans);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-forest);
    border-bottom: 1px solid rgb(44 74 37 / 0.3);
    transition: border-color 0.4s var(--ease-calm), gap 0.4s var(--ease-calm);
  }

  .book:hover {
    border-bottom-color: var(--color-forest);
    gap: 0.8rem;
  }
</style>

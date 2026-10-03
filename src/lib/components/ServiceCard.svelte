<!-- Therapeutic-yoga focus area: sprout mark, title, short description. -->
<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Icon, { type IconName } from './Icon.svelte';

  let {
    title,
    description,
    icon = 'sprout',
    delay = 0
  }: { title: string; description: string; icon?: IconName; delay?: number } = $props();
</script>

<article use:reveal={delay} class="card rounded-soft bg-paper/80 p-7 sm:p-8">
  <span class="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-mist text-forest">
    <Icon name={icon} class="h-8 w-8" />
  </span>
  <h3 class="text-2xl sm:text-[1.7rem]">{title}</h3>
  <p class="mt-3 text-base text-ink-muted sm:text-[1.0625rem]">{description}</p>
</article>

<style>
  .card {
    border: 1px solid rgb(44 74 37 / 0.08);
    transition:
      background-color 0.6s var(--ease-calm),
      box-shadow 0.6s var(--ease-calm);
  }

  .card:hover {
    background: var(--color-paper);
    box-shadow: 0 18px 40px -28px rgb(31 52 25 / 0.35);
  }
</style>

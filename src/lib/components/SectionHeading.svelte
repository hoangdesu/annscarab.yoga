<!--
  Section heading with optional eyebrow and intro.
  `style="caps"` uses the brochure's tracked capitals flanked by sprigs;
  `style="display"` uses the large Cormorant serif.
-->
<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Sprig from './Sprig.svelte';

  let {
    title,
    eyebrow = '',
    intro = '',
    id = undefined,
    level = 2,
    align = 'left',
    style = 'display',
    class: className = ''
  }: {
    title: string;
    eyebrow?: string;
    intro?: string;
    /** id for the heading element, for aria-labelledby. */
    id?: string;
    level?: 1 | 2;
    align?: 'left' | 'center';
    style?: 'display' | 'caps';
    class?: string;
  } = $props();

  const centered = $derived(align === 'center');
</script>

<header
  use:reveal
  class="{centered ? 'mx-auto text-center' : ''} {style === 'caps' ? 'max-w-4xl' : 'max-w-2xl'} {className}"
>
  {#if eyebrow}
    <p class="eyebrow mb-5">{eyebrow}</p>
  {/if}

  {#if style === 'caps'}
    <div class="flex items-center gap-4 {centered ? 'justify-center' : ''}">
      {#if centered}<Sprig flip class="hidden h-4 w-16 shrink-0 text-sage sm:block" />{/if}
      <svelte:element this={`h${level}`} {id} class="caps-heading text-2xl sm:text-3xl">{title}</svelte:element>
      <Sprig class="hidden h-4 w-16 shrink-0 text-sage sm:block" />
    </div>
  {:else}
    <svelte:element
      this={`h${level}`}
      {id}
      class="text-[2.6rem] leading-[1.05] sm:text-5xl md:text-[3.75rem]"
    >
      {title}
    </svelte:element>
  {/if}

  {#if intro}
    <p class="mt-6 text-lg text-ink-muted sm:text-xl {centered ? 'mx-auto max-w-xl' : 'max-w-xl'}">{intro}</p>
  {/if}
</header>

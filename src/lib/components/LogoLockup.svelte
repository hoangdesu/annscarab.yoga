<!--
  Brochure logo lockup: emblem, “Ann Scarab” wordmark, “Personal Yoga” rule line
  and the “Breathe • Move • Heal” script. Colour follows `currentColor`.
-->
<script lang="ts">
  import Emblem from './brand/Emblem.svelte';
  import Wordmark from './brand/Wordmark.svelte';
  import PersonalYoga from './brand/PersonalYoga.svelte';
  import Tagline from './brand/Tagline.svelte';

  let {
    showLeadIn = true,
    showTagline = true,
    size = 'lg',
    class: className = ''
  }: {
    /** Adds the small “Yoga with” above the wordmark. */
    showLeadIn?: boolean;
    showTagline?: boolean;
    size?: 'md' | 'lg';
    class?: string;
  } = $props();

  const width = $derived(size === 'lg' ? 'w-[min(100%,25rem)]' : 'w-[min(100%,15rem)]');
</script>

<div class="flex flex-col items-center text-center {className}" aria-hidden="true">
  <Emblem class="lockup-part {size === 'lg' ? 'mb-6 w-20 sm:w-24' : 'mb-4 w-12'}" />
  {#if showLeadIn}
    <span
      class="lockup-part font-serif uppercase {size === 'lg'
        ? 'mb-1 text-sm tracking-[0.42em] sm:text-base'
        : 'mb-0.5 text-[0.65rem] tracking-[0.4em]'}">Yoga with</span>
  {/if}
  <Wordmark class="lockup-part {width}" />
  <PersonalYoga class="lockup-part mt-3 {width}" />
  {#if showTagline}
    <Tagline class="lockup-part mt-5 {size === 'lg' ? 'w-[min(80%,19rem)]' : 'w-[min(80%,11rem)]'}" />
  {/if}
</div>

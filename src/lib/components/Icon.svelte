<!-- Fine line icons in the spirit of the brochure's botanical line art. -->
<script module lang="ts">
  export type IconName =
    | 'sprout'
    | 'lotus'
    | 'mail'
    | 'phone'
    | 'pin'
    | 'globe'
    | 'arrow'
    | 'menu'
    | 'close'
    // Therapeutic focus areas
    | 'spine'
    | 'shoulders'
    | 'tree-pose'
    | 'wind'
    | 'moon'
    | 'tree'
    // Breath benefits
    | 'lungs'
    | 'waves'
    | 'mind'
    | 'heart-pulse'
    | 'body'
    | 'stones';
</script>

<script lang="ts">
  let { name, class: className = 'h-5 w-5' }: { name: IconName; class?: string } = $props();
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.3"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  aria-hidden="true"
  focusable="false"
>
  {#if name === 'sprout'}
    <path d="M12 20.5V11" />
    <path d="M12 13.5c-3.6.2-6.3-2.2-6.6-6.1 3.7-.1 6.4 2.3 6.6 6.1Z" />
    <path d="M12 11c.1-3.7 2.6-6.3 6.6-6.5-.1 3.9-2.7 6.4-6.6 6.5Z" />
  {:else if name === 'lotus'}
    <path d="M12 4.5c2.1 2.6 2.1 7.4 0 11.5-2.1-4.1-2.1-8.9 0-11.5Z" />
    <path d="M12 16c-.9-3.6-3.3-6.6-7.2-7.6.1 4.2 2.8 7.2 7.2 7.6Z" />
    <path d="M12 16c.9-3.6 3.3-6.6 7.2-7.6-.1 4.2-2.8 7.2-7.2 7.6Z" />
    <path d="M10.2 16.4C7.4 16.3 4.4 15 2.5 13c2.2-.6 4.6-.2 6.6 1" />
    <path d="M13.8 16.4c2.8-.1 5.8-1.4 7.7-3.4-2.2-.6-4.6-.2-6.6 1" />
    <path d="M6 19c3.8 1.1 8.2 1.1 12 0" />
  {:else if name === 'spine'}
    <rect x="9.4" y="2.8" width="5.2" height="2.6" rx="1.3" />
    <rect x="9.9" y="6.6" width="5.2" height="2.6" rx="1.3" />
    <rect x="9.9" y="10.4" width="5.2" height="2.6" rx="1.3" />
    <rect x="9.4" y="14.2" width="5.2" height="2.6" rx="1.3" />
    <rect x="8.9" y="18" width="5.2" height="2.6" rx="1.3" />
    <path d="M8 4.1H6.6M17.6 7.9h-1.4M17.6 11.7h-1.4M8 15.5H6.6" />
  {:else if name === 'shoulders'}
    <circle cx="12" cy="6.5" r="3" />
    <path d="M10.6 9.4v2.4M13.4 9.4v2.4" />
    <path d="M4 20.5c0-3.8 2.9-6.6 6.4-7h3.2c3.5.4 6.4 3.2 6.4 7" />
    <path d="M3.6 12.6c.8-1 1.9-1.7 3.2-2M20.4 12.6c-.8-1-1.9-1.7-3.2-2" />
  {:else if name === 'tree-pose'}
    <circle cx="12" cy="6.2" r="1.7" />
    <path d="M12 8.4v6.4M12 14.8l-.4 5.7" />
    <path d="M12 14.8c1.9.2 3.1 1 3.1 1.9 0 .8-1.2 1.3-3 1.3" />
    <path d="M12 9.6 8.9 6.3 9.6 2.8M12 9.6l3.1-3.3-.7-3.5" />
    <path d="M8.5 21h7" />
  {:else if name === 'wind'}
    <path d="M3 9.5h10.5a2.5 2.5 0 1 0-2.4-3.2" />
    <path d="M3 13.5h14.5a2.5 2.5 0 1 1-2.4 3.2" />
    <path d="M3 17.5h6.5" />
  {:else if name === 'moon'}
    <path d="M14.5 3.6a8.5 8.5 0 1 0 6 14.2 7 7 0 0 1-6-14.2Z" />
    <path d="M18.3 4.2v2.6M17 5.5h2.6" />
  {:else if name === 'tree'}
    <path d="M12 21v-8" />
    <path d="M12 14c-3.6 0-6.5-2.6-6.5-5.8S8.4 2.5 12 2.5s6.5 2.5 6.5 5.7S15.6 14 12 14Z" />
    <path d="m12 11.4-2.4-2M12 10l2.2-1.8" />
    <path d="M8 21h8" />
  {:else if name === 'lungs'}
    <path d="M12 3.5v7" />
    <path d="M12 8.8c-.7 1.3-1.6 2-2.8 2.4M12 8.8c.7 1.3 1.6 2 2.8 2.4" />
    <path d="M9.5 6.8C7 7.3 4.5 11 4.5 16c0 2.3 1 3.5 2.8 3.5 1.7 0 2.7-1.2 2.7-3.5V7.3a.5.5 0 0 0-.5-.5Z" />
    <path d="M14.5 6.8c2.5.5 5 4.2 5 9.2 0 2.3-1 3.5-2.8 3.5-1.7 0-2.7-1.2-2.7-3.5V7.3a.5.5 0 0 1 .5-.5Z" />
  {:else if name === 'waves'}
    <path d="M3 8c1.5 0 1.5-1.4 3-1.4S7.5 8 9 8s1.5-1.4 3-1.4S13.5 8 15 8s1.5-1.4 3-1.4S19.5 8 21 8" />
    <path d="M3 12.5c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
    <path d="M3 17h18" />
  {:else if name === 'mind'}
    <path d="M15 21v-3.2h2a1.6 1.6 0 0 0 1.6-1.6v-2.4l1.6-.6-1.7-3.2A7.2 7.2 0 0 0 4.8 9.6c0 2.6 1.1 4.4 2.7 5.8V21" />
    <path d="M12.6 10.6a1.8 1.8 0 1 1-1.8-1.8 3 3 0 0 1 3 3" />
  {:else if name === 'heart-pulse'}
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20Z" />
    <path d="M6.8 12.6h2.6l1.3-2.2 1.7 4 1.3-1.8h3.5" />
  {:else if name === 'body'}
    <circle cx="12" cy="5" r="1.8" />
    <path d="M12 7.4v7.1M7.2 10.6 12 9.2l4.8 1.4M12 14.5l-2.4 6M12 14.5l2.4 6" />
    <path d="M5.2 5.2a9.5 9.5 0 0 0-1.6 5.6M18.8 5.2a9.5 9.5 0 0 1 1.6 5.6" />
  {:else if name === 'stones'}
    <ellipse cx="12" cy="18.6" rx="7" ry="2.4" />
    <ellipse cx="12" cy="13.6" rx="4.8" ry="2" />
    <ellipse cx="12" cy="9.3" rx="3.2" ry="1.6" />
    <ellipse cx="12" cy="5.6" rx="1.8" ry="1.2" />
  {:else if name === 'mail'}
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.8 7 8.2 6.2L20.2 7" />
  {:else if name === 'phone'}
    <path d="M6.7 3.5h2.5l1.5 4-2 1.3a11.3 11.3 0 0 0 6.5 6.5l1.3-2 4 1.5v2.5a2 2 0 0 1-2.2 2A17 17 0 0 1 4.7 5.7a2 2 0 0 1 2-2.2Z" />
  {:else if name === 'pin'}
    <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  {:else if name === 'globe'}
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.4 3.5 5.3 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.3-3.5-8.5S9.6 5.9 12 3.5Z" />
  {:else if name === 'arrow'}
    <path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5" />
  {:else if name === 'menu'}
    <path d="M4 8.5h16M4 15.5h16" />
  {:else if name === 'close'}
    <path d="m6 6 12 12M18 6 6 18" />
  {/if}
</svg>

<!-- Thin rule ending in a leafy sprig — the brochure's heading ornament. Mirror with `flip`. -->
<script lang="ts">
  let { flip = false, class: className = '' }: { flip?: boolean; class?: string } = $props();
</script>

<svg
  viewBox="0 0 72 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1"
  stroke-linecap="round"
  class="{className} {flip ? '-scale-x-100' : ''}"
  aria-hidden="true"
  focusable="false"
>
  <path d="M1 8h56" />
  <path d="M57 8c3.2-.2 6.4-2.4 8-6-3.6.2-6.8 2.4-8 6Z" />
  <path d="M57 8c3.2.2 6.4 2.4 8 6-3.6-.2-6.8-2.4-8-6Z" />
  <path d="M50 8c2.2-.3 4.3-1.9 5.2-4.4-2.5.3-4.6 1.9-5.2 4.4Z" />
  <path d="M50 8c2.2.3 4.3 1.9 5.2 4.4-2.5-.3-4.6-1.9-5.2-4.4Z" />
  <path d="M65 8h6" />
</svg>

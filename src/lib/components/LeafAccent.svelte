<!--
  Soft watercolour leaf branch lifted from the A5 brochure, used as a quiet
  decoration at the edge of a section. Purely decorative.
-->
<script lang="ts">
  import { asset } from '$app/paths';

  let {
    side = 'right',
    class: className = ''
  }: {
    /** Which edge the branch grows from (mirrors the artwork for `left`). */
    side?: 'left' | 'right';
    /** Positioning and size, e.g. `top-10 right-0 w-48`. */
    class?: string;
  } = $props();
</script>

<img
  src={asset('/images/decor/leaf-branch.webp')}
  alt=""
  aria-hidden="true"
  loading="lazy"
  decoding="async"
  width="288"
  height="880"
  class="leaf pointer-events-none absolute h-auto select-none {side === 'left' ? '-scale-x-100' : ''} {className}"
/>

<style>
  /* Override per use with e.g. `[--leaf-opacity:0.6]`. */
  .leaf {
    z-index: 0;
    opacity: var(--leaf-opacity, 0.75);
  }
</style>

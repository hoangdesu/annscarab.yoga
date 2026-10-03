<!-- Brochure prop illustration (blocks, bolster, strap, …). Colour follows `currentColor`. -->
<script lang="ts">
  import { propIcons, type PropIconName } from './brand/propIcons';

  let { name, class: className = '' }: { name: PropIconName; class?: string } = $props();

  const icon = $derived(propIcons[name]);
</script>

<svg viewBox={icon.viewBox} class={className} aria-hidden="true" focusable="false">
  <path fill="currentColor" fill-rule="evenodd" d={icon.d} />
</svg>

<!-- Hairline – lotus – hairline divider, as used between brochure sections. -->
<script lang="ts">
  import Icon from './Icon.svelte';

  let { class: className = '' }: { class?: string } = $props();
</script>

<div class="flex items-center justify-center gap-5 text-sage {className}" aria-hidden="true">
  <span class="h-px w-full max-w-40 bg-current opacity-50"></span>
  <Icon name="lotus" class="h-8 w-8 shrink-0 text-forest" />
  <span class="h-px w-full max-w-40 bg-current opacity-50"></span>
</div>

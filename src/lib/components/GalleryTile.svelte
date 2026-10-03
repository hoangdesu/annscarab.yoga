<!-- One gallery photo with a quiet caption. -->
<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { GalleryPhoto } from '$lib/content/images';
  import Photo from './Photo.svelte';

  let {
    photo,
    sizes,
    class: className = '',
    delay = 0
  }: { photo: GalleryPhoto; sizes: string; class?: string; delay?: number } = $props();
</script>

<figure use:reveal={delay} class="tile flex flex-col {className}">
  <div class="frame relative min-h-0 flex-1 overflow-hidden rounded-soft bg-linen">
    <Photo {photo} {sizes} />
  </div>
  <figcaption class="mt-3 flex items-baseline gap-3">
    <span class="eyebrow text-[0.68rem]">{photo.category}</span>
    <span class="font-display text-lg text-ink-muted italic">{photo.caption}</span>
  </figcaption>
</figure>

<style>
  .frame :global(img) {
    transition: transform 1.6s var(--ease-calm);
  }

  @media (prefers-reduced-motion: no-preference) {
    .tile:hover .frame :global(img) {
      transform: scale(1.03);
    }
  }
</style>

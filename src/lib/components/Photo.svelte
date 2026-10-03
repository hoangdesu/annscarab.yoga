<!-- Responsive photo (AVIF/WebP via enhanced-img) that fills its container. -->
<script lang="ts">
  import type { Photo } from '$lib/content/images';

  let {
    photo,
    sizes = '100vw',
    eager = false,
    class: className = ''
  }: {
    photo: Photo;
    sizes?: string;
    /** Load immediately — use only for the first visible image (the hero). */
    eager?: boolean;
    class?: string;
  } = $props();
</script>

<enhanced:img
  src={photo.src}
  alt={photo.alt}
  {sizes}
  loading={eager ? 'eager' : 'lazy'}
  fetchpriority={eager ? 'high' : 'auto'}
  decoding="async"
  class="photo block h-full w-full object-cover {className}"
  style:object-position={photo.position ?? '50% 50%'}
/>

<style>
  /* Slightly softened colour so phone photos sit calmly with the brochure palette. */
  .photo {
    filter: saturate(0.86) sepia(0.06) brightness(1.02);
  }
</style>

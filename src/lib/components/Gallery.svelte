<!--
  Editorial gallery: one featured photo with smaller supporting photos set
  slightly off-grid. Any further photos continue in a calm three-column row.
-->
<script lang="ts">
  import type { GalleryPhoto } from '$lib/content/images';
  import GalleryTile from './GalleryTile.svelte';

  let { photos }: { photos: GalleryPhoto[] } = $props();

  const [featured, ...rest] = $derived(photos);
</script>

<div class="gallery">
  {#if featured}
    <GalleryTile photo={featured} class="feature" sizes="(min-width: 1024px) 34rem, 100vw" />
  {/if}
  {#each rest as photo, i (photo.caption)}
    <GalleryTile
      {photo}
      class="tile-{i + 1}"
      delay={(i % 2) * 150}
      sizes="(min-width: 1024px) 17rem, 50vw"
    />
  {/each}
</div>

<style>
  /* Mobile first: feature across the top, supporting photos two to a row beneath. */
  .gallery {
    display: grid;
    gap: 1.75rem 0.875rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery :global(.feature) {
    grid-column: 1 / -1;
  }

  .gallery :global(.feature .frame) {
    aspect-ratio: 4 / 3;
  }

  .gallery :global(.tile:not(.feature) .frame) {
    aspect-ratio: 3 / 4;
  }

  @media (min-width: 640px) {
    .gallery {
      gap: 2.5rem 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    .gallery {
      grid-template-columns: repeat(12, 1fr);
      gap: 3rem 1.75rem;
      align-items: start;
    }

    .gallery :global(.tile) {
      grid-column: span 4;
    }

    .gallery :global(.feature) {
      grid-column: 1 / span 6;
    }

    .gallery :global(.feature .frame) {
      aspect-ratio: 4 / 3;
    }

    /* The two supporting photos step down gently beside the feature. */
    .gallery :global(.tile-1) {
      grid-column: 7 / span 3;
      margin-top: 3rem;
    }

    .gallery :global(.tile-2) {
      grid-column: 10 / span 3;
      margin-top: 6rem;
    }

    .gallery :global(.tile-3),
    .gallery :global(.tile-3 ~ .tile) {
      margin-top: 0;
    }

    .gallery :global(.tile-3 .frame),
    .gallery :global(.tile-3 ~ .tile .frame) {
      aspect-ratio: 4 / 3;
    }
  }
</style>

<!-- Page title, description, canonical URL and social-sharing tags. -->
<script lang="ts">
  import { site } from '$lib/content/site';

  let {
    title = site.name,
    description = site.description,
    path = '/'
  }: { title?: string; description?: string; path?: string } = $props();

  const url = $derived(new URL(path, site.url).href);
  const image = new URL(site.ogImage, site.url).href;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>

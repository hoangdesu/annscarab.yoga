<script lang="ts">
  import { resolve } from '$app/paths';
  import { reveal } from '$lib/actions/reveal';
  import { about, aboutStory } from '$lib/content/site';
  import { images } from '$lib/content/images';
  import Seo from '$lib/components/Seo.svelte';
  import Photo from '$lib/components/Photo.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import LotusDivider from '$lib/components/LotusDivider.svelte';
  import Button from '$lib/components/Button.svelte';
  import Icon from '$lib/components/Icon.svelte';
</script>

<Seo
  title="About Ann | Yoga with Ann Scarab"
  description="Meet Ann Scarab — a Yoga Alliance–trained teacher of balanced restorative yoga, focused on breath, the spine and balance."
  path="/about"
/>

<section class="sunlit pt-36 pb-20 md:pt-44 md:pb-28" aria-labelledby="about-page-title" style="--sun-x: 10%; --sun-y: 0%;">
  <div class="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
    <div class="lg:col-span-6">
      <SectionHeading level={1} eyebrow="About Ann" title={about.heading} id="about-page-title" />
      <div use:reveal={150} class="prose-calm mt-8 text-lg sm:text-xl">
        <p class="font-display text-[1.75rem] leading-snug text-forest italic sm:text-3xl">{about.lead}</p>
        {#each aboutStory.intro as paragraph, i (i)}
          <p class="text-ink-muted">{paragraph}</p>
        {/each}
      </div>
      <ul use:reveal={250} class="mt-9 space-y-3 border-t border-line pt-8">
        {#each about.credentials as item (item)}
          <li class="flex items-start gap-3 text-[1.0625rem]">
            <Icon name="sprout" class="mt-1 h-5 w-5 shrink-0 text-sage-deep" />
            <span>{item}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div use:reveal class="lg:col-span-6">
      <div class="mx-auto aspect-4/5 max-w-md overflow-hidden rounded-panel">
        <Photo photo={images.aboutPage} eager sizes="(min-width: 1024px) 28rem, 100vw" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-mist" aria-labelledby="approach-title">
  <div class="container-page">
    <SectionHeading title={aboutStory.approachHeading} id="approach-title" align="center" style="caps" />
    <LotusDivider class="mt-10" />
    <div use:reveal class="prose-calm mx-auto mt-12 max-w-2xl text-lg text-ink-muted sm:text-xl">
      {#each aboutStory.approach as paragraph, i (i)}
        <p>{paragraph}</p>
      {/each}
    </div>
    <p use:reveal class="mx-auto mt-12 max-w-2xl border-t border-forest/15 pt-10 text-center font-display text-2xl leading-snug text-forest italic sm:text-[1.75rem]">
      {aboutStory.whoFor}
    </p>
  </div>
</section>

<section class="section" aria-labelledby="about-cta-title">
  <div class="container-page text-center">
    <SectionHeading
      title="Begin your practice"
      intro="Every session is shaped around you. Reach out and Ann will help you take the first gentle step."
      id="about-cta-title"
      align="center"
    />
    <div use:reveal={150} class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button href="{resolve('/')}#contact">Book Your Class</Button>
      <Button href="{resolve('/')}#classes" variant="secondary">Explore Classes</Button>
    </div>
  </div>
</section>

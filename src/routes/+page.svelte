<!--
  Homepage — a calm journey:
  Ann → Breath → Therapeutic Yoga → Why Breath Matters → Classes → Gallery → Contact
-->
<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { reveal } from '$lib/actions/reveal';
  import {
    about,
    benefits,
    breath,
    classes,
    contact,
    contactSection,
    gallery,
    mapsLink,
    site,
    therapeutic
  } from '$lib/content/site';
  import { galleryPhotos, images } from '$lib/content/images';
  import Seo from '$lib/components/Seo.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Photo from '$lib/components/Photo.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import ClassCard from '$lib/components/ClassCard.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import ContactBlock from '$lib/components/ContactBlock.svelte';
  import LotusDivider from '$lib/components/LotusDivider.svelte';
  import Button from '$lib/components/Button.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import PropIcon from '$lib/components/PropIcon.svelte';

  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(site.ogImage, site.url).href,
    email: contact.email,
    telephone: '+1-470-564-9727',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.addressLines[0],
      addressLocality: 'Ellijay',
      addressRegion: 'GA',
      postalCode: '30536',
      addressCountry: 'US'
    }
  };
</script>

<Seo />

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<Hero />

<!-- ───────── About Ann ───────── -->
<section id="about" class="section bg-paper" aria-labelledby="about-title">
  <div class="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
    <div use:reveal class="lg:col-span-6">
      <div class="aspect-4/3 overflow-hidden rounded-panel">
        <Photo photo={images.about} sizes="(min-width: 1024px) 48vw, 100vw" />
      </div>
    </div>

    <div class="lg:col-span-6">
      <SectionHeading eyebrow="Meet Ann" title={about.heading} id="about-title" />
      <div use:reveal={150} class="prose-calm mt-8 text-lg sm:text-xl">
        <p class="font-display text-[1.75rem] leading-snug text-forest italic sm:text-3xl">{about.lead}</p>
        {#each about.body as paragraph, i (i)}
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
      <div use:reveal={300} class="mt-10">
        <Button href={resolve('/about')} variant="text">
          Read Ann's story <Icon name="arrow" class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- ───────── Breath is the First Medicine ───────── -->
<section id="breath" class="section sunlit" aria-labelledby="breath-title" style="--sun-x: 25%; --sun-y: 0%;">
  <div class="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
    <div use:reveal class="lg:order-2 lg:col-span-5">
      <div class="mx-auto aspect-4/5 max-w-md overflow-hidden rounded-panel lg:max-w-none">
        <Photo photo={images.breath} sizes="(min-width: 1024px) 38vw, 28rem" />
      </div>
    </div>

    <div class="lg:order-1 lg:col-span-7">
      <div use:reveal class="breath-orb mb-10" aria-hidden="true"><span></span></div>
      <SectionHeading eyebrow="Breath" title={breath.heading} id="breath-title" />
      <div use:reveal={150} class="prose-calm mt-8 text-lg sm:text-xl">
        <p class="font-display text-[1.75rem] leading-snug text-forest italic sm:text-3xl">{breath.lead}</p>
        {#each breath.body as paragraph, i (i)}
          <p class="text-ink-muted">{paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- ───────── Therapeutic Yoga ───────── -->
<section id="therapeutic-yoga" class="section bg-mist" aria-labelledby="therapeutic-title">
  <div class="container-page relative">
    <SectionHeading
      eyebrow="Gentle, supported practice"
      title={therapeutic.heading}
      intro={therapeutic.intro}
      id="therapeutic-title"
      align="center"
    />

    <div class="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
      <div use:reveal class="lg:col-span-5">
        <div class="aspect-4/3 overflow-hidden rounded-panel lg:sticky lg:top-28 lg:aspect-5/6">
          <Photo photo={images.therapeutic} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:col-span-7">
        {#each therapeutic.services as service, i (service.title)}
          <ServiceCard {...service} delay={(i % 2) * 120} />
        {/each}
      </div>
    </div>

    <p use:reveal class="mx-auto mt-14 max-w-2xl text-center font-sans text-sm leading-relaxed text-ink-muted">
      {therapeutic.note}
    </p>
  </div>
</section>

<!-- ───────── Why Breath Matters ───────── -->
<section id="why-breath" class="section sunlit" aria-labelledby="why-breath-title" style="--sun-x: 90%; --sun-y: 20%;">
  <div class="container-page">
    <SectionHeading eyebrow="Everyday well-being" title={benefits.heading} intro={benefits.intro} id="why-breath-title" />

    <ul class="mt-16 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
      {#each benefits.items as item, i (item.title)}
        <li use:reveal={(i % 3) * 120} class="border-t border-line py-8">
          <Icon name={item.icon ?? 'sprout'} class="mb-4 h-10 w-10 text-sage-deep" />
          <h3 class="text-[1.7rem]">{item.title}</h3>
          <p class="mt-3 text-[1.0625rem] text-ink-muted">{item.description}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- ───────── Classes ───────── -->
<section id="classes" class="section bg-linen" aria-labelledby="classes-title">
  <div class="container-page">
    <SectionHeading
      eyebrow="Classes"
      title={classes.heading}
      intro={classes.intro}
      id="classes-title"
      align="center"
      style="caps"
    />
    <LotusDivider class="mt-12" />

    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each classes.items as item, i (item.title)}
        <ClassCard {...item} index={i} delay={(i % 3) * 120} />
      {/each}
    </div>

    <!-- Focus areas, beside the watercolour lotus from the brochure -->
    <div use:reveal class="lotus-panel mt-16 grid items-center gap-6 rounded-panel px-6 py-10 sm:px-10 md:grid-cols-2 md:gap-10 md:py-12">
      <img
        src={asset('/images/decor/lotus-pond.webp')}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width="517"
        height="700"
        class="mx-auto w-40 sm:w-52 md:order-2 md:w-64"
      />
      <div class="text-center md:order-1 md:text-left">
        <h3 class="caps-heading text-xl sm:text-2xl">{classes.focusHeading}</h3>
        <ul class="mt-6 inline-grid gap-3 text-left">
          {#each classes.focus as item (item)}
            <li class="flex items-center gap-3 text-lg">
              <Icon name="sprout" class="h-[1.1rem] w-[1.1rem] shrink-0 text-sage-deep" />{item}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <LotusDivider class="mt-16" />

    <!-- Supportive props, drawn from the brochure -->
    <div use:reveal class="mt-16">
      <div class="mx-auto max-w-2xl text-center">
        <h3 class="caps-heading text-xl sm:text-2xl">{classes.propsHeading}</h3>
        <p class="mt-4 text-lg text-ink-muted">{classes.propsIntro}</p>
      </div>
      <ul class="props mt-10 grid grid-cols-2 overflow-hidden rounded-panel border border-forest/10 sm:grid-cols-4 lg:grid-cols-8">
        {#each classes.props as prop (prop.icon)}
          <li class="prop flex flex-col items-center px-3 py-8 text-center">
            <PropIcon name={prop.icon} class="prop-icon h-14 w-auto max-w-[5.5rem] text-forest" />
            <span class="mt-4 text-base leading-snug">{prop.label}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- ───────── Gallery ───────── -->
<section id="gallery" class="section" aria-labelledby="gallery-title">
  <div class="container-page">
    <SectionHeading eyebrow="Forest · Flowers · Practice" title={gallery.heading} intro={gallery.intro} id="gallery-title" />
    <div class="mt-14 lg:mt-20">
      <Gallery photos={galleryPhotos} />
    </div>
  </div>
</section>

<!-- ───────── Contact / Booking ───────── -->
<section id="contact" class="section bg-paper" aria-labelledby="contact-title">
  <div class="container-page relative grid gap-14 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-7">
      <SectionHeading eyebrow="Contact & booking" title={contactSection.heading} intro={contactSection.intro} id="contact-title" />
      <div use:reveal={150} class="mt-10">
        <ContactForm />
      </div>
    </div>

    <div use:reveal={200} class="lg:col-span-5">
      <div class="overflow-hidden rounded-panel border border-forest/10 bg-linen">
        <iframe
          class="block aspect-4/3 w-full"
          src={mapsEmbed}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map showing {contact.address}"
        ></iframe>
      </div>
      <a
        href={mapsLink}
        target="_blank"
        rel="noreferrer"
        class="mt-2 inline-flex min-h-11 items-center gap-2 font-sans text-xs tracking-[0.2em] text-forest uppercase underline-offset-4 hover:underline"
        >Open in Google Maps <Icon name="arrow" class="h-4 w-4" /></a
      >

      <div class="mt-10 border-t border-line pt-10">
        <ContactBlock />
      </div>

      <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs tracking-[0.18em] text-sage-deep uppercase">
        {#each contact.sessions as item (item)}
          <li class="flex items-center gap-2"><Icon name="sprout" class="h-4 w-4" />{item}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  /* Hairline grid between the prop illustrations, like the brochure panel. */
  .props {
    gap: 1px;
    background: rgb(44 74 37 / 0.1);
  }

  .prop {
    background: var(--color-linen);
    cursor: default;
    transition: background-color 0.6s var(--ease-calm);
  }

  .prop :global(.prop-icon) {
    transition: transform 0.6s var(--ease-calm);
  }

  /* A barely-there tint and lift as the pointer rests on a prop. */
  .prop:hover {
    background: #f3ede2;
  }

  @media (prefers-reduced-motion: no-preference) {
    .prop:hover :global(.prop-icon) {
      transform: translateY(-2px) scale(1.04);
    }
  }

  /* Soft cream wash behind the lotus, like the brochure's pond panel. */
  .lotus-panel {
    background: radial-gradient(120% 90% at 75% 50%, rgb(232 234 220 / 0.85), rgb(248 244 235 / 0.4) 70%);
  }

  /* A small circle that slowly expands and settles, at the pace of a calm breath. */
  .breath-orb {
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
  }

  .breath-orb span {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    border: 1px solid rgb(92 108 72 / 0.5);
    background: radial-gradient(circle, rgb(243 227 189 / 0.9), rgb(201 209 181 / 0.35) 70%);
  }

  @media (prefers-reduced-motion: no-preference) {
    .breath-orb span {
      animation: breathe 10s ease-in-out infinite;
    }
  }

  @keyframes breathe {
    0%,
    100% {
      transform: scale(0.7);
      opacity: 0.7;
    }
    45%,
    55% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>

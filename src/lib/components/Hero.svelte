<!--
  Opening scene: Ann's photo fades softly into the cream "paper", echoing the
  brochure, with the logo lockup resting on the cream side and a watercolour
  branch growing in from the left edge.
-->
<script lang="ts">
  import { resolve } from '$app/paths';
  import { hero } from '$lib/content/site';
  import { images } from '$lib/content/images';
  import LogoLockup from './LogoLockup.svelte';
  import LeafAccent from './LeafAccent.svelte';
  import Photo from './Photo.svelte';
  import Button from './Button.svelte';

  const home = resolve('/');
</script>

<section class="hero sunlit relative overflow-hidden" aria-labelledby="hero-title" style="--sun-x: 15%; --sun-y: 10%;">
  <div class="hero-media">
    <Photo photo={images.hero} eager sizes="(min-width: 1024px) 54vw, 100vw" />
  </div>

  <LeafAccent side="left" class="hero-leaf left-0 w-20 [--leaf-opacity:0.45] sm:w-32 sm:[--leaf-opacity:0.65] lg:w-40" />

  <div class="container-page relative">
    <div class="hero-content">
      <h1 id="hero-title" class="sr-only">Yoga with Ann Scarab</h1>
      <LogoLockup class="text-forest" />
      <p class="sr-only">Breathe • Move • Heal</p>

      <p class="hero-fade mx-auto mt-8 max-w-md text-center text-lg text-ink-muted sm:text-xl" style="--i: 6">
        {hero.intro}
      </p>

      <div class="hero-fade mx-auto mt-10 flex max-w-xs flex-col justify-center gap-4 sm:max-w-none sm:flex-row" style="--i: 7">
        <Button href="{home}#contact">Book a Class</Button>
        <Button href="{home}#about" variant="secondary">Learn More</Button>
      </div>
    </div>
  </div>
</section>

<style>
  /* Mobile first: photo on top, lockup beneath it. */
  .hero {
    display: flex;
    flex-direction: column;
  }

  .hero-media {
    position: relative;
    height: 58svh;
    min-height: 22rem;
    max-height: 34rem;
    overflow: hidden;
    /* The sky dissolves into cream behind the navbar, so the photo never meets it head-on. */
    mask-image: linear-gradient(to bottom, transparent 0%, #000 22%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    padding-top: 2.5rem;
    padding-bottom: 4.5rem;
  }

  /* The branch peeks in from the left, beside the lockup. */
  .hero :global(.hero-leaf) {
    top: min(calc(58svh - 2rem), 32rem);
  }

  @media (min-width: 1024px) {
    .hero {
      flex-direction: row;
      align-items: center;
      /* Capped so the lockup sits close under the navbar on tall screens. */
      min-height: min(100svh, 48rem);
    }

    .hero-media {
      position: absolute;
      inset: 0 0 0 auto;
      width: 54%;
      height: 100%;
      max-height: none;
      /*
       * Two fades, intersected: a long, gentle fade on the left so the lockup always
       * sits on clear cream, and a short one at the top so the sky melts away
       * behind the navbar.
       */
      mask-image:
        linear-gradient(to right, transparent 0%, transparent 4%, rgb(0 0 0 / 0.55) 24%, #000 44%),
        linear-gradient(to bottom, transparent 0%, #000 20%);
      -webkit-mask-image:
        linear-gradient(to right, transparent 0%, transparent 4%, rgb(0 0 0 / 0.55) 24%, #000 44%),
        linear-gradient(to bottom, transparent 0%, #000 20%);
      mask-composite: intersect;
      -webkit-mask-composite: source-in;
    }

    .hero-content {
      width: 46%;
      max-width: 33rem;
      padding-block: 7rem 4rem;
    }

    .hero :global(.hero-leaf) {
      top: auto;
      bottom: 1.5rem;
    }
  }

  /* Very slow settle of the photo and a soft fade of the lockup on arrival. */
  @media (prefers-reduced-motion: no-preference) {
    .hero-media :global(img) {
      animation: settle 22s var(--ease-calm) both;
    }

    .hero-content :global(.lockup-part),
    .hero-fade {
      animation: soft-in 1.6s var(--ease-calm) both;
    }

    .hero-content :global(.lockup-part:nth-child(1)) { animation-delay: 0.1s; }
    .hero-content :global(.lockup-part:nth-child(2)) { animation-delay: 0.35s; }
    .hero-content :global(.lockup-part:nth-child(3)) { animation-delay: 0.5s; }
    .hero-content :global(.lockup-part:nth-child(4)) { animation-delay: 0.7s; }
    .hero-content :global(.lockup-part:nth-child(5)) { animation-delay: 0.95s; }

    .hero-fade {
      animation-delay: calc(var(--i) * 0.18s);
    }
  }

  @keyframes settle {
    from { transform: scale(1.07); }
    to { transform: scale(1); }
  }

  @keyframes soft-in {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
  }
</style>

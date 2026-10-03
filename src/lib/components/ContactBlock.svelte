<!-- Contact details list. Only information Ann has supplied is shown. -->
<script lang="ts">
  import { contact, mapsLink } from '$lib/content/site';
  import Icon from './Icon.svelte';

  let { tone = 'light' }: { tone?: 'light' | 'dark' } = $props();
</script>

<ul class="contact-list space-y-5 {tone}">
  <li>
    <span class="badge"><Icon name="phone" class="h-[1.1rem] w-[1.1rem]" /></span>
    <a href={contact.phoneHref}><span class="sr-only">Phone: </span>{contact.phoneDisplay}</a>
  </li>
  <li>
    <span class="badge"><Icon name="mail" class="h-[1.1rem] w-[1.1rem]" /></span>
    <a href="mailto:{contact.email}"><span class="sr-only">Email: </span>{contact.email}</a>
  </li>
  <li>
    <span class="badge"><Icon name="pin" class="h-[1.1rem] w-[1.1rem]" /></span>
    <a href={mapsLink} target="_blank" rel="noreferrer">
      <span class="sr-only">Address (opens Google Maps): </span>
      {contact.addressLines[0]}<br />{contact.addressLines[1]}
    </a>
  </li>
  {#each contact.social as profile (profile.href)}
    <li>
      <span class="badge"><Icon name="globe" class="h-[1.1rem] w-[1.1rem]" /></span>
      <a href={profile.href} target="_blank" rel="noreferrer">{profile.label}</a>
    </li>
  {/each}
</ul>

<style>
  li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .badge {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.35rem;
    border-radius: 999px;
  }

  a {
    display: inline-block;
    min-height: 2.75rem;
    padding-top: 0.5rem;
    margin-top: -0.5rem;
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 0.3em;
    transition: text-decoration-color 0.4s var(--ease-calm);
    overflow-wrap: anywhere;
  }

  a:hover {
    text-decoration-color: currentColor;
  }

  .light .badge {
    background: var(--color-forest);
    color: var(--color-on-forest);
  }

  .light a {
    color: var(--color-ink);
  }

  .dark .badge {
    border: 1px solid rgb(243 239 228 / 0.35);
    color: var(--color-on-forest);
  }

  .dark a {
    color: var(--color-on-forest);
  }
</style>

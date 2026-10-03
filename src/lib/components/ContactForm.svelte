<!--
  Booking / enquiry form. Sends through Web3Forms (see `contactForm` in site.ts),
  which emails each submission to Ann. Until an access key is configured the form
  opens the visitor's email app with the message pre-filled instead.
-->
<script lang="ts">
  import { booking } from '$lib/booking.svelte';
  import { classes, contact, contactForm } from '$lib/content/site';
  import Icon from './Icon.svelte';

  type Status = 'idle' | 'sending' | 'sent' | 'error';

  let status: Status = $state('idle');
  let form: HTMLFormElement | undefined = $state();

  const interests = [...classes.items.map((item) => item.title), contactForm.notSureOption];

  function fieldsOf(data: FormData) {
    return {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      interest: String(data.get('interest') ?? ''),
      message: String(data.get('message') ?? '').trim()
    };
  }

  /** Fallback while no Web3Forms key is configured: hand off to the visitor's email app. */
  function openEmailApp(fields: ReturnType<typeof fieldsOf>) {
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone && `Phone: ${fields.phone}`,
      fields.interest && `Interested in: ${fields.interest}`,
      '',
      fields.message
    ]
      .filter((line) => line !== '' && line !== undefined)
      .join('\n');
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(body)}`;
  }

  async function onsubmit(event: SubmitEvent) {
    event.preventDefault();
    if (!form || status === 'sending') return;

    const data = new FormData(form);
    // Honeypot: real visitors never see or tick this box.
    if (data.get('botcheck')) return;

    const fields = fieldsOf(data);

    if (!contactForm.accessKey) {
      openEmailApp(fields);
      return;
    }

    status = 'sending';
    try {
      const response = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: contactForm.subject,
          from_name: 'Yoga with Ann Scarab website',
          ...fields
        })
      });
      const result = await response.json().catch(() => ({ success: false }));
      if (!response.ok || !result.success) throw new Error('Submission failed');

      status = 'sent';
      form.reset();
      booking.interest = '';
    } catch {
      status = 'error';
    }
  }
</script>

{#if status === 'sent'}
  <div class="sent rounded-panel border border-forest/15 bg-cream p-8 sm:p-10" role="status">
    <Icon name="lotus" class="h-10 w-10 text-forest" />
    <h3 class="mt-5 text-3xl">Thank you</h3>
    <p class="mt-3 text-lg text-ink-muted">
      Your message is on its way to Ann. She will be in touch soon to find a time that works for you.
    </p>
    <button type="button" class="link mt-6" onclick={() => (status = 'idle')}>Send another message</button>
  </div>
{:else}
  <form bind:this={form} {onsubmit} class="space-y-6">
    <div class="grid gap-6 sm:grid-cols-2">
      <div class="field sm:col-span-2">
        <label for="cf-name">Your name</label>
        <input id="cf-name" name="name" type="text" autocomplete="name" required />
      </div>

      <div class="field">
        <label for="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" autocomplete="email" required />
      </div>

      <div class="field">
        <label for="cf-phone">Phone <span class="optional">(optional)</span></label>
        <input id="cf-phone" name="phone" type="tel" autocomplete="tel" />
      </div>

      <div class="field sm:col-span-2">
        <label for="cf-interest">I'm interested in</label>
        <div class="select-wrap">
          <select id="cf-interest" name="interest" bind:value={booking.interest}>
            <option value="">Choose a class…</option>
            {#each interests as interest (interest)}
              <option value={interest}>{interest}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="field sm:col-span-2">
        <label for="cf-message">Message <span class="optional">(optional)</span></label>
        <textarea
          id="cf-message"
          name="message"
          rows="4"
          placeholder="Anything Ann should know: goals, injuries, or whether you'd prefer online or in person."
        ></textarea>
      </div>
    </div>

    <!-- Honeypot field for spam bots; hidden from people and assistive tech. -->
    <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

    <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <button type="submit" class="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p class="text-sm text-ink-muted">
        Prefer to talk? Call <a class="link inline-block py-3" href={contact.phoneHref}>{contact.phoneDisplay}</a>
      </p>
    </div>

    <p aria-live="polite" class="text-base text-[#8a3b2b]">
      {#if status === 'error'}
        Sorry, something went wrong sending your message. Please try again, or email
        <a class="link" href="mailto:{contact.email}">{contact.email}</a>.
      {/if}
    </p>
  </form>
{/if}

<style>
  .field label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: var(--font-sans);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-sage-deep);
  }

  .optional {
    text-transform: none;
    letter-spacing: 0.02em;
    color: var(--color-ink-muted);
    font-weight: 400;
  }

  input,
  select,
  textarea {
    width: 100%;
    min-height: 3.25rem;
    padding: 0.8rem 1rem;
    border: 1px solid var(--color-line);
    border-radius: var(--radius-soft);
    background: var(--color-cream);
    color: var(--color-ink);
    font: inherit;
    font-size: 1.0625rem;
    transition:
      border-color 0.4s var(--ease-calm),
      box-shadow 0.4s var(--ease-calm),
      background-color 0.4s var(--ease-calm);
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }

  textarea::placeholder {
    color: rgb(86 93 77 / 0.7);
  }

  input:hover,
  select:hover,
  textarea:hover {
    border-color: rgb(44 74 37 / 0.35);
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color-forest);
    background: var(--color-paper);
    box-shadow: 0 0 0 3px rgb(44 74 37 / 0.12);
  }

  /* Only flag invalid fields once the visitor has interacted with them. */
  input:user-invalid {
    border-color: #a34a35;
  }

  .select-wrap {
    position: relative;
  }

  .select-wrap::after {
    content: '';
    position: absolute;
    right: 1.1rem;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-right: 1.5px solid var(--color-forest);
    border-bottom: 1.5px solid var(--color-forest);
    transform: translateY(-70%) rotate(45deg);
    pointer-events: none;
  }

  select {
    appearance: none;
    padding-right: 2.75rem;
  }

  .submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.25rem;
    padding: 0.85rem 2.2rem;
    border-radius: 999px;
    background: var(--color-forest);
    color: var(--color-on-forest);
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition:
      background-color 0.5s var(--ease-calm),
      box-shadow 0.5s var(--ease-calm);
  }

  .submit:hover {
    background: var(--color-forest-deep);
    box-shadow: 0 12px 30px -16px rgb(31 52 25 / 0.55);
  }

  .submit:disabled {
    opacity: 0.7;
    cursor: progress;
  }

  .link {
    color: var(--color-forest);
    text-decoration: underline;
    text-decoration-color: rgb(44 74 37 / 0.35);
    text-underline-offset: 0.25em;
    cursor: pointer;
  }

  .link:hover {
    text-decoration-color: currentColor;
  }

  .sent {
    animation: sent-in 0.8s var(--ease-calm);
  }

  @keyframes sent-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: none; }
  }
</style>

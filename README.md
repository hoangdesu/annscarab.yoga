# Yoga with Ann Scarab

Website for Ann Scarab's yoga practice — built with SvelteKit (static adapter) and Tailwind CSS v4, deployed to GitHub Pages at [annscarab.yoga](https://annscarab.yoga).

## Development

```bash
pnpm install
pnpm dev
```

> **Note**: The application is configured to run on **port 2203**, which is special because it's my mom's birthday! 🎂

## Updating content

| What | Where |
| --- | --- |
| Text, classes, therapeutic topics, contact details, social links | `src/lib/content/site.ts` |
| Which photo appears where (+ alt text) | `src/lib/content/images.ts` |
| Photo files | `src/lib/assets/photos/` (resized to AVIF/WebP automatically at build; stock credits in `CREDITS.md`) |
| Brand colours & fonts | `src/app.css` (`@theme`) |
| Logo (vector, traced from the A5 brochure) | `src/lib/components/brand/` |

## Contact form

The form sends through [Web3Forms](https://web3forms.com) (free: 250 submissions/month, no backend).

1. Go to web3forms.com, enter **annscarab@gmail.com**, and copy the access key from the email.
2. Paste it into `contactForm.accessKey` in `src/lib/content/site.ts`, then commit and push.

Until a key is set, submitting the form opens the visitor's email app with their message pre-filled.

## Deploying

Pushing to `main` runs `.github/workflows/ci.yml`: type check, static build, deploy to GitHub Pages. The custom domain comes from `static/CNAME`.

The A5 brochure and website spec live in `assets/Oct 2026 docs/`. See `design.md` for the design system.

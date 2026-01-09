# Maintenance Guide

## Content updates
- **Blog posts (MDX):**
  - Add MDX files under `content/blog/`.
  - Include frontmatter: `title`, `description`, `date`, `readingTime`, `tags`, `coverImage`.
  - Slug is derived from filename.
- **Case studies:**
  - Data in `src/lib/data/case-studies.ts` and helpers in `src/lib/case-studies.ts`.
  - Update titles, metrics, and links; ensure slugs stay unique.
- **Navigation/footer:**
  - Update links in `src/lib/constants.ts` (`navItems`, `FOOTER_LINK_GROUPS`).
- **Team/info:**
  - Company/contact defaults in `src/lib/constants.ts` or via env vars (CONTACT_EMAIL, etc.).

## Forms & email
- Contact/Demo/Newsletter use Resend via `src/lib/resend.ts`.
- Templates live in `src/components/emails/`.
- If Resend is unconfigured, requests are accepted with `skipped: true` (202 response); set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` to enable delivery.

## Running locally
```bash
npm install
npm run dev
```
- Type check: `npx tsc --noEmit`
- Lint: `npm run lint`
- Prod build: `npm run build` then `npm run start`

## Performance & accessibility
- Use Lighthouse/axe for periodic audits (target Perf 90+, A11y 95+).
- Avoid adding blocking fonts/scripts; prefer `next/font` and dynamic imports when possible.
- Maintain semantic headings and focus-visible states; keep contrast ≥ WCAG 2.1 AA.

## Dependencies
- Keep Next.js, React, and Tailwind up to date.
- When bumping dependencies, run `npm run build` and `npx tsc --noEmit`.

## Backups & rollback
- Code is versioned in Git; use Vercel deployment history to roll back.
- Rotate secrets if a leak is suspected; remove old keys from Vercel.

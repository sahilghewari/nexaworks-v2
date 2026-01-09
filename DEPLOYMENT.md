# Deployment Guide

## Prerequisites
- Vercel account with access to the repository
- Production environment variables (see `.env.production` for required keys)
- Resend domain verified for production sending

## One-time setup
1. Connect the GitHub repo to Vercel and select the Next.js framework.
2. Configure environment variables in Vercel (Project Settings → Environment Variables):
   - NEXT_PUBLIC_SITE_URL
   - NEXT_PUBLIC_GA_MEASUREMENT_ID
   - NEXT_PUBLIC_VERCEL_ANALYTICS_ID (optional)
   - RESEND_API_KEY
   - RESEND_FROM_EMAIL
   - CONTACT_EMAIL / SUPPORT_EMAIL / CONTACT_PHONE / COMPANY_ADDRESS (and their NEXT_PUBLIC_* counterparts if needed)
3. Build settings: Build command `npm run build`, Output directory `.next`.
4. Protect secrets: do not commit keys; rotate if leaked.

## Deploy flow
1. Push to a branch; Vercel creates a Preview deployment automatically.
2. Validate the Preview:
   - `npm run build` locally (should be clean), then `npm run start` to spot SSR issues.
   - Check pages, navigation, modals, and forms; ensure emails send or are skipped gracefully.
   - Run Lighthouse in Chrome DevTools (target Perf 90+, A11y 95+, BP 95+, SEO 100).
3. When approved, merge to `main`; Vercel will build Production.
4. After production deploy:
   - Smoke test https://nexaworks.tech
   - Submit a test contact/demo form and confirm email delivery (Resend dashboard or inbox).
   - Verify analytics events in GA and Vercel Analytics.

## Rollback
- Use Vercel dashboard → Deployments → Promote a previous healthy deployment to Production.
- If env/secrets were changed, ensure they match the rollback state.

## Domain
- Add domain `nexaworks.tech` in Vercel; update DNS per Vercel instructions.
- SSL is automatic once DNS is correct.

## Monitoring
- Vercel Analytics for performance and traffic.
- Resend logs for email delivery.
- Optional: add Sentry for client/runtime errors and UptimeRobot/Pingdom for uptime.

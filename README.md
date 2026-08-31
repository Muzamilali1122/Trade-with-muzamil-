# Trade With Muzamil — Foundation (Step 1)

This is the foundation layer from the master prompt: Next.js 14 (App Router) +
TypeScript + Tailwind, the design system, navigation, footer, and a real
homepage. Every other section from the prompt (AI Tools, Education, Dashboard,
Command Center, Admin, etc.) links to a `Coming Soon` page for now, instead of
a fake or dead button — per the prompt's own "no placeholder functionality"
rule.

## Design tokens

- **Colors** (`tailwind.config.ts`): Midnight Navy (`navy-950/900/800/700`),
  Electric Blue (primary accent), Cyan (data/signal states), Violet
  (AI-agent surfaces), Gold (VIP-only, used sparingly), Mist (soft white
  text).
- **Type**: Space Grotesk (display/headlines) + Inter (body).
- **Signature element**: the `MarketPanel` demo dashboard card in the hero —
  everything else stays quiet around it. All data in it is explicitly
  labeled "Demo Data," per the prompt's rule against faking live prices.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Deploy by pushing this folder to a GitHub
repo and importing it in Vercel — zero config needed for this stage.

## What's next (not built yet)

In prompt order: public pages for AI Tools / Education / Market Insights /
Community / VIP / Partners, then auth (Supabase), the user dashboard, the
separate AI Command Center, backend + database, MT5 integration, and the
agent registry. Build one module at a time on top of this foundation —
nothing here needs to be rebuilt to add them.

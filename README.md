# آریا نقش — Arya Naghsh

Persian RTL website for a premium printing house, built with Next.js App Router,
TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's included

- Full route set: `/`, `/portfolio`, `/portfolio/[slug]`, `/about`, `/contact`,
  `/blog`, `/blog/[slug]`, `/privacy`, `/terms`, plus `not-found`, `error`,
  and `loading` states.
- All visible content is Persian; layout is RTL (`dir="rtl"`) using logical
  CSS properties (`inset-inline-*`, `ps-*`, `pe-*`, etc.) instead of hardcoded
  left/right.
- Light/dark theme via `next-themes`, toggle in the header, no flash on load.
- Structured content in `lib/data/*.ts` — services, portfolio, blog posts,
  testimonials, nav/site info — so pages map over data instead of duplicating
  markup. Swap in a CMS or API later by changing only these files.
- Contact form uses React Hook Form + Zod with Persian validation messages
  and a clearly separated mock submission function
  (`submitContactForm` in `components/contact/contact-form.tsx`) — replace
  that with a real API route or email service when ready.
- JSON-LD `LocalBusiness` structured data and per-route SEO metadata in
  `app/layout.tsx` and each page's `generateMetadata`/`metadata` export.

## Notes on scope vs. the original brief

This was hand-written (no network access to run `npm install` or a dev
server in the authoring environment), so:

- **shadcn/ui and Magic UI** components (Sheet, Tabs, Carousel, Skeleton,
  Marquee, NumberTicker, BorderBeam, etc.) were *not* pulled from their
  CLIs — I built lightweight, accessible equivalents by hand
  (`components/ui/*`, `components/shared/*`) so the project runs with just
  the packages listed in `package.json`. If you want the literal shadcn/
  Magic UI versions, running `npx shadcn@latest init` and their `add`
  commands on top of this structure will slot in cleanly — the component
  APIs used here (`Button`, `Card`, filter tabs, etc.) map closely.
- **Demo content**: 6 services, 6 portfolio case studies, 6 blog articles,
  4 testimonials, 8 fictional trusted-company names. All structured so
  adding more is just adding array entries in `lib/data/`.
- **Images**: no real photography was generated or sourced (this
  environment can't produce photorealistic commercial imagery for you to
  license). Hero/portfolio/blog visuals are placeholder geometric/gradient
  compositions in the brand palette — swap in real photography via
  `next/image` in the corresponding components once you have shot assets.
- **Contact form backend**: mock only, as instructed — wire up
  `app/api/contact/route.ts` (or a third-party form service) and swap the
  mock function.
- Not implemented: admin dashboard, CMS, online ordering/payments, customer
  accounts — intentionally out of scope per "future extensibility, don't
  build now."

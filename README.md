# M&M Auto Detailing — Website

Marketing site for M&M Auto Detailing, a Sydney mobile car detailing business.
Features services, ceramic coatings, bike detailing, gallery, and a contact/quote flow.

🌐 Live site: [mmautodetailing.com.au](https://www.mmautodetailing.com.au)

## Stack

- **Framework:** Next.js (App Router)
- **UI:** React, TypeScript, Tailwind CSS v4
- **Email:** Resend (contact API route)
- **Fonts:** Outfit (headings), DM Sans (body) via `next/font`

## Requirements

- Node.js 20+
- npm

## Setup

```bash
npm install
# Add RESEND_API_KEY to .env.local for contact form emails
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |

## Structure

- `app/` — pages, layout, global styles, `app/api/contact` route
- `components/` — shared UI components
- `public/` — static assets including `public/images/`

## Routes

- `/` — Home
- `/services` — Car detailing packages
- `/ceramic` — Ceramic / Prizm coating content
- `/bikes` — Bike detailing
- `/gallery` — Photo and video gallery
- `/contact` — Contact and quote form

## Environment Variables

| Variable | Description |
| `RESEND_API_KEY` | Required for contact form emails via `app/api/contact/route.ts` |

## Deployment

Deployed on Vercel. Set environment variables in Vercel project settings and connect repo to deploy.

## License

Private — all rights reserved.

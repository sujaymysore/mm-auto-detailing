# M&M Auto Detailing

Premium automotive detailing marketing site: Next.js App Router, TypeScript, Tailwind CSS v4, Resend for contact form emails.

---

## Stack (simplified)

| Layer        | What we use |
|-------------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **UI**        | React 19, TypeScript |
| **Styling**   | Tailwind CSS v4 (`@tailwindcss/postcss` + `app/globals.css`) |
| **Fonts**     | Google Fonts via `next/font`: Outfit (headings), DM Sans (body) |
| **Contact**   | Resend – form posts to `/api/contact`, which sends email server-side |

No database, no auth. Static pages + one API route.

---

## How it’s built

**1. Entry and layout**

- `app/layout.tsx` wraps every page: loads fonts, applies CSS variables, renders `<Navbar />`, `<main>{children}</main>`, `<Footer />`.
- `app/globals.css` is the only global stylesheet: `@import "tailwindcss"`, design tokens in `:root`, and `@theme inline` so Tailwind classes like `bg-background` and `text-accent` use those tokens.

**2. Pages (App Router)**

- Each route is a folder under `app/` with a `page.tsx`:  
  `app/page.tsx` (home), `app/services/page.tsx`, `app/ceramic/page.tsx`, `app/gallery/page.tsx`, `app/contact/page.tsx`.
- Pages are Server Components by default; add `"use client"` at the top when you need hooks or browser APIs (e.g. contact form, gallery).

**3. Styling**

- **Tokens:** In `globals.css`, `:root` defines CSS variables (`--background`, `--surface`, `--accent`, `--text`, `--text-muted`, PRIZM colours).  
  `@theme inline` maps them into Tailwind (e.g. `--color-background` → `bg-background`).
- **Usage:** Use Tailwind classes everywhere. For one-off values, use the variables in `style={{ }}` or in `globals.css` (e.g. `.prizm-page-bg`).

**4. Contact form and email**

- Form lives on `app/contact/page.tsx` (client component). On submit it `POST`s JSON to `/api/contact`.
- `app/api/contact/route.ts` reads the body, validates name/email, and uses the Resend SDK to send an HTML email. Recipient is `CONTACT_EMAIL` or `RESEND_TO_EMAIL`; sender uses `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL`).

**5. Build pipeline**

- PostCSS: `postcss.config.mjs` uses `@tailwindcss/postcss` only.
- Tailwind v4: no `tailwind.config.js`; theme and content are driven by `globals.css` and by Tailwind’s default content sources (e.g. `app/`, `components/`).

---

## Commands

```bash
npm install   # install deps
npm run dev   # dev server at http://localhost:3000
npm run build # production build
npm run start # run production build
npm run lint  # eslint
```

---

## Environment variables

Used only for the contact form (Resend). Add to `.env.local` (and optionally `.env.example` for docs):

| Variable           | Required | Purpose |
|--------------------|----------|--------|
| `RESEND_API_KEY`   | Yes      | Resend API key for sending email |
| `CONTACT_EMAIL` or `RESEND_TO_EMAIL` | Yes (one of) | Where contact form submissions are sent |
| `RESEND_FROM_EMAIL` | No     | Sender address (defaults from Resend if unset) |

No env vars are needed for the rest of the site (static content + client-side UI).

---

## Folder structure (what matters)

```
app/
  layout.tsx          # Root layout (fonts, Navbar, main, Footer)
  page.tsx            # Home
  globals.css         # Tailwind + design tokens + PRIZM styles
  contact/page.tsx
  services/page.tsx
  ceramic/page.tsx
  gallery/page.tsx
  api/
    contact/route.ts  # POST handler → Resend email
components/           # Shared UI (Navbar, Footer, Hero, Button, etc.)
public/
  images/             # Static images (hero, gallery, logo, etc.)
```

---

## Summary

- **Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + Resend.
- **Base:** One layout, one global CSS file with tokens and Tailwind, pages as `app/**/page.tsx`, one API route for contact.
- **How it works:** Layout and fonts in `layout.tsx`; styling via Tailwind and CSS variables in `globals.css`; contact form posts to `/api/contact`, which sends email via Resend using env vars.

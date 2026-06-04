# MamaNote Web

MamaNote website: Paddle checkout, shared activity log viewer, and related public pages.

## Routes

| Route | Purpose |
| --- | --- |
| `/checkout?_ptxn=...` | Paddle subscription checkout (opened from the app) |
| `/checkout/success` | Post-payment redirect → app deeplink |
| `/share/[token]` | Public read-only baby activity log (from app share links / QR) |

---

## Shared activity log (`/share/[token]`)

Partners and caregivers open links like:

`https://YOUR-DOMAIN.com/share/a1b2c3d4e5f6...`

Data is fetched server-side from Supabase Edge Function `get-shared-activities`. No login required.

### Env vars (Vercel + local)

| Variable | Required | Notes |
| --- | --- | --- |
| `SUPABASE_URL` | Yes | e.g. `https://xxxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Yes | Supabase anon key (server-side only) |
| `NEXT_PUBLIC_APP_STORE_URL` | No | Footer download CTA (when live) |
| `NEXT_PUBLIC_PLAY_STORE_URL` | No | Footer download CTA (when live) |
| `NEXT_PUBLIC_APP_DOWNLOAD_LIVE` | No | `true` = store links; default = launch waitlist modal |

### Launch waitlist (pre–app store)

Download / “Get the app” buttons open an email signup modal. Emails are stored in Supabase table `launch_waitlist` via `POST /api/waitlist`.

Apply the migration in [supabase/migrations/20260604120000_launch_waitlist.sql](supabase/migrations/20260604120000_launch_waitlist.sql) (Supabase SQL editor or `supabase db push`). Requires `SUPABASE_URL` and `SUPABASE_ANON_KEY` on the site.

### Mobile app

After deploy, set in the Expo app:

```env
EXPO_PUBLIC_SHARE_BASE_URL=https://YOUR-DOMAIN.com/share
```

Share links and QR codes from the app will point to this site.

---

## Paddle checkout

The Expo app calls Supabase `create-checkout`, which returns a URL like:

`https://YOUR-PROJECT.vercel.app/checkout?_ptxn=txn_...`

The app opens that URL in an in-app browser. This page loads Paddle.js and opens checkout for that transaction. After payment, Paddle redirects to `https://YOUR-SITE/checkout/success?transactionId=...` (HTTPS required), then that page opens `mamanote://subscribe/success`. Entitlements are synced by the Supabase `paddle-webhook` edge function — not this site.

## Deploy to Vercel

1. Push this folder to GitHub (or import from monorepo subpath).
2. [Import the project in Vercel](https://vercel.com/new).
3. Set environment variables (Production + Preview):

   | Variable | Example |
   | --- | --- |
   | `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` | `test_...` (sandbox) or `live_...` (production) |
   | `NEXT_PUBLIC_PADDLE_ENV` | `sandbox` or `production` |
   | `SUPABASE_URL` | `https://xxxxx.supabase.co` |
   | `SUPABASE_ANON_KEY` | Supabase anon key |

4. Deploy. Note your URL, e.g. `https://mamanote.vercel.app`.

## Paddle dashboard checklist

Use the **same Paddle account** as the MamaNote Supabase backend (sandbox first).

1. **Checkout → Website approval** — add `https://YOUR-PROJECT.vercel.app`
2. **Checkout → Default payment link** — set to `https://YOUR-PROJECT.vercel.app/checkout`
3. **Developer tools → Authentication** — copy the **client-side token** into `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`

### Supabase

In Supabase Edge Function secrets:

- Leave `PADDLE_CHECKOUT_URL` **unset** so transactions use the account default payment link, **or**
- Set it explicitly: `https://YOUR-PROJECT.vercel.app/checkout`

Other secrets (`PADDLE_API_KEY`, `PADDLE_WEBHOOK_SECRET`, `PADDLE_ENV`) stay on Supabase only.

## Local development

```bash
cp .env.example .env.local
# Edit .env.local with your keys

npm install
npm run dev
```

- Checkout: [http://localhost:3000/checkout](http://localhost:3000/checkout)
- Share (replace token): [http://localhost:3000/share/YOUR_TOKEN](http://localhost:3000/share/YOUR_TOKEN)

## Project layout

```
app/share/[token]/page.tsx     Shared activity log (SSR)
app/checkout/page.tsx          Paddle checkout
app/checkout/success/page.tsx  Post-payment deeplink
lib/shared-activities.ts       Supabase edge function client
components/share/              Share UI components
.env.example                   Required env vars
```

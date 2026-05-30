# MamaNote Checkout (Paddle)

Minimal Vercel site for MamaNote Plus subscriptions. One page: `/checkout`.

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

4. Deploy. Note your URL, e.g. `https://mamanote-checkout.vercel.app`.

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
# Edit .env.local with your sandbox client token

npm install
npm run dev
```

Open [http://localhost:3000/checkout](http://localhost:3000/checkout) — shows “Open checkout from the MamaNote app” without `_ptxn`.

## Test flow

1. Deploy with sandbox env vars.
2. From the MamaNote app (or Supabase `create-checkout`), get a real sandbox checkout URL with `?_ptxn=txn_...`.
3. Open that URL on a phone (Safari or in-app browser). Paddle checkout should open automatically.
4. Complete a test payment. Paddle redirects to `/checkout/success`, then the app opens via `mamanote://subscribe/success?transactionId=txn_...`.
5. Confirm the app handles the deeplink and that `paddle-webhook` updates the subscription in Supabase.

Sample URL shape (replace with a valid sandbox transaction id from your app):

```
https://YOUR-PROJECT.vercel.app/checkout?_ptxn=txn_01h...
```

Transaction ids are short-lived and created server-side — you cannot invent a valid `_ptxn` without calling `create-checkout`.

## Project layout

```
app/checkout/page.tsx          Paddle.js checkout (auto-open on _ptxn)
app/checkout/success/page.tsx  HTTPS success → mamanote:// deeplink
app/page.tsx            Redirects / → /checkout
.env.example            Required env vars
```

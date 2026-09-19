# zkera.xyz

Public marketing site for Era (Sepolia). Next.js App Router.

**Scope:** waitlist CTA, live status from operator `/health`, link to the RainbowKit reference client. Not an Era wallet. Not the faucet. BFF-only secrets — never `PARTNER_API_KEY` / partner JWT in the browser or `NEXT_PUBLIC_*`. ZK is at `settleBatch`, not per send.

**Domain:** `zkera.xyz`  
**Live vault (Sepolia):** [`0xa61a0569C4918C3B8b05d77A6a1638023859b565`](https://sepolia.etherscan.io/address/0xa61a0569C4918C3B8b05d77A6a1638023859b565)  
**Operator:** `https://operator.zkera.xyz`

Own repo under `zk-era/zkera.xyz`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, waitlist, live status, reference client |
| `/solutions` | Settlement rails (not a wallet) |
| `/resources` | Reference client, public operator, vault |
| `/about` | Scope and locked honesty |

Shared nav + footer on every page.

## What the browser talks to

Public operator endpoints only (CORS `*`). No env vars. No API key.

| Surface | Behavior |
| --- | --- |
| Waitlist | `POST https://operator.zkera.xyz/v1/waitlist` with `{ email }`. `201` `{ ok, email, already:false }` / `200` `already:true` / `400` `{ error: "invalid email" }`. CTA: “Join the Sepolia waitlist.” |
| Status | `GET https://operator.zkera.xyz/health` every ~10s. Short `stateRoot`, Root match, Queue (ops pending settle), Last settle, Frozen / Paused, optional `chainStatus`. Queued ≠ spendable until the root moves. |
| Reference client | “Open the RainbowKit reference client (deposit / send / settle status)” → [zk-era/era-app](https://github.com/zk-era/era-app). No hosted demo. |

Use `operator.zkera.xyz` everywhere — not `era-backend.up.railway.app`.

## Copy

Placeholder strings live in `src/lib/copy.ts` so Lyra (claim-safe final) and Mira (adoption / GTM) can swap without hunting JSX. Do not paraphrase locked hero / honesty claims, and do not add TPS or dollar metrics.

## Run

```bash
npm install
npm run dev
```

Opens Next.js at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Import `zk-era/zkera.xyz`.
2. Framework preset: Next.js. Build `npm run build`.
3. Do **not** set `PARTNER_API_KEY`, partner JWTs, or any other secret. This site has none. Do not put secrets in `NEXT_PUBLIC_*`.

Point `zkera.xyz` at the Vercel project when ready.

## Stack

Next.js App Router + React + TypeScript. Lean deps. Public `/health` and `/v1/waitlist` only.

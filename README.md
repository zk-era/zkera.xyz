# zkera.xyz

Thin public one-pager for Era (Sepolia).

**Scope (locked 2026-09-17):** waitlist CTA, live status from operator `/health`, link to the RainbowKit reference client. Not an Era wallet. Not the faucet. BFF-only secrets — never `PARTNER_API_KEY` / partner JWT in the browser. ZK is at `settleBatch`, not per send.

**Domain:** `zkera.xyz`  
**Live vault (Sepolia):** [`0xa61a0569C4918C3B8b05d77A6a1638023859b565`](https://sepolia.etherscan.io/address/0xa61a0569C4918C3B8b05d77A6a1638023859b565)  
**Operator:** `https://era-backend.up.railway.app`

Own repo under `zk-era/zkera.xyz`. Nested at `work/era/zkera.xyz` and gitignored by the parent docs repo.

## What this page does

The browser talks to public operator endpoints directly (CORS `*`). No env vars. No API key.

| Surface | Behavior |
| --- | --- |
| Waitlist | `POST https://era-backend.up.railway.app/v1/waitlist` with `{ email }`. `201` `{ ok, email, already:false }` / `200` `already:true` / `400` `{ error: "invalid email" }`. CTA: “Join the Sepolia waitlist.” |
| Status | `GET https://era-backend.up.railway.app/health` every ~10s. Short `stateRoot`, Root match, Queue (ops pending settle), Last settle, Frozen / Paused, optional `chainStatus`. Queued ≠ spendable until the root moves. |
| Reference client | “Open the RainbowKit reference client (deposit / send / settle status)” → [zk-era/era-app](https://github.com/zk-era/era-app). No hosted demo. |

## Run

```bash
npm install
npm run dev
```

Opens Vite at [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Static output is `dist/`.

## Deploy (Vercel)

1. Import `zk-era/zkera.xyz`.
2. Framework preset: Vite. Build `npm run build`, output `dist`.
3. Do **not** set `PARTNER_API_KEY` or any other secret. This site has none.

Point `zkera.xyz` at the Vercel project when ready.

## Stack

Vite + React + TypeScript. Lean deps. Public `/health` and `/v1/waitlist` only.

Locked public copy lives in `src/copy.ts` (Lyra). Do not paraphrase, and do not add TPS or dollar metrics.

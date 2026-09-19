/**
 * Placeholder marketing copy.
 *
 * Lyra owns claim-safe final copy. Mira is drafting adoption / GTM framing
 * (Apple-simple). Brody will edit this pass. Swap strings here — do not
 * paraphrase locked claims, and do not add TPS or dollar metrics.
 */

export const site = {
  name: "Era",
  network: "Sepolia",
  title: "Era — Sepolia",
  description:
    "Era is shared settlement rails on Ethereum — cheap notebook hops in MetaMask/Rainbow; L1 truth at SP1 Groth16 settleBatch. No Era wallet.",
};

export const nav = {
  brand: "ERA",
  network: "Sepolia",
  home: "Home",
  solutions: "Solutions",
  resources: "Resources",
  about: "About",
};

export const hero =
  "Era is shared settlement rails on Ethereum — cheap notebook hops in MetaMask/Rainbow; L1 truth at SP1 Groth16 settleBatch. No Era wallet.";

export const honesty =
  "ZK at settleBatch only — not per send. Queued ≠ spendable until the root moves. Live proof checks EIP-712 transfer sigs at settle. Secrets stay BFF-only. Sepolia demo.";

export const waitlist = {
  cta: "Join the Sepolia waitlist.",
  thanks: "Thanks — you’re on the list.",
  already: "Already on the list.",
  join: "Join",
  joining: "Joining…",
  emailLabel: "Email",
  placeholder: "email",
  unreachable: "could not reach operator",
};

export const status = {
  heading: "Status",
  live: "live",
  polling: "polling",
  unreachable: "unreachable",
  stateRoot: "stateRoot",
  rootMatch: "Root match",
  matches: "matches",
  mismatch: "root ≠ chain",
  queue: "Queue (ops pending settle)",
  lastSettle: "Last settle",
  frozenPaused: "Frozen / Paused",
  neither: "neither",
  frozen: "Frozen",
  paused: "Paused",
  queuedNote: "Queued ≠ spendable until the root moves.",
};

export const referenceClient = {
  cta: "Open the RainbowKit reference client (deposit / send / settle status)",
  note: "Hosted demo is not up yet — use the reference client until it is.",
};

export const facts = {
  vault: "Vault",
  operator: "Operator",
};

export const home = {
  eyebrow: "Sepolia demo",
  waitlistLead: "Leave an email. We will not ask you to install an Era wallet.",
};

export const solutions = {
  title: "Solutions",
  lede: "Shared settlement rails — hops in MetaMask or Rainbow, L1 truth when settleBatch lands. This is not an Era wallet.",
  cards: [
    {
      title: "Notebook hops",
      body: "Cheap notebook hops from the wallets people already use — MetaMask and Rainbow. Deposit, send, and settle status live in the RainbowKit reference client, not on this site.",
    },
    {
      title: "L1 truth at settleBatch",
      body: "ZK is at settleBatch only — not per send. SP1 Groth16 posts L1 truth. Live proof checks EIP-712 transfer sigs at settle.",
    },
    {
      title: "Queued ≠ spendable",
      body: "A queued op is not spendable until the state root moves. Live status shows stateRoot (short), root match, queue length, last settle, frozen / paused, and chainStatus.",
    },
  ],
  notTitle: "What this is not",
  notItems: [
    "Not an Era wallet. Use MetaMask, Rainbow, and the reference client.",
    "Not the faucet.",
    "Not a per-send ZK product. Proofs run at settleBatch.",
    "Not a place for partner keys. Secrets stay BFF-only.",
  ],
};

export const resources = {
  title: "Resources",
  lede: "Public surfaces only. No API key. No partner JWT. Operator host is operator.zkera.xyz.",
  clientTitle: "RainbowKit reference client",
  clientBody:
    "Deposit / send / settle status against the Sepolia vault. Use this until a hosted demo is up.",
  operatorTitle: "Public operator",
  operatorBody:
    "The browser talks to public endpoints on operator.zkera.xyz (CORS *). No env vars on this site.",
  endpoints: [
    {
      method: "GET",
      path: "/health",
      detail:
        "Polled about every 10s on the home status board: stateRoot, stateRootMatchesChain, queueLength, lastSettleAt, frozen, paused, chainStatus.",
    },
    {
      method: "POST",
      path: "/v1/waitlist",
      detail:
        "Body { email }. 201 { ok, email, already:false } / 200 already:true / 400 { error: \"invalid email\" }.",
    },
  ],
  vaultTitle: "Sepolia vault",
  vaultBody:
    "Live vault on Sepolia. This site does not move funds. The reference client is the deposit / send / settle surface.",
  honestyTitle: "Honesty",
};

export const about = {
  title: "About",
  lede: "Era is shared settlement rails on Ethereum. This site is a Sepolia waitlist and a live operator board — not a wallet, not the faucet.",
  body: [
    "Cheap notebook hops happen in MetaMask or Rainbow. L1 truth lands at SP1 Groth16 settleBatch. There is no Era wallet to install.",
    "ZK runs at settleBatch only — not per send. Queued ops are not spendable until the root moves. Live proof checks EIP-712 transfer sigs at settle. Secrets stay BFF-only.",
    "This is a Sepolia demo. Copy here is a claim-safe placeholder for the Lyra / Mira pass. Do not read TPS or dollar metrics into it — we do not publish those.",
  ],
  scopeTitle: "What this site does",
  scopeItems: [
    "Waitlist CTA against the public operator.",
    "Live /health polling on the home status board.",
    "A link to the RainbowKit reference client.",
  ],
};

export const footer = {
  waitlist: "Join the Sepolia waitlist",
  client: "Reference client",
  vault: "Sepolia vault",
  disclaimer:
    "Not an Era wallet. Not the faucet. ZK at settleBatch only. Sepolia demo.",
};

export const notFound = {
  title: "Not found",
  body: "That page is not on this site.",
  home: "Back home",
};

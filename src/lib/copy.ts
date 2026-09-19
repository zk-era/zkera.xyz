/**
 * Authoritative public strings — Lyra (claims).
 * IA / bands / waitlist fields — Mira (GTM, Apple-simple / family.co).
 *
 * Drop-in from zkera-xyz-marketing-copy.md. Do not paraphrase into
 * banned claims. Brody edits voice on return.
 *
 * Must never appear: trustless · ZK on every send / ZK transfers ·
 * instant finality · mainnet-ready / audited · invented traction ·
 * YC · unicorn · only-one-physics · consumer Era wallet promise ·
 * dollar fee claims in Home hero · “credits” · “fast” on the queue step
 */

export const site = {
  name: "Era",
  domain: "zkera.xyz",
  title: "Era — zkera.xyz",
  description: "Ethereum transfers. Without another chain.",
};

export const nav = {
  brand: "Era",
  network: "Live on Sepolia",
  home: "Home",
  solutions: "Solutions",
  resources: "Resources",
  about: "About",
};

export const cta = {
  primary: "Join the partner waitlist",
  homeSecondary: "See how it works",
  docs: "Read the docs",
};

export const hero = {
  headline: "Ethereum transfers. Without another chain.",
  sub: "Shared settlement rails for wallets and SDKs. Cheap hops inside a vault. Ethereum checks a proof when we settle.",
  microtrust: "Live on Sepolia. ZK at settle — not on every send.",
};

export const chips = [
  "Live on Sepolia",
  "ZK at settleBatch",
  "Queued ≠ spendable until settle",
  "Freeze → escape",
] as const;

export const notes = {
  queued: "Queued ≠ spendable until settle.",
  zk: "ZK at settleBatch only — not on every send.",
  bff: "Secrets stay BFF-only. Never in the browser.",
  sepolia: "Live on Sepolia",
  feeAside:
    "Sepolia notebook hops: usual ~$0.50, max $5 (fee UI / unit-econ only — never Home hero).",
};

export const waitlist = {
  cta: "Join the partner waitlist",
  thanks: "Thanks — you’re on the partner list.",
  already: "Already on the list.",
  join: "Join",
  joining: "Joining…",
  emailLabel: "Email",
  emailPlaceholder: "email",
  nameLabel: "Name",
  namePlaceholder: "name (optional)",
  companyLabel: "Company",
  companyPlaceholder: "company",
  roleLabel: "Role",
  roles: [
    { value: "", label: "role" },
    { value: "wallet", label: "wallet" },
    { value: "sdk", label: "SDK" },
    { value: "other", label: "other" },
  ],
  shippingLabel: "What you’re shipping",
  shippingPlaceholder: "what you’re shipping",
  unreachable: "could not reach operator",
};

export const home = {
  tilesTitle: "What you get",
  tiles: [
    {
      title: "Stay on Ethereum",
      body: "No new rollup community for your users to learn.",
    },
    {
      title: "Ship transfers, not infrastructure",
      body: "Vault, hops, and settle are shared rails.",
    },
    {
      title: "Honest by design",
      body: "Balances aren’t spendable until settlement moves the root.",
    },
  ],
  howTitle: "How it works",
  howSteps: [
    {
      n: "01",
      title: "Deposit",
      body: "Deposit into the Era vault on Ethereum.",
    },
    {
      n: "02",
      title: "Send",
      body: "Send inside the vault with signed intents — cheap hops. Queued ≠ spendable yet.",
    },
    {
      n: "03",
      title: "Settle",
      body: "Settle — a batch proof updates Ethereum. Then balances are spendable.",
    },
  ],
  howFooter: "If the operator goes silent, freeze and escape.",
  whoTitle: "Who it’s for",
  who: [
    "Wallet teams",
    "Embedded wallet / SDK teams",
    "Partners evaluating shared settlement",
  ],
  whyTitle: "Why now",
  why: "Wallets that want cheap transfers are pushed to stand up another chain. Era is the opposite bet — keep users on Ethereum, share settlement, don’t fragment the front door.",
  closeHeadline: "Build on shared rails.",
  closeFine:
    "Sepolia today. Mainnet when the spine deserves it — not before.",
};

export const solutions = {
  title: "Solutions",
  lede: "Jobs for partners — not a feature dump. Era is shared settlement underneath your product, not a consumer Era wallet.",
  jobs: [
    {
      title: "Keep your wallet the front door.",
      body: "Your users stay in your product. Era runs shared settlement underneath — deposits, in-vault sends, batch settle on Ethereum.",
      proof:
        "Partner-oriented API and Sepolia vault loop — not a white-label consumer wallet from Era.",
    },
    {
      title: "Transfers without standing up a chain.",
      body: "Embed cheap hops and settlement without operating a rollup, sequencer, or new community.",
      proof: "BFF-held partner keys; no partner secrets in the browser.",
    },
    {
      title: "A Sepolia spine you can actually poke.",
      body: "Live vault, operator, settle path, and an escape hatch you can reason about — not a slide-only architecture.",
      proof:
        "Queued ≠ spendable is explicit. Vault 0xa61a0569…b565 · operator.zkera.xyz.",
    },
  ],
};

export const resources = {
  title: "Resources",
  lede: "Credibility and education. No fake dashboards.",
  cards: [
    {
      title: "How Era works",
      body: "Deposit → hop → settleBatch. Queued ≠ spendable.",
    },
    {
      title: "What we claim (and don’t)",
      body: "Short honesty page — raise-safe list.",
    },
    {
      title: "Security posture",
      body: "Trusted operator; freeze → escape; Sepolia; not audited.",
    },
    {
      title: "Docs / CLI",
      body: "Eng-blessed docs and @era/cli when URLs are stable.",
    },
    {
      title: "Status",
      body: "Operator health / Sepolia status when wired — don’t invent URLs.",
    },
    {
      title: "Live vault",
      body: "0xa61a0569…b565 on Sepolia.",
    },
  ],
  dontTitle: "What we don’t claim",
  dont: [
    "ZK on every send",
    "Trustless operator",
    "Mainnet-ready / audited",
    "Invented traction metrics",
    "YC or other affiliation",
    "Only project with this physics",
  ],
  honestyNote:
    "Resources describe Sepolia. Production fee economics and mainnet are not claimed here.",
  clientTitle: "RainbowKit reference client",
  clientBody:
    "Deposit / send / settle status against the Sepolia vault. Hosted demo is not up yet.",
};

export const about = {
  title: "About",
  headline: "Settlement should be shared.",
  body: "Wallets shouldn’t have to launch a chain to offer cheap transfers. Era is building shared Ethereum settlement rails — so value can move without forcing another community on your users.",
  towardTitle: "What we’re building toward",
  toward: [
    "Partner-activated rails on Ethereum",
    "Honesty as a product feature (settle and spendability)",
    "Mainnet when the spine deserves it",
  ],
  todayTitle: "What we are today",
  today: [
    "A live Sepolia system: vault, operator, settle, escape",
    "A small team shipping the spine before the story",
  ],
  notTitle: "What we are not",
  not: [
    "A consumer wallet brand (right now)",
    "Another L2 community launch",
    "A metrics theater company",
  ],
  founderTitle: "Founder line",
  founderSlot:
    "(Brody edits — one clear sentence on why shared L1 rails. No biography padding, no fake milestones.)",
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
  queuedNote: "Queued ≠ spendable until settle.",
};

export const facts = {
  vault: "Live vault",
  operator: "Operator",
};

export const footer = {
  waitlist: "Join the partner waitlist",
  docs: "Read the docs",
  client: "Reference client",
  honesty:
    "Live on Sepolia. ZK at settleBatch — not on every send. Queued ≠ spendable until settle. Freeze → escape if we go dark.",
};

export const referenceClient = {
  cta: "Open the RainbowKit reference client (deposit / send / settle status)",
};

export const notFound = {
  title: "Not found",
  body: "That page is not on this site.",
  home: "Back home",
};

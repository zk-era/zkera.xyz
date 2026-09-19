/**
 * Marketing copy module.
 *
 * Lyra owns claim-safe final copy. Mira owns adoption / GTM framing
 * (Apple-simple). Wired from their drop-in pack + Mira claim-pass nits.
 * Swap strings here — do not paraphrase into banned claims.
 *
 * Banned: Era wallet, faucet-as-product, ZK-per-send, trustless,
 * mainnet-ready, invented traction / TPS / $, YC, “only-one-physics”,
 * “credits”, “fast” on the queue step, fees on the Home hero.
 */

export const site = {
  name: "Era",
  network: "Sepolia",
  title: "Era — Sepolia",
  description: "Ethereum transfers. Without another chain.",
};

export const nav = {
  brand: "ERA",
  network: "Sepolia",
  home: "Home",
  solutions: "Solutions",
  resources: "Resources",
  about: "About",
};

export const hero = "Ethereum transfers. Without another chain.";

export const heroSub =
  "Shared settlement rails on Ethereum — cheap notebook hops in MetaMask/Rainbow; L1 truth at SP1 Groth16 settleBatch. No Era wallet.";

export const honesty =
  "ZK at settleBatch only — not per send. Queued ≠ spendable until the root moves. Live proof checks EIP-712 transfer sigs at settle. Secrets stay BFF-only. Sepolia demo.";

export const chips = [
  "Sepolia",
  "ZK at settleBatch",
  "Queued ≠ spendable",
  "Freeze → escape",
] as const;

export const waitlist = {
  cta: "Join the partner waitlist.",
  lead: "For wallets, SDKs, and teams shipping on Era — not an app download.",
  thanks: "Thanks — you’re on the list.",
  already: "Already on the list.",
  join: "Join",
  joining: "Joining…",
  emailLabel: "Email",
  emailPlaceholder: "email",
  companyLabel: "Company",
  companyPlaceholder: "company",
  roleLabel: "Role",
  rolePlaceholder: "role",
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

export const howItWorks = {
  title: "How a hop lands",
  steps: [
    {
      n: "01",
      title: "Hop in the wallet you already have",
      body: "Sign from MetaMask or Rainbow. This site is not an Era wallet. Deposit / send / settle status live in the RainbowKit reference client until a hosted demo is up.",
    },
    {
      n: "02",
      title: "Queued ≠ spendable",
      body: "The operator queues the op. Balances aren’t spendable until settleBatch moves the state root.",
    },
    {
      n: "03",
      title: "L1 truth at settleBatch",
      body: "SP1 Groth16 posts the batch. Live proof checks EIP-712 transfer sigs at settle. ZK is not per send.",
    },
  ],
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
};

export const solutions = {
  title: "Solutions",
  lede: "Rails for wallets and SDKs. Partners hop in MetaMask or Rainbow. Era does not ship a wallet.",
  cards: [
    {
      title: "Wallets",
      body: "Cheap notebook hops from the wallets people already use. Deposit, send, and settle status live in the RainbowKit reference client — not on this site.",
    },
    {
      title: "SDKs",
      body: "ZK is at settleBatch only — not per send. SP1 Groth16 posts L1 truth. Live proof checks EIP-712 transfer sigs at settle.",
    },
    {
      title: "Operators",
      body: "A queued op is not spendable until the state root moves. Freeze → escape. Live status shows stateRoot, root match, queue length, last settle, frozen / paused, and chainStatus.",
    },
  ],
  feeTitle: "Fees (Sepolia demo)",
  feeBody:
    "Demo fee band is about $0.50 per hop, max $5. Not a promise. Not a Home hero claim. Confirm in the fee UI of the reference client.",
  evalTitle: "Partner eval",
  evalBody:
    "Public surfaces only. Watch live /health on operator.zkera.xyz. Cite the Sepolia vault when you evaluate.",
  notTitle: "What this is not",
  notItems: [
    "Not an Era wallet. Use MetaMask, Rainbow, and the reference client.",
    "Not the faucet.",
    "Not a per-send ZK product. Proofs run at settleBatch.",
    "Not mainnet-ready. Sepolia demo.",
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
        "Body { email } plus optional partner fields (company, role, shipping). 201 { ok, email, already:false } / 200 already:true / 400 { error: \"invalid email\" }.",
    },
  ],
  vaultTitle: "Sepolia vault",
  vaultBody:
    "Live vault on Sepolia. This site does not move funds. The reference client is the deposit / send / settle surface.",
  honestyTitle: "Honesty",
};

export const about = {
  title: "About",
  lede: "Era is shared settlement rails on Ethereum. This site is a Sepolia partner waitlist and a live operator board — not a wallet, not the faucet.",
  body: [
    "Ethereum transfers. Without another chain. Cheap notebook hops happen in MetaMask or Rainbow. L1 truth lands at SP1 Groth16 settleBatch. There is no Era wallet to install.",
    "ZK runs at settleBatch only — not per send. Queued ops are not spendable until the root moves. Balances aren’t spendable until then. Live proof checks EIP-712 transfer sigs at settle. Secrets stay BFF-only. Freeze → escape.",
    "This is a Sepolia demo. Do not read TPS, dollar metrics, or traction into it — we do not publish those on Home.",
  ],
  scopeTitle: "What this site does",
  scopeItems: [
    "Partner waitlist against the public operator.",
    "Live /health polling on the home status board.",
    "A link to the RainbowKit reference client.",
  ],
};

export const footer = {
  waitlist: "Join the partner waitlist",
  client: "Reference client",
  vault: "Sepolia vault",
  disclaimer:
    "Not an Era wallet. Not the faucet. ZK at settleBatch only. Queued ≠ spendable. Sepolia demo.",
};

export const notFound = {
  title: "Not found",
  body: "That page is not on this site.",
  home: "Back home",
};

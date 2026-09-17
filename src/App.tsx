import {
  OPERATOR_URL,
  REFERENCE_CLIENT_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "./config";
import { shortHex } from "./format";
import StatusPanel from "./StatusPanel";
import WaitlistForm from "./WaitlistForm";

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <span className="mark">ERA</span>
        <span className="net">Sepolia</span>
      </header>

      <main>
        <p className="lede">
          Era is shared settlement rails on Ethereum — cheap notebook hops in
          MetaMask/Rainbow; L1 truth at SP1 Groth16 <code>settleBatch</code>. No
          Era wallet.
        </p>
        <p className="honesty">
          ZK at settleBatch only — not per send. Queued ≠ spendable until the
          root moves. Live proof checks EIP-712 transfer sigs at settle. Secrets
          stay BFF-only. Sepolia demo.
        </p>

        <WaitlistForm />
        <StatusPanel />

        <p className="client">
          <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
            Open the RainbowKit reference client (deposit / send / settle
            status)
            <span aria-hidden="true"> ↗</span>
          </a>
        </p>

        <section className="facts" aria-label="Network facts">
          <div>
            <span className="k">Vault</span>
            <a
              className="mono"
              href={VAULT_EXPLORER_URL}
              target="_blank"
              rel="noreferrer"
            >
              {shortHex(VAULT_ADDRESS)}
            </a>
          </div>
          <div>
            <span className="k">Operator</span>
            <a href={OPERATOR_URL} target="_blank" rel="noreferrer">
              era-backend.up.railway.app
            </a>
          </div>
          <div>
            <span className="k">Fees</span>
            <span>~$0.50 usual / max $5 on Sepolia</span>
          </div>
        </section>
      </main>
    </div>
  );
}

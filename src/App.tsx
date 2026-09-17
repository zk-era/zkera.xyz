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
          Operator, not a wallet. ZK lands at <code>settleBatch</code>, not on
          each send. Live proof checks EIP-712 transfer signatures. Secrets stay
          in the BFF — this page never sees them.
        </p>

        <WaitlistForm />
        <StatusPanel />

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

        <p className="client">
          <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
            Reference client
            <span aria-hidden="true"> ↗</span>
          </a>
          <span className="client-note">
            RainbowKit · clone and run locally. No hosted demo.
          </span>
        </p>
      </main>
    </div>
  );
}

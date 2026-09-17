import {
  OPERATOR_URL,
  REFERENCE_CLIENT_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "./config";
import { HERO, HONESTY, REFERENCE_CLIENT_CTA } from "./copy";
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
        <p className="lede">{HERO}</p>
        <p className="honesty">{HONESTY}</p>

        <WaitlistForm />
        <StatusPanel />

        <p className="client">
          <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
            {REFERENCE_CLIENT_CTA}
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
        </section>
      </main>
    </div>
  );
}

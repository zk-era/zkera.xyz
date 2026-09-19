import {
  OPERATOR_HOST,
  OPERATOR_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { facts } from "@/lib/copy";
import { shortHex } from "@/lib/format";

export default function NetworkFacts() {
  return (
    <section className="facts" aria-label="Network facts">
      <div>
        <span className="k">{facts.vault}</span>
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
        <span className="k">{facts.operator}</span>
        <a href={OPERATOR_URL} target="_blank" rel="noreferrer">
          {OPERATOR_HOST}
        </a>
      </div>
    </section>
  );
}

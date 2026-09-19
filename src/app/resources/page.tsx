import type { Metadata } from "next";
import {
  OPERATOR_HOST,
  OPERATOR_URL,
  REFERENCE_CLIENT_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { honesty, referenceClient, resources } from "@/lib/copy";

export const metadata: Metadata = {
  title: resources.title,
  description: resources.lede,
};

export default function ResourcesPage() {
  return (
    <>
      <h1 className="page-title">{resources.title}</h1>
      <p className="lede">{resources.lede}</p>

      <article className="card">
        <h2>{resources.clientTitle}</h2>
        <p>{resources.clientBody}</p>
        <p className="client">
          <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
            {referenceClient.cta}
            <span aria-hidden="true"> ↗</span>
          </a>
        </p>
        <p className="quiet">{referenceClient.note}</p>
      </article>

      <article className="card">
        <h2>{resources.operatorTitle}</h2>
        <p>{resources.operatorBody}</p>
        <p>
          <a href={OPERATOR_URL} target="_blank" rel="noreferrer">
            {OPERATOR_HOST}
          </a>
        </p>
        <ul className="endpoint-list">
          {resources.endpoints.map((row) => (
            <li key={row.path}>
              <p className="mono endpoint-path">
                <span className="method">{row.method}</span> {row.path}
              </p>
              <p>{row.detail}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="card">
        <h2>{resources.vaultTitle}</h2>
        <p>{resources.vaultBody}</p>
        <p>
          <a
            className="mono"
            href={VAULT_EXPLORER_URL}
            target="_blank"
            rel="noreferrer"
          >
            {VAULT_ADDRESS}
          </a>
        </p>
      </article>

      <section className="callout" aria-labelledby="honesty-heading">
        <h2 id="honesty-heading">{resources.honestyTitle}</h2>
        <p>{honesty}</p>
      </section>
    </>
  );
}

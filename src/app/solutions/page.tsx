import type { Metadata } from "next";
import {
  OPERATOR_HOST,
  OPERATOR_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { solutions } from "@/lib/copy";

export const metadata: Metadata = {
  title: solutions.title,
  description: solutions.lede,
};

export default function SolutionsPage() {
  return (
    <>
      <h1 className="page-title">{solutions.title}</h1>
      <p className="lede">{solutions.lede}</p>

      <ul className="card-list">
        {solutions.cards.map((card) => (
          <li key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </li>
        ))}
      </ul>

      <aside className="fee-aside" aria-labelledby="fee-heading">
        <h2 id="fee-heading">{solutions.feeTitle}</h2>
        <p>{solutions.feeBody}</p>
      </aside>

      <section className="card" aria-labelledby="eval-heading">
        <h2 id="eval-heading">{solutions.evalTitle}</h2>
        <p>{solutions.evalBody}</p>
        <ul className="plain-list eval-facts">
          <li>
            Vault{" "}
            <a
              className="mono"
              href={VAULT_EXPLORER_URL}
              target="_blank"
              rel="noreferrer"
            >
              {VAULT_ADDRESS}
            </a>
          </li>
          <li>
            Operator{" "}
            <a href={OPERATOR_URL} target="_blank" rel="noreferrer">
              {OPERATOR_HOST}
            </a>
          </li>
        </ul>
      </section>

      <section className="callout" aria-labelledby="not-heading">
        <h2 id="not-heading">{solutions.notTitle}</h2>
        <ul className="plain-list">
          {solutions.notItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

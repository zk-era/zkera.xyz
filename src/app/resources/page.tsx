import type { Metadata } from "next";
import Link from "next/link";
import {
  REFERENCE_CLIENT_URL,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { cta, referenceClient, resources } from "@/lib/copy";

export const metadata: Metadata = {
  title: resources.title,
  description: resources.lede,
};

export default function ResourcesPage() {
  return (
    <>
      <h1 className="page-title">{resources.title}</h1>
      <p className="lede">{resources.lede}</p>

      <ul className="card-list">
        {resources.cards.map((card) => (
          <li key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            {card.title === "Status" ? (
              <p className="client">
                <Link href="/#status">Home status board</Link>
              </p>
            ) : null}
            {card.title === "Live vault" ? (
              <p className="client">
                <a
                  className="mono"
                  href={VAULT_EXPLORER_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  0xa61a0569C4918C3B8b05d77A6a1638023859b565
                </a>
              </p>
            ) : null}
            {card.title === "What we claim (and don’t)" ? (
              <p className="client">
                <Link href="#dont-claim">{resources.dontTitle}</Link>
              </p>
            ) : null}
          </li>
        ))}
        <li className="card">
          <h2>{resources.clientTitle}</h2>
          <p>{resources.clientBody}</p>
          <p className="client">
            <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
              {referenceClient.cta}
              <span aria-hidden="true"> ↗</span>
            </a>
          </p>
        </li>
      </ul>

      <section
        id="dont-claim"
        className="callout"
        aria-labelledby="dont-heading"
      >
        <h2 id="dont-heading">{resources.dontTitle}</h2>
        <ul className="plain-list">
          {resources.dont.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="honesty">{resources.honestyNote}</p>
      <p className="client">
        <Link href="/#waitlist">{cta.primary}</Link>
      </p>
    </>
  );
}

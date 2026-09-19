import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import {
  OPERATOR_HOST,
  OPERATOR_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { cta, notes, solutions } from "@/lib/copy";

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
        {solutions.jobs.map((job) => (
          <li key={job.title} className="card">
            <h2>{job.title}</h2>
            <p>{job.body}</p>
            <p className="proof">{job.proof}</p>
          </li>
        ))}
      </ul>

      <aside className="fee-aside" aria-label="Fees">
        <p>{notes.feeAside}</p>
      </aside>

      <section className="card" aria-label="Live surfaces">
        <ul className="plain-list eval-facts">
          <li>
            Live vault{" "}
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

      <CtaRow
        primaryHref="/#waitlist"
        primary={cta.primary}
        secondaryHref="/resources"
        secondary={cta.docs}
      />
    </>
  );
}

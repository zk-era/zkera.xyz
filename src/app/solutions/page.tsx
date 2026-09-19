import type { Metadata } from "next";
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

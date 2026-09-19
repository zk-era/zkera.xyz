import type { Metadata } from "next";
import Link from "next/link";
import { about, footer, honesty } from "@/lib/copy";

export const metadata: Metadata = {
  title: about.title,
  description: about.lede,
};

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">{about.title}</h1>
      <p className="lede">{about.lede}</p>

      {about.body.map((paragraph) => (
        <p key={paragraph} className="prose">
          {paragraph}
        </p>
      ))}

      <section className="callout" aria-labelledby="scope-heading">
        <h2 id="scope-heading">{about.scopeTitle}</h2>
        <ul className="plain-list">
          {about.scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="honesty">{honesty}</p>
      <p className="client">
        <Link href="/#waitlist">{footer.waitlist}</Link>
      </p>
    </>
  );
}

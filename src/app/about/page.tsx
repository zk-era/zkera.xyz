import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import { about, cta } from "@/lib/copy";

export const metadata: Metadata = {
  title: about.title,
  description: about.body,
};

export default function AboutPage() {
  return (
    <>
      <h1 className="page-title">{about.headline}</h1>
      <p className="lede">{about.body}</p>

      <section className="band" aria-labelledby="toward-heading">
        <h2 id="toward-heading">{about.towardTitle}</h2>
        <ul className="plain-list">
          {about.toward.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="band" aria-labelledby="today-heading">
        <h2 id="today-heading">{about.todayTitle}</h2>
        <ul className="plain-list">
          {about.today.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="band" aria-labelledby="not-heading">
        <h2 id="not-heading">{about.notTitle}</h2>
        <ul className="plain-list">
          {about.not.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="founder-slot" aria-labelledby="founder-heading">
        <h2 id="founder-heading">{about.founderTitle}</h2>
        <p className="quiet">{about.founderSlot}</p>
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

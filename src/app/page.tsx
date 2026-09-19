import CtaRow from "@/components/CtaRow";
import StatusPanel from "@/components/StatusPanel";
import WaitlistForm from "@/components/WaitlistForm";
import { chips, cta, hero, home } from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      <h1 className="hero">{hero.headline}</h1>
      <p className="lede">{hero.sub}</p>
      <CtaRow
        primaryHref="/#waitlist"
        primary={cta.primary}
        secondaryHref="/#how"
        secondary={cta.homeSecondary}
      />
      <p className="microtrust">{hero.microtrust}</p>
      <ul className="chips" aria-label="Trust notes">
        {chips.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>

      <section className="band" aria-labelledby="tiles-heading">
        <h2 id="tiles-heading">{home.tilesTitle}</h2>
        <ul className="tile-list">
          {home.tiles.map((tile) => (
            <li key={tile.title} className="card">
              <h3>{tile.title}</h3>
              <p>{tile.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="how" className="how band" aria-labelledby="how-heading">
        <h2 id="how-heading">{home.howTitle}</h2>
        <ol className="how-list">
          {home.howSteps.map((step) => (
            <li key={step.n}>
              <span className="how-n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="how-footer">{home.howFooter}</p>
      </section>

      <section className="band" aria-labelledby="who-heading">
        <h2 id="who-heading">{home.whoTitle}</h2>
        <ul className="plain-list">
          {home.who.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="band" aria-labelledby="why-heading">
        <h2 id="why-heading">{home.whyTitle}</h2>
        <p className="prose">{home.why}</p>
      </section>

      <div id="status">
        <StatusPanel />
      </div>

      <section id="waitlist" className="band close-band">
        <h2 className="page-title">{home.closeHeadline}</h2>
        <WaitlistForm />
        <p className="honesty">{home.closeFine}</p>
      </section>
    </>
  );
}

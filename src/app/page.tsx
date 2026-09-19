import NetworkFacts from "@/components/NetworkFacts";
import ReferenceClientLink from "@/components/ReferenceClientLink";
import StatusPanel from "@/components/StatusPanel";
import WaitlistForm from "@/components/WaitlistForm";
import { chips, hero, heroSub, home, honesty, howItWorks, waitlist } from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      <p className="eyebrow">{home.eyebrow}</p>
      <h1 className="hero">{hero}</h1>
      <p className="lede">{heroSub}</p>
      <ul className="chips" aria-label="Trust notes">
        {chips.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <p className="honesty">{honesty}</p>

      <section id="waitlist" className="waitlist-block">
        <p className="waitlist-lead">{waitlist.lead}</p>
        <WaitlistForm />
      </section>

      <section className="how" aria-labelledby="how-heading">
        <h2 id="how-heading">{howItWorks.title}</h2>
        <ol className="how-list">
          {howItWorks.steps.map((step) => (
            <li key={step.n}>
              <span className="how-n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div id="status">
        <StatusPanel />
      </div>

      <ReferenceClientLink />
      <NetworkFacts />
    </>
  );
}

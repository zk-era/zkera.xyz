import NetworkFacts from "@/components/NetworkFacts";
import ReferenceClientLink from "@/components/ReferenceClientLink";
import StatusPanel from "@/components/StatusPanel";
import WaitlistForm from "@/components/WaitlistForm";
import { hero, home, honesty } from "@/lib/copy";

export default function HomePage() {
  return (
    <>
      <p className="eyebrow">{home.eyebrow}</p>
      <p className="lede">{hero}</p>
      <p className="honesty">{honesty}</p>

      <section id="waitlist" className="waitlist-block">
        <p className="waitlist-lead">{home.waitlistLead}</p>
        <WaitlistForm />
      </section>

      <div id="status">
        <StatusPanel />
      </div>

      <ReferenceClientLink />
      <NetworkFacts />
    </>
  );
}

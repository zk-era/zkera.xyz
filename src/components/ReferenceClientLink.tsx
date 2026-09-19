import { REFERENCE_CLIENT_URL } from "@/lib/config";
import { referenceClient } from "@/lib/copy";

export default function ReferenceClientLink() {
  return (
    <p className="client">
      <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
        {referenceClient.cta}
        <span aria-hidden="true"> ↗</span>
      </a>
    </p>
  );
}

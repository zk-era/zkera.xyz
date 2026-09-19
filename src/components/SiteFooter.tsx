import Link from "next/link";
import {
  OPERATOR_HOST,
  OPERATOR_URL,
  REFERENCE_CLIENT_URL,
  VAULT_ADDRESS,
  VAULT_EXPLORER_URL,
} from "@/lib/config";
import { cta, facts, footer, nav } from "@/lib/copy";
import { shortHex } from "@/lib/format";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand">{nav.brand}</span>
          <p className="footer-disclaimer">{footer.honesty}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/">{nav.home}</Link>
          <Link href="/solutions">{nav.solutions}</Link>
          <Link href="/resources">{nav.resources}</Link>
          <Link href="/about">{nav.about}</Link>
          <Link href="/#waitlist">{footer.waitlist}</Link>
          <Link href="/resources">{cta.docs}</Link>
        </nav>
        <div className="footer-facts">
          <div>
            <span className="k">{facts.vault}</span>
            <a
              className="mono"
              href={VAULT_EXPLORER_URL}
              target="_blank"
              rel="noreferrer"
            >
              {shortHex(VAULT_ADDRESS)}
            </a>
          </div>
          <div>
            <span className="k">{facts.operator}</span>
            <a href={OPERATOR_URL} target="_blank" rel="noreferrer">
              {OPERATOR_HOST}
            </a>
          </div>
          <div>
            <span className="k">{footer.client}</span>
            <a href={REFERENCE_CLIENT_URL} target="_blank" rel="noreferrer">
              zk-era/era-app
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

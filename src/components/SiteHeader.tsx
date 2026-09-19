"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta, nav } from "@/lib/copy";

const links = [
  { href: "/", label: nav.home },
  { href: "/solutions", label: nav.solutions },
  { href: "/resources", label: nav.resources },
  { href: "/about", label: nav.about },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          {nav.brand}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => {
            const current =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/#waitlist" className="header-cta">
          {cta.primary}
        </Link>
        <span className="net">{nav.network}</span>
      </div>
    </header>
  );
}

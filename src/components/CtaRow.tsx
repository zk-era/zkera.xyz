import Link from "next/link";

type Props = {
  primaryHref: string;
  primary: string;
  secondaryHref: string;
  secondary: string;
};

export default function CtaRow({
  primaryHref,
  primary,
  secondaryHref,
  secondary,
}: Props) {
  const primaryExternal = primaryHref.startsWith("http");
  const secondaryExternal = secondaryHref.startsWith("http");

  return (
    <p className="cta-row">
      {primaryExternal ? (
        <a className="btn-primary" href={primaryHref}>
          {primary}
        </a>
      ) : (
        <Link className="btn-primary" href={primaryHref}>
          {primary}
        </Link>
      )}
      {secondaryExternal ? (
        <a className="btn-secondary" href={secondaryHref}>
          {secondary}
        </a>
      ) : (
        <Link className="btn-secondary" href={secondaryHref}>
          {secondary}
        </Link>
      )}
    </p>
  );
}

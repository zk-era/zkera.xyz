import Link from "next/link";
import { notFound } from "@/lib/copy";

export default function NotFound() {
  return (
    <>
      <h1 className="page-title">{notFound.title}</h1>
      <p className="lede">{notFound.body}</p>
      <p className="client">
        <Link href="/">{notFound.home}</Link>
      </p>
    </>
  );
}

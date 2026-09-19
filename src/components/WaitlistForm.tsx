"use client";

import { FormEvent, useState } from "react";
import { joinWaitlist } from "@/lib/api";
import { waitlist as copy } from "@/lib/copy";

type Status =
  | { kind: "idle" }
  | { kind: "pending" }
  | { kind: "success"; already: boolean }
  | { kind: "error"; message: string };

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [shipping, setShipping] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function resetOutcome() {
    if (status.kind !== "idle" && status.kind !== "pending") {
      setStatus({ kind: "idle" });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "pending" });
    try {
      const result = await joinWaitlist({
        email: email.trim(),
        company: company.trim() || undefined,
        role: role || undefined,
        shipping: shipping.trim() || undefined,
      });
      if (result.ok) {
        setStatus({ kind: "success", already: result.already });
      } else {
        setStatus({ kind: "error", message: result.error });
      }
    } catch {
      setStatus({ kind: "error", message: copy.unreachable });
    }
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <p className="waitlist-cta">{copy.cta}</p>
      <div className="waitlist-grid">
        <label className="sr-only" htmlFor="email">
          {copy.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={copy.emailPlaceholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            resetOutcome();
          }}
          disabled={status.kind === "pending"}
          required
        />
        <label className="sr-only" htmlFor="company">
          {copy.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={copy.companyPlaceholder}
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            resetOutcome();
          }}
          disabled={status.kind === "pending"}
        />
        <label className="sr-only" htmlFor="role">
          {copy.roleLabel}
        </label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            resetOutcome();
          }}
          disabled={status.kind === "pending"}
        >
          {copy.roles.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="shipping">
          {copy.shippingLabel}
        </label>
        <input
          id="shipping"
          name="shipping"
          type="text"
          placeholder={copy.shippingPlaceholder}
          value={shipping}
          onChange={(e) => {
            setShipping(e.target.value);
            resetOutcome();
          }}
          disabled={status.kind === "pending"}
        />
        <button type="submit" disabled={status.kind === "pending"}>
          {status.kind === "pending" ? copy.joining : copy.join}
        </button>
      </div>
      <p
        className={
          status.kind === "error"
            ? "waitlist-msg waitlist-msg-error"
            : "waitlist-msg"
        }
        role="status"
        aria-live="polite"
      >
        {status.kind === "success"
          ? status.already
            ? copy.already
            : copy.thanks
          : status.kind === "error"
            ? status.message
            : "\u00a0"}
      </p>
    </form>
  );
}

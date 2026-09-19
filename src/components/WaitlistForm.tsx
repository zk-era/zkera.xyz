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
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "pending" });
    try {
      const result = await joinWaitlist(email.trim());
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
      <label className="sr-only" htmlFor="email">
        {copy.emailLabel}
      </label>
      <div className="waitlist-row">
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={copy.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.kind !== "idle" && status.kind !== "pending") {
              setStatus({ kind: "idle" });
            }
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

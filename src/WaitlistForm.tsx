import { FormEvent, useState } from "react";
import { joinWaitlist } from "./api";
import {
  WAITLIST_ALREADY,
  WAITLIST_CTA,
  WAITLIST_THANKS,
} from "./copy";

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
      setStatus({ kind: "error", message: "could not reach operator" });
    }
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <p className="waitlist-cta">{WAITLIST_CTA}</p>
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <div className="waitlist-row">
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="email"
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
          {status.kind === "pending" ? "Joining…" : "Join"}
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
            ? WAITLIST_ALREADY
            : WAITLIST_THANKS
          : status.kind === "error"
            ? status.message
            : "\u00a0"}
      </p>
    </form>
  );
}

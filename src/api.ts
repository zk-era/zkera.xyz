import { HEALTH_URL, WAITLIST_URL } from "./config";
import type { Health, WaitlistResult } from "./types";

export async function fetchHealth(signal?: AbortSignal): Promise<Health> {
  const res = await fetch(HEALTH_URL, { signal });
  if (!res.ok) {
    throw new Error(`health ${res.status}`);
  }
  return (await res.json()) as Health;
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const res = await fetch(WAITLIST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const body: unknown = await res.json().catch(() => null);

  if (
    body &&
    typeof body === "object" &&
    "ok" in body &&
    (body as { ok: unknown }).ok === true
  ) {
    const okBody = body as { email?: string; already?: boolean };
    return {
      ok: true,
      email: typeof okBody.email === "string" ? okBody.email : email,
      already: Boolean(okBody.already),
    };
  }

  const error =
    body &&
    typeof body === "object" &&
    "error" in body &&
    typeof (body as { error: unknown }).error === "string"
      ? (body as { error: string }).error
      : `request failed (${res.status})`;

  return { ok: false, error };
}

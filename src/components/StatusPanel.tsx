"use client";

import { useEffect, useState } from "react";
import { fetchHealth } from "@/lib/api";
import { HEALTH_POLL_MS } from "@/lib/config";
import { status as copy } from "@/lib/copy";
import { formatAbsolute, relativeTime, shortHex } from "@/lib/format";
import type { Health } from "@/lib/types";

type Snapshot =
  | { kind: "loading" }
  | { kind: "live"; health: Health }
  | { kind: "error"; message: string; health?: Health };

export default function StatusPanel() {
  const [snap, setSnap] = useState<Snapshot>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;
    const controller = new AbortController();

    const poll = async () => {
      try {
        const health = await fetchHealth(controller.signal);
        if (cancelled) return;
        setSnap({ kind: "live", health });
      } catch (err) {
        if (cancelled || controller.signal.aborted) return;
        setSnap((prev) => ({
          kind: "error",
          message: err instanceof Error ? err.message : copy.unreachable,
          health: prev.kind === "loading" ? undefined : prev.health,
        }));
      } finally {
        if (!cancelled) {
          timer = window.setTimeout(poll, HEALTH_POLL_MS);
        }
      }
    };

    void poll();

    return () => {
      cancelled = true;
      controller.abort();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  const health =
    snap.kind === "live"
      ? snap.health
      : snap.kind === "error"
        ? snap.health
        : undefined;
  const queued = health?.queueLength ?? 0;
  const frozen = Boolean(health?.frozen);
  const paused = Boolean(health?.paused);
  const mismatch = health ? !health.stateRootMatchesChain : false;

  return (
    <section className="status" aria-labelledby="status-heading">
      <header className="status-head">
        <h2 id="status-heading">{copy.heading}</h2>
        <div className="status-flags">
          {paused && <span className="badge badge-amber">{copy.paused}</span>}
          {frozen && <span className="badge badge-amber">{copy.frozen}</span>}
          {snap.kind === "live" && (
            <span className="live">
              <span className="live-dot" aria-hidden="true" />
              {copy.live}
            </span>
          )}
          {snap.kind === "loading" && (
            <span className="muted">{copy.polling}</span>
          )}
          {snap.kind === "error" && (
            <span className="badge badge-rose">{copy.unreachable}</span>
          )}
        </div>
      </header>

      <dl className="status-grid">
        <div>
          <dt>{copy.stateRoot}</dt>
          <dd title={health?.stateRoot ?? undefined} className="mono">
            {health ? shortHex(health.stateRoot) : "—"}
          </dd>
        </div>
        <div>
          <dt>{copy.rootMatch}</dt>
          <dd className={mismatch ? "amber" : undefined}>
            {health ? (
              <>
                {health.stateRootMatchesChain ? copy.matches : copy.mismatch}
                {health.chainStatus ? (
                  <>
                    <span className="sep">·</span>
                    <span className="mono">{health.chainStatus}</span>
                  </>
                ) : null}
              </>
            ) : (
              "—"
            )}
          </dd>
        </div>
        <div>
          <dt>{copy.queue}</dt>
          <dd className={queued > 0 ? "amber mono" : "mono"}>
            {health ? queued : "—"}
          </dd>
        </div>
        <div>
          <dt>{copy.lastSettle}</dt>
          <dd
            className="mono"
            title={health ? formatAbsolute(health.lastSettleAt) : undefined}
          >
            {health ? relativeTime(health.lastSettleAt) : "—"}
          </dd>
        </div>
        <div>
          <dt>{copy.frozenPaused}</dt>
          <dd>
            {health ? (
              frozen || paused ? (
                <span className="amber">
                  {[frozen && copy.frozen, paused && copy.paused]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              ) : (
                <span className="quiet">{copy.neither}</span>
              )
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>

      <p className={queued > 0 ? "status-note amber" : "status-note"}>
        {copy.queuedNote}
      </p>
    </section>
  );
}

import { useEffect, useState } from "react";
import { fetchHealth } from "./api";
import { HEALTH_POLL_MS } from "./config";
import { formatAbsolute, relativeTime, shortHex } from "./format";
import type { Health } from "./types";

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
          message: err instanceof Error ? err.message : "health unreachable",
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
        <h2 id="status-heading">Status</h2>
        <div className="status-flags">
          {paused && <span className="badge badge-amber">Paused</span>}
          {frozen && <span className="badge badge-amber">Frozen</span>}
          {snap.kind === "live" && (
            <span className="live">
              <span className="live-dot" aria-hidden="true" />
              live
            </span>
          )}
          {snap.kind === "loading" && <span className="muted">polling</span>}
          {snap.kind === "error" && (
            <span className="badge badge-rose">unreachable</span>
          )}
        </div>
      </header>

      <dl className="status-grid">
        <div>
          <dt>stateRoot</dt>
          <dd title={health?.stateRoot ?? undefined} className="mono">
            {health ? shortHex(health.stateRoot) : "—"}
          </dd>
        </div>
        <div>
          <dt>Root match</dt>
          <dd className={mismatch ? "amber" : undefined}>
            {health ? (
              <>
                {health.stateRootMatchesChain ? "matches" : "root ≠ chain"}
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
          <dt>Queue (ops pending settle)</dt>
          <dd className={queued > 0 ? "amber mono" : "mono"}>
            {health ? queued : "—"}
          </dd>
        </div>
        <div>
          <dt>Last settle</dt>
          <dd
            className="mono"
            title={health ? formatAbsolute(health.lastSettleAt) : undefined}
          >
            {health ? relativeTime(health.lastSettleAt) : "—"}
          </dd>
        </div>
        <div className="status-halt">
          <dt>Frozen / Paused</dt>
          <dd>
            {health ? (
              frozen || paused ? (
                <span className="amber">
                  {[frozen && "Frozen", paused && "Paused"]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              ) : (
                <span className="quiet">neither</span>
              )
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>

      <p className={queued > 0 ? "status-note amber" : "status-note"}>
        Queued ≠ spendable until the root moves.
      </p>
    </section>
  );
}

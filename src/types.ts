export type Health = {
  status: string;
  timestamp: string;
  stateRoot: string;
  queueLength: number;
  pendingWithdrawals?: number;
  lastSettleAt: string | null;
  frozen: boolean;
  paused: boolean;
  chainStateRoot?: string;
  stateRootMatchesChain: boolean;
  chainStatus: string;
};

export type WaitlistResult =
  | { ok: true; email: string; already: boolean }
  | { ok: false; error: string };

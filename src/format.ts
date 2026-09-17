export function shortHex(value: string, left = 8, right = 6): string {
  if (!value) return "—";
  if (value.length <= left + right + 2) return value;
  return `${value.slice(0, 2 + left)}…${value.slice(-right)}`;
}

export function relativeTime(iso: string | null): string {
  if (!iso) return "never";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  const delta = Math.round((Date.now() - t) / 1000);
  const abs = Math.abs(delta);
  const suffix = delta >= 0 ? "ago" : "from now";
  if (abs < 60) return `${abs}s ${suffix}`;
  const minutes = Math.round(abs / 60);
  if (minutes < 60) return `${minutes}m ${suffix}`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `${hours}h ${suffix}`;
  const days = Math.round(hours / 24);
  return `${days}d ${suffix}`;
}

export function formatAbsolute(iso: string | null): string {
  if (!iso) return "";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return iso;
  return new Date(t).toISOString().replace("T", " ").replace(".000Z", " UTC");
}

// lib/turnstile.ts — canonical Cloudflare Turnstile siteverify
// Mirrors https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
// Browser → your backend → siteverify (never from browser directly)

export type TurnstileVerifyResult = {
  success: boolean;
  hostname?: string;
  action?: string;
  errorCodes?: string[];
};

export type VerifyOptions = {
  token: string;
  remoteIp?: string | null;
  expectedAction: string;
  expectedHostnames: Set<string>;
};

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Verifies a Turnstile token via Cloudflare siteverify.
 * Returns { ok: true, result } if success===true && action===expectedAction && hostname ∈ expectedHostnames.
 * Returns { ok: false, result?, error } otherwise.
 */
export async function verifyTurnstileToken(
  opts: VerifyOptions,
): Promise<{ ok: boolean; result?: TurnstileVerifyResult; error?: string }> {
  const { token, remoteIp, expectedAction, expectedHostnames } = opts;

  if (
    typeof token !== "string" ||
    token.length === 0 ||
    token.length > 2048 ||
    expectedHostnames.size === 0
  ) {
    return { ok: false, error: "forbidden" };
  }

  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) {
    // No secret configured — fail closed in production, warn in development
    if (process.env.NODE_ENV === "production") {
      console.error(
        "TURNSTILE_SECRET is not set — rejecting Turnstile verification",
      );
      return { ok: false, error: "forbidden" };
    }
    console.warn(
      "TURNSTILE_SECRET is not set — skipping Turnstile verification (dev only)",
    );
    return { ok: true, result: { success: true } };
  }

  let result: TurnstileVerifyResult;
  try {
    const body = new URLSearchParams({
      secret,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
    });

    const r = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      signal: AbortSignal.timeout(10_000),
      body,
    });
    if (!r.ok) throw new Error(`siteverify ${r.status}`);
    result = (await r.json()) as TurnstileVerifyResult;
  } catch (err) {
    console.error("Turnstile siteverify fetch failed:", err);
    return { ok: false, error: "forbidden" };
  }

  const hostnameLower = result.hostname?.toLowerCase();
  if (
    !result.success ||
    result.action !== expectedAction ||
    !hostnameLower ||
    !expectedHostnames.has(hostnameLower)
  ) {
    if (!result.success) {
      console.warn("Turnstile verification failed:", result.errorCodes);
    } else if (result.action !== expectedAction) {
      console.warn(
        `Turnstile action mismatch: expected ${expectedAction}, got ${result.action}`,
      );
    } else {
      console.warn(
        `Turnstile hostname not allowed: ${result.hostname} (allowed: ${[...expectedHostnames].join(", ")})`,
      );
    }
    return { ok: false, result, error: "forbidden" };
  }

  return { ok: true, result };
}

/**
 * Parses TURNSTILE_HOSTNAMES env (comma-separated) into a Set.
 * Trims, filters empty, lowercases for comparison (Cloudflare hostnames are lowercase).
 */
export function getExpectedHostnames(): Set<string> {
  const raw = process.env.TURNSTILE_HOSTNAMES ?? "";
  const hostnames = raw
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  return new Set(hostnames);
}

/**
 * Extracts client IP from Next.js headers (x-forwarded-for, x-real-ip).
 * Adapted for both App Router (headers()) and Route Handlers (Request).
 */
export function getClientIpFromHeaders(
  headers: Headers | { get(name: string): string | null },
): string | undefined {
  const xff = headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  const xRealIp = headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();
  return undefined;
}

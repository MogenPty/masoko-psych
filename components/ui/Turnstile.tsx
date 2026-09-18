"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          action?: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string | undefined;
    };
    // Fallback when script hasn't loaded yet
    onTurnstileLoad?: () => void;
  }
}

type TurnstileProps = {
  sitekey: string;
  action?: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  onWidgetId?: (id: string) => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "compact" | "flexible";
  className?: string;
};

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${TURNSTILE_SRC}"]`,
  );
  if (existing) {
    if (existing.dataset.failed === "true") {
      existing.remove();
    } else {
      return new Promise((resolve, reject) => {
        const onLoad = () => {
          cleanup();
          resolve();
        };
        const onError = () => {
          cleanup();
          existing.dataset.failed = "true";
          existing.remove();
          reject(new Error("Turnstile script failed to load"));
        };
        const cleanup = () => {
          existing.removeEventListener("load", onLoad);
          existing.removeEventListener("error", onError);
        };
        existing.addEventListener("load", onLoad, { once: true });
        existing.addEventListener("error", onError, { once: true });
      });
    }
  }

  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = TURNSTILE_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      s.dataset.failed = "true";
      s.remove();
      reject(new Error("Turnstile script failed to load"));
    };
    document.head.appendChild(s);
  });
}

export default function Turnstile({
  sitekey,
  action = "contact",
  onVerify,
  onExpire,
  onError,
  onWidgetId,
  theme = "auto",
  size = "flexible",
  className,
}: Readonly<TurnstileProps>) {
  const containerId = useId().replace(/:/g, "-");
  const widgetIdRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loadError, setLoadError] = useState(false);

  // Keep callbacks stable without re-rendering widget
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const onErrorRef = useRef(onError);
  const onWidgetIdRef = useRef(onWidgetId);
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);
  useEffect(() => {
    onWidgetIdRef.current = onWidgetId;
  }, [onWidgetId]);

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current) return;
    // Avoid double-render in StrictMode
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // ignore
      }
      widgetIdRef.current = null;
    }
    const id = `turnstile-${containerId}`;
    const el = document.getElementById(id);
    if (!el) return;
    // Clear previous content
    el.innerHTML = "";
    const widgetId = window.turnstile.render(el, {
      sitekey,
      action,
      theme,
      size,
      callback: (token: string) => onVerifyRef.current(token),
      "expired-callback": () => onExpireRef.current?.(),
      "error-callback": () => {
        setLoadError(true);
        onErrorRef.current?.();
      },
    });
    widgetIdRef.current = widgetId;
    onWidgetIdRef.current?.(widgetId);
  }, [sitekey, action, theme, size, containerId]);

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then(() => {
        if (cancelled) return;
        // Small tick to ensure DOM is ready
        requestAnimationFrame(() => {
          if (!cancelled) renderWidget();
        });
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  // Allow parent to call reset via widgetId callback — token is single-use, reset after each submission
  // Parent should call window.turnstile?.reset(widgetId) after request completes

  if (!sitekey) return null;

  return (
    <div
      className={className}
      style={{
        minHeight: loadError ? 0 : 65,
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
      }}
    >
      <div
        ref={containerRef}
        id={`turnstile-${containerId}`}
        style={{ width: "100%", maxWidth: "100%" }}
        aria-live="polite"
      />
      {loadError && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(18,29,47,0.5)",
          }}
        >
          Verification unavailable — please refresh and try again.
        </p>
      )}
    </div>
  );
}

// Helper for parent to reset a known widgetId without importing window type
export function resetTurnstile(widgetId?: string | null) {
  if (typeof window !== "undefined" && window.turnstile) {
    try {
      window.turnstile.reset(widgetId ?? undefined);
    } catch {
      // ignore
    }
  }
}

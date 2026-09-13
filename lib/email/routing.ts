// lib/email/routing.ts
import { SERVICES } from "@/data/services";

export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.title })),
  { value: "not-sure-yet", label: "Not Sure Yet" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export function getServiceLabel(value: string): string {
  return SERVICE_OPTIONS.find((s) => s.value === value)?.label ?? value;
}

const DEFAULT =
  process.env.CONTACT_EMAIL_DEFAULT ?? "info@masokopsychology.co.za";

function loadRoutingMap(): Record<string, string | string[]> {
  const raw = process.env.CONTACT_EMAIL_ROUTING;
  if (!raw) return {};

  try {
    const parsed: Record<string, string> = JSON.parse(raw);
    return Object.fromEntries(
      Object.entries(parsed).map(([slug, value]) => {
        const list = value
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean);
        return [slug.toLowerCase(), list.length > 1 ? list : list[0]];
      }),
    );
  } catch (err) {
    console.error(
      "CONTACT_EMAIL_ROUTING is not valid JSON — falling back to CONTACT_EMAIL_DEFAULT for everything:",
      err,
    );
    return {};
  }
}

const ROUTING = loadRoutingMap();

export function getRecipients(service: ServiceValue): string | string[] {
  return ROUTING[service.toLowerCase()] ?? DEFAULT;
}

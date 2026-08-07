import { type ClassValue, clsx } from "clsx";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const anchorNav = (href: string, router: AppRouterInstance) => {
  const [path, hash] = href.split("#");

  if (window.location.pathname !== path) router.push(href);

  if (hash)
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
};

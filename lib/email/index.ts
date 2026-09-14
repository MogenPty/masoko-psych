import { createResendProvider } from "./providers/resend";
import type { EmailProvider } from "./types";

// Swap this line to point at a different provider later (SMTP, Postmark, etc.)
// — nothing outside this file needs to change.
export const emailProvider: EmailProvider = createResendProvider();

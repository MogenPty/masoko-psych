import type { ReactElement } from "react";

export interface SendEmailInput {
  to: string | string[];
  subject: string;
  replyTo?: string;
  react?: ReactElement;
  html?: string;
  text?: string;
}

export interface EmailProvider {
  send(input: SendEmailInput): Promise<{ id: string }>;
}

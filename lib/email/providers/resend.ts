import { Resend } from "resend";
import type { EmailProvider, SendEmailInput } from "../types";

export function createResendProvider(): EmailProvider {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM ?? "info@masokopsychology.co.za";

  return {
    async send({ to, subject, replyTo, react, html, text }: SendEmailInput) {
      const base = { from, to, subject, replyTo };

      const { data, error } = react
        ? await resend.emails.send({ ...base, react })
        : await resend.emails.send({ ...base, html: html!, text });

      if (error) throw new Error(`Resend send failed: ${error.message}`);
      return { id: data!.id };
    },
  };
}

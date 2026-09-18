"use server";

import { createElement } from "react";
import { headers } from "next/headers";
import { emailProvider } from "@/lib/email";
import { getRecipients, getServiceLabel } from "@/lib/email/routing";
import { ContactNotification } from "@/lib/email/templates/contact-notification";
import {
  getClientIpFromHeaders,
  getExpectedHostnames,
  verifyTurnstileToken,
} from "@/lib/turnstile";
import { contactFormSchema } from "@/lib/validations/contact";

export type ContactActionState = { success: boolean; message: string };

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  // Turnstile verification — gates before any handler logic (browser → backend → siteverify)
  const token = formData.get("cf-turnstile-response");
  if (typeof token === "string" && token.length > 0) {
    const hdrs = await headers();
    const clientIp = getClientIpFromHeaders(hdrs);
    const expectedHostnames = getExpectedHostnames();
    const { ok } = await verifyTurnstileToken({
      token,
      remoteIp: clientIp,
      expectedAction: "contact",
      expectedHostnames,
    });
    if (!ok) {
      return {
        success: false,
        message: "Verification failed. Please refresh and try again.",
      };
    }
  } else if (process.env.TURNSTILE_SECRET) {
    // Secret configured but no token — likely bot or widget not rendered
    const expectedHostnames = getExpectedHostnames();
    if (expectedHostnames.size > 0) {
      return {
        success: false,
        message: "Please complete the verification and try again.",
      };
    }
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error?.message ?? "Invalid submission",
    };
  }
  if (parsed.data.website) {
    return { success: true, message: "Thanks — we'll be in touch soon." };
  }

  const { name, email, phone, service, message } = parsed.data;
  const serviceLabel = getServiceLabel(service);

  try {
    await emailProvider.send({
      to: getRecipients(service),
      subject: `New enquiry: ${serviceLabel} — ${name}`,
      replyTo: email,
      react: createElement(ContactNotification, {
        name,
        email,
        phone,
        service: serviceLabel,
        message,
      }),
    });
    return { success: true, message: "Thanks — we'll be in touch soon." };
  } catch (err) {
    console.error("Contact form send failed:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again shortly.",
    };
  }
}

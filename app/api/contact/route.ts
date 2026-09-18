import { NextResponse } from "next/server";
import { createElement } from "react";
import type { ZodSafeParseResult } from "zod";
import { emailProvider } from "@/lib/email";
import { getRecipients, getServiceLabel } from "@/lib/email/routing";
import { ContactNotification } from "@/lib/email/templates/contact-notification";
import {
  getClientIpFromHeaders,
  getExpectedHostnames,
  verifyTurnstileToken,
} from "@/lib/turnstile";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 400 },
    );
  }

  // Turnstile gate — before any business logic
  {
    if (typeof rawBody !== "object" || rawBody === null || Array.isArray(rawBody)) {
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 400 },
      );
    }
    const bodyRecord = rawBody as Record<string, unknown>;
    const token = bodyRecord["cf-turnstile-response"];
    if (typeof token === "string" && token.length > 0) {
      const expectedHostnames = getExpectedHostnames();
      const clientIp = getClientIpFromHeaders(req.headers);
      const { ok } = await verifyTurnstileToken({
        token,
        remoteIp: clientIp,
        expectedAction: "contact",
        expectedHostnames,
      });
      if (!ok) {
        return NextResponse.json(
          { success: false, message: "Verification failed. Please refresh and try again." },
          { status: 403 },
        );
      }
    } else if (process.env.TURNSTILE_SECRET) {
      const expectedHostnames = getExpectedHostnames();
      if (expectedHostnames.size > 0) {
        return NextResponse.json(
          { success: false, message: "Please complete the verification and try again." },
          { status: 403 },
        );
      }
    }
  }

  let parsed: ZodSafeParseResult<{
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string;
    website?: string;
  }>;
  try {
    parsed = contactFormSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: parsed.error?.message },
        { status: 400 },
      );
    }
    if (parsed.data.website) {
      return NextResponse.json({
        success: true,
        message: "Thanks — we'll be in touch soon.",
      });
    }
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 400 },
    );
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
    return NextResponse.json({
      success: true,
      message: "Thanks — we'll be in touch soon.",
    });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { createElement } from "react";
import { emailProvider } from "@/lib/email";
import { getRecipients, getServiceLabel } from "@/lib/email/routing";
import { ContactNotification } from "@/lib/email/templates/contact-notification";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = contactFormSchema.safeParse(body);

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

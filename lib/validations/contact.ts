import { z } from "zod";
import { SERVICE_OPTIONS } from "@/lib/email/routing";

const serviceValues = SERVICE_OPTIONS.map((s) => s.value) as [
  string,
  ...string[],
];

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(100),
  email: z.email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20),
  service: z.enum(serviceValues).default("not-sure-yet"),
  message: z.string().max(2000).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

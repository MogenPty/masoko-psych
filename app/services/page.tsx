import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return <ServicesPage />;
}

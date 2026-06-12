import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import ServiceDetails from "@/components/website/ServiceDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * Render the service details page for the service identified by the route `slug`.
 *
 * @param params - A promise that resolves to an object containing the route parameter `slug`.
 * @returns A React element that renders `ServiceDetails` for the resolved `slug`.
 */
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  return <ServiceDetails slug={slug} />;
}

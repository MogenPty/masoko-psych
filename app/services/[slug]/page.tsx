import Footer from "@/components/website/Footer";
import Navbar from "@/components/website/Navbar";
import ServiceDetails from "@/components/website/ServiceDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  return <ServiceDetails slug={slug} />;
}

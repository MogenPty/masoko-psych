import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { ServiceType } from "@/types/service";

interface Props {
  service: ServiceType;
  idx: number;
}

export default function ServiceItem({ service, idx }: Props) {
  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      className="service-line"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group w-full flex items-start gap-6 lg:gap-10 py-7 focus-teal"
        style={{ textDecoration: "none" }}
      >
        <span className="flex shrink-0 font-body text-xs text-common-green tracking-widest pt-1.5 min-w-7">
          {service.number}
        </span>
        <div className="flex-1">
          <span
            className="group-hover:text-lichen-teal font-heading text-clamp block leading-[1.2] transition-colors duration-300"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
            }}
          >
            {service.title}
          </span>
          <p className="font-body text-base text-[rgba(18,29,47,0.5)] mt-1.5 font-light">
            {service.short}
          </p>
        </div>
        <div className="shrink-0 mt-1 group-hover:bg-common-green group-hover:border-common-green transition-all duration-300 w-9 h-9 flex justify-center items-center border border-[rgba(18,29,47,0.2)]">
          <ArrowRight
            size={14}
            className="group-hover:text-[#F8F5F2] transition-colors duration-300 text-clamp"
          />
        </div>
      </Link>
    </motion.div>
  );
}

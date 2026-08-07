"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/data/services";
import PageTitle from "../blocks/PageTitle";
import ServiceItem from "../blocks/ServiceItem";

export default function ServicesPage() {
  return (
    <main className="py-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <PageTitle title="Services" />

          <h1 className="h1-clamp">
            Thoughtful care
            <br />
            <em className="italic">for every stage of life.</em>
          </h1>
          <p className="max-w-140 font-light text-[rgba(18,29,47,0.6)] text-lg font-body">
            A comprehensive range of psychological services tailored to
            individuals, couples, families, and adolescents in Randburg, Soweto,
            and online.
          </p>
        </motion.div>

        {/* Service list */}
        <div>
          {SERVICES.map((service, i) => (
            <ServiceItem service={service} key={service.slug} idx={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

"use client";

import { Mail, MapPin, Phone } from "@deemlol/next-icons";
import dynamic from "next/dynamic";
import type { AddressType } from "@/data/contact-details";

const LocationMap = dynamic(() => import("./LocationMap"), { ssr: false });

interface AddressSectionProps {
  address: AddressType;
  mapPosition?: "left" | "right";
  label?: string;
}

export default function AddressSection({
  address,
  mapPosition = "right",
  label,
}: AddressSectionProps) {
  const mapPanel = (
    <div className="w-full h-full min-h-[300px]">
      {address.latitude && address.longitude && (
        <LocationMap
          lat={address.latitude}
          lng={address.longitude}
          label={label}
          zoom={address.mapZoom ?? 16}
        />
      )}
    </div>
  );

  const addressPanel = (
    <div className="flex flex-col justify-center gap-6 px-8 py-10 lg:px-12">
      {label && (
        <div className="flex items-center gap-3">
          <MapPin size={20} className="text-common-green shrink-0" />
          <h3
            className="text-lg font-medium"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-clamp)",
            }}
          >
            {label}
          </h3>
        </div>
      )}

      <div
        className="flex flex-col gap-1"
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--color-clamp)",
        }}
      >
        <p className="text-base leading-relaxed">{address.line1}</p>
        {address.line2 && (
          <p className="text-base leading-relaxed">{address.line2}</p>
        )}
        {address.line3 && (
          <p className="text-base leading-relaxed">{address.line3}</p>
        )}
        <p className="text-base leading-relaxed">
          {[address.town, address.city].filter(Boolean).join(", ")}
          {address.postalCode && ` ${address.postalCode}`}
        </p>
        {address.province && (
          <p className="text-base leading-relaxed">{address.province}</p>
        )}
        {address.country && (
          <p className="text-base leading-relaxed">{address.country}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {address.phoneNumber && (
          <a
            href={`tel:+27${address.phoneNumber.replace(/\s/g, "").replace(/^0/, "")}`}
            className="flex items-center gap-3 group"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-clamp)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
          >
            <Phone size={18} className="text-common-green shrink-0" />
            <span
              className="group-hover:text-common-green"
              style={{ transition: "color 0.3s ease" }}
            >
              {address.phoneNumber}
            </span>
          </a>
        )}

        {address.cellNumber && (
          <a
            href={`tel:+27${address.cellNumber.replace(/\s/g, "").replace(/^0/, "")}`}
            className="flex items-center gap-3 group"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-clamp)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
          >
            <Phone size={18} className="text-common-green shrink-0" />
            <span
              className="group-hover:text-common-green"
              style={{ transition: "color 0.3s ease" }}
            >
              {address.cellNumber}
            </span>
          </a>
        )}

        {address.emailAddress && (
          <a
            href={`mailto:${address.emailAddress}`}
            className="flex items-center gap-3 group"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-clamp)",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s ease",
            }}
          >
            <Mail size={18} className="text-common-green shrink-0" />
            <span
              className="group-hover:text-common-green"
              style={{ transition: "color 0.3s ease" }}
            >
              {address.emailAddress}
            </span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-0 overflow-hidden border border-border/15">
      {mapPosition === "left" ? (
        <>
          <div className="order-1">{mapPanel}</div>
          <div className="order-2">{addressPanel}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{addressPanel}</div>
          <div className="order-1 lg:order-2">{mapPanel}</div>
        </>
      )}
    </div>
  );
}

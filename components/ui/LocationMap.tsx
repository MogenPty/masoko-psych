"use client";

import L from "leaflet";
import { useEffect, useSyncExternalStore } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function createIcon(color: string) {
  return L.divIcon({
    className: "custom-marker",
    html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -40],
  });
}

const tealIcon = createIcon("#0D9488");

interface LocationMapProps {
  lat: number;
  lng: number;
  label?: string;
  zoom?: number;
}

function FlyToMarker({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [map, lat, lng]);
  return null;
}

export default function LocationMap({
  lat,
  lng,
  label,
  zoom = 15,
}: Readonly<LocationMapProps>) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className="w-full h-full min-h-[300px] flex items-center justify-center"
        style={{ backgroundColor: "var(--color-secondary)" }}
      >
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-muted-foreground)",
          }}
        >
          Loading map…
        </p>
      </div>
    );
  }

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%", minHeight: "300px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyToMarker lat={lat} lng={lng} />
      <Marker position={[lat, lng]} icon={tealIcon}>
        {label && (
          <Popup>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "14px" }}>
              {label}
            </span>
          </Popup>
        )}
      </Marker>
    </MapContainer>
  );
}

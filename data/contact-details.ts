interface ContactDetailsType {
  phoneNumber?: string;
  cellNumber?: string;
  emailAddress?: string;
  whatsAppNumber?: string;
  addresses?: AddressType[];
}

export interface AddressType {
  line1: string;
  line2?: string;
  line3?: string;
  town?: string;
  city?: string;
  postalCode: string;
  province?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  mapZoom?: number;
  phoneNumber?: string;
  cellNumber?: string;
  emailAddress?: string;
}

export const ContactDetails: ContactDetailsType = {
  whatsAppNumber: "27780169123",
  phoneNumber: "27780169123",
  cellNumber: "078 016 9123",
  emailAddress: "info@masokopsychology.co.za",
  addresses: [
    {
      line1: "567 Honeydew Rd W",
      town: "Sundowner",
      city: "Randburg",
      latitude: -26.074005,
      longitude: 27.932914,
      mapZoom: 16,
      postalCode: "2188",
      phoneNumber: "011 046 9808",
      cellNumber: "078 016 9123",
    },
    {
      line1: "9625 Tshipo St",
      town: "Protea Glen Ext 12",
      city: "Soweto",
      postalCode: "1819",
      latitude: -26.279173,
      longitude: 27.806164,
      mapZoom: 16,
      cellNumber: "078 016 9123",
    },
  ],
};

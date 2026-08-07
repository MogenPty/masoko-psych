interface ContactDetailsType {
  phoneNumber?: string;
  cellNumber?: string;
  emailAddress?: string;
  whatsAppNumber?: string;
  addresses?: AddressType[];
}

interface AddressType {
  line1: string;
  line2?: string;
  line3?: string;
  town?: string;
  city?: string;
  postalCode: string;
  province?: string;
  country?: string;
  phoneNumber?: string;
  cellNumber?: string;
  emailAddress?: string;
}

export const ContactDetails: ContactDetailsType = {
  whatsAppNumber: "27681369552",
  phoneNumber: "27765207876",
  cellNumber: "073 942 6309",
  emailAddress: "masoko@mogen.co.za",
  addresses: [
    {
      line1: "567 Honeydew Rd W",
      town: "Sundowner",
      city: "Johannesburg",
      postalCode: "2188",
      phoneNumber: "011 046 9808",
      cellNumber: "078 016 9123",
    },
    {
      line1: "9625 Tshepo St",
      town: "Protea Glen ext 12",
      city: "Soweto",
      postalCode: "2000",
      cellNumber: "078 016 9123",
    },
  ],
};

// Single source of truth for business details. Edit here and every page updates.

export const SITE = {
  name: "Bombay Lab",
  legalName: "Bombay Lab – Manomay Metallurgy",
  founded: 2003,
  founder: "Mr. Chhotelal B. Vishwakarma",
  email: "bombaylab.vishwakarma@gmail.com",
  phones: [
    { display: "+91 9869534396", tel: "+919869534396" },
    { display: "+91 9004726636", tel: "+919004726636" },
    { display: "+91 7738349012", tel: "+917738349012" },
  ],
  whatsapp: "919869534396",
  whatsappMessage: "Hello Bombay Lab, I would like a quote for testing.",
  address: [
    "26, 1st Floor, Vishnu Industrial Estate",
    "Masrani Lane, Halav Pool",
    "Kurla (W), Mumbai – 400 070",
  ],
  mapsUrl:
    "https://www.google.com/maps/place/Bombay+lab/data=!4m7!3m6!1s0x3be7c9006cc6558d:0xa5d9c8488a755ced!8m2!3d19.0746875!4d72.8832902!16s%2Fg%2F11w_njlq9j",
  mapsEmbed: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s19.0746875,72.8832902!6i16",
  hours: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 2:00 PM"],
  accreditations: ["NABL Accredited", "ISO 9001:2015"],
} as const;

export const PRIMARY_PHONE = SITE.phones[0];

export const whatsappHref = (message: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

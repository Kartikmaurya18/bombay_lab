import {
  Package,
  Archive,
  Disc,
  Droplet,
  Shirt,
  Sprout,
  Layers,
  Mountain,
  Palette,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tests: string[];
}

export interface ServiceGroup {
  name: string;
  services: Service[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    name: "Metals & Minerals",
    services: [
      {
        slug: "metals-alloys",
        icon: Layers,
        title: "Metals & Alloys",
        description: "Non-destructive XRF elemental analysis and grade identification.",
        tests: [
          "XRF Elemental Analysis",
          "Alloy Grade Identification",
          "PMI (Positive Material ID)",
          "Trace Element Analysis",
          "Spectrochemical Analysis",
        ],
      },
      {
        slug: "minerals-ores",
        icon: Mountain,
        title: "Minerals & Ores",
        description: "Compositional and physical analysis of minerals, ores and geological samples.",
        tests: ["Chemical Assay", "Moisture Content", "Particle Size Analysis", "Trace Element Analysis", "Mineralogical Study"],
      },
    ],
  },
  {
    name: "Polymers & Industrial Materials",
    services: [
      {
        slug: "plastics-polymers",
        icon: Package,
        title: "Plastics & Polymers",
        description: "Physical, mechanical and chemical testing of plastics and polymers.",
        tests: ["Melt Flow Index", "Tensile Strength", "Thermal Analysis", "Density Testing", "Polymer Identification"],
      },
      {
        slug: "rubber",
        icon: Disc,
        title: "Rubber & Rubber Products",
        description: "Physical and chemical evaluation of rubber compounds and finished products.",
        tests: ["Tensile & Elongation", "Hardness (Shore)", "Abrasion Resistance", "Ageing Testing", "Compression Set"],
      },
      {
        slug: "textiles",
        icon: Shirt,
        title: "Textile Products",
        description: "Physical and chemical testing of fabrics, yarns and finished textiles.",
        tests: ["Tensile Strength", "Color Fastness", "GSM Testing", "Shrinkage Testing", "Fibre Composition"],
      },
      {
        slug: "paper-packaging",
        icon: Archive,
        title: "Paper & Packaging",
        description: "Quality and performance testing of paper, board and packaging materials.",
        tests: ["GSM Testing", "Bursting Strength", "Moisture Content", "Compression Testing", "Sealing Strength"],
      },
      {
        slug: "adhesives-resins",
        icon: Droplet,
        title: "Adhesives & Resins",
        description: "Performance and compositional testing of adhesives, sealants and resins.",
        tests: ["Bond Strength", "Viscosity Testing", "Curing Time", "Solid Content", "Chemical Resistance"],
      },
      {
        slug: "paints-coatings",
        icon: Palette,
        title: "Paints & Coatings",
        description: "Physical and chemical testing of paints, pigments and protective coatings.",
        tests: ["Viscosity Testing", "Adhesion Testing", "Drying Time", "Opacity & Gloss", "Weathering Resistance"],
      },
    ],
  },
  {
    name: "Chemicals & Fertilizers",
    services: [
      {
        slug: "chemicals",
        icon: FlaskConical,
        title: "Acids, Solvents & Chemicals",
        description: "Purity and compositional analysis of industrial acids, solvents and chemicals.",
        tests: ["Purity Analysis", "GC-MS", "HPLC", "Titrimetric Analysis", "Heavy Metals"],
      },
      {
        slug: "soil-fertilizer",
        icon: Sprout,
        title: "Soil & Fertilizer",
        description: "Nutrient and quality analysis of soil, fertilizers and soil amendments.",
        tests: ["NPK Analysis", "Soil pH & EC", "Micronutrient Testing", "Organic Matter", "Heavy Metals"],
      },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.services);

// Category illustrations.
export const serviceImage = (slug: string) => `/assets/services/${slug}.webp`;

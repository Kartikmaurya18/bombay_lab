import {
  Atom,
  Package,
  Archive,
  Disc,
  Droplet,
  Shirt,
  Fuel,
  Flame,
  Wheat,
  PawPrint,
  Droplets,
  Sprout,
  Layers,
  Mountain,
  SprayCan,
  Palette,
  FlaskConical,
  Pill,
  Sparkles,
  Footprints,
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
    name: "Metals, Minerals & Fuels",
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
        slug: "materials-metallurgy",
        icon: Atom,
        title: "Materials & Metallurgy",
        description: "Mechanical and microstructural testing of metals, alloys and welds.",
        tests: ["Tensile Testing", "Hardness Testing", "Metallography", "Weld Testing", "Corrosion Testing"],
      },
      {
        slug: "minerals-ores",
        icon: Mountain,
        title: "Minerals & Ores",
        description: "Compositional and physical analysis of minerals, ores and geological samples.",
        tests: ["Chemical Assay", "Moisture Content", "Particle Size Analysis", "Trace Element Analysis", "Mineralogical Study"],
      },
      {
        slug: "solid-fuels",
        icon: Flame,
        title: "Coal, Coke & Solid Fuels",
        description: "Proximate and ultimate analysis of coal, coke and other solid fuels.",
        tests: ["Calorific Value", "Ash Content", "Moisture Content", "Volatile Matter", "Sulphur Content"],
      },
      {
        slug: "lubricants-petroleum",
        icon: Fuel,
        title: "Lubricants & Petroleum Products",
        description: "Physicochemical testing of oils, industrial lubricants and petroleum products.",
        tests: ["Viscosity Testing", "Flash Point", "Pour Point", "Calorific Value", "Water Content"],
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
        slug: "leather",
        icon: Footprints,
        title: "Leather Products",
        description: "Physical, mechanical and chemical testing of leather, footwear and leather goods.",
        tests: ["Tensile & Tear Strength", "Flex Resistance", "Colour Fastness", "Chromium Content", "pH of Aqueous Extract"],
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
    name: "Chemicals, Pharma & Consumer Products",
    services: [
      {
        slug: "chemicals",
        icon: FlaskConical,
        title: "Acids, Solvents & Chemicals",
        description: "Purity and compositional analysis of industrial acids, solvents and chemicals.",
        tests: ["Purity Analysis", "GC-MS", "HPLC", "Titrimetric Analysis", "Heavy Metals"],
      },
      {
        slug: "pharmaceuticals",
        icon: Pill,
        title: "Drugs & Pharmaceuticals",
        description: "Quality, purity and safety testing of drug substances, formulations and excipients.",
        tests: ["Assay & Purity", "Dissolution Testing", "Related Substances", "Microbial Limit Testing", "Heavy Metals"],
      },
      {
        slug: "cosmetics",
        icon: Sparkles,
        title: "Cosmetics",
        description: "Safety and quality testing of cosmetic and personal care formulations.",
        tests: ["pH & Viscosity", "Heavy Metals", "Microbial Limits", "Preservative Efficacy", "Stability Testing"],
      },
      {
        slug: "soaps-detergents",
        icon: SprayCan,
        title: "Soaps, Detergents & Toiletries",
        description: "Quality and performance testing of soaps, detergents and toiletries.",
        tests: ["pH Testing", "Active Matter Content", "Foam Stability", "Heavy Metals", "Microbial Limits"],
      },
    ],
  },
  {
    name: "Food, Agriculture & Environment",
    services: [
      {
        slug: "food-agriculture",
        icon: Wheat,
        title: "Food & Agriculture",
        description: "Compositional, quality and safety testing of food and agricultural products.",
        tests: ["Proximate Analysis", "Pesticide Residue", "Heavy Metals", "Microbial Testing", "Nutritional Labeling"],
      },
      {
        slug: "animal-feed",
        icon: PawPrint,
        title: "Animal Food & Feed",
        description: "Nutritional and contaminant testing of animal feed and feed ingredients.",
        tests: ["Proximate Analysis", "Mycotoxin Testing", "Amino Acid Profile", "Heavy Metals", "Microbial Contamination"],
      },
      {
        slug: "soil-fertilizer",
        icon: Sprout,
        title: "Soil & Fertilizer",
        description: "Nutrient and quality analysis of soil, fertilizers and soil amendments.",
        tests: ["NPK Analysis", "Soil pH & EC", "Micronutrient Testing", "Organic Matter", "Heavy Metals"],
      },
      {
        slug: "water-effluents",
        icon: Droplets,
        title: "Water & Effluents",
        description: "Physicochemical and microbiological testing of water and effluents.",
        tests: ["Water Quality", "Effluent Analysis", "BOD & COD", "Heavy Metals", "Microbial Testing"],
      },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.services);

// Category illustrations.
// Materials & Metallurgy has its own SVG so it doesn't duplicate the Metals artwork.
const SVG_IMAGES = new Set(["materials-metallurgy"]);
export const serviceImage = (slug: string) =>
  `/assets/services/${slug}.${SVG_IMAGES.has(slug) ? "svg" : "webp"}`;

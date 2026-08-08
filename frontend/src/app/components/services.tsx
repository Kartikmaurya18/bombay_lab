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
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";

/* ---------------- ICON WRAPPER ---------------- */

function GradientIcon({
  icon: Icon,
  gradient,
}: {
  icon: any;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 3, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
    >
      {/* glow */}
      <div
        className={`absolute inset-0 rounded-xl blur-lg opacity-40 bg-gradient-to-br ${gradient}`}
      />
      <Icon className="relative h-6 w-6 text-white" />
    </motion.div>
  );
}

/* ---------------- SERVICES ---------------- */

export function Services() {
  const services = [
    {
      icon: Layers,
      title: "Metals & Alloys",
      description:
        "Non-destructive XRF elemental analysis and grade identification for metals and alloys.",
      tests: [
        "XRF Elemental Analysis",
        "Alloy Grade Identification",
        "PMI (Positive Material ID)",
        "Trace Element Analysis",
        "Spectrochemical Analysis",
      ],
      gradient: "from-zinc-500 to-slate-400",
    },
    {
      icon: Atom,
      title: "Materials & Metallurgy",
      description:
        "Comprehensive mechanical and microstructural testing for metals, alloys, and welds.",
      tests: [
        "Tensile Testing",
        "Hardness Testing",
        "Metallography",
        "Weld Testing",
        "Corrosion Testing",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Mountain,
      title: "Minerals & Ores",
      description:
        "Compositional and physical analysis of minerals, ores, and geological samples.",
      tests: [
        "Chemical Assay",
        "Moisture Content",
        "Particle Size Analysis",
        "Trace Element Analysis",
        "Mineralogical Study",
      ],
      gradient: "from-orange-600 to-amber-500",
    },
    {
      icon: Package,
      title: "Plastics & Polymers",
      description:
        "Physical, mechanical, and chemical testing of plastic and polymer materials.",
      tests: [
        "Melt Flow Index",
        "Tensile Strength",
        "Thermal Analysis",
        "Density Testing",
        "Polymer Identification",
      ],
      gradient: "from-sky-500 to-blue-400",
    },
    {
      icon: Disc,
      title: "Rubber and Rubber Products",
      description:
        "Physical and chemical evaluation of rubber compounds and finished products.",
      tests: [
        "Tensile & Elongation",
        "Hardness (Shore)",
        "Abrasion Resistance",
        "Ageing Testing",
        "Compression Set",
      ],
      gradient: "from-slate-600 to-slate-400",
    },
    {
      icon: Shirt,
      title: "Textile Products",
      description:
        "Physical and chemical testing of fabrics, yarns, and finished textiles.",
      tests: [
        "Tensile Strength",
        "Color Fastness",
        "GSM Testing",
        "Shrinkage Testing",
        "Fibre Composition",
      ],
      gradient: "from-indigo-500 to-violet-400",
    },
    {
      icon: Archive,
      title: "Paper & Packaging Products",
      description:
        "Quality and performance testing for paper, board, and packaging materials.",
      tests: [
        "GSM Testing",
        "Bursting Strength",
        "Moisture Content",
        "Compression Testing",
        "Sealing Strength",
      ],
      gradient: "from-amber-500 to-yellow-400",
    },
    {
      icon: Droplet,
      title: "Adhesives & Resins",
      description:
        "Performance and compositional testing of adhesives, sealants, and resins.",
      tests: [
        "Bond Strength",
        "Viscosity Testing",
        "Curing Time",
        "Solid Content",
        "Chemical Resistance",
      ],
      gradient: "from-orange-500 to-red-400",
    },
    {
      icon: Fuel,
      title: "Lubricants & Petroleum Products",
      description:
        "Physicochemical testing of oils, lubricants, and petroleum-based products.",
      tests: [
        "Viscosity Testing",
        "Flash Point",
        "Pour Point",
        "Calorific Value",
        "Water Content",
      ],
      gradient: "from-yellow-600 to-amber-500",
    },
    {
      icon: Flame,
      title: "Coal, Coke & Solid Fuels",
      description:
        "Proximate and ultimate analysis of coal, coke, and other solid fuels.",
      tests: [
        "Calorific Value",
        "Ash Content",
        "Moisture Content",
        "Volatile Matter",
        "Sulphur Content",
      ],
      gradient: "from-stone-600 to-neutral-500",
    },
    {
      icon: FlaskConical,
      title: "Acids, Solvents & Chemicals",
      description:
        "Purity and compositional analysis of industrial acids, solvents, and chemicals.",
      tests: [
        "Purity Analysis",
        "GC-MS",
        "HPLC",
        "Titrimetric Analysis",
        "Heavy Metals",
      ],
      gradient: "from-purple-500 to-fuchsia-400",
    },
    {
      icon: Droplets,
      title: "Water & Effluents",
      description:
        "Physicochemical and microbiological testing of water and effluent samples.",
      tests: [
        "Water Quality",
        "Effluent Analysis",
        "BOD & COD",
        "Heavy Metals",
        "Microbial Testing",
      ],
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      icon: Sprout,
      title: "Soil & Fertilizer",
      description:
        "Nutrient and quality analysis of soil, fertilizers, and soil amendments.",
      tests: [
        "NPK Analysis",
        "Soil pH & EC",
        "Micronutrient Testing",
        "Organic Matter",
        "Heavy Metals",
      ],
      gradient: "from-green-600 to-lime-500",
    },
    {
      icon: Wheat,
      title: "Food & Agriculture Products",
      description:
        "Compositional, quality, and safety testing of food and agricultural products.",
      tests: [
        "Proximate Analysis",
        "Pesticide Residue",
        "Heavy Metals",
        "Microbial Testing",
        "Nutritional Labeling",
      ],
      gradient: "from-lime-500 to-green-400",
    },
    {
      icon: PawPrint,
      title: "Animal Food & Feed Products",
      description:
        "Nutritional and contaminant testing for animal feed and feed ingredients.",
      tests: [
        "Proximate Analysis",
        "Mycotoxin Testing",
        "Amino Acid Profile",
        "Heavy Metals",
        "Microbial Contamination",
      ],
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      icon: SprayCan,
      title: "Soaps, Detergents & Toiletries",
      description:
        "Quality and performance testing of soaps, detergents, and personal care products.",
      tests: [
        "pH Testing",
        "Active Matter Content",
        "Foam Stability",
        "Heavy Metals",
        "Microbial Limits",
      ],
      gradient: "from-fuchsia-500 to-pink-400",
    },
    {
      icon: Palette,
      title: "Paint, Pigments & Surface Coatings",
      description:
        "Physical and chemical testing of paints, pigments, and protective coatings.",
      tests: [
        "Viscosity Testing",
        "Adhesion Testing",
        "Drying Time",
        "Opacity & Gloss",
        "Weathering Resistance",
      ],
      gradient: "from-rose-500 to-red-400",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[var(--lab-gray-50)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-4">
            XRF & Analytical Testing Services in Mumbai
          </h2>
          <p className="text-lg text-[var(--lab-gray-600)] max-w-3xl mx-auto">
            Non-destructive XRF spectrometer analysis for metals, alloys, ceramics, and industrial materials — NABL accredited, fast turnaround
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full bg-white border border-[var(--lab-gray-200)] hover:shadow-xl transition group">
                <CardHeader>
                  <GradientIcon
                    icon={service.icon}
                    gradient={service.gradient}
                  />

                  <CardTitle className="text-xl mt-4">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tests.slice(0, 3).map((test, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--lab-gray-100)] text-[var(--lab-gray-700)]"
                      >
                        {test}
                      </span>
                    ))}
                    {service.tests.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--lab-gray-100)] text-[var(--lab-gray-700)]">
                        +{service.tests.length - 3} more
                      </span>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className="w-full justify-between group-hover:bg-[var(--lab-blue-light)]"
                  >
                    Request Testing
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
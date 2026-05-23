import {
  Atom,
  Building2,
  Beaker,
  TreePine,
  Pill,
  Microscope,
  Zap,
  Gauge,
  Shirt,
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

/* ---------------- ICON WRAPPER (NEW) ---------------- */

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
      icon: Atom,
      title: "Materials & Metallurgy",
      description:
        "Comprehensive testing for metals, alloys, welds, and material characterization.",
      tests: [
        "Tensile Testing",
        "Hardness Testing",
        "Metallography",
        "Chemical Analysis",
        "Corrosion Testing",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Building2,
      title: "Construction & Civil",
      description:
        "Concrete, soil, aggregate, and construction materials testing.",
      tests: [
        "Concrete Testing",
        "Soil Analysis",
        "Aggregate Testing",
        "Cement Testing",
        "Structural Analysis",
      ],
      gradient: "from-teal-500 to-emerald-400",
    },
    {
      icon: Beaker,
      title: "Chemical Analysis",
      description:
        "Advanced analytical chemistry services using modern instrumentation.",
      tests: ["GC-MS", "HPLC", "ICP-OES", "FTIR", "Wet Chemistry"],
      gradient: "from-orange-500 to-amber-400",
    },
    {
      icon: TreePine,
      title: "Environmental Testing",
      description:
        "Water, air, soil, and noise pollution analysis for compliance.",
      tests: [
        "Water Quality",
        "Air Quality",
        "Soil Testing",
        "Noise Monitoring",
        "Effluent Analysis",
      ],
      gradient: "from-green-500 to-lime-400",
    },
    {
      icon: Pill,
      title: "Pharmaceutical & Cosmetic",
      description:
        "Quality control and regulatory testing for pharma products.",
      tests: [
        "Stability Testing",
        "Dissolution",
        "Assay Testing",
        "Heavy Metals",
        "Microbial Limits",
      ],
      gradient: "from-purple-500 to-fuchsia-400",
    },
    {
      icon: Microscope,
      title: "Microbiology",
      description:
        "Comprehensive microbiological analysis of samples.",
      tests: [
        "Total Plate Count",
        "Pathogen Detection",
        "Sterility Testing",
        "Antimicrobial Testing",
        "Culture Studies",
      ],
      gradient: "from-pink-500 to-rose-400",
    },
    {
      icon: Zap,
      title: "Electrical & Electronics",
      description:
        "Safety and performance testing for electrical equipment.",
      tests: [
        "Safety Testing",
        "EMC Testing",
        "Performance Testing",
        "Component Analysis",
        "Reliability Testing",
      ],
      gradient: "from-yellow-500 to-amber-400",
    },
    {
      icon: Gauge,
      title: "Calibration Services",
      description:
        "NABL accredited calibration for measuring instruments.",
      tests: [
        "Dimensional Cal.",
        "Electrical Cal.",
        "Thermal Cal.",
        "Pressure Cal.",
        "Mass Cal.",
      ],
      gradient: "from-cyan-500 to-sky-400",
    },
    {
      icon: Shirt,
      title: "Textiles & Polymers",
      description:
        "Physical and chemical testing of textiles and polymers.",
      tests: [
        "Tensile Strength",
        "Color Fastness",
        "Polymer Analysis",
        "Petroleum Testing",
        "Lubricant Analysis",
      ],
      gradient: "from-indigo-500 to-violet-400",
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

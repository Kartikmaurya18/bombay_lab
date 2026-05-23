import { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
  Clock,
  CheckCircle2,
  Microscope,
  Beaker,
  Leaf,
  Pill
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* ---------------- SLIDES ---------------- */
const slides = [
  {
    id: 1,
    title: "XRF Spectrometer Testing Lab in Mumbai",
    subtitle: "NABL Accredited – Non-Destructive Elemental Analysis",
    description:
      "Fast, accurate XRF analysis for ferrous & non-ferrous metals, alloys, ceramics, and ash residue. Trusted by manufacturers, steel plants & foundries across Mumbai.",
    image: "/assets/hero/hero1.avif",
    icon: Microscope,
    highlight: "XRF Metal & Elemental Testing"
  },
  {
    id: 2,
    title: "Advanced Chemical Analysis",
    subtitle: "NABL & UKAS Certified Laboratory",
    description:
      "State-of-the-art chemical testing with precision instrumentation and expert analysis for industrial applications",
        image: "/assets/hero/hero2.avif",

    icon: Beaker,
    highlight: "Chemical & Environmental Testing"
  },
  {
    id: 3,
    title: "Pharmaceutical & Cosmetic Excellence",
    subtitle: "Trusted by 2000+ Organizations",
    description:
      "Rigorous pharmaceutical testing ensuring compliance with global regulatory standards and quality benchmarks",
        image: "/assets/hero/hero3.avif",
    icon: Pill,
    highlight: "Pharmaceutical & Cosmetic Testing"
  },
  {
    id: 4,
    title: "Quality Assurance You Can Trust",
    subtitle: "99.8% Accuracy • 24-48h TAT",
    description:
      "From food safety to construction materials, delivering certified results that drive informed decisions",
    image: "/assets/hero/hero4.avif",
    icon: CheckCircle2,
    highlight: "Quality Control & Calibration"
  },
  {
    id: 5,
    title: "Industrial Testing Solutions",
    subtitle: "Electrical, Textiles & Polymers",
    description:
      "Comprehensive testing solutions for diverse industries with cutting-edge equipment and expert methodologies",
        image: "/assets/hero/hero5.avif",
    icon: Leaf,
    highlight: "Industrial & Specialized Testing"
  }
];

/* ---------------- TRUST BADGES ---------------- */

const trustBadges = [
  { icon: Award, text: "ISO 17025" },
  { icon: Shield, text: "NABL Certified" },
  { icon: Clock, text: "24–48h TAT" },
  { icon: CheckCircle2, text: "99.8% Accuracy" }
];

/* ---------------- HERO SLIDER ---------------- */

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            const isActive = selectedIndex === index;

            return (
              <div
                key={slide.id}
                className="relative h-full flex-[0_0_100%] overflow-hidden"
              >
                {/* ---------- MOVING BACKGROUND ---------- */}
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  initial={{ scale: 1.1, x: 0, y: 0 }}
                  animate={
                    isActive
                      ? {
                          scale: 1.25,
                          x: index % 2 === 0 ? -40 : 40,
                          y: index % 2 === 0 ? -20 : 20
                        }
                      : { scale: 1.1, x: 0, y: 0 }
                  }
                  transition={{ duration: 10, ease: "linear" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F3460]/95 via-[#0F3460]/85 to-[#0A7373]/70" />

                {/* ---------- CONTENT ---------- */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6 }}
                          className="max-w-3xl text-white"
                        >
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-orange-500 to-teal-500 flex items-center justify-center">
                              <Icon className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold">
                                Bombay<span className="text-orange-400">Lab</span>
                              </h3>
                              <p className="text-sm text-gray-300">
                                {slide.highlight}
                              </p>
                            </div>
                          </div>

                          <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {slide.title}
                          </h1>

                          <p className="text-lg text-gray-200 mb-8">
                            {slide.description}
                          </p>

                          <div className="flex gap-4 mb-10">
                            <Button className="bg-orange-500 hover:bg-orange-600">
                              Request Quote <ArrowRight className="ml-2" />
                            </Button>
                            <Button variant="outline">View Services</Button>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {trustBadges.map((b, i) => {
                              const BIcon = b.icon;
                              return (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg"
                                >
                                  <BIcon className="text-orange-400" size={18} />
                                  <span className="text-sm">{b.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrows */}
      {/* <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button> */}
    </section>
  );
}

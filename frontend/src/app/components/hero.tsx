import { ArrowRight, Phone, ShieldCheck, CalendarCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { PRIMARY_PHONE, SITE } from "@/app/data/site";

const xrfCapabilities = [
  "Ferrous & non-ferrous metals",
  "Ash residue & oxides",
  "Ceramics & refractories",
  "Metal salts",
];

const facts = [
  { icon: ShieldCheck, text: "NABL & ISO 9001:2015" },
  { icon: CalendarCheck, text: `Since ${SITE.founded}` },
  { icon: Timer, text: "Reports in 24–48 h" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F3460] text-white">
      <img
        src="/assets/hero/hero1.avif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F3460]/95 via-[#0F3460]/85 to-[#0A7373]/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-200">
            New: XRF Spectrometer now in-house
          </span>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            XRF &amp; Analytical Testing Lab in Mumbai
          </h1>

          <p className="mb-4 text-base text-gray-200 sm:text-lg">
            Accurate, non-destructive elemental analysis and material testing across 20 industries,
            trusted by manufacturers, steel plants and foundries since {SITE.founded}.
          </p>

          <p className="mb-8 text-sm text-gray-300">
            XRF analysis for {xrfCapabilities.join(" · ")}
          </p>

          <div className="mb-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--lab-orange)] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--lab-orange)]/90"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className="inline-flex h-11 items-center gap-2 rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {PRIMARY_PHONE.display}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-200">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-orange-300" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

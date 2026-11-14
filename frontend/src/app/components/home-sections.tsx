import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  ScanSearch,
  ShieldCheck,
  Timer,
  MessageCircle,
  Award,
  CalendarCheck,
} from "lucide-react";
import { SITE, whatsappHref } from "@/app/data/site";
import { ALL_SERVICES, serviceImage } from "@/app/data/services";

/* ---------------- TRUST STRIP ---------------- */

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, text: "NABL Accredited" },
    { icon: Award, text: "ISO 9001:2015 Certified" },
    { icon: CalendarCheck, text: `Serving industry since ${SITE.founded}` },
  ];
  return (
    <section aria-label="Accreditations" className="border-b border-[var(--lab-gray-200)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-sm font-medium text-[var(--lab-gray-700)] sm:px-6 lg:justify-between lg:px-8">
        {items.map(({ icon: Icon, text }) => (
          <span key={text} className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-[var(--lab-blue-primary)]" />
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES OVERVIEW (compact tiles) ---------------- */

export function ServicesOverview() {
  return (
    <section id="services" className="bg-[var(--lab-gray-50)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[var(--lab-blue-dark)] sm:text-4xl">What we test</h2>
            <p className="text-[var(--lab-gray-600)]">
              {ALL_SERVICES.length} testing categories under one roof.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--lab-blue-primary)] hover:underline"
          >
            View all tests <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {ALL_SERVICES.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                to={`/services#${slug}`}
                className="group flex h-full flex-col items-center rounded-xl border border-[var(--lab-gray-200)] bg-white p-4 text-center transition hover:border-[var(--lab-blue-primary)] hover:shadow-md"
              >
                <img
                  src={serviceImage(slug)}
                  alt=""
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="mb-3 h-20 w-20 object-contain transition-transform group-hover:scale-105 sm:h-24 sm:w-24"
                />
                <span className="text-sm font-medium leading-snug text-[var(--lab-blue-dark)]">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- WHY BOMBAY LAB ---------------- */

export function WhyBombayLab() {
  const points = [
    {
      icon: BadgeCheck,
      title: "Accurate & traceable",
      text: "ISO 9001:2015 quality system with calibrated instruments.",
    },
    {
      icon: Timer,
      title: "Fast reports",
      text: "Results in 24–48 hours for most tests.",
    },
    {
      icon: ScanSearch,
      title: "Non-destructive XRF",
      text: "Elemental analysis that keeps your sample intact.",
    },
    {
      icon: Handshake,
      title: "One lab, 20 industries",
      text: "Metals, polymers, chemicals, food, water and more under one roof.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-3xl font-bold text-[var(--lab-blue-dark)] sm:text-4xl">
            Trusted testing partner since {SITE.founded}
          </h2>
          <p className="mb-6 text-[var(--lab-gray-600)]">
            Founded by {SITE.founder}, Bombay Lab has spent over 20 years helping manufacturers,
            research institutions and foundries make decisions with reliable data.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--lab-blue-primary)] hover:underline"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--lab-blue-light)]">
                <Icon className="h-5 w-5 text-[var(--lab-blue-primary)]" />
              </span>
              <div>
                <h3 className="mb-1 font-semibold text-[var(--lab-blue-dark)]">{title}</h3>
                <p className="text-sm text-[var(--lab-gray-600)]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- CTA BAND ---------------- */

export function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-[#0F3460] to-[#0A7373] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="mb-1 text-2xl font-bold sm:text-3xl">Have a sample to test?</h2>
          <p className="text-gray-200">Tell us what you need and we'll send you a quote.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-[var(--lab-orange)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--lab-orange)]/90"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-white/40 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

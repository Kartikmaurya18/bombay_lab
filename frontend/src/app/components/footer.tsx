import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE, PRIMARY_PHONE, whatsappHref } from "@/app/data/site";
import { ALL_SERVICES } from "@/app/data/services";

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "About Us", to: "/about" },
  { name: "Our Process", to: "/process" },
  { name: "Contact", to: "/contact" },
];

// Most-requested categories; the full list lives on /services.
const featuredServices = ALL_SERVICES.filter((s) =>
  ["metals-alloys", "minerals-ores", "chemicals", "soil-fertilizer"].includes(s.slug),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--lab-gray-900)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <img src="/assets/hero/logo-bombay-lab.png" alt="" width={36} height={36} className="h-9 w-9" />
              </span>
              <span className="text-lg font-semibold italic">
                BombayLab
              </span>
            </Link>
            <p className="mb-5 text-sm text-gray-400">
              NABL accredited, ISO 9001:2015 certified testing laboratory in Mumbai since {SITE.founded}.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Our Services</h3>
            <ul className="space-y-2.5">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-white">
                  View all {ALL_SERVICES.length} categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href={`tel:${PRIMARY_PHONE.tel}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" /> {PRIMARY_PHONE.display}
                </a>
              </li>
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-white">
                  <Mail className="h-4 w-4 flex-shrink-0" /> {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    {SITE.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-xs leading-relaxed text-gray-500">
            © {year} {SITE.legalName}. All rights reserved. Test reports are issued under our scope of accreditation;
            contact the lab for specific test methods.
          </p>
        </div>
      </div>
    </footer>
  );
}

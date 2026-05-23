import { motion } from "motion/react";
import { Sparkles, Phone, ChevronRight, Atom } from "lucide-react";

const capabilities = [
  "Ferrous & Non-Ferrous Metals",
  "Ash Residue & Oxides",
  "Ceramics & Refractories",
  "Metal Salts",
];

const contacts = [
  { number: "+91 9004726636", href: "tel:+919004726636" },
  { number: "+91 9869534396", href: "tel:+919869534396" },
  { number: "+91 7738349012", href: "tel:+917738349012" },
];

export function AnnouncementBanner() {
  return (
    <section
      aria-label="New Equipment Announcement"
      className="relative overflow-hidden bg-gradient-to-r from-[#0F3460] via-[#1a4a7a] to-[#0A7373] py-12 sm:py-16"
    >
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/20 px-4 py-1.5 text-sm font-semibold text-orange-300">
            <Sparkles className="h-4 w-4" />
            Exciting New Addition
          </span>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg">
                <Atom className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                  New Equipment
                </p>
                <h2 className="text-2xl font-bold sm:text-3xl">XRF Spectrometer</h2>
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-gray-200">
              We are now fully equipped to perform{" "}
              <strong className="text-white">
                advanced, non-destructive elemental analysis
              </strong>{" "}
              using our brand-new XRF Spectrometer at{" "}
              <strong className="text-orange-300">Bombay Lab</strong>.
            </p>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Analysis Capabilities:
            </p>
            <ul className="space-y-2.5">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-100">
                  <ChevronRight className="h-4 w-4 flex-shrink-0 text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right — contact card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <h3 className="mb-1 text-xl font-bold text-white">
                Bombay Lab
              </h3>
              <p className="mb-6 text-sm text-gray-300">
                Schedule a test or get more information today
              </p>

              <ul className="space-y-3">
                {contacts.map(({ number, href }) => (
                  <li key={number}>
                    <a
                      href={href}
                      className="flex items-center gap-3 rounded-lg bg-white/10 p-3 text-white transition hover:bg-white/20"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 text-orange-400" />
                      {number}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-center text-xs text-gray-400">
                  Precise &bull; Reliable &bull; Efficient Material Testing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

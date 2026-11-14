import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICE_GROUPS, ALL_SERVICES, serviceImage } from "@/app/data/services";

/* Full services catalogue, grouped by industry, with every test visible. */
export function Services() {
  return (
    <section id="services" className="bg-[var(--lab-gray-50)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <h1 className="mb-3 text-3xl font-bold text-[var(--lab-blue-dark)] sm:text-4xl lg:text-5xl">
            XRF &amp; Analytical Testing Services in Mumbai
          </h1>
          <p className="text-lg text-[var(--lab-gray-600)]">
            {ALL_SERVICES.length} testing categories, NABL accredited, with reports in 24–48 hours.
            Can't find your test?{" "}
            <Link to="/contact" className="font-semibold text-[var(--lab-blue-primary)] hover:underline">
              Ask us
            </Link>
            .
          </p>
        </header>

        {/* Jump links */}
        <nav aria-label="Service groups" className="mb-12 flex flex-wrap gap-2">
          {SERVICE_GROUPS.map((group) => (
            <a
              key={group.name}
              href={`#${slugify(group.name)}`}
              className="rounded-full border border-[var(--lab-gray-200)] bg-white px-4 py-1.5 text-sm font-medium text-[var(--lab-gray-700)] transition hover:border-[var(--lab-blue-primary)] hover:text-[var(--lab-blue-primary)]"
            >
              {group.name}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {SERVICE_GROUPS.map((group) => (
            <section key={group.name} id={slugify(group.name)} className="scroll-mt-24">
              <h2 className="mb-6 text-xl font-bold text-[var(--lab-blue-dark)] sm:text-2xl">{group.name}</h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map(({ slug, title, description, tests }) => (
                  <article
                    key={slug}
                    id={slug}
                    className="flex scroll-mt-24 flex-col rounded-xl border border-[var(--lab-gray-200)] bg-white p-6 transition hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        src={serviceImage(slug)}
                        alt=""
                        width={64}
                        height={64}
                        loading="lazy"
                        decoding="async"
                        className="h-16 w-16 flex-shrink-0 object-contain"
                      />
                      <h3 className="text-lg font-semibold text-[var(--lab-blue-dark)]">{title}</h3>
                    </div>

                    <p className="mb-4 text-sm text-[var(--lab-gray-600)]">{description}</p>

                    <ul className="mb-5 flex flex-wrap gap-2">
                      {tests.map((test) => (
                        <li
                          key={test}
                          className="rounded-full bg-[var(--lab-gray-100)] px-2.5 py-1 text-xs text-[var(--lab-gray-700)]"
                        >
                          {test}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      state={{ service: title }}
                      className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--lab-blue-primary)] hover:underline"
                    >
                      Get a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </section>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

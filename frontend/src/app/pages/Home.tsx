import { lazy, Suspense } from "react";
import { Hero } from "../components/hero";
import { TrustStrip, ServicesOverview, WhyBombayLab, CtaBand } from "../components/home-sections";

// The contact form (react-hook-form, Select, Tabs) is the heaviest section,
// so it's split into its own chunk and loads after the content above it.
const ContactInquiry = lazy(() =>
  import("../components/contact-inquiry").then((m) => ({ default: m.ContactInquiry })),
);

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <WhyBombayLab />
      <CtaBand />
      <Suspense fallback={<div style={{ minHeight: "80vh" }} />}>
        <ContactInquiry />
      </Suspense>
    </>
  );
}

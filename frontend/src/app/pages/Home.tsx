import { HeroSlider } from "../components/hero-slider";
import { AnnouncementBanner } from "../components/announcement-banner";
import { Services } from "../components/services";
import { AboutAccreditations } from "../components/about-accreditations";
import { ProcessFlow } from "../components/process-flow";
import { ContactInquiry } from "../components/contact-inquiry";

export function Home() {
  return (
    <>
      <HeroSlider />
      <AnnouncementBanner />
      <Services />
      <AboutAccreditations />
      <ProcessFlow />
      <ContactInquiry />
    </>
  );
}
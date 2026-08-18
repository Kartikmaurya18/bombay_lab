import { FlaskConical, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Accreditations", href: "#accreditations" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Materials & Metallurgy",
    "Construction Testing",
    "Chemical Analysis",
    "Environmental Testing",
    "Food & Beverage",
    "Calibration Services",
  ];

  const compliance = [
    "ISO 9001:2015",
    "NABL Accredited",
    "UKAS Certified",
    "FSSAI Approved",
    "Privacy Policy",
    "Terms of Service",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[var(--lab-gray-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-[var(--lab-blue-primary)] flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold">BombayLab</div>
                  <div className="text-xs text-gray-400">Testing & Certification</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                ISO 9001:2015 accredited laboratory providing world-class testing services across multiple domains since 2005.
              </p>
              <div className="space-y-3">
                <a href="tel:+9869534396" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>9869534396</span>
                </a>
                <a href="mailto:bombaylab.vishwakarma@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  <span> bombaylab.vishwakarma@gmail.com</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>26, 1st Floor, Vishnu Industrial Estate,
Masrani Lane, Halav Pool,<br />Kurla (W), Mumbai – 400 070</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-base mb-4">Our Services</h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection("#services")}
                      className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance & Legal */}
            <div>
              <h3 className="font-semibold text-base mb-4">Compliance & Legal</h3>
              <ul className="space-y-2.5">
                {compliance.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} BombayLab . All rights reserved. | Accreditation No: T-12345
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-8 w-8 rounded-full bg-gray-800 hover:bg-[var(--lab-blue-primary)] flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 py-4">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            All testing is performed in accordance with ISO 9001:2015 standards. Test reports are issued under our scope of accreditation. 
            For specific test methods and accreditation details, please contact our laboratory.
          </p>
        </div>
      </div>
    </footer>
  );
}

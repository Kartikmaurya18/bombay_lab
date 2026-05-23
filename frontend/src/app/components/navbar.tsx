import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useNavigate } from "react-router-dom";


/* ---------------- LOGO COMPONENT ---------------- */
function Logo({ onClick }: { onClick: () => void }) {

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer"
    >
      {/* Optimized responsive logo for Vite/React */}
      <img
        src="/assets/hero/logo-bombay-lab.png"
        alt="Bombay Lab logo"
        className="h-8 sm:h-9 w-auto select-none"
        width={160}
        height={40}
        loading="eager"
        decoding="sync"
      />
      <span className="italic text-lg sm:text-xl font-semibold tracking-tight text-[var(--lab-blue-dark)]">
        Bombay<span className="text-[var(--lab-blue-primary)]">Lab</span>
      </span>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Accreditations", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const goTo = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo onClick={() => goTo("/")} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => goTo(link.path)}
                className="px-3 py-2 text-sm font-medium text-[var(--lab-gray-700)] 
                           hover:text-[var(--lab-blue-primary)] 
                           hover:bg-[var(--lab-blue-light)] 
                           rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9869534396"
              className="flex items-center gap-2 text-sm text-[var(--lab-gray-600)] hover:text-[var(--lab-blue-primary)]"
            >
              <Phone className="h-4 w-4" />
              9869534396
            </a>

            <Button
              onClick={() => goTo("/contact")}
              className="bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90 shadow-sm hover:shadow-md transition-all"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">

                  {/* Mobile Logo */}
                  <div className="pb-6 border-b">
                    <Logo onClick={() => goTo("/" )} />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => goTo(link.path)}
                        className="text-left px-4 py-3 text-base font-medium text-[var(--lab-gray-700)]
                                   hover:text-[var(--lab-blue-primary)]
                                   hover:bg-[var(--lab-blue-light)]
                                   rounded-md transition-colors"
                      >
                        {link.name}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="flex flex-col gap-4 pt-6 border-t">
                    <a
                      href="tel:+919869534396"
                      className="flex items-center gap-3 text-sm text-[var(--lab-gray-600)]"
                    >
                      <Phone className="h-5 w-5" />
                      9869534396
                    </a>

                    <a
                      href="mailto:info@bombaylab.com"
                      className="flex items-center gap-3 text-sm text-[var(--lab-gray-600)]"
                    >
                      <Mail className="h-5 w-5" />
                      info@bombaylab.com
                    </a>

                    <Button
                      onClick={() => goTo("/contact")}
                      className="w-full bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90 shadow-sm"
                    >
                      Get Quote
                    </Button>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}

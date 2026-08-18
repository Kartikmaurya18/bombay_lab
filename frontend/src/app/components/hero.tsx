import { ArrowRight, Award, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Award, text: "ISO 9001:2015 Accredited" },
    { icon: Shield, text: "NABL & UKAS Certified" },
    { icon: Clock, text: "24-48 Hour TAT" },
    { icon: CheckCircle2, text: "99.8% Accuracy Rate" },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-[var(--lab-blue-light)] via-white to-[var(--lab-teal-light)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBGMzQ2MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lab-orange-light)] text-[var(--lab-orange)] text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>Trusted by 2000+ Organizations</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lab-blue-dark)] leading-tight mb-6">
              Precision Testing for
              <span className="block text-[var(--lab-teal)] mt-2">Critical Decisions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--lab-gray-600)] mb-8 max-w-2xl mx-auto lg:mx-0">
              ISO 9001:2015 accredited testing laboratory providing comprehensive analytical services across 10+ domains. Delivering accurate, certified results with industry-leading turnaround times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90 text-base h-12 px-8 group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="border-[var(--lab-blue-primary)] text-[var(--lab-blue-primary)] hover:bg-[var(--lab-blue-light)] text-base h-12 px-8"
              >
                View Services
              </Button>
            </div>

            {/* Features Grid - Mobile: 2 cols, Desktop: 4 cols */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex flex-col items-center lg:items-start gap-2 p-3 rounded-lg bg-white/60 backdrop-blur"
                  >
                    <Icon className="h-5 w-5 text-[var(--lab-teal)]" />
                    <span className="text-xs sm:text-sm font-medium text-[var(--lab-gray-700)] text-center lg:text-left">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/hero/hero6.jpg"
                alt="Laboratory testing equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--lab-blue-dark)]/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[var(--lab-teal-light)] flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-[var(--lab-teal)]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--lab-blue-dark)]">15,000+</div>
                  <div className="text-sm text-[var(--lab-gray-600)]">Tests Completed Monthly</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

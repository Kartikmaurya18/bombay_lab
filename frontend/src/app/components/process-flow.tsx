import { MessageSquare, FileCheck, FlaskConical, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export function ProcessFlow() {
  const navigate = useNavigate();
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Inquiry & Quote",
      description: "Contact us with your testing requirements. Get a detailed quote within 2 business hours.",
      color: "bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)]"
    },
    {
      icon: FileCheck,
      number: "02",
      title: "Sample Submission",
      description: "Submit samples with proper documentation. We offer pickup services or drop-off options.",
      color: "bg-[var(--lab-teal-light)] text-[var(--lab-teal)]"
    },
    {
      icon: FlaskConical,
      number: "03",
      title: "Testing & Analysis",
      description: "Expert analysts perform tests using calibrated equipment following standard protocols.",
      color: "bg-[var(--lab-orange-light)] text-[var(--lab-orange)]"
    },
    {
      icon: FileText,
      number: "04",
      title: "Report Generation",
      description: "Comprehensive test reports prepared with detailed findings and certifications.",
      color: "bg-purple-50 text-purple-700"
    },
    {
      icon: CheckCircle,
      number: "05",
      title: "Delivery & Support",
      description: "Reports delivered via email/portal. Technical support available for report interpretation.",
      color: "bg-green-50 text-green-700"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[var(--lab-gray-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)] text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-4">
            Simple 5-Step Process
          </h2>
          <p className="text-lg text-[var(--lab-gray-600)] max-w-3xl mx-auto">
            From inquiry to report delivery, we've streamlined every step for your convenience
          </p>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--lab-blue-primary)] via-[var(--lab-teal)] to-green-600 opacity-20"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 border-[var(--lab-gray-200)] h-full group">
                      <CardContent className="p-6 text-center">
                        <div className={`h-16 w-16 mx-auto rounded-2xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="text-xs font-bold text-[var(--lab-gray-400)] mb-2">{step.number}</div>
                        <h3 className="font-semibold text-lg text-[var(--lab-blue-dark)] mb-3">{step.title}</h3>
                        <p className="text-sm text-[var(--lab-gray-600)] leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between cards */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 -right-2 z-20">
                        <div className="h-8 w-8 rounded-full bg-white shadow-md flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-[var(--lab-teal)]" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="border-[var(--lab-gray-200)] hover:shadow-lg transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[var(--lab-gray-400)]">{step.number}</span>
                          <h3 className="font-semibold text-lg text-[var(--lab-blue-dark)]">{step.title}</h3>
                        </div>
                        <p className="text-sm text-[var(--lab-gray-600)] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-[var(--lab-blue-primary)] to-[var(--lab-teal)] opacity-30"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-[var(--lab-gray-600)] mb-4">
            Ready to get started? Our team is here to guide you through every step.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--lab-orange)] text-white rounded-lg hover:bg-[var(--lab-orange)]/90 transition-colors font-medium"
          >
            Start Your Testing Project
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

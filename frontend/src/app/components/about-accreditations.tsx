import { Shield, Award, Users, Clock, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { m } from "motion/react";

export function AboutAccreditations() {
  const stats = [
    { icon: Users, value: "2000+", label: "Active Clients" },
    { icon: Target, value: "20+", label: "Years Experience" },
    { icon: Clock, value: "24-48h", label: "Avg. TAT" },
    { icon: TrendingUp, value: "15K+", label: "Tests/Month" },
  ];

  const accreditations = [
    {
      icon: Shield,
      name: "NABL Accreditation",
      description: "National Accreditation Board for Testing & Calibration Laboratories",
    },
    {
      icon: Award,
      name: "ISO 9001:2015",
      description: "Certified Quality Management System",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous quality control measures and participation in proficiency testing programs ensure reliable results."
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Experienced analysts and chemists with deep domain expertise."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Industry-leading TAT without compromising quality. Rush testing available for critical samples."
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Clear communication, quick quotes, and reports in the format you need."
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)] text-sm font-medium mb-4">
  About Us
</div>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-6">
  Trusted Testing Partner Since 2003
</h2>

<p className="text-lg text-[var(--lab-gray-600)] mb-6 leading-relaxed">
  Founded in <strong>2003</strong> by <strong>Mr. Chhotelal B. Vishwakarma</strong>, Bombay Lab was established with a clear vision — to deliver uncompromising accuracy, integrity, and reliability in analytical testing. What began as a modest laboratory has evolved into a respected and trusted name across the Indian testing and research ecosystem.
</p>

<p className="text-base text-[var(--lab-gray-600)] mb-6 leading-relaxed">
  We specialize in comprehensive analysis of <strong>metals, minerals, oxides, ceramics, and refractories</strong>, supporting industries with precise data that drives quality assurance and informed decision-making. Our laboratory is equipped with advanced instrumentation and follows stringent quality protocols to ensure consistent and dependable results.
</p>

<p className="text-base text-[var(--lab-gray-600)] mb-8 leading-relaxed">
  With over <strong>20 years of experience</strong>, Bombay Lab has built long-standing partnerships with manufacturers, research institutions, and academic organizations. Our commitment to scientific rigor, timely reporting, and client-focused service continues to position us as a preferred partner for analytical testing and quality control.
</p>


              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-[var(--lab-gray-50)] border border-[var(--lab-gray-200)]"
                    >
                      <Icon className="h-6 w-6 text-[var(--lab-teal)] mb-2" />
                      <div className="text-2xl sm:text-3xl font-bold text-[var(--lab-blue-dark)]">{stat.value}</div>
                      <div className="text-sm text-[var(--lab-gray-600)]">{stat.label}</div>
                    </m.div>
                  );
                })}
              </div>
            </m.div>

            {/* Right Content - Image */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/hero/about.jpg"
                  alt="Laboratory team at work"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--lab-blue-dark)]/30 to-transparent"></div>
              </div>
            </m.div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 sm:mt-20">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--lab-blue-dark)] mb-4">
                Why Choose Bombay Lab?
              </h3>
              <p className="text-lg text-[var(--lab-gray-600)] max-w-2xl mx-auto">
                Industry-leading expertise, technology, and commitment to client success
              </p>
            </m.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow border-[var(--lab-gray-200)]">
                      <CardContent className="pt-6">
                        <div className="h-12 w-12 mx-auto rounded-lg bg-[var(--lab-teal-light)] flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-[var(--lab-teal)]" />
                        </div>
                        <h4 className="font-semibold text-lg text-[var(--lab-blue-dark)] mb-2">{item.title}</h4>
                        <p className="text-sm text-[var(--lab-gray-600)]">{item.description}</p>
                      </CardContent>
                    </Card>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section id="accreditations" className="py-16 sm:py-20 lg:py-24 bg-[var(--lab-gray-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lab-blue-light)] text-[var(--lab-blue-primary)] text-sm font-medium mb-4">
              Certifications & Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-4">
              Accredited & Certified
            </h2>
            <p className="text-lg text-[var(--lab-gray-600)] max-w-3xl mx-auto">
              Our accreditations demonstrate our commitment to international quality standards and regulatory compliance
            </p>
          </m.div>

          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {accreditations.map(({ icon: Icon, name, description }) => (
              <Card key={name} className="h-full border-[var(--lab-gray-200)]">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--lab-blue-light)]">
                    <Icon className="h-6 w-6 text-[var(--lab-blue-primary)]" />
                  </span>
                  <div>
                    <h4 className="mb-1 font-semibold text-[var(--lab-blue-dark)]">{name}</h4>
                    <p className="text-sm text-[var(--lab-gray-600)]">{description}</p>
                    <p className="mt-2 text-xs text-[var(--lab-gray-600)]">Certificate available on request</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Compliance Statement */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-[var(--lab-gray-200)] shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-[var(--lab-blue-light)] flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-[var(--lab-blue-primary)]" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[var(--lab-blue-dark)] mb-2">Quality Management System</h4>
                <p className="text-sm text-[var(--lab-gray-600)] leading-relaxed">
                  Our laboratory operates under a robust quality management system compliant with ISO 9001:2015 standards. We maintain strict quality control protocols, participate in regular proficiency testing programs, and undergo periodic external audits to ensure the highest level of service quality and data integrity.
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import { motion } from "motion/react";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { LuClock } from "react-icons/lu";

/* ---------------- TYPES ---------------- */

interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

interface SampleFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  sampleDescription: string;
  quantity: string;
  urgency: string;
  additionalRequirements: string;
}

/* ---------------- ICON BADGE ---------------- */

function DynamicContactIcon({
  icon: Icon,
  gradient,
}: {
  icon: any;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 3, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative h-10 w-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
    >
      <div className={`absolute inset-0 blur-lg opacity-40 bg-gradient-to-br ${gradient}`} />
      <Icon className="relative h-5 w-5 text-white" />
    </motion.div>
  );
}

/* ---------------- COMPONENT ---------------- */

export function ContactInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryForm = useForm<InquiryFormData>();
  const sampleForm = useForm<SampleFormData>();

  const apiBase = import.meta.env.VITE_API_URL || "";

  const buildApiUrl = (path: string) => {
    const base = apiBase.replace(/\/$/, "");
    const p = path.startsWith("/") ? path : `/${path}`;
    return `${base}${p}`;
  };

  const handleInquirySubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(buildApiUrl("/api/contact"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "inquiry",
          ...data,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      toast.success("Inquiry submitted successfully!", {
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      inquiryForm.reset();
    } catch (e) {
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSampleSubmit = async (data: SampleFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(buildApiUrl("/api/contact"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "sample",
          ...data,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      toast.success("Sample booking request received!", {
        icon: <CheckCircle2 className="h-5 w-5" />,
      });
      sampleForm.reset();
    } catch (e) {
      toast.error("Failed to submit sample booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- CONTACT INFO ---------------- */

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      details: ["9869534396", "9004370942"],
      action: ["tel:9869534396","tel:9004370942"],
      gradient: "from-sky-500 to-blue-500",
    },
    {
      icon: MdEmail,
      title: "Email",
      details: ["bombaylab.vishwakarma@gmail.com", "support@precisionlabs.com"],
      action: "bombaylab.vishwakarma@gmail.com",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["Chat with us instantly"],
      action: "https://wa.me/9869534396",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: SiGooglemaps,
      title: "Location",
      details: ["123 Science Park Drive", "Innovation District, CA"],
      action: "https://www.google.com/maps/place/Bombay+lab/data=!4m7!3m6!1s0x3be7c9006cc6558d:0xa5d9c8488a755ced!8m2!3d19.0746875!4d72.8832902!16s%2Fg%2F11w_njlq9j!19sChIJjVXGbADJ5zsR7Vx1ikjI2aU?authuser=0&hl=en&rclk=1",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: LuClock,
      title: "Working Hours",
      details: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 2:00 PM"],
      action: null,
      gradient: "from-gray-500 to-slate-500",
    },
  ];

  const serviceTypes = [
    "Materials & Metallurgy",
    "Construction & Civil Testing",
    "Chemical Analysis",
    "Environmental Testing",
    "Food & Beverage Testing",
    "Pharmaceutical & Cosmetic",
    "Microbiology",
    "Electrical & Electronics",
    "Calibration Services",
    "Textiles & Polymers",
    "Other / Custom Testing",
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lab-blue-dark)] mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg text-[var(--lab-gray-600)] max-w-3xl mx-auto">
            Ready to start your testing project? Our expert team is here to assist you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition">
                <CardContent className="p-4 flex gap-4">
                  <DynamicContactIcon
                    icon={info.icon}
                    gradient={info.gradient}
                  />
                  <div>
                    <div className="font-semibold text-[var(--lab-blue-dark)]">
                      {info.title}
                    </div>
                    {info.details.map((d, i) => {
                      const href = Array.isArray(info.action)
                        ? info.action[i]
                        : info.action ?? undefined;
                      return (
                        <div key={i} className="text-sm text-[var(--lab-gray-600)]">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              className="hover:text-[var(--lab-blue-primary)]"
                            >
                              {d}
                            </a>
                          ) : (
                            d
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-[var(--lab-blue-primary)] to-[var(--lab-teal)] rounded-xl p-6 text-white">
              <FileText className="h-8 w-8 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Need a Quick Quote?</h4>
              <p className="text-sm text-white/90 mb-4">
                Fill out the form and get a detailed quote within 2 business hours
              </p>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span>Fast Response Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Forms Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-[var(--lab-gray-200)]">
              <CardHeader>
                <CardTitle>Submit Your Request</CardTitle>
                <CardDescription>
                  Choose between a general inquiry or submit a sample testing request
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="inquiry" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="inquiry">General Inquiry</TabsTrigger>
                    <TabsTrigger value="sample">Sample Booking</TabsTrigger>
                  </TabsList>

                  {/* General Inquiry Form */}
                  <TabsContent value="inquiry">
                    <form onSubmit={inquiryForm.handleSubmit(handleInquirySubmit)} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-name">Full Name *</Label>
                          <Input
                            id="inquiry-name"
                            placeholder="John Doe"
                            {...inquiryForm.register("name", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-email">Email *</Label>
                          <Input
                            id="inquiry-email"
                            type="email"
                            placeholder="john@company.com"
                            {...inquiryForm.register("email", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-phone">Phone Number *</Label>
                          <Input
                            id="inquiry-phone"
                            type="tel"
                            placeholder="+1 (234) 567-890"
                            {...inquiryForm.register("phone", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-company">Company / Organization</Label>
                          <Input
                            id="inquiry-company"
                            placeholder="Your Company Name"
                            {...inquiryForm.register("company")}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-service">Service Type *</Label>
                        <Select onValueChange={(value) => inquiryForm.setValue("serviceType", value)}>
                          <SelectTrigger id="inquiry-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiry-message">Message / Requirements *</Label>
                        <Textarea
                          id="inquiry-message"
                          placeholder="Please describe your testing requirements..."
                          rows={5}
                          {...inquiryForm.register("message", { required: true })}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Inquiry
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Sample Booking Form */}
                  <TabsContent value="sample">
                    <form onSubmit={sampleForm.handleSubmit(handleSampleSubmit)} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sample-name">Full Name *</Label>
                          <Input
                            id="sample-name"
                            placeholder="John Doe"
                            {...sampleForm.register("name", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sample-email">Email *</Label>
                          <Input
                            id="sample-email"
                            type="email"
                            placeholder="john@company.com"
                            {...sampleForm.register("email", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sample-phone">Phone Number *</Label>
                          <Input
                            id="sample-phone"
                            type="tel"
                            placeholder="+1 (234) 567-890"
                            {...sampleForm.register("phone", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sample-company">Company / Organization *</Label>
                          <Input
                            id="sample-company"
                            placeholder="Your Company Name"
                            {...sampleForm.register("company", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sample-service">Testing Service Required *</Label>
                        <Select onValueChange={(value) => sampleForm.setValue("serviceType", value)}>
                          <SelectTrigger id="sample-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sample-quantity">Number of Samples *</Label>
                          <Input
                            id="sample-quantity"
                            type="number"
                            placeholder="e.g., 5"
                            {...sampleForm.register("quantity", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sample-urgency">Urgency Level *</Label>
                          <Select onValueChange={(value) => sampleForm.setValue("urgency", value)}>
                            <SelectTrigger id="sample-urgency">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                              <SelectItem value="express">Express (24-48 hours)</SelectItem>
                              <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sample-description">Sample Description *</Label>
                        <Textarea
                          id="sample-description"
                          placeholder="Describe your samples (material, condition, etc.)"
                          rows={3}
                          {...sampleForm.register("sampleDescription", { required: true })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sample-requirements">Additional Requirements</Label>
                        <Textarea
                          id="sample-requirements"
                          placeholder="Any specific test parameters or special handling requirements"
                          rows={3}
                          {...sampleForm.register("additionalRequirements")}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[var(--lab-orange)] hover:bg-[var(--lab-orange)]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Submit Sample Request
                          </>
                        )}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

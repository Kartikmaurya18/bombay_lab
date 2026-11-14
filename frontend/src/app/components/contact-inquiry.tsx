import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { toast } from "sonner";
import { m } from "motion/react";
import { SITE, whatsappHref } from "@/app/data/site";
import { ALL_SERVICES } from "@/app/data/services";

const SERVICE_TYPES = [...ALL_SERVICES.map((s) => s.title), "Other / Custom Testing"];

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

/* ---------------- API ---------------- */

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const REQUEST_TIMEOUT_MS = 15000;

// Aborts hung requests and sends an idempotency key so a server can de-dupe retries.
async function postContact(payload: Record<string, unknown>) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      signal: ctrl.signal,
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    return res;
  } finally {
    clearTimeout(timer);
  }
}

/* ---------------- CONTACT ITEM ---------------- */

interface ContactItem {
  icon: LucideIcon;
  title: string;
  lines: { text: string; href?: string; external?: boolean }[];
}

function ContactRow({ icon: Icon, title, lines }: ContactItem) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--lab-blue-light)]">
        <Icon className="h-5 w-5 text-[var(--lab-blue-primary)]" />
      </span>
      <div>
        <div className="font-semibold text-[var(--lab-blue-dark)]">{title}</div>
        {lines.map(({ text, href, external }) => (
          <div key={text} className="text-sm text-[var(--lab-gray-600)]">
            {href ? (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="hover:text-[var(--lab-blue-primary)]"
              >
                {text}
              </a>
            ) : (
              text
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- COMPONENT ---------------- */

export function ContactInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-select the service when arriving from a service card ("Get a quote").
  const location = useLocation();
  const preselected = (location.state as { service?: string } | null)?.service;
  const defaultService = preselected && SERVICE_TYPES.includes(preselected) ? preselected : undefined;

  const inquiryForm = useForm<InquiryFormData>({ defaultValues: { serviceType: defaultService } });
  const sampleForm = useForm<SampleFormData>({ defaultValues: { serviceType: defaultService } });

  const handleInquirySubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      await postContact({ type: "inquiry", ...data });

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
      await postContact({ type: "sample", ...data });

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

  const contactInfo: ContactItem[] = [
    {
      icon: Phone,
      title: "Phone",
      lines: SITE.phones.map((p) => ({ text: p.display, href: `tel:${p.tel}` })),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: [{ text: "Chat with us instantly", href: whatsappHref(), external: true }],
    },
    {
      icon: Mail,
      title: "Email",
      lines: [{ text: SITE.email, href: `mailto:${SITE.email}` }],
    },
    {
      icon: MapPin,
      title: "Lab address",
      lines: SITE.address.map((line, i) =>
        i === 0 ? { text: line, href: SITE.mapsUrl, external: true } : { text: line },
      ),
    },
    {
      icon: Clock,
      title: "Working hours",
      lines: SITE.hours.map((text) => ({ text })),
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <m.div
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
        </m.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* CONTACT INFO */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="space-y-5 rounded-xl border border-[var(--lab-gray-200)] p-6">
              {contactInfo.map((info) => (
                <ContactRow key={info.title} {...info} />
              ))}
            </div>

            <iframe
              title="Bombay Lab location on Google Maps"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full rounded-xl border border-[var(--lab-gray-200)]"
            />
          </m.div>

          {/* Forms Section */}
          <m.div
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
                            placeholder="Your name"
                            {...inquiryForm.register("name", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-email">Email *</Label>
                          <Input
                            id="inquiry-email"
                            type="email"
                            placeholder="you@company.com"
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
                            placeholder="+91 98765 43210"
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
                        <Select value={inquiryForm.watch("serviceType") ?? ""} onValueChange={(value) => inquiryForm.setValue("serviceType", value)}>
                          <SelectTrigger id="inquiry-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICE_TYPES.map((service) => (
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
                            placeholder="Your name"
                            {...sampleForm.register("name", { required: true })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sample-email">Email *</Label>
                          <Input
                            id="sample-email"
                            type="email"
                            placeholder="you@company.com"
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
                            placeholder="+91 98765 43210"
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
                        <Select value={sampleForm.watch("serviceType") ?? ""} onValueChange={(value) => sampleForm.setValue("serviceType", value)}>
                          <SelectTrigger id="sample-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICE_TYPES.map((service) => (
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
          </m.div>
        </div>
      </div>
    </section>
  );
}

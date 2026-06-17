import { motion } from "framer-motion";
import { Building2, Mail, Phone, Globe, MapPin, User, FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Impressum() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-amber-300 blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <Building2 className="h-4 w-4" />
              <span>Company Information</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Impressum
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Legal disclosure and company details as required by applicable regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl space-y-6">

            {/* Company Details Card */}
            <motion.div
              className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              {...fadeInUp}
              transition={{ delay: 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    Company Details
                  </h2>
                  <div className="mt-5">
                    <div className="rounded-lg border border-border bg-muted/30 p-6">
                      <p className="text-2xl font-bold text-foreground">Snap Outsourcing Pte. Ltd</p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Registered Address</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              8 Burn Road, #04-04<br />
                              Trivex<br />
                              Singapore 369977
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Email</p>
                            <a href="mailto:info@evisionsys.com" className="mt-1 text-sm text-accent hover:underline block">
                              info@evisionsys.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Phone</p>
                            <a href="tel:+16269359995" className="mt-1 text-sm text-accent hover:underline block">
                              +1 6269359995
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Website</p>
                            <a href="https://evisionsys.com" className="mt-1 text-sm text-accent hover:underline block">
                              evisionsys.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Responsible Person */}
            <motion.div
              className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              {...fadeInUp}
              transition={{ delay: 0.16 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    Responsible for Content
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Snap Outsourcing Pte. Ltd is responsible for all content published on this website in accordance with applicable laws and regulations.
                    </p>
                    <p>
                      The content on this website has been carefully prepared and reviewed. However, we do not guarantee the accuracy, completeness, or timeliness of the information provided.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Regulatory Information */}
            <motion.div
              className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              {...fadeInUp}
              transition={{ delay: 0.24 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    Regulatory Information
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Snap Outsourcing Pte. Ltd is registered and operates under the laws of the Republic of Singapore.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 mt-3">
                      {[
                        { label: "UEN", value: "202433440R" },
                        { label: "Jurisdiction", value: "Republic of Singapore" },
                        { label: "Business Type", value: "Private Limited Company" },
                        { label: "Industry", value: "Enterprise Technology & Cybersecurity" },
                        { label: "Data Protection", value: "Compliant with PDPA (Singapore)" },
                      ].map((item) => (
                        <div key={item.label} className="rounded-lg border border-border bg-muted/30 p-3">
                          <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                          <p className="mt-1 font-semibold text-foreground text-sm">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Pages */}
            <motion.div
              className="rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-6 sm:p-8"
              {...fadeInUp}
              transition={{ delay: 0.32 }}
            >
              <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                Related Legal Documents
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { name: "Privacy Policy", href: "/privacy-policy", desc: "How we handle your data" },
                  { name: "Cookies Policy", href: "/cookies", desc: "Our use of cookies" },
                  { name: "Legal Notice", href: "/legal-notice", desc: "Terms and disclaimers" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:shadow-md hover:border-accent/40 group"
                  >
                    <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{link.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{link.desc}</p>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

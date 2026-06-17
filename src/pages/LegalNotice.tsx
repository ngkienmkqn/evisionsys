import { motion } from "framer-motion";
import { Scale, Building2, Copyright, AlertCircle, FileText, Globe, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface LegalSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
}

function LegalSection({ icon: Icon, title, children, index }: LegalSectionProps) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
      {...fadeInUp}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
            {title}
          </h2>
          <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LegalNotice() {
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
              <Scale className="h-4 w-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Legal Notice
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Important legal information about Snap Outsourcing Pte. Ltd, our services, and the terms governing the use of this website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl space-y-6">

            <LegalSection icon={Building2} title="Company Information" index={0}>
              <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-2">
                <p className="text-lg font-semibold text-foreground">Snap Outsourcing Pte. Ltd</p>
                <p>8 Burn Road, #04-04, Trivex</p>
                <p>Singapore 369977</p>
                <p className="pt-2">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@evisionsys.com" className="text-accent hover:underline">info@evisionsys.com</a>
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> +1 6269359995
                </p>
                <p>
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a href="https://evisionsys.com" className="text-accent hover:underline">evisionsys.com</a>
                </p>
              </div>
              <p>
                Snap Outsourcing Pte. Ltd. is a company registered in Singapore, specializing in turnkey security and intelligence systems including surveillance, forensic solutions, and AI-powered video analytics.
              </p>
            </LegalSection>

            <LegalSection icon={AlertCircle} title="Disclaimer" index={1}>
              <p>
                The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about:
              </p>
              <ul className="ml-4 list-disc space-y-1 mt-2">
                <li>The completeness, accuracy, reliability, or suitability of the information, products, services, or related graphics contained on the website.</li>
                <li>The availability or uninterrupted access to the website at all times.</li>
                <li>The accuracy of any third-party information or links provided on this website.</li>
              </ul>
              <p className="mt-3">
                Any reliance you place on the information provided is strictly at your own risk. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website.
              </p>
            </LegalSection>

            <LegalSection icon={Copyright} title="Intellectual Property" index={2}>
              <p>
                All content on this website is the property of Snap Outsourcing Pte. Ltd and is protected by applicable intellectual property laws, including but not limited to:
              </p>
              <ul className="ml-4 list-disc space-y-1 mt-2">
                <li><strong>Text, Articles & Documentation:</strong> All written content, technical documentation, and publications.</li>
                <li><strong>Graphics & Visual Assets:</strong> Logos, icons, images, illustrations, and design elements.</li>
                <li><strong>Software & Code:</strong> Any proprietary software, source code, or applications accessible through this website.</li>
                <li><strong>Trademarks:</strong> The E Vision System name, logo, and all related marks.</li>
              </ul>
              <p className="mt-3">
                Unauthorized reproduction, distribution, modification, or use of any content without prior written permission from Snap Outsourcing Pte. Ltd is strictly prohibited and may result in legal action.
              </p>
            </LegalSection>

            <LegalSection icon={Globe} title="External Links" index={3}>
              <p>
                This website may contain links to third-party websites or services. These links are provided for your convenience and informational purposes only. Snap Outsourcing Pte. Ltd:
              </p>
              <ul className="ml-4 list-disc space-y-1 mt-2">
                <li>Does not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites.</li>
                <li>Is not liable for any damage or loss caused by the use of third-party services linked from this website.</li>
                <li>Encourages users to review the terms and privacy policies of any third-party websites they visit.</li>
              </ul>
            </LegalSection>

            <LegalSection icon={FileText} title="Governing Law" index={4}>
              <p>
                This legal notice and any disputes arising from or related to the use of this website shall be governed by and construed in accordance with the laws of the Republic of Singapore. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>
            </LegalSection>

            {/* Contact */}
            <motion.div
              className="rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-6 sm:p-8"
              {...fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    Contact for Legal Matters
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>For any legal inquiries, notices, or requests, please contact us:</p>
                    <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                      <p><strong className="text-foreground">Email:</strong>{" "}
                        <a href="mailto:info@evisionsys.com" className="text-accent hover:underline">info@evisionsys.com</a>
                      </p>
                      <p><strong className="text-foreground">Address:</strong> 8 Burn Road, #04-04, Trivex, Singapore 369977</p>
                    </div>
                    <p className="text-sm italic">
                      We aim to respond to all legal inquiries within 5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

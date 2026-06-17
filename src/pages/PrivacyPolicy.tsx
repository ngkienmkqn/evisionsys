import { motion } from "framer-motion";
import { Shield, Eye, Database, Users, Lock, Baby, Globe, Mail, FileText, AlertTriangle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

interface PolicySectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
}

function PolicySection({ icon: Icon, title, children, index }: PolicySectionProps) {
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

export default function PrivacyPolicy() {
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
              <Shield className="h-4 w-4" />
              <span>Your Privacy Matters</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              At Snap Outsourcing Pte. Ltd, we are committed to protecting your privacy and personal data. 
              This policy explains how we collect, use, and safeguard your information.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Effective Date: February 27, 2025 &nbsp;|&nbsp; Last Updated: February 27, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-border bg-muted/30 py-6">
        <div className="container-wide">
          <motion.div
            className="flex flex-wrap items-center gap-3 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-semibold text-foreground">Quick Navigation:</span>
            {[
              "Information We Collect",
              "How We Use Information",
              "Children's Privacy",
              "Data Sharing",
              "Data Security",
              "Data Retention",
              "Your Rights",
              "International Transfers",
              "Policy Updates",
              "Contact Us",
            ].map((item, i) => (
              <a
                key={i}
                href={`#section-${i + 1}`}
                className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/30"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl space-y-6">

            {/* Section 1: Information We Collect */}
            <div id="section-1">
              <PolicySection icon={Database} title="1. Information We Collect" index={0}>
                <p>We collect the following types of information when you interact with our services, website, and applications:</p>
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="font-semibold text-foreground">a. Information You Provide Directly</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>Name, email address, phone number, and company name when you submit contact forms or request quotes.</li>
                      <li>Account credentials if you register for our services or applications.</li>
                      <li>Payment and billing information for service subscriptions.</li>
                      <li>Messages, feedback, or support inquiries you send to us.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">b. Information Collected Automatically</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>Device information (device type, operating system, unique device identifiers).</li>
                      <li>Log data (IP address, browser type, pages visited, time spent, referral URLs).</li>
                      <li>Usage data and analytics through cookies and similar technologies.</li>
                      <li>Location data (general location based on IP address).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">c. Information from Third Parties</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>Social media profile information if you interact with us through social platforms.</li>
                      <li>Business partner referrals or integrations.</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div id="section-2">
              <PolicySection icon={Eye} title="2. How We Use Your Information" index={1}>
                <p>We use the collected information for the following purposes:</p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our products, services, and applications.</li>
                  <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send relevant service updates.</li>
                  <li><strong>Personalization:</strong> To customize your experience and deliver content relevant to your interests.</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns, monitor performance, and improve our website and services.</li>
                  <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and technical issues.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations.</li>
                  <li><strong>Marketing:</strong> To send promotional communications with your consent, which you can opt out of at any time.</li>
                </ul>
              </PolicySection>
            </div>

            {/* Section 3: Children's Privacy - CRITICAL for Google Dev Account */}
            <div id="section-3">
              <PolicySection icon={Baby} title="3. Children's Privacy" index={2}>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                    <p className="text-sm text-foreground">
                      <strong>Important Notice:</strong> Our services and applications are not directed at children under the age of 13.
                    </p>
                  </div>
                </div>
                <p>
                  Snap Outsourcing Pte. Ltd is committed to protecting the privacy of children. We comply with the Children's Online Privacy Protection Act (COPPA) and similar international regulations regarding children's data.
                </p>
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="font-semibold text-foreground">a. Age Restriction</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>Our services, websites, and applications are <strong>not intended for children under the age of 13</strong>.</li>
                      <li>We do not knowingly collect, use, or disclose personal information from children under 13 years of age.</li>
                      <li>If you are under 13, please do not use our services or provide any personal information to us.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">b. Parental & Guardian Rights</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately.</li>
                      <li>We will promptly review and delete any information that was collected from a child under 13.</li>
                      <li>Parents and guardians can request to review, update, or delete their child's information by contacting us at <strong>info@evisionsys.com</strong>.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">c. Discovery & Deletion</h3>
                    <ul className="mt-2 ml-4 list-disc space-y-1">
                      <li>If we discover that we have inadvertently collected personal information from a child under 13, we will take immediate steps to delete that information from our servers and records.</li>
                      <li>We will also notify the parent or guardian, if identifiable, about the data collection and the actions taken.</li>
                    </ul>
                  </div>
                </div>
              </PolicySection>
            </div>

            {/* Section 4: Data Sharing & Third Parties */}
            <div id="section-4">
              <PolicySection icon={Users} title="4. Data Sharing & Third-Party Services" index={3}>
                <p>We do not sell your personal information to third parties. We may share your data in the following circumstances:</p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li><strong>Service Providers:</strong> We work with trusted third-party vendors who help us operate our business (e.g., hosting, analytics, email delivery, payment processing). These providers are contractually obligated to protect your data.</li>
                  <li><strong>Analytics Partners:</strong> We use tools such as Google Analytics to understand how users interact with our services. These tools may collect information about your browsing behavior.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of our company, users, or others.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your data with third parties when you have explicitly consented to such sharing.</li>
                </ul>
              </PolicySection>
            </div>

            {/* Section 5: Data Security */}
            <div id="section-5">
              <PolicySection icon={Lock} title="5. Data Security" index={4}>
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li><strong>Encryption:</strong> Data in transit is protected using TLS/SSL encryption. Sensitive data at rest is encrypted using AES-256 standards.</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms limit access to personal data to authorized personnel only.</li>
                  <li><strong>Monitoring:</strong> We continuously monitor our systems for vulnerabilities and security threats.</li>
                  <li><strong>Incident Response:</strong> We maintain an incident response plan and will notify affected users within 72 hours of discovering a data breach, as required by applicable law.</li>
                </ul>
                <p className="mt-3 text-sm italic">
                  While we strive to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your information.
                </p>
              </PolicySection>
            </div>

            {/* Section 6: Data Retention */}
            <div id="section-6">
              <PolicySection icon={FileText} title="6. Data Retention" index={5}>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:</p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li><strong>Active Accounts:</strong> Data is retained for the duration of your account or business relationship with us.</li>
                  <li><strong>Inactive Data:</strong> Contact form submissions and inquiry data are retained for up to 24 months after the last interaction.</li>
                  <li><strong>Legal Obligations:</strong> Certain data may be retained longer if required by law, regulation, or for legitimate business purposes (e.g., tax records, dispute resolution).</li>
                  <li><strong>Deletion Requests:</strong> Upon verified request, we will delete your personal data within 30 days, unless retention is legally required.</li>
                </ul>
              </PolicySection>
            </div>

            {/* Section 7: Your Rights */}
            <div id="section-7">
              <PolicySection icon={Shield} title="7. Your Rights" index={6}>
                <p>Depending on your location and applicable privacy laws (including GDPR, PDPA, and CCPA), you may have the following rights:</p>
                <div className="grid gap-3 sm:grid-cols-2 mt-3">
                  {[
                    { title: "Right to Access", desc: "Request a copy of the personal data we hold about you." },
                    { title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
                    { title: "Right to Erasure", desc: "Request deletion of your personal data under certain conditions." },
                    { title: "Right to Restrict Processing", desc: "Request limitations on how we process your data." },
                    { title: "Right to Data Portability", desc: "Request your data in a structured, commonly used format." },
                    { title: "Right to Object", desc: "Object to processing of your data for direct marketing purposes." },
                    { title: "Right to Withdraw Consent", desc: "Withdraw consent at any time where processing is based on consent." },
                    { title: "Right to Lodge a Complaint", desc: "File a complaint with the relevant data protection authority." },
                  ].map((right) => (
                    <div key={right.title} className="rounded-lg border border-border bg-muted/30 p-3">
                      <h4 className="font-semibold text-foreground text-sm">{right.title}</h4>
                      <p className="mt-1 text-xs">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at <strong>info@evisionsys.com</strong>. We will respond to your request within 30 days.
                </p>
              </PolicySection>
            </div>

            {/* Section 8: International Data Transfers */}
            <div id="section-8">
              <PolicySection icon={Globe} title="8. International Data Transfers" index={7}>
                <p>
                  As a Singapore-based company serving clients internationally, your data may be transferred to and processed in countries outside your country of residence. We ensure that such transfers are conducted in compliance with applicable data protection laws by implementing:
                </p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li>Standard Contractual Clauses (SCCs) approved by relevant authorities.</li>
                  <li>Adequate safeguards as required by the Singapore Personal Data Protection Act (PDPA).</li>
                  <li>Data processing agreements with all third-party service providers.</li>
                </ul>
              </PolicySection>
            </div>

            {/* Section 9: Cookies & Tracking */}
            <div id="section-9">
              <PolicySection icon={Eye} title="9. Cookies & Tracking Technologies" index={8}>
                <p>We use cookies and similar technologies to enhance your experience. Types of cookies we use include:</p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality (e.g., session management, security).</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website to improve content and user experience.</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness.</li>
                </ul>
                <p className="mt-3">
                  You can control cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our website. For more details, please refer to our <a href="/cookies-policy" className="text-accent hover:underline font-medium">Cookie Policy</a>.
                </p>
              </PolicySection>
            </div>

            {/* Section 10: Policy Updates */}
            <div id="section-10">
              <PolicySection icon={FileText} title="10. Changes to This Policy" index={9}>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make significant changes:
                </p>
                <ul className="ml-4 list-disc space-y-1 mt-2">
                  <li>We will update the "Last Updated" date at the top of this page.</li>
                  <li>For material changes, we will provide prominent notice on our website or notify you directly via email.</li>
                  <li>Continued use of our services after changes are posted constitutes acceptance of the updated policy.</li>
                </ul>
              </PolicySection>
            </div>

            {/* Contact Section */}
            <div id="section-11">
              <motion.div
                className="rounded-xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-6 sm:p-8"
                {...fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      Contact Us
                    </h2>
                    <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                      <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                        <p><strong className="text-foreground">Company:</strong> Snap Outsourcing Pte. Ltd</p>
                        <p><strong className="text-foreground">Email:</strong>{" "}
                          <a href="mailto:info@evisionsys.com" className="text-accent hover:underline">info@evisionsys.com</a>
                        </p>
                        <p><strong className="text-foreground">Website:</strong>{" "}
                          <a href="https://evisionsys.com" className="text-accent hover:underline">evisionsys.com</a>
                        </p>
                        <p><strong className="text-foreground">Address:</strong> Singapore</p>
                      </div>
                      <p className="text-sm italic">
                        We aim to respond to all privacy-related inquiries within 5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Shield, Megaphone, Clock, ToggleLeft, Mail } from "lucide-react";
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

const cookieTypes = [
  {
    name: "Essential Cookies",
    icon: Shield,
    required: true,
    description: "Required for basic website functionality. These cannot be disabled as they are necessary for the website to operate properly.",
    examples: ["Session management", "Security tokens", "Load balancing", "User preferences (language, theme)"],
  },
  {
    name: "Analytics Cookies",
    icon: BarChart3,
    required: false,
    description: "Help us understand how visitors interact with our website by collecting information anonymously.",
    examples: ["Pages visited and time spent", "Traffic sources and referral URLs", "Device and browser information", "User navigation patterns"],
  },
  {
    name: "Marketing Cookies",
    icon: Megaphone,
    required: false,
    description: "Used to deliver relevant advertisements and measure campaign effectiveness across platforms.",
    examples: ["Ad targeting and retargeting", "Campaign performance tracking", "Social media integration", "Conversion tracking"],
  },
];

export default function CookiesPolicy() {
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
              <Cookie className="h-4 w-4" />
              <span>Cookie Transparency</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cookies Policy
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Understanding how we use cookies and similar technologies to improve your browsing experience on our website.
            </p>
            <p className="mt-3 text-sm text-white/60">
              Last Updated: February 27, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl space-y-6">

            <PolicySection icon={Cookie} title="What Are Cookies?" index={0}>
              <p>
                Cookies are small text files that are placed on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
              </p>
              <p>
                Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session-based" (deleted when you close your browser). They can be set by the website you are visiting ("first-party cookies") or by third-party services operating on the website ("third-party cookies").
              </p>
            </PolicySection>

            <PolicySection icon={Settings} title="Cookie Categories We Use" index={1}>
              <p>We categorize the cookies used on our website into the following types:</p>
              <div className="mt-4 space-y-4">
                {cookieTypes.map((cookie) => (
                  <div key={cookie.name} className="rounded-lg border border-border bg-muted/30 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <cookie.icon className="h-5 w-5 text-accent" />
                        <h3 className="font-semibold text-foreground">{cookie.name}</h3>
                      </div>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${cookie.required
                          ? "bg-accent/15 text-accent"
                          : "bg-muted text-muted-foreground"
                        }`}>
                        {cookie.required ? "Required" : "Optional"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm">{cookie.description}</p>
                    <div className="mt-3">
                      <p className="text-xs font-medium text-foreground mb-1">Examples:</p>
                      <ul className="ml-4 list-disc space-y-0.5 text-xs">
                        {cookie.examples.map((ex) => (
                          <li key={ex}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </PolicySection>

            <PolicySection icon={BarChart3} title="Third-Party Cookies" index={2}>
              <p>We may use third-party services that set their own cookies on your device. These include:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { name: "Google Analytics", desc: "Website traffic analysis and user behavior insights" },
                  { name: "Google Tag Manager", desc: "Tag management for marketing and analytics scripts" },
                  { name: "Facebook Pixel", desc: "Conversion tracking and ad targeting optimization" },
                  { name: "LinkedIn Insight", desc: "Professional audience analytics and ad measurement" },
                ].map((service) => (
                  <div key={service.name} className="rounded-lg border border-border bg-muted/30 p-3">
                    <h4 className="font-semibold text-foreground text-sm">{service.name}</h4>
                    <p className="mt-1 text-xs">{service.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm">
                These services have their own privacy and cookie policies. We encourage you to review their policies to understand how they process your data.
              </p>
            </PolicySection>

            <PolicySection icon={ToggleLeft} title="Managing Your Cookie Preferences" index={3}>
              <p>You have several options to manage cookies:</p>
              <div className="space-y-4 mt-2">
                <div>
                  <h3 className="font-semibold text-foreground">Browser Settings</h3>
                  <p className="mt-1">
                    Most web browsers allow you to control cookies through their settings. You can typically find these options in the "Settings," "Preferences," or "Privacy" section of your browser. You can:
                  </p>
                  <ul className="ml-4 list-disc space-y-1 mt-2">
                    <li>View and delete existing cookies</li>
                    <li>Block all or specific cookies</li>
                    <li>Set preferences for specific websites</li>
                    <li>Configure notifications when cookies are set</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Opt-Out Tools</h3>
                  <ul className="ml-4 list-disc space-y-1 mt-1">
                    <li><strong>Google Analytics:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                    <li><strong>General Opt-Out:</strong> Visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Your Online Choices</a> for EU-based opt-out options</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> Disabling certain cookies may affect your browsing experience and limit the functionality of our website. Essential cookies cannot be disabled as they are required for the website to operate.
                </p>
              </div>
            </PolicySection>

            <PolicySection icon={Clock} title="Cookie Retention Periods" index={4}>
              <p>The duration cookies remain on your device varies:</p>
              <div className="mt-3 overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Cookie Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="px-4 py-2.5">Session Cookies</td><td className="px-4 py-2.5">Deleted when browser is closed</td></tr>
                    <tr><td className="px-4 py-2.5">Essential Cookies</td><td className="px-4 py-2.5">Up to 12 months</td></tr>
                    <tr><td className="px-4 py-2.5">Analytics Cookies</td><td className="px-4 py-2.5">Up to 24 months</td></tr>
                    <tr><td className="px-4 py-2.5">Marketing Cookies</td><td className="px-4 py-2.5">Up to 12 months</td></tr>
                  </tbody>
                </table>
              </div>
            </PolicySection>

            <PolicySection icon={Shield} title="Changes to This Cookie Policy" index={5}>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes:
              </p>
              <ul className="ml-4 list-disc space-y-1 mt-2">
                <li>We will update the "Last Updated" date at the top of this page.</li>
                <li>For significant changes, we will provide a prominent notice on our website.</li>
                <li>Continued use of our website constitutes acceptance of the updated policy.</li>
              </ul>
            </PolicySection>

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
                    Questions About Cookies?
                  </h2>
                  <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                    <p>If you have any questions about our use of cookies, please contact us:</p>
                    <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                      <p><strong className="text-foreground">Email:</strong>{" "}
                        <a href="mailto:info@evisionsys.com" className="text-accent hover:underline">info@evisionsys.com</a>
                      </p>
                      <p><strong className="text-foreground">Website:</strong>{" "}
                        <a href="https://evisionsys.com" className="text-accent hover:underline">evisionsys.com</a>
                      </p>
                    </div>
                    <p className="text-sm">
                      For more details about how we handle your personal data, please refer to our{" "}
                      <a href="/privacy-policy" className="text-accent hover:underline font-medium">Privacy Policy</a>.
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

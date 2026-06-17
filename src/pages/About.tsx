import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, Handshake, Award, CheckCircle2, Layers, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import aboutHero from "@/assets/about-hero.jpg";
import companyPresentation from "@/assets/company-presentation.png";
import companyOffice from "@/assets/company-office.png";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution we deliver is measured by the business outcomes it produces."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends to bring you cutting-edge solutions."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We succeed when you succeed. Your challenges become our mission."
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Our team brings decades of combined enterprise technology experience."
  }
];

const capabilities = [
  "Surveillance System Design",
  "AI Video Analytics",
  "Social Media Intelligence",
  "Forensic Investigation Tools",
  "System Integration & Deployment",
  "Hardware Procurement & Setup",
  "Training",
  "Ongoing Support & Maintenance",
];

const milestones = [
  { year: "2024", title: "Company Founded", description: "Established in Singapore as the technology brand of Snap Outsourcing Pte. Ltd., focused on security & intelligence systems." },
  { year: "2024", title: "AIVION Partnership", description: "Became authorized distributor for AIVION video intelligence platforms across Southeast Asia." },
  { year: "2025", title: "Regional Expansion", description: "Expanded deployment operations to cover Vietnam, Thailand, Malaysia, and the Philippines." },
  { year: "2026", title: "200+ Deployments", description: "Surpassed 200 system deployments across government, enterprise, and critical infrastructure sectors." }
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.anime-element',
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      delay: anime.stagger(150, { start: 200 }),
      easing: 'easeOutElastic(1, .8)',
      duration: 1500
    });
    
    anime({
      targets: '.anime-glow',
      textShadow: [
        '0px 0px 0px rgba(0, 255, 255, 0)',
        '0px 0px 20px rgba(0, 255, 255, 0.6)'
      ],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden" ref={containerRef}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat anime-bg"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="anime-element text-sm font-semibold uppercase tracking-wider text-accent inline-block">
              About Us
            </span>
            <h1 className="anime-element anime-glow mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Technology Excellence, Delivered
            </h1>
            <p className="anime-element mt-4 text-lg text-white/80">
              We are a high-tech consultancy helping enterprises 
              navigate digital transformation with AI and Security.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeader
                label="Who We Are"
                title="Your Technology Partner"
                align="left"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                E Vision System is the technology brand of Snap Outsourcing Pte. Ltd. — a Singapore company built on one belief: security technology should work straight out of the box, not just on paper.
              </p>
              <p className="mt-4 text-muted-foreground">
                We design and deliver complete, turnkey solutions — combining hardware, software, deployment, and training into a single seamless package. Whether you need intelligent surveillance, forensic investigation tools, AI-powered video analytics, or social media intelligence platforms, we bring the full stack to your door and keep it running long after go-live.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="rounded-lg border border-border bg-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <value.icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-3 font-heading font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why E Vision System */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            label="Why E Vision System"
            title="Why settle for software alone?"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Layers,
                title: "One Partner. Full Stack.",
                description: "Hardware, software, deployment, and support — all from one team. No finger-pointing between vendors.",
              },
              {
                icon: Zap,
                title: "Built for the Field",
                description: "Our systems are configured, tested, and ready to deploy before they reach your site. Minimal downtime. Zero guesswork.",
              },
              {
                icon: ShieldCheck,
                title: "End-to-End Accountability",
                description: "From installation to ongoing maintenance, we own the outcome — not just the sale.",
              },
              {
                icon: TrendingUp,
                title: "Technology That Scales",
                description: "From a single office to a city-wide network, our solutions grow with your operation.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-lg border border-border bg-card p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Eye className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-4 text-muted-foreground">
                A world where every organization — regardless of size — has access to enterprise-grade security and intelligence technology.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg border border-border bg-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Target className="h-10 w-10 text-accent" />
              <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-4 text-muted-foreground">
                To deliver complete, field-ready security systems that work from day one — so our clients focus on operations, not integration headaches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="What We Do"
            title="Our Capabilities"
            description="Comprehensive technology expertise to address your enterprise challenges."
          />
          
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="font-medium text-foreground">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            label="Our Journey"
            title="Milestones"
          />
          
          <div className="mt-12">
            <div className="relative">
              <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
                        {milestone.year}
                      </div>
                      <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="hidden h-4 w-4 rounded-full bg-accent md:block" />
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Technology Partners"
            title="Backed by Industry Leaders"
            description="We source, integrate, and support products from the world's leading security and intelligence technology manufacturers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "AIVION", description: "Authorized distributor for AI-powered video intelligence platforms. Deep Insight, Face Recognition, and Analytics.", tag: "Video Intelligence" },
              { name: "Hikvision", description: "Enterprise surveillance cameras, NVR systems, and access control hardware for deployments of all sizes.", tag: "Surveillance Hardware" },
              { name: "Intel", description: "Edge computing platforms and processors powering our on-premises AI processing and analytics solutions.", tag: "Edge Computing" },
              { name: "NVIDIA", description: "GPU acceleration technology enabling real-time AI inference for video analytics and face recognition.", tag: "AI Processing" },
              { name: "Microsoft", description: "Windows Server, Azure cloud services, and enterprise OS platforms for our workstation and server bundles.", tag: "Cloud & OS" },
              { name: "Axis Communications", description: "Premium network cameras and audio solutions for critical infrastructure and enterprise environments.", tag: "Network Cameras" },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="rounded-lg border border-border bg-card p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-foreground">{partner.name}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{partner.tag}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Industries We Serve</span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
              Trusted Across Sectors
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Government & Public Safety",
              "Law Enforcement",
              "Financial Institutions",
              "Critical Infrastructure",
              "Transportation & Logistics",
              "Healthcare",
              "Education & Campus",
              "Retail & Commercial",
              "Hospitality",
              "Industrial & Manufacturing",
            ].map((industry) => (
              <span 
                key={industry}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/40 hover:bg-accent/5 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Let's Build Something Great Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Ready to discuss your technology challenges? Our team is here to help.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

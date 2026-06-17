import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Headphones,
  Camera,
  Server,
  Video,
  AudioLines,
  Package,
  Wrench,
  GraduationCap,
  HeadphonesIcon,
  ScanFace,
  CarFront,
  TrafficCone,
  Share2,
  Cpu,
  Monitor,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { VideoBackground } from "@/components/hero/ScrollVideoHero";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Sections sit above the fixed canvas (z-index: -1)
// We use translucent black with backdrop-blur so the canvas shows through
const darkSection: React.CSSProperties = { position: "relative", zIndex: 1, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" };
const darkSectionAlt: React.CSSProperties = { position: "relative", zIndex: 1, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" };

const softwareSolutions = [
  {
    icon: Shield,
    title: "CyberWatch",
    description: "Real-time threat detection and response for enterprise security operations.",
    href: "/solutions/cyberwatch",
  },
  {
    icon: Video,
    title: "Video X - Deep Insight",
    description: "AI-powered video analytics with object detection and face recognition.",
    href: "/solutions/video-x-deep-insight",
  },
  {
    icon: AudioLines,
    title: "Neo Insights",
    description: "Voice recognition, transcription, and speaker identification platform.",
    href: "/solutions/neo-insights",
  },
  {
    icon: Share2,
    title: "NEO Collect",
    description: "Social media network analysis for investigations and OSINT.",
    href: "/solutions/neo-collect",
  },
];

const turnkeySystems = [
  {
    icon: Camera,
    title: "Smart Surveillance Bundle",
    description: "Complete security camera system with remote monitoring software, video analytics, and mobile access.",
    includes: ["IP/PTZ/IR Cameras", "NVR/Storage", "Monitoring Software", "Mobile App"],
    href: "/products?category=bundles",
  },
  {
    icon: Server,
    title: "Portable Forensics Bundle",
    description: "Field-ready forensic workstation with extraction tools and comprehensive reporting.",
    includes: ["i7 Workstation", "Forensic Software", "Multi-format Support", "Report Generator"],
    href: "/products?category=bundles",
  },
  {
    icon: Monitor,
    title: "Video Intelligence Bundle",
    description: "Pre-configured Video X system with dedicated workstation/server for AI video analytics.",
    includes: ["Workstation/Server", "Video X License", "Connectors", "Training"],
    href: "/products?category=bundles",
  },
  {
    icon: Cpu,
    title: "Voice Intelligence Bundle",
    description: "Complete Neo Insights deployment with voice library setup and configured workstation.",
    includes: ["Dedicated Server", "Neo Insights License", "Voice Library Setup", "Deployment Package"],
    href: "/products?category=bundles",
  },
];

const visionAISystems = [
  {
    icon: ScanFace,
    title: "Face Recognition",
    category: "Vision AI",
    description: "Real-time face detection and identification for access control and security.",
    href: "/solutions/face-recognition",
  },
  {
    icon: CarFront,
    title: "Plate Recognition (ANPR)",
    category: "Traffic AI",
    description: "Automatic license plate recognition for parking, access control, and traffic.",
    href: "/solutions/plate-recognition",
  },
  {
    icon: TrafficCone,
    title: "Traffic Violation Monitoring",
    category: "Traffic AI",
    description: "Automated violation detection with evidence management and case workflow.",
    href: "/solutions/traffic-violation-monitoring",
  },
  {
    icon: Share2,
    title: "NEO Collect - Network Analysis",
    category: "OSINT",
    description: "Social media intelligence platform for investigations and threat analysis.",
    href: "/solutions/neo-collect",
  },
];

const stats = [
  { value: "2+", label: "Years Experience", detail: "Founded 2024, Singapore" },
  { value: "100+", label: "Enterprise Clients", detail: "Government & Private Sector" },
  { value: "200+", label: "Systems Deployed", detail: "Across Asia-Pacific" },
  { value: "24/7", label: "Support Coverage", detail: "SLA-backed Response" },
];

const usps = [
  {
    icon: Clock,
    title: "Turnkey Delivery",
    description: "From devices to platforms—ready to deploy in weeks.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption.",
  },
  {
    icon: Headphones,
    title: "Full Lifecycle Support",
    description: "Hardware warranty + software maintenance + 24/7 support.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Measurable ROI with transparent reporting.",
  },
];

const deliveryProcess = [
  { step: "01", icon: Package, title: "Procurement", description: "Hardware sourcing and logistics management" },
  { step: "02", icon: Wrench, title: "Installation", description: "Site survey, physical setup, and cabling" },
  { step: "03", icon: Cpu, title: "Integration", description: "Hardware-software integration, network, storage" },
  { step: "04", icon: GraduationCap, title: "Training", description: "Handover, SOP documentation, user training" },
  { step: "05", icon: HeadphonesIcon, title: "Support", description: "SLA-backed maintenance and technical support" },
];

export default function Index() {
  return (
    <Layout>
      {/* Global Fixed Background */}
      <VideoBackground />

      {/* Hero Content — Transparent so canvas shows through */}
      <section className="relative flex min-h-[90vh] items-center justify-start pt-32 pb-24" style={{ zIndex: 1 }}>
        <div className="container-wide">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#f59e0b]">
              End-to-End Solutions: Hardware + Software + Deployment
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Turnkey Security &amp; <span className="text-[#f59e0b]">Intelligence Systems</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl max-w-2xl">
              We deliver complete security, forensic, and AI analytics systems — ready to deploy.
              Hardware + Software + Installation + Training + Support.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#f59e0b]/15 px-4 py-2 backdrop-blur-sm border border-[#f59e0b]/20">
              <CheckCircle2 className="h-4 w-4 text-[#f59e0b]" />
              <span className="text-sm font-medium text-white/90">One vendor, full responsibility — procurement, installation, integration, training, support.</span>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-8 py-4 text-base font-semibold text-black hover:bg-[#d97706] transition-colors">
                Request a Quote
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                View Products &amp; Bundles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-0.5 h-2 bg-[#f59e0b]/50 rounded-full animate-bounce" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">Scroll</span>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="border-b border-white/10 py-12" style={darkSection}>
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="font-heading text-3xl font-bold text-[#f59e0b] sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-white/70">{stat.label}</div>
                <div className="text-xs text-white/35">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-10 border-b border-white/5" style={darkSection}>
        <div className="container-wide">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">Technology Partners</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {[
              { name: "AIVION", role: "Video Intelligence" },
              { name: "Hikvision", role: "Surveillance" },
              { name: "Intel", role: "Edge Computing" },
              { name: "NVIDIA", role: "AI Processing" },
              { name: "Microsoft", role: "Cloud & OS" },
              { name: "Axis", role: "Network Cameras" },
            ].map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-0.5 px-4 py-2 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-base font-bold text-white tracking-tight">{partner.name}</span>
                <span className="text-[9px] uppercase tracking-wider text-white/40">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding" style={darkSectionAlt}>
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#f59e0b]">About Us</span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Complete Solutions Partner
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                E Vision System is the technology brand of Snap Outsourcing Pte. Ltd. — a Singapore company built on one belief: security technology should work straight out of the box, not just on paper.
              </p>
              <p className="mt-4 text-white/60">
                We design and deliver complete, turnkey solutions — combining hardware, software, deployment, and training into a single seamless package. Whether you need intelligent surveillance, forensic investigation tools, AI-powered video analytics, or social media intelligence platforms, we bring the full stack to your door and keep it running long after go-live.
              </p>
              <Button asChild variant="default" className="mt-6">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {usps.map((usp) => (
                <div key={usp.title} className="rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[#f59e0b]/40 transition-colors">
                  <usp.icon className="h-8 w-8 text-[#f59e0b]" />
                  <h3 className="mt-4 font-heading font-semibold text-white">{usp.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{usp.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turnkey Systems Section */}
      <section className="section-padding" style={darkSection}>
        <div className="container-wide">
          <SectionHeader
            label="Turnkey Systems"
            title="Hardware + Software Bundles"
            description="Complete, ready-to-deploy systems that include devices, software, installation, and support. One vendor, full responsibility."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {turnkeySystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[#f59e0b]/40 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f59e0b]/10">
                    <system.icon className="h-6 w-6 text-[#f59e0b]" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">{system.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/55">{system.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {system.includes.map((item) => (
                      <span key={item} className="inline-block rounded bg-white/8 px-2 py-0.5 text-xs text-white/50">{item}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link to={system.href}>View Bundle</Link>
                    </Button>
                    <Button asChild variant="accent" size="sm" className="flex-1">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="default" size="lg">
              <Link to="/products">View All Products &amp; Bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="section-padding" style={darkSectionAlt}>
        <div className="container-wide">
          <SectionHeader
            label="Software Platforms"
            title="Enterprise Software Solutions"
            description="Powerful software platforms that can be deployed standalone or bundled with our turnkey hardware systems."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {softwareSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={solution.href} className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[#f59e0b]/40 transition-colors">
                  <solution.icon className="h-10 w-10 text-[#f59e0b]" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white group-hover:text-[#f59e0b] transition-colors">{solution.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/55">{solution.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[#f59e0b]">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision AI & Traffic Systems */}
      <section className="section-padding" style={darkSection}>
        <div className="container-wide">
          <SectionHeader
            label="Vision AI & Traffic"
            title="Intelligent Surveillance & Traffic Systems"
            description="Advanced AI-powered systems for face recognition, license plate detection, and traffic monitoring. Available as software or complete turnkey bundles."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionAISystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={system.href} className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 hover:border-[#f59e0b]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f59e0b]/10">
                      <system.icon className="h-5 w-5 text-[#f59e0b]" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#f59e0b]">{system.category}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white group-hover:text-[#f59e0b] transition-colors">{system.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/55">{system.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[#f59e0b]">
                    View solution <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding" style={darkSectionAlt}>
        <div className="container-wide">
          <SectionHeader
            label="Delivery Model"
            title="How We Deliver"
            description="End-to-end implementation services. We don't just sell products—we ensure successful deployment."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {deliveryProcess.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                  <item.icon className="h-7 w-7 text-[#f59e0b]" />
                </div>
                <div className="mt-2 text-xs font-semibold text-[#f59e0b]">{item.step}</div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/55">{item.description}</p>
                {index < deliveryProcess.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-white/10 md:block md:w-[calc(100%-4rem)] md:translate-x-[calc(50%+2rem)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ ...darkSection, borderTop: "1px solid rgba(245,158,11,0.2)" }}>
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Deploy Your Solution?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Get a custom quote for your hardware + software requirements. Our team will configure the right solution for your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-8 py-4 text-base font-semibold text-black hover:bg-[#d97706] transition-colors">
                Request a Quote
              </Link>
              <Link to="/catalog" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors">
                Download Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}


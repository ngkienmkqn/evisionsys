import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Settings,
  LineChart,
  Camera,
  Server,
  Video,
  AudioLines,
  ScanFace,
  CarFront,
  TrafficCone,
  Share2,
  Package
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const solutions = [
  // Turnkey Systems
  { icon: Camera, slug: "security-camera", title: "Security Camera Solutions", tagline: "Smart Surveillance Systems", category: "turnkey", description: "Complete surveillance systems with cameras, NVR, monitoring software, and optional AI analytics.", benefits: ["24/7 HD monitoring", "AI-powered detection", "Remote access anywhere"] },
  { icon: Server, slug: "portable-lab", title: "Portable Lab/Server", tagline: "Digital Forensic Solutions", category: "turnkey", description: "Field-ready forensic workstation with extraction tools and comprehensive reporting.", benefits: ["Multi-format support", "Portable deployment", "Complete evidence chain"] },
  { icon: ScanFace, slug: "face-recognition", title: "Face Recognition", tagline: "Biometric Identification", category: "turnkey", description: "Real-time face detection and identification for access control and security operations.", benefits: ["99.5% accuracy", "Real-time alerts", "Access control integration"] },
  { icon: CarFront, slug: "plate-recognition", title: "Plate Recognition (ANPR)", tagline: "License Plate Recognition", category: "turnkey", description: "Automatic license plate recognition for parking, access control, and traffic management.", benefits: ["99%+ accuracy", "Multi-country support", "Barrier integration"] },
  { icon: TrafficCone, slug: "traffic-violation-monitoring", title: "Traffic Violation Monitoring", tagline: "Automated Enforcement", category: "turnkey", description: "Automated traffic violation detection with evidence management and case workflow.", benefits: ["24/7 enforcement", "Evidence compliance", "Case management"] },
  // Hybrid (Software + Optional Hardware)
  { icon: Video, slug: "video-x-deep-insight", title: "Video X - Deep Insight", tagline: "AI Video Analytics", category: "hybrid", description: "AI video analytics with object detection, face recognition. Software or pre-configured appliance.", benefits: ["95%+ detection", "50+ formats", "12 languages"] },
  { icon: AudioLines, slug: "neo-insights", title: "Neo Insights", tagline: "Voice Recognition Platform", category: "hybrid", description: "Voice recognition, transcription, and speaker identification. Software or bundled workstation.", benefits: ["95%+ accuracy", "Speaker ID", "100+ languages"] },
  { icon: Share2, slug: "neo-collect", title: "NEO Collect", tagline: "Social Media Intelligence", category: "hybrid", description: "Social media network analysis for investigations and OSINT. On-premises deployment.", benefits: ["Network visualization", "Entity extraction", "Secure on-prem"] },
  // Software Only
  { icon: Shield, slug: "cyberwatch", title: "CyberWatch", tagline: "Security Operations Platform", category: "software", description: "Real-time threat detection and response for enterprise security operations.", benefits: ["24/7 monitoring", "Automated response", "Compliance reporting"] },
  { icon: Cloud, slug: "cloudmigrate", title: "CloudMigrate", tagline: "Cloud Infrastructure", category: "software", description: "End-to-end cloud migration and optimization services with zero downtime.", benefits: ["Zero-downtime", "Multi-cloud", "Cost optimization"] },
];

export default function Solutions() {
  const turnkeySolutions = solutions.filter(s => s.category === "turnkey");
  const hybridSolutions = solutions.filter(s => s.category === "hybrid");
  const softwareSolutions = solutions.filter(s => s.category === "software");

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "turnkey": return { label: "Turnkey System", color: "bg-accent/10 text-accent" };
      case "hybrid": return { label: "SW + HW Option", color: "bg-purple-500/10 text-purple-600" };
      case "software": return { label: "Software", color: "bg-blue-500/10 text-blue-600" };
      default: return { label: category, color: "bg-muted text-muted-foreground" };
    }
  };

  const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
    const badge = getCategoryBadge(solution.category);
    return (
      <motion.div key={solution.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
        <Link to={`/solutions/${solution.slug}`} className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 card-hover">
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <solution.icon className="h-6 w-6 text-accent" />
            </div>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge.color}`}>{badge.label}</span>
          </div>
          <h3 className="mt-4 font-heading text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{solution.title}</h3>
          <p className="text-sm text-muted-foreground">{solution.tagline}</p>
          <p className="mt-3 flex-1 text-sm text-muted-foreground">{solution.description}</p>
          <ul className="mt-4 space-y-1">
            {solution.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
          <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
            Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </motion.div>
    );
  };

  return (
    <Layout>
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Solutions</span>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">Hardware + Software Solutions</h1>
            <p className="mt-4 text-lg text-white/80">Complete turnkey systems and software platforms for security, forensics, and AI analytics. We deliver hardware, software, installation, and support.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent/20 px-4 py-2">
              <Package className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white">One vendor, full responsibility: devices + platforms + deployment + support</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader label="Turnkey Systems" title="Hardware + Software Bundles" description="Complete systems including devices, software, installation, and support." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{turnkeySolutions.map((s, i) => <SolutionCard key={s.slug} solution={s} index={i} />)}</div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader label="Flexible Deployment" title="Software + Hardware Options" description="Available as software licenses or bundled with pre-configured hardware." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{hybridSolutions.map((s, i) => <SolutionCard key={s.slug} solution={s} index={i} />)}</div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader label="Software Platforms" title="Enterprise Software Solutions" description="Cloud and on-premises software platforms." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{softwareSolutions.map((s, i) => <SolutionCard key={s.slug} solution={s} index={i} />)}</div>
        </div>
      </section>

      <section className="gradient-hero section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Need a Custom Solution?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">Tell us your requirements and we'll configure the right hardware + software combination for your needs.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg"><Link to="/contact">Request a Quote</Link></Button>
            <Button asChild variant="hero-outline" size="lg"><Link to="/products">View Products</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Camera,
  Server,
  Video,
  AudioLines,
  Shield,
  ScanFace,
  CarFront,
  TrafficCone,
  Share2,
  ArrowRight,
  CheckCircle2,
  Package,
  Monitor,
  HardDrive,
  Cpu,
  Handshake,
  Award,
  Headphones,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Product images
import imgSurveillance from "@/assets/product-surveillance-bundle.jpg";
import imgForensics from "@/assets/product-forensics-bundle.jpg";
import imgAnpr from "@/assets/product-anpr-system.jpg";
import imgVideoIntel from "@/assets/product-video-intelligence.jpg";
import imgIpCameras from "@/assets/product-ip-cameras.png";
import imgEdgeCompute from "@/assets/product-edge-compute.png";
import imgNvrStorage from "@/assets/product-nvr-storage.png";
import imgCyberwatch from "@/assets/software-cyberwatch.png";
import imgNeoInsights from "@/assets/software-neo-insights.png";
import imgFaceRecognition from "@/assets/software-face-recognition.png";

type ProductCategory = "all" | "hardware" | "software" | "bundles";

interface Product {
  id: string;
  icon: typeof Camera;
  title: string;
  category: "hardware" | "software" | "bundle";
  tagline: string;
  description: string;
  includes: string[];
  deployment: string;
  warranty: string;
  href: string;
  image?: string;
}

const products: Product[] = [
  // Hardware
  {
    id: "ip-cameras",
    icon: Camera,
    title: "IP Security Cameras",
    category: "hardware",
    tagline: "HD/4K Surveillance Cameras",
    description: "High-resolution IP cameras with night vision, PTZ capabilities, and smart detection features.",
    includes: ["IP67 Weather Rating", "PoE Support", "Night Vision IR/Laser", "PTZ & Fixed Options"],
    deployment: "On-site installation",
    warranty: "3-year hardware warranty",
    href: "/solutions/security-camera",
    image: imgIpCameras,
  },
  {
    id: "forensic-workstation",
    icon: Server,
    title: "Forensic Workstation",
    category: "hardware",
    tagline: "Digital Forensic Hardware",
    description: "High-performance workstation configured for digital forensic extraction and analysis.",
    includes: ["Intel i7 13th Gen", "32GB RAM", "12TB+ Storage", "Multi-interface Ports"],
    deployment: "Portable/Lab deployment",
    warranty: "3-year hardware warranty",
    href: "/solutions/portable-lab",
    image: imgForensics,
  },
  {
    id: "edge-compute",
    icon: HardDrive,
    title: "Edge Compute Devices",
    category: "hardware",
    tagline: "AI Edge Processing",
    description: "Edge computing devices for on-site AI processing without cloud dependency.",
    includes: ["GPU Acceleration", "Low Latency", "Compact Form Factor", "Industrial Rating"],
    deployment: "On-site/Remote",
    warranty: "2-year hardware warranty",
    href: "/solutions/edge-compute",
    image: imgEdgeCompute,
  },
  {
    id: "nvr-storage",
    icon: HardDrive,
    title: "NVR & Storage Systems",
    category: "hardware",
    tagline: "Video Recording & Storage",
    description: "Network video recorders and storage solutions for video surveillance systems.",
    includes: ["Up to 128 Channels", "RAID Support", "Hot-swap Drives", "Remote Access"],
    deployment: "On-site installation",
    warranty: "3-year hardware warranty",
    href: "/solutions/security-camera",
    image: imgNvrStorage,
  },
  
  // Software
  {
    id: "cyberwatch-sw",
    icon: Shield,
    title: "CyberWatch",
    category: "software",
    tagline: "Security Operations Platform",
    description: "Real-time threat detection and response platform for enterprise security operations.",
    includes: ["Threat Detection", "Automated Response", "Compliance Reporting", "API Integration"],
    deployment: "Cloud / On-premises",
    warranty: "Annual software maintenance",
    href: "/solutions/cyberwatch",
    image: imgCyberwatch,
  },
  {
    id: "videox-sw",
    icon: Video,
    title: "Video X - Deep Insight",
    category: "software",
    tagline: "AI Video Analytics",
    description: "AI-powered video analytics with object detection, face recognition, and intelligent search.",
    includes: ["Object Detection", "Face Recognition", "License Plate AI", "Multi-format Support"],
    deployment: "On-premises / Server",
    warranty: "Annual software maintenance",
    href: "/solutions/video-x-deep-insight",
    image: imgVideoIntel,
  },
  {
    id: "neo-insights-sw",
    icon: AudioLines,
    title: "Neo Insights",
    category: "software",
    tagline: "Voice Recognition Platform",
    description: "AI voice recognition, transcription, and speaker identification platform.",
    includes: ["Voice-to-Text", "Speaker ID", "Content Analysis", "Translation"],
    deployment: "On-premises / Cloud",
    warranty: "Annual software maintenance",
    href: "/solutions/neo-insights",
    image: imgNeoInsights,
  },
  {
    id: "neo-collect-sw",
    icon: Share2,
    title: "NEO Collect",
    category: "software",
    tagline: "Social Media Intelligence",
    description: "Social media network analysis platform for investigations and OSINT.",
    includes: ["Data Collection", "Entity Extraction", "Graph Visualization", "Case Management"],
    deployment: "On-premises (recommended)",
    warranty: "Annual software maintenance",
    href: "/solutions/neo-collect",
  },
  {
    id: "face-recognition-sw",
    icon: ScanFace,
    title: "Face Recognition",
    category: "software",
    tagline: "Biometric Identification",
    description: "Real-time face detection and identification for access control and security.",
    includes: ["Face Detection", "Watchlist Alerts", "Access Control Integration", "Audit Logs"],
    deployment: "On-premises / Edge",
    warranty: "Annual software maintenance",
    href: "/solutions/face-recognition",
    image: imgFaceRecognition,
  },
  {
    id: "anpr-sw",
    icon: CarFront,
    title: "Plate Recognition (ANPR)",
    category: "software",
    tagline: "License Plate Recognition",
    description: "Automatic license plate recognition for parking, access control, and traffic management.",
    includes: ["Plate OCR", "Whitelist/Blacklist", "Vehicle Attributes", "Analytics Dashboard"],
    deployment: "On-premises / Edge",
    warranty: "Annual software maintenance",
    href: "/solutions/plate-recognition",
    image: imgAnpr,
  },
  {
    id: "traffic-violation-sw",
    icon: TrafficCone,
    title: "Traffic Violation Monitoring",
    category: "software",
    tagline: "Automated Enforcement",
    description: "Automated traffic violation detection with evidence management and case workflow.",
    includes: ["Violation Detection", "Evidence Package", "Case Management", "Multi-site Support"],
    deployment: "On-premises / Hybrid",
    warranty: "Annual software maintenance",
    href: "/solutions/traffic-violation-monitoring",
  },
  
  // Bundles
  {
    id: "surveillance-bundle",
    icon: Camera,
    title: "Smart Surveillance Bundle",
    category: "bundle",
    tagline: "Complete Camera System",
    description: "Complete security camera system with cameras, NVR, monitoring software, and optional Video X analytics.",
    includes: ["IP/PTZ/IR Cameras", "NVR + Storage", "Monitoring Software", "Mobile App", "Installation"],
    deployment: "On-site deployment",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/security-camera",
    image: imgSurveillance,
  },
  {
    id: "forensics-bundle",
    icon: Server,
    title: "Portable Forensics Bundle",
    category: "bundle",
    tagline: "Field Forensic System",
    description: "Complete portable forensic solution with workstation, extraction tools, and reporting software.",
    includes: ["i7 Workstation", "Forensic Software Stack", "Multi-format Support", "Report Generator", "Training"],
    deployment: "Portable/Lab",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/portable-lab",
    image: imgForensics,
  },
  {
    id: "video-intelligence-bundle",
    icon: Monitor,
    title: "Video Intelligence Bundle",
    category: "bundle",
    tagline: "AI Video Analytics System",
    description: "Pre-configured Video X system with dedicated workstation/server for AI video analytics.",
    includes: ["Workstation/Server", "Video X License", "Ingestion Connectors", "User Training", "Support"],
    deployment: "On-premises",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/video-x-deep-insight",
    image: imgVideoIntel,
  },
  {
    id: "voice-intelligence-bundle",
    icon: Cpu,
    title: "Voice Intelligence Bundle",
    category: "bundle",
    tagline: "Voice Analysis System",
    description: "Complete Neo Insights deployment with voice library setup and configured workstation.",
    includes: ["Dedicated Server", "Neo Insights License", "Voice Library Setup", "Deployment Package", "Training"],
    deployment: "On-premises",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/neo-insights",
    image: imgNeoInsights,
  },
  {
    id: "face-recognition-bundle",
    icon: ScanFace,
    title: "Face Recognition Bundle",
    category: "bundle",
    tagline: "Biometric Access System",
    description: "Complete face recognition system with cameras, edge/server, enrollment station, and software.",
    includes: ["Face Cameras", "Edge/Server", "FR Software", "Enrollment Station", "Watchlist Setup"],
    deployment: "On-site deployment",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/face-recognition",
    image: imgFaceRecognition,
  },
  {
    id: "anpr-bundle",
    icon: CarFront,
    title: "ANPR / Plate Recognition Bundle",
    category: "bundle",
    tagline: "Vehicle Access System",
    description: "Complete ANPR system with specialized cameras, processing unit, database, and dashboard.",
    includes: ["ANPR Cameras", "Edge/Server", "ANPR Software", "Database", "Dashboard"],
    deployment: "On-site deployment",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/plate-recognition",
    image: imgAnpr,
  },
  {
    id: "traffic-bundle",
    icon: TrafficCone,
    title: "Traffic Violation Bundle",
    category: "bundle",
    tagline: "Traffic Enforcement System",
    description: "Complete traffic violation monitoring system with roadside cameras, AI detection, and evidence management.",
    includes: ["Roadside Cameras", "Edge Compute", "Violation AI", "Evidence Server", "Case Dashboard"],
    deployment: "Roadside + Control Center",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/traffic-violation-monitoring",
  },
  {
    id: "neo-collect-bundle",
    icon: Share2,
    title: "NEO Collect Intelligence Bundle",
    category: "bundle",
    tagline: "OSINT Analyst Workstation",
    description: "Complete social media intelligence platform with analyst workstation and data connectors.",
    includes: ["Analyst Workstation", "NEO Collect License", "Data Connectors", "Training", "Support"],
    deployment: "On-premises",
    warranty: "3-year HW + 1-year SW",
    href: "/solutions/neo-collect",
  }
];

const bundleAdvantages = [
  { icon: Handshake, title: "Single Vendor", description: "One point of contact for hardware, software, and support." },
  { icon: Zap, title: "Guaranteed Compatibility", description: "Pre-tested, pre-configured systems that work out of the box." },
  { icon: Award, title: "Faster Deployment", description: "Reduce project timelines with ready-to-deploy solutions." },
  { icon: Headphones, title: "Complete Warranty", description: "Unified hardware and software warranty with SLA support." }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<ProductCategory>("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.category === activeTab || (activeTab === "bundles" && p.category === "bundle"));

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "hardware": return "Hardware";
      case "software": return "Software";
      case "bundle": return "Bundle";
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hardware": return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "software": return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
      case "bundle": return "bg-accent/20 text-accent border border-accent/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      {/* Hero Section — Split layout with image */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent inline-block">
                Products & Bundles
              </span>
              <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Hardware, Software & Turnkey Systems
              </h1>
              <p className="mt-4 text-lg text-white/80">
                From individual devices and software licenses to complete turnkey bundles—we 
                provide everything you need for successful deployment. One vendor, full responsibility.
              </p>
              
              {/* Trust Statement */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent/20 px-4 py-2 backdrop-blur-sm border border-accent/20">
                <Package className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-white">
                  All bundles include: Hardware + Software + Installation + Training + Support
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/catalog">Download Catalog</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={imgSurveillance} 
                  alt="E Vision System - AI Surveillance Dashboard" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Live System Dashboard — Video X Deep Insight</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as ProductCategory)} className="w-full">
            <TabsList className="mb-10 flex w-full flex-wrap justify-start gap-2 bg-transparent h-auto p-0">
              <TabsTrigger 
                value="all" 
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
              >
                All Products ({products.length})
              </TabsTrigger>
              <TabsTrigger 
                value="hardware"
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
              >
                Hardware Devices ({products.filter(p => p.category === "hardware").length})
              </TabsTrigger>
              <TabsTrigger 
                value="software"
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
              >
                Software Platforms ({products.filter(p => p.category === "software").length})
              </TabsTrigger>
              <TabsTrigger 
                value="bundles"
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:border-accent"
              >
                Bundles / Turnkey ({products.filter(p => p.category === "bundle").length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden card-hover"
                  >
                    {/* Product Image */}
                    {product.image && (
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                        <span className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(product.category)}`}>
                          {getCategoryLabel(product.category)}
                        </span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                          <product.icon className="h-6 w-6 text-accent" />
                        </div>
                        {!product.image && (
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(product.category)}`}>
                            {getCategoryLabel(product.category)}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-sm text-accent">{product.tagline}</p>
                      
                      <p className="mt-3 flex-1 text-sm text-muted-foreground">
                        {product.description}
                      </p>
                    
                      <div className="mt-4">
                        <p className="text-xs font-medium text-muted-foreground mb-2">What's included:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.includes.slice(0, 4).map((item) => (
                            <span key={item} className="inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                              <CheckCircle2 className="h-3 w-3 text-accent" />
                              {item}
                            </span>
                          ))}
                          {product.includes.length > 4 && (
                            <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                              +{product.includes.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                        <span><strong>Deployment:</strong> {product.deployment}</span>
                        <span><strong>Warranty:</strong> {product.warranty}</span>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to={product.href}>
                            View Details
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <Button asChild variant="accent" size="sm" className="flex-1">
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Partners — Trust Section */}
      <section className="py-12 border-y border-border bg-muted/20">
        <div className="container-wide">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Technology Partners</span>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
              We Work With Industry Leaders
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              Our solutions integrate hardware and software from trusted global manufacturers — ensuring reliability, compatibility, and long-term support.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              { name: "AIVION", role: "Video Intelligence" },
              { name: "Hikvision", role: "Surveillance Hardware" },
              { name: "Intel", role: "Edge Computing" },
              { name: "NVIDIA", role: "GPU / AI Processing" },
              { name: "Microsoft", role: "Cloud & OS" },
              { name: "Axis", role: "Network Cameras" },
            ].map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-1 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors">
                <span className="text-lg font-bold text-foreground/80 tracking-tight">{partner.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bundles */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeader
            label="Why Bundles?"
            title="Advantages of Turnkey Systems"
            description="Get everything you need from a single vendor with guaranteed compatibility and support."
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bundleAdvantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Stats — Social Proof */}
      <section className="py-16 border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { value: "200+", label: "Systems Deployed", detail: "Across Asia-Pacific" },
              { value: "100+", label: "Enterprise Clients", detail: "Government & Private Sector" },
              { value: "15+", label: "Countries Served", detail: "Regional Presence" },
              { value: "24/7", label: "Support Coverage", detail: "SLA-backed Response" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-heading text-3xl font-bold text-accent sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Need a Custom Configuration?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Tell us about your requirements and we'll configure the right hardware + software 
            bundle for your specific needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/catalog">Download Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

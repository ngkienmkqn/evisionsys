import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const catalogItems = [
  {
    id: "company-brochure",
    title: "Company Brochure",
    description: "Comprehensive overview of E Vision System capabilities, solutions, and value proposition.",
    type: "Brochure",
    size: "2.4 MB",
    format: "PDF"
  },
  {
    id: "cyberwatch-datasheet",
    title: "CyberWatch Solution Brief",
    description: "Technical overview and key features of our enterprise security operations platform.",
    type: "Solution Brief",
    size: "1.8 MB",
    format: "PDF"
  },
  {
    id: "cloudmigrate-datasheet",
    title: "CloudMigrate Solution Brief",
    description: "Detailed information on our cloud migration methodology and success metrics.",
    type: "Solution Brief",
    size: "1.6 MB",
    format: "PDF"
  },
  {
    id: "datasync-datasheet",
    title: "DataSync Pro Solution Brief",
    description: "Enterprise data integration platform capabilities and integration options.",
    type: "Solution Brief",
    size: "1.5 MB",
    format: "PDF"
  },
  {
    id: "automateiq-datasheet",
    title: "AutomateIQ Solution Brief",
    description: "AI-powered process automation platform features and deployment options.",
    type: "Solution Brief",
    size: "1.7 MB",
    format: "PDF"
  },
  {
    id: "security-camera-datasheet",
    title: "Security Camera Solutions Brief",
    description: "Smart surveillance systems with AI-powered detection for homes, businesses, and industrial sites.",
    type: "Solution Brief",
    size: "2.1 MB",
    format: "PDF"
  },
  {
    id: "portable-lab-datasheet",
    title: "Portable Lab/Server Datasheet",
    description: "Digital forensic solution specifications and capabilities for field and lab deployment.",
    type: "Solution Brief",
    size: "1.9 MB",
    format: "PDF"
  },
  {
    id: "videox-datasheet",
    title: "Video X - Deep Insight Brief",
    description: "AI video analytics platform for object detection, face recognition, and intelligent surveillance.",
    type: "Solution Brief",
    size: "2.0 MB",
    format: "PDF"
  },
  {
    id: "neo-insights-datasheet",
    title: "Neo Insights Solution Brief",
    description: "Voice recognition and transcription platform with speaker identification and content analysis.",
    type: "Solution Brief",
    size: "1.8 MB",
    format: "PDF"
  },
  {
    id: "capability-deck",
    title: "Capability Deck",
    description: "Executive presentation showcasing our technical expertise and service offerings.",
    type: "Presentation",
    size: "4.2 MB",
    format: "PDF"
  },
  {
    id: "security-compliance",
    title: "Security & Compliance Overview",
    description: "Information on our security certifications, compliance standards, and data protection practices.",
    type: "White Paper",
    size: "980 KB",
    format: "PDF"
  },
  {
    id: "case-study-financial",
    title: "Case Study: Financial Services",
    description: "How we helped a leading bank modernize their security operations with CyberWatch.",
    type: "Case Study",
    size: "1.2 MB",
    format: "PDF"
  }
];

const categories = ["All", "Brochure", "Solution Brief", "Presentation", "White Paper", "Case Study"];

export default function Catalog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Resources
            </span>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Catalog & Downloads
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Access our brochures, solution briefs, case studies, and other resources 
              to learn more about how we can help your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Items */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {catalogItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {item.type}
                    </span>
                    <h3 className="mt-1 font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="mt-4 flex-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {item.format} • {item.size}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Button>
                    <Button variant="accent" size="sm" className="h-8 gap-1">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Materials CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <SectionHeader
            title="Need Additional Materials?"
            description="If you're looking for specific information not available in our catalog, our team can prepare customized materials for your requirements."
          />
          <Button asChild variant="default" size="lg" className="mt-8">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

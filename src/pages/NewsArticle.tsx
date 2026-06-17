import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const articlesData: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string[];
}> = {
  "buying-surveillance-system-2026": {
    title: "What to Look for When Buying a Surveillance System in 2026",
    excerpt: "Buying a surveillance system is no longer a matter of picking cameras off a shelf. As facilities grow more complex and threats more sophisticated, the gap between a well-designed system and a poorly-scoped one can mean the difference between actionable intelligence and gigabytes of useless footage.",
    date: "2026-05-28",
    author: "E Vision System Team",
    category: "Security",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    content: [
      "Buying a surveillance system is no longer a matter of picking cameras off a shelf. As facilities grow more complex and threats more sophisticated, the gap between a well-designed system and a poorly-scoped one can mean the difference between actionable intelligence and gigabytes of useless footage.",
      "Here's what enterprise buyers should evaluate before signing any contract.",
      "## 1. Resolution is only part of the picture",
      "4K cameras capture excellent detail — but only if your storage, network infrastructure, and monitoring software can handle the data throughput. Before specifying camera resolution, map out your bandwidth capacity and storage retention requirements. A 4K camera running 24/7 generates roughly 100–150GB of footage per day at standard compression. Multiply that across 50 cameras and you're looking at significant infrastructure investment.",
      "## 2. Understand the difference between recording and intelligence",
      "Traditional NVR systems record continuously and rely on human operators to review footage after an incident. AI-powered video analytics change this model: the system flags events in real time — unauthorized entry, loitering, object left behind — so operators respond to alerts rather than review archives.",
      "For high-risk facilities, the distinction matters. Recording tells you what happened. Intelligence tells you what's happening now.",
      "## 3. Ask about edge vs. cloud processing",
      "Where video is analyzed — at the camera (edge), at an on-site server, or in the cloud — affects latency, data sovereignty, and ongoing costs. For government facilities or operations in jurisdictions with strict data residency requirements, on-premises or edge processing is often non-negotiable. For distributed enterprise environments, cloud-managed systems offer simpler administration.",
      "## 4. Single vendor vs. multi-vendor integration",
      "Many organizations cobble together cameras from one brand, NVR from another, and analytics software from a third. The result is an integration burden that falls on your IT team — and a support structure where every vendor points at the others when something breaks.",
      "Turnkey systems — where hardware, software, installation, and support come from a single provider — eliminate this ambiguity. The tradeoff is less flexibility in component selection, but for most enterprise deployments the operational simplicity outweighs it.",
      "## 5. Plan for the full lifecycle",
      "The purchase price of a surveillance system is only a fraction of the total cost of ownership. Factor in: installation labor, network infrastructure upgrades, operator training, software licensing (often annual), hardware maintenance, and eventual replacement cycles. A reputable vendor will provide a full TCO estimate upfront, not just a hardware quote.",
      "## 6. Verify compliance requirements before you buy",
      "In Singapore, operating surveillance systems — particularly those with facial recognition or biometric capabilities — requires compliance with the Personal Data Protection Act (PDPA). In other APAC jurisdictions, similar frameworks apply. Understand your obligations before deployment, not after.",
      "E Vision System provides complete turnkey surveillance solutions including cameras, NVR, AI analytics, installation, and ongoing support."
    ]
  },
  "pdpa-surveillance-singapore-guide": {
    title: "PDPA and Surveillance: What Singapore Businesses Need to Know Before Deploying Cameras",
    excerpt: "Singapore's Personal Data Protection Act (PDPA) governs how organizations collect, use, and disclose personal data — and surveillance systems that capture identifiable images of individuals fall squarely within its scope.",
    date: "2026-05-14",
    author: "E Vision System Team",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    content: [
      "Singapore's Personal Data Protection Act (PDPA) governs how organizations collect, use, and disclose personal data — and surveillance systems that capture identifiable images of individuals fall squarely within its scope. Yet many businesses deploy cameras without a proper data protection framework in place.",
      "Here's a practical overview of what the PDPA requires from organizations operating surveillance systems.",
      "## Does PDPA apply to your cameras?",
      "If your cameras capture images of identifiable individuals — employees, visitors, members of the public — you are collecting personal data under the PDPA. This applies to CCTV in offices, retail spaces, carparks, and common areas. It applies to IP cameras, facial recognition systems, and video analytics platforms that retain or analyze footage.",
      "Exemptions are narrow: purely personal or domestic use is excluded, as are certain public agencies operating under separate legislation.",
      "## The obligation to notify",
      "Organizations must inform individuals that surveillance is taking place. In practice, this typically means prominent signage at entry points stating that CCTV is in operation, the purpose of collection, and contact details for data protection inquiries. The signage requirement applies even if cameras are visible — visibility alone does not constitute adequate notice.",
      "## Retention: how long can you keep footage?",
      "The PDPA does not specify a fixed retention period, but the principle is clear: retain data only as long as necessary for the purpose it was collected. For general security purposes, most organizations retain footage for 14–30 days before overwriting. For incidents under investigation, footage should be preserved until the matter is resolved. Whatever period you choose, document it in your data retention policy and configure your system accordingly.",
      "## Facial recognition requires extra caution",
      "Standard CCTV footage and AI-powered facial recognition are treated differently. Facial recognition systems that match individuals against watchlists or databases process biometric data — a more sensitive category that requires stronger justification, clearer consent frameworks, and more robust security controls. Before deploying facial recognition, seek legal advice specific to your use case.",
      "## Access control and security",
      "The PDPA requires organizations to implement reasonable security measures to protect personal data from unauthorized access, disclosure, or loss. For surveillance systems, this means: role-based access controls on your NVR or VMS, audit logs of who accessed footage and when, encrypted transmission if footage is accessed remotely, and physical security for recording hardware.",
      "## Breach notification",
      "Since the mandatory breach notification obligations came into force, organizations must notify the PDPC and affected individuals of data breaches that meet the notification threshold — including unauthorized access to surveillance footage — within specified timeframes.",
      "## Practical steps before you deploy",
      "Conduct a data protection impact assessment (DPIA) for your surveillance system. Document the purpose, scope, and retention policy. Install adequate signage. Configure access controls and audit logging. Review vendor contracts to ensure data processor obligations are covered.",
      "This article is for general informational purposes and does not constitute legal advice. Consult a qualified data protection professional for advice specific to your organization.",
      "E Vision System's deployments include privacy-by-design configurations aligned with PDPA requirements."
    ]
  },
  "ip-camera-vs-analog": {
    title: "IP Camera vs. Analog: Which Is Right for Your Facility?",
    excerpt: "If you're upgrading or building a new surveillance system, you'll encounter a fundamental choice early in the process: IP cameras or analog? The answer depends on your facility size, budget, existing infrastructure, and what you expect the system to do.",
    date: "2026-04-30",
    author: "E Vision System Team",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    content: [
      "If you're upgrading or building a new surveillance system, you'll encounter a fundamental choice early in the process: IP cameras or analog? The answer depends on your facility size, budget, existing infrastructure, and what you expect the system to do.",
      "## How they work",
      "Analog cameras transmit video as a continuous electrical signal over coaxial cable to a Digital Video Recorder (DVR), which converts and stores the footage. The technology is mature, simple, and widely understood.",
      "IP cameras capture and compress video digitally at the camera itself, then transmit it over standard network (Ethernet or Wi-Fi) infrastructure to a Network Video Recorder (NVR) or Video Management System (VMS). Because processing happens at the camera, IP systems can support far higher resolution and more sophisticated features.",
      "## Resolution and image quality",
      "This is where IP cameras have a clear advantage. Modern IP cameras routinely deliver 4K (8MP) or higher resolution. Analog HD formats (HD-CVI, AHD, TVI) have improved significantly and now reach 4–8MP over coaxial cable, but IP remains the standard for high-resolution requirements. For use cases that require identifying individuals, reading license plates at distance, or feeding footage into AI analytics, IP cameras are the practical choice.",
      "## Infrastructure requirements",
      "Analog systems run on coaxial cable — if your facility already has it, upgrading to HD-analog is often the most cost-effective path. Running new coaxial cable in a finished building is labor-intensive and expensive. IP cameras run on standard Cat5e/Cat6 Ethernet cable, the same infrastructure used for IT networks. They can be powered over the same cable (Power over Ethernet, PoE), eliminating the need for separate power runs.",
      "## Scalability",
      "Adding cameras to an analog system typically requires running new cable back to a central DVR with a fixed number of inputs. Expanding IP systems is more flexible: cameras connect to the nearest network switch, and NVR capacity is easier to expand. For growing organizations or phased deployments, IP architecture is easier to scale.",
      "## AI analytics and integration",
      "AI-powered features — object detection, behavior analysis, license plate recognition, facial recognition — require digital video processed at sufficient resolution. These capabilities are native to IP camera ecosystems. Bolting them onto analog systems is possible but cumbersome. If AI analytics is on your roadmap, plan for IP from the start.",
      "## When analog still makes sense",
      "You have extensive existing coaxial infrastructure in good condition. Budget is the primary constraint and the use case is basic recording. You need a simple, standalone system with minimal IT involvement. Expanding an existing analog deployment with compatible equipment.",
      "## The hybrid path",
      "Many organizations operate hybrid systems: existing analog cameras retained where sufficient, IP cameras added where higher resolution or analytics are needed. Video encoders convert analog signals to IP, allowing both to be managed through a single VMS.",
      "E Vision System supplies and installs both IP and analog HD systems, as well as hybrid configurations."
    ]
  },
  "what-is-anpr-lpr": {
    title: "What Is ANPR and How Are Organizations Using It?",
    excerpt: "Automatic Number Plate Recognition (ANPR) is one of the most widely deployed AI applications in physical security today. Despite its prevalence, many organizations considering deployment have a limited understanding of how it works, what it can realistically achieve, and where its limitations lie.",
    date: "2026-04-15",
    author: "E Vision System Team",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    content: [
      "Automatic Number Plate Recognition (ANPR) — also referred to as License Plate Recognition (LPR) — is one of the most widely deployed AI applications in physical security today. It's used at highway toll plazas, border crossings, corporate carparks, and police checkpoints. Despite its prevalence, many organizations considering deployment have a limited understanding of how it works, what it can realistically achieve, and where its limitations lie.",
      "## How ANPR works",
      "An ANPR system consists of three core components: a camera optimized for plate capture, software that isolates the plate region within the image, and an OCR (Optical Character Recognition) engine that reads the characters. Modern systems process this pipeline in real time — typically under 100 milliseconds per frame — and can cross-reference the recognized plate against databases (whitelists, blacklists, watchlists) to trigger automated actions: raising a barrier, generating an alert, logging an entry event.",
      "## Camera placement and optics matter",
      "ANPR performance is heavily dependent on physical setup. Key variables include: angle of approach (front or rear capture), distance from camera to plate, lighting conditions (IR illumination is standard for 24/7 operation), vehicle speed, and plate condition. A system specified without accounting for these variables will underperform regardless of how sophisticated the software is. This is why ANPR is best deployed as a complete, configured system rather than assembled from components by a non-specialist.",
      "## Accuracy: what to expect",
      "Well-configured ANPR systems operating in controlled conditions — barrier lanes, carpark entrances, toll plazas — typically achieve very high read accuracy on clean plates. Accuracy degrades with obstructed plates, non-standard fonts, adverse weather, and high vehicle speeds. When evaluating vendors, ask for accuracy figures that reflect your specific operating conditions and plate jurisdiction, not best-case benchmarks.",
      "## Enterprise applications",
      "For corporate and commercial deployments, ANPR is primarily used for: automated carpark access control (replacing proximity cards or manual barriers), visitor management (pre-registering expected vehicles), fleet tracking within large campuses, and evidence capture for incidents involving vehicles. The operational benefit is significant: carpark lanes can operate without attendants, access logs are automatically generated, and security teams have a reliable record of vehicle movements.",
      "## Government and law enforcement applications",
      "Government deployments typically involve higher volumes and more complex use cases: highway monitoring and traffic flow analysis, nationwide stolen vehicle detection, border crossing verification, and integration with law enforcement databases for wanted vehicle alerts. These deployments require robust infrastructure — edge compute at each camera site for local processing, redundant connectivity, and integration with central command systems.",
      "## Data and privacy considerations",
      "ANPR systems collect data on vehicle movements — which, when aggregated, can constitute personal data in jurisdictions where vehicles are linked to registered owners. Organizations deploying ANPR should address: what data is retained and for how long, who has access, how the data is secured, and whether the use case justifies the collection under applicable privacy law. In Singapore, consult your PDPA obligations before deployment.",
      "E Vision System's ANPR / Plate Recognition Bundle includes specialized cameras, edge processing hardware, ANPR software, and integration with access control systems."
    ]
  },
  "edge-computing-surveillance": {
    title: "Edge Computing in Surveillance: Why Processing at the Camera Changes Everything",
    excerpt: "For most of the history of video surveillance, the camera was a passive device. AI changed the software side of this equation years ago. What's less discussed is where that AI runs — and why it matters enormously.",
    date: "2026-03-28",
    author: "E Vision System Team",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    content: [
      "For most of the history of video surveillance, the camera was a passive device: it captured light and sent the resulting signal somewhere else for storage and review. Intelligence — such as it was — lived in the control room, in the form of a human operator watching monitors.",
      "AI changed the software side of this equation years ago. What's less discussed is where that AI runs — and why it matters enormously.",
      "## The cloud processing model and its limits",
      "The first wave of AI video analytics was cloud-based: cameras stream footage to remote servers, where analysis runs and results are sent back. This model works in many contexts, but it has fundamental limitations for security applications.",
      "Latency is the most obvious. A camera detecting an intrusion event, sending footage to the cloud, receiving an alert, and triggering a local response can take several seconds. For access control, traffic enforcement, or perimeter security, seconds matter. Bandwidth is the second constraint. Full-resolution video from dozens or hundreds of cameras is a substantial continuous data stream. Data sovereignty is the third — many government agencies and regulated enterprises cannot route operational video data through external cloud infrastructure.",
      "## Edge computing: intelligence at the source",
      "Edge computing moves the AI processing to the camera itself, or to a local server at the camera site, rather than to a remote cloud. The camera captures footage, analyzes it locally, and transmits only results — alerts, metadata, event records — rather than raw video streams.",
      "The practical implications are significant. Latency drops to milliseconds: the camera detects and responds to events in real time, without waiting for a round trip to remote infrastructure. Bandwidth requirements drop dramatically: instead of streaming raw video, the system transmits structured data about what the camera saw. Data sovereignty is maintained: footage stays on-premises unless there's a specific reason to transmit it.",
      "## What runs at the edge today",
      "Modern edge AI cameras are capable of running sophisticated models locally: object detection and classification, license plate recognition, face detection, crowd density estimation, and motion analytics. More computationally intensive tasks — complex facial recognition against large databases, multi-camera behavioral correlation, advanced forensic search — typically still benefit from dedicated local servers or hybrid architectures.",
      "## Hardware considerations",
      "Edge AI requires cameras with onboard processing capability — typically a dedicated neural processing unit (NPU) or GPU chip. These cameras cost more than standard IP cameras. The tradeoff is lower infrastructure cost (less bandwidth, simpler NVR requirements) and better operational performance. For greenfield deployments in environments where cloud connectivity is constrained or where real-time response is critical, edge-capable hardware is increasingly the baseline specification rather than a premium option.",
      "## Choosing the right architecture",
      "There is no universal answer. The right processing architecture depends on your use case, connectivity, regulatory environment, and budget. Most enterprise and government deployments today use hybrid architectures: edge processing for real-time response and data minimization, with on-premises servers for analytics requiring more compute, and selective cloud connectivity for management and reporting.",
      "The key question to ask any vendor: where does the AI run, and what happens if connectivity is interrupted? The answer reveals a great deal about how the system will perform in practice.",
      "E Vision System's Edge Compute Devices and AI video analytics platforms are designed for on-premises and edge deployments with no cloud dependency required."
    ]
  }
};

const relatedArticles = [
  {
    slug: "buying-surveillance-system-2026",
    title: "What to Look for When Buying a Surveillance System in 2026",
    date: "2026-05-28",
    category: "Security"
  },
  {
    slug: "pdpa-surveillance-singapore-guide",
    title: "PDPA and Surveillance: What Singapore Businesses Need to Know",
    date: "2026-05-14",
    category: "Compliance"
  },
  {
    slug: "edge-computing-surveillance",
    title: "Edge Computing in Surveillance: Why Processing at the Camera Changes Everything",
    date: "2026-03-28",
    category: "Insights"
  }
];


export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData[slug || ""] || {
    title: "Article Not Found",
    excerpt: "",
    date: new Date().toISOString(),
    author: "E Vision System Team",
    category: "General",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    content: ["The requested article could not be found. Please check the URL or browse our news archive for more content."]
  };

  const renderContent = (text: string) => {
    if (text.startsWith("## ")) {
      return (
        <h2 className="mb-4 mt-8 font-heading text-2xl font-bold text-foreground">
          {text.replace("## ", "")}
        </h2>
      );
    }
    return <p className="mb-4 text-muted-foreground leading-relaxed">{text}</p>;
  };

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px] lg:h-[50vh]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back Link */}
            <Link 
              to="/news" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <User className="h-4 w-4" />
                {article.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            {/* Content */}
            <div className="mt-8 border-t border-border pt-8">
              {article.content.map((paragraph, index) => (
                <div key={index}>{renderContent(paragraph)}</div>
              ))}
            </div>

            {/* Share */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Share2 className="h-4 w-4" />
                <span className="text-sm">Share this article</span>
              </div>
              <Button asChild variant="default">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </motion.article>

          {/* Related Articles */}
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/news/${related.slug}`}
                  className="group rounded-lg border border-border bg-card p-4 card-hover"
                >
                  <span className="text-xs font-medium text-accent">
                    {related.category}
                  </span>
                  <h3 className="mt-2 font-heading font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center text-sm text-muted-foreground">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

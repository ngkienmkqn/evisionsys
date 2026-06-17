import { useParams, Link } from "react-router-dom";
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
  Building2,
  Factory,
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Camera,
  Server,
  Video,
  AudioLines,
  Home,
  Warehouse,
  ParkingCircle,
  Users,
  FileSearch,
  Scale,
  ScanFace,
  CarFront,
  TrafficCone,
  Share2,
  Monitor,
  HardDrive,
  Wrench,
  Package
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import solutionHeroDefault from "@/assets/solution-cyberwatch.jpg";

// Solution-specific images
import imgCyberwatchSoc from "@/assets/sol-cyberwatch-soc.png";
import imgSecCameraHero from "@/assets/sol-security-camera-hero.png";
import imgSecCameraInstall from "@/assets/sol-security-camera-install.png";
import imgSecCameraMobile from "@/assets/sol-security-camera-mobile.png";
import imgForensicsHero from "@/assets/sol-forensics-hero.png";
import imgForensicsExtraction from "@/assets/sol-forensics-extraction.png";
import imgVideoxDashboard from "@/assets/sol-videox-dashboard.png";
import imgVideoxSearch from "@/assets/sol-videox-search.png";
import imgNeoInsightsHero from "@/assets/sol-neo-insights-hero.png";
import imgFaceRecLive from "@/assets/sol-face-recognition-live.png";
import imgAnprHighway from "@/assets/sol-anpr-highway.png";
import imgAnprDashboard from "@/assets/sol-anpr-dashboard.png";
import imgTrafficViolation from "@/assets/sol-traffic-violation.png";
import imgNeoCollectGraph from "@/assets/sol-neo-collect-graph.png";
import imgEdgeComputeDeploy from "@/assets/sol-edge-compute-deploy.png";
// New batch — expanded galleries
import imgCameraLineup from "@/assets/sol-camera-lineup.png";
import imgCameraNightvision from "@/assets/sol-camera-nightvision.png";
import imgCameraNvrRack from "@/assets/sol-camera-nvr-rack.png";
import imgForensicsPelican from "@/assets/sol-forensics-pelican.png";
import imgForensicsReport from "@/assets/sol-forensics-report.png";
import imgForensicsDevices from "@/assets/sol-forensics-devices.png";
import imgVideoxHeatmap from "@/assets/sol-videox-heatmap.png";
import imgVideoxMulticam from "@/assets/sol-videox-multicam.png";
import imgVideoxFaceSearch from "@/assets/sol-videox-face-search.png";
import imgNeoSpeakerTimeline from "@/assets/sol-neo-speaker-timeline.png";
import imgNeoTranslation from "@/assets/sol-neo-translation.png";
import imgNeoVoiceprint from "@/assets/sol-neo-voiceprint.png";
import imgCyberNetworkMap from "@/assets/sol-cyber-network-map.png";
import imgCyberIncident from "@/assets/sol-cyber-incident.png";
import imgCyberCompliance from "@/assets/sol-cyber-compliance.png";
import imgFaceEnrollment from "@/assets/sol-face-enrollment.png";
import imgFaceMulticam from "@/assets/sol-face-multicam.png";
import imgAnprParking from "@/assets/sol-anpr-parking.png";
import imgAnprDatabase from "@/assets/sol-anpr-database.png";
import imgTrafficEvidence from "@/assets/sol-traffic-evidence.png";
import imgTrafficIntersection from "@/assets/sol-traffic-intersection.png";
import imgCollectEntity from "@/assets/sol-collect-entity.png";
import imgCollectTimeline from "@/assets/sol-collect-timeline.png";
import imgCollectReport from "@/assets/sol-collect-report.png";
import imgEdgeManagement from "@/assets/sol-edge-management.png";
import imgEdgeOutdoor from "@/assets/sol-edge-outdoor.png";
// Existing product images
import imgSurveillanceBundle from "@/assets/product-surveillance-bundle.jpg";
import imgForensicsBundle from "@/assets/product-forensics-bundle.jpg";
import imgVideoIntel from "@/assets/product-video-intelligence.jpg";
import imgNeoInsightsSw from "@/assets/software-neo-insights.png";
import imgFaceRecSw from "@/assets/software-face-recognition.png";
import imgAnprSystem from "@/assets/product-anpr-system.jpg";
import imgCyberwatchSw from "@/assets/software-cyberwatch.png";
import imgEdgeCompute from "@/assets/product-edge-compute.png";

interface SolutionData {
  icon: typeof Shield;
  title: string;
  tagline: string;
  category: "software" | "turnkey" | "hybrid";
  heroDescription: string;
  heroImage?: string;
  images?: { src: string; alt: string; caption: string }[];
  problem: string[];
  howItWorks: { step: string; title: string; description: string }[];
  features: { category: string; items: string[] }[];
  outcomes: { value: string; label: string }[];
  useCases: { icon: typeof Building2; title: string; description: string }[];
  deployment: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  // Hardware + Software sections for turnkey/hybrid solutions
  includedHardware?: { title: string; items: string[] }[];
  includedSoftware?: { title: string; items: string[] }[];
  implementation?: { title: string; description: string }[];
  warranty?: { hardware: string; software: string; sla: string };
  configurations?: { name: string; description: string; recommended?: boolean }[];
}

const solutionsData: Record<string, SolutionData> = {
  cyberwatch: {
    icon: Shield,
    title: "CyberWatch",
    tagline: "Enterprise Security Operations Platform",
    category: "software",
    heroDescription: "Real-time threat detection and response for enterprise security operations. Monitor, detect, and respond to cyber threats before they impact your business.",
    heroImage: imgCyberwatchSoc,
    images: [
      { src: imgCyberwatchSw, alt: "CyberWatch Dashboard", caption: "Real-time threat detection dashboard with AI-powered alert prioritization" },
      { src: imgCyberwatchSoc, alt: "Security Operations Center", caption: "Enterprise SOC powered by CyberWatch platform" },
      { src: imgCyberNetworkMap, alt: "Network Threat Map", caption: "Live network topology with real-time threat visualization and attack vector mapping" },
      { src: imgCyberIncident, alt: "Incident Response Workflow", caption: "Automated incident response playbooks with step-by-step containment actions" },
      { src: imgCyberCompliance, alt: "Compliance Reporting", caption: "Pre-built compliance dashboards for ISO 27001, NIST, and PDPA frameworks" },
    ],
    problem: [
      "Enterprises face an ever-growing volume of cyber threats. Traditional security tools generate thousands of alerts daily, overwhelming security teams and causing critical threats to slip through.",
      "The average time to detect a breach is 207 days. Every minute a threat goes undetected increases potential damage and recovery costs.",
      "CyberWatch addresses these challenges with AI-powered threat detection, automated response workflows, and unified visibility across your entire infrastructure."
    ],
    howItWorks: [
      { step: "01", title: "Collect", description: "Aggregate logs and telemetry from all sources—network, endpoint, cloud, and applications." },
      { step: "02", title: "Analyze", description: "AI-powered analysis correlates events and identifies threats using behavioral analytics." },
      { step: "03", title: "Detect", description: "Real-time alerting with context-rich notifications prioritized by severity and risk." },
      { step: "04", title: "Respond", description: "Automated playbooks and one-click remediation to contain threats instantly." },
      { step: "05", title: "Report", description: "Comprehensive dashboards and compliance reports for stakeholders and auditors." }
    ],
    features: [
      {
        category: "Detection & Monitoring",
        items: ["Real-time threat detection with ML models", "Behavioral analytics and anomaly detection", "Network traffic analysis", "Endpoint detection and response (EDR)", "Cloud security monitoring"]
      },
      {
        category: "Response & Automation",
        items: ["Automated incident response playbooks", "One-click threat containment", "Integration with SOAR platforms", "Custom workflow builder", "Threat intelligence feeds"]
      },
      {
        category: "Compliance & Reporting",
        items: ["Pre-built compliance templates", "Audit trail and evidence collection", "Executive dashboards", "Scheduled report generation", "Data retention policies"]
      }
    ],
    outcomes: [
      { value: "90%", label: "Reduction in alert fatigue" },
      { value: "85%", label: "Faster threat detection" },
      { value: "60%", label: "Lower incident response time" },
      { value: "99.9%", label: "Platform uptime SLA" }
    ],
    useCases: [
      { icon: Landmark, title: "Financial Services", description: "Protect sensitive financial data and meet regulatory requirements including SOX, PCI-DSS, and GLBA." },
      { icon: HeartPulse, title: "Healthcare", description: "Secure patient data and ensure HIPAA compliance while maintaining operational continuity." },
      { icon: Factory, title: "Manufacturing", description: "Protect OT/ICS environments and prevent production disruptions from cyber attacks." },
      { icon: ShoppingCart, title: "Retail", description: "Secure customer data, payment systems, and e-commerce platforms from threats." },
      { icon: GraduationCap, title: "Education", description: "Protect student data and research assets while enabling secure remote learning." },
      { icon: Building2, title: "Enterprise", description: "Comprehensive security operations for large organizations with complex IT environments." }
    ],
    deployment: [
      { title: "Cloud-Native", description: "Deploy on AWS, Azure, or GCP with auto-scaling and high availability." },
      { title: "On-Premises", description: "Dedicated installation for organizations with strict data residency requirements." },
      { title: "Hybrid", description: "Flexible deployment combining cloud and on-premises components." },
      { title: "Support", description: "24/7 technical support with guaranteed <2 hour response time." }
    ],
    faqs: [
      { question: "How long does implementation take?", answer: "Typical implementation takes 4-6 weeks, including integration with existing security tools, customization, and training." },
      { question: "Can CyberWatch integrate with our existing SIEM?", answer: "Yes, CyberWatch integrates with major SIEM platforms including Splunk, IBM QRadar, and Microsoft Sentinel." },
      { question: "What data sources can CyberWatch ingest?", answer: "CyberWatch supports 500+ integrations including network devices, endpoints, cloud services, identity providers, and custom applications." },
      { question: "Is CyberWatch compliant with industry regulations?", answer: "Yes, CyberWatch is SOC 2 Type II certified and helps organizations meet requirements for GDPR, HIPAA, PCI-DSS, ISO 27001." },
      { question: "What training is provided?", answer: "We provide comprehensive onboarding including administrator training, analyst workshops, and ongoing access to our learning portal." },
      { question: "How is pricing structured?", answer: "Pricing is based on data volume ingested and number of monitored assets. Contact sales for a customized quote." }
    ]
  },
  "security-camera": {
    icon: Camera,
    title: "Security Camera Solutions",
    tagline: "Smart Surveillance. Scalable. Reliable.",
    category: "turnkey",
    heroDescription: "Complete surveillance systems including cameras, NVR, monitoring software, and optional AI analytics. We deliver hardware, installation, and ongoing support.",
    heroImage: imgSecCameraHero,
    images: [
      { src: imgSurveillanceBundle, alt: "AI Surveillance Dashboard", caption: "Centralized monitoring with AI-powered video analytics" },
      { src: imgCameraLineup, alt: "Camera Product Range", caption: "Full product lineup: dome, bullet, PTZ, and fisheye cameras for every deployment scenario" },
      { src: imgSecCameraInstall, alt: "Professional Installation", caption: "On-site camera installation by certified technicians" },
      { src: imgCameraNightvision, alt: "Night Vision Footage", caption: "Crystal-clear infrared night vision with smart detection capabilities" },
      { src: imgCameraNvrRack, alt: "NVR Server Infrastructure", caption: "Enterprise NVR rack with redundant storage and continuous recording" },
      { src: imgSecCameraMobile, alt: "Mobile Monitoring", caption: "Remote access and monitoring from any mobile device, anywhere" },
    ],
    problem: [
      "Traditional security systems are often complex to install, expensive to maintain, and limited in their capabilities. Many businesses struggle with blind spots, unreliable footage, and the inability to access cameras remotely.",
      "Without intelligent detection, security teams are overwhelmed by false alarms and miss critical events. Limited storage and bandwidth create gaps in continuous monitoring.",
      "Our Security Camera Solutions provide a complete turnkey system—cameras, storage, software, installation, and support—optimized for your specific environment."
    ],
    howItWorks: [
      { step: "01", title: "Assess", description: "Site survey to determine optimal camera placement and coverage requirements." },
      { step: "02", title: "Configure", description: "Select camera types—IP, PTZ, solar, or IR—based on environment and needs." },
      { step: "03", title: "Deploy", description: "Professional installation with minimal disruption to operations." },
      { step: "04", title: "Connect", description: "Set up remote monitoring software and mobile applications." },
      { step: "05", title: "Monitor", description: "24/7 surveillance with real-time alerts and cloud storage options." }
    ],
    features: [
      {
        category: "Camera Hardware",
        items: ["IP / Wireless Security Cameras", "PTZ & Optical Zoom Cameras (up to 40x)", "Solar-powered Outdoor Cameras", "IR / Laser Night Vision Cameras", "4K Ultra HD Resolution"]
      },
      {
        category: "Intelligent Features",
        items: ["AI motion detection & object recognition", "Advanced video compression (H.264/H.265)", "Smart zone monitoring", "License plate recognition", "Face detection alerts"]
      },
      {
        category: "Software & Access",
        items: ["Remote monitoring software", "Mobile applications (iOS/Android)", "Cloud and local storage options", "Multi-site management dashboard", "Optional Video X analytics integration"]
      }
    ],
    outcomes: [
      { value: "24/7", label: "Continuous monitoring" },
      { value: "90%", label: "Reduction in false alarms" },
      { value: "4K", label: "Ultra HD resolution" },
      { value: "100m+", label: "Night vision range" }
    ],
    useCases: [
      { icon: Home, title: "Residential & Villa Security", description: "Protect your home with smart surveillance, remote viewing, and instant alerts." },
      { icon: Building2, title: "Office & Commercial Buildings", description: "Secure entrances, common areas, and sensitive zones with comprehensive coverage." },
      { icon: Warehouse, title: "Warehouses & Industrial Zones", description: "Monitor large areas with PTZ cameras and thermal imaging for asset protection." },
      { icon: ParkingCircle, title: "Parking Areas & Campuses", description: "Cover expansive outdoor areas with weatherproof cameras and license plate recognition." },
      { icon: Factory, title: "Perimeter & Critical Infrastructure", description: "Long-range surveillance with laser night vision for high-security perimeters." },
      { icon: ShoppingCart, title: "Retail & Hospitality", description: "Prevent theft, monitor customer flow, and ensure staff safety." }
    ],
    deployment: [
      { title: "Wired (PoE)", description: "Power over Ethernet for reliable, high-bandwidth connections." },
      { title: "Wireless", description: "Wi-Fi and 4G/5G options for flexible deployment." },
      { title: "Solar-Powered", description: "Off-grid installations for remote locations." },
      { title: "24/7 Support", description: "Technical support and maintenance services included." }
    ],
    includedHardware: [
      { title: "Camera Options", items: ["Fixed IP Cameras (2MP-8MP)", "PTZ Cameras with Optical Zoom", "IR/Laser Night Vision Cameras", "Solar-powered Wireless Cameras", "Vandal-resistant Dome Cameras"] },
      { title: "Recording & Storage", items: ["Network Video Recorder (NVR)", "Up to 128-channel support", "RAID storage configurations", "Hot-swap drive bays", "Cloud backup options"] },
      { title: "Networking", items: ["PoE switches", "Network cabling", "Wireless access points", "4G/5G routers (optional)"] }
    ],
    includedSoftware: [
      { title: "Core Platform", items: ["Video Management System (VMS)", "Multi-site dashboard", "User/role management", "Mobile app (iOS/Android)", "Web client access"] },
      { title: "Analytics (Optional)", items: ["Video X - Deep Insight integration", "Motion detection zones", "Object classification", "License plate recognition", "Face detection"] }
    ],
    implementation: [
      { title: "Site Survey", description: "Professional assessment of coverage requirements and camera placement." },
      { title: "Installation", description: "Physical mounting, cabling, and network configuration." },
      { title: "Configuration", description: "System setup, user accounts, and alert rules." },
      { title: "Training", description: "Operator training on daily operations and maintenance." }
    ],
    warranty: {
      hardware: "3-year manufacturer warranty on cameras and NVR",
      software: "1-year software updates and support included",
      sla: "24/7 support with <4 hour response time for critical issues"
    },
    configurations: [
      { name: "Basic (4-8 cameras)", description: "Small office or retail location with essential coverage.", recommended: false },
      { name: "Standard (16-32 cameras)", description: "Medium facility with comprehensive indoor/outdoor coverage.", recommended: true },
      { name: "Enterprise (64+ cameras)", description: "Large campus or multi-site deployment with advanced analytics.", recommended: false }
    ],
    faqs: [
      { question: "What camera resolution do you offer?", answer: "We offer cameras ranging from 2MP (1080p) to 8MP (4K Ultra HD). Resolution choice depends on your monitoring requirements and storage capacity." },
      { question: "How far can night vision cameras see?", answer: "Our IR cameras provide clear footage up to 50 meters, while laser night vision cameras can reach over 100 meters in complete darkness." },
      { question: "Can I access cameras remotely?", answer: "Yes, all systems include mobile apps and web-based access for real-time monitoring from anywhere with internet connection." },
      { question: "Do you provide installation services?", answer: "Yes, our turnkey solution includes professional installation, cabling, and configuration. We handle everything from site survey to handover." },
      { question: "What about ongoing maintenance?", answer: "We offer maintenance packages including firmware updates, health monitoring, and on-site support when needed." },
      { question: "Can I add Video X analytics later?", answer: "Yes, Video X - Deep Insight can be integrated with your existing camera system for advanced AI analytics." }
    ]
  },
  "portable-lab": {
    icon: Server,
    title: "Portable Lab/Server",
    tagline: "Digital Forensic Solution",
    category: "turnkey",
    heroDescription: "Complete digital forensic solution: ruggedized workstation, extraction software, analysis tools, and reporting—deployable in the field or lab.",
    heroImage: imgForensicsHero,
    images: [
      { src: imgForensicsBundle, alt: "Forensic Workstation", caption: "Ruggedized forensic workstation with integrated analysis tools" },
      { src: imgForensicsPelican, alt: "Portable Transport Case", caption: "Military-grade Pelican case with custom foam insert for field deployment" },
      { src: imgForensicsExtraction, alt: "Data Extraction", caption: "Professional data extraction from mobile devices and storage media" },
      { src: imgForensicsDevices, alt: "Extraction Equipment", caption: "Complete forensic toolkit: write-blockers, adapters, SIM readers, and chip-off tools" },
      { src: imgForensicsReport, alt: "Report Generation", caption: "Automated forensic report generation with evidence chain documentation" },
      { src: imgForensicsHero, alt: "Forensics Laboratory", caption: "Complete digital forensics lab setup with evidence handling" },
    ],
    problem: [
      "Digital forensic investigations require specialized equipment that is often expensive, bulky, and difficult to deploy in field conditions. Investigators need to extract data quickly without compromising evidence integrity.",
      "The variety of storage formats, file systems, and video codecs makes data extraction complex. Traditional solutions require multiple tools and expertise to handle different device types.",
      "Our Portable Lab provides a complete, configurable forensic workstation that supports a wide range of data sources and formats, enabling rapid extraction and analysis anywhere."
    ],
    howItWorks: [
      { step: "01", title: "Connect", description: "Attach target storage devices via multiple interface options." },
      { step: "02", title: "Extract", description: "Create forensically sound images and extract data without modification." },
      { step: "03", title: "Analyze", description: "View and analyze extracted data with built-in viewers and tools." },
      { step: "04", title: "Convert", description: "Convert files between formats for playback and evidence presentation." },
      { step: "05", title: "Report", description: "Generate comprehensive reports in PDF and Excel formats." }
    ],
    features: [
      {
        category: "Data Extraction",
        items: ["Hard disk, SSD, USB, SD card support", "Drone and camera memory extraction", "Mobile device data recovery", "RAID array reconstruction", "Encrypted drive handling"]
      },
      {
        category: "Format Support",
        items: ["Video codecs: H.264, H.265, MPEG4, M-JPEG", "File systems: FAT, NTFS, exFAT, HFS+, EXT3/4", "Proprietary formats: HIKVISION, DHFS4.1, VDFS", "XFS, F2FS, TAT16 support", "Automatic format detection"]
      },
      {
        category: "Analysis Tools",
        items: ["Built-in video player", "File viewer for documents and images", "HEX viewer for raw data analysis", "Data sorting and categorization", "Advanced search functionality"]
      }
    ],
    outcomes: [
      { value: "12TB+", label: "Storage capacity" },
      { value: "350+", label: "Formats supported" },
      { value: "100%", label: "Evidence integrity" },
      { value: "24h", label: "Field deployment ready" }
    ],
    useCases: [
      { icon: Scale, title: "Law Enforcement", description: "Criminal investigations requiring rapid, on-site data extraction and chain of custody preservation." },
      { icon: Building2, title: "Corporate Investigations", description: "Internal fraud investigations, HR inquiries, and compliance audits." },
      { icon: FileSearch, title: "Insurance Claims", description: "Digital evidence collection for accident reconstruction and fraud detection." },
      { icon: Landmark, title: "Legal Proceedings", description: "eDiscovery and evidence preparation for litigation support." },
      { icon: Factory, title: "Incident Response", description: "Rapid deployment for cybersecurity breach investigations." },
      { icon: Users, title: "Consulting Services", description: "Forensic analysis services for clients requiring expert investigation." }
    ],
    deployment: [
      { title: "Portable Unit", description: "Ruggedized case for field deployment with all components included." },
      { title: "Lab Configuration", description: "Desktop setup optimized for high-volume processing." },
      { title: "Custom Build", description: "Hardware and software configured to specific requirements." },
      { title: "Training Included", description: "Comprehensive training on forensic procedures and tool usage." }
    ],
    includedHardware: [
      { title: "Workstation Specs", items: ["Intel i7 13th Generation CPU", "32GB DDR5 RAM", "500GB NVMe SSD (OS)", "3x 4TB HDD (data storage)", "Windows 11 Professional"] },
      { title: "Connectivity", items: ["USB 3.2 Gen 2 ports", "USB-C / Thunderbolt 4", "SD/microSD card readers", "SATA/IDE adapters", "Write-blocker hardware"] },
      { title: "Enclosure", items: ["Ruggedized transport case", "Built-in display (optional)", "Battery backup (optional)", "Portable printer (optional)"] }
    ],
    includedSoftware: [
      { title: "Forensic Tools", items: ["Data extraction engine", "Multi-format video player", "File viewer suite", "HEX editor", "Hash verification tools"] },
      { title: "Reporting", items: ["PDF report generator", "Excel export", "Evidence chain documentation", "Case management", "Audit logging"] }
    ],
    implementation: [
      { title: "Configuration", description: "System setup and software installation according to your requirements." },
      { title: "Calibration", description: "Hardware verification and write-blocker testing." },
      { title: "Training", description: "2-day hands-on training covering all forensic procedures." },
      { title: "Certification", description: "Documentation package for chain of custody requirements." }
    ],
    warranty: {
      hardware: "3-year warranty on workstation components",
      software: "1-year software updates and support",
      sla: "Business hours support with remote assistance"
    },
    configurations: [
      { name: "Field Kit", description: "Compact, portable configuration for on-site investigations.", recommended: false },
      { name: "Standard Lab", description: "Full-featured workstation for lab-based analysis.", recommended: true },
      { name: "High-Volume", description: "Multi-drive processing for large-scale investigations.", recommended: false }
    ],
    faqs: [
      { question: "What are the hardware specifications?", answer: "Intel i7 13th generation CPU, 32GB RAM, 500GB SSD for OS, and 3x 4TB HDD for data storage, running Windows 11." },
      { question: "Is data extraction forensically sound?", answer: "Yes, the system creates bit-by-bit copies with hash verification to maintain evidence integrity and chain of custody." },
      { question: "Can it handle encrypted drives?", answer: "The system supports various encryption detection and, where legally permitted and keys are available, decryption capabilities." },
      { question: "How portable is the unit?", answer: "The system is housed in a ruggedized case weighing approximately 15kg, suitable for vehicle transport and field deployment." },
      { question: "What training is provided?", answer: "We provide comprehensive 2-day training on system operation, forensic procedures, and evidence handling best practices." },
      { question: "Can the configuration be customized?", answer: "Yes, hardware and software can be configured according to specific customer requirements and use cases." }
    ]
  },
  "video-x-deep-insight": {
    icon: Video,
    title: "Video X - Deep Insight",
    tagline: "AI-Powered Video Analytics",
    category: "hybrid",
    heroDescription: "AI video analytics for object detection, face recognition, and intelligent search. Available as software or pre-configured hardware appliance.",
    heroImage: imgVideoxDashboard,
    images: [
      { src: imgVideoxDashboard, alt: "Video Analytics Dashboard", caption: "AI-powered real-time object detection and tracking" },
      { src: imgVideoxMulticam, alt: "Multi-Camera Monitoring", caption: "9-camera live monitoring grid with AI detection overlays" },
      { src: imgVideoxFaceSearch, alt: "Face Search Engine", caption: "Search across all camera footage by face photo with confidence scoring" },
      { src: imgVideoxHeatmap, alt: "Traffic Heatmap Analytics", caption: "Foot traffic heatmaps with zone analysis and peak hour statistics" },
      { src: imgVideoxSearch, alt: "Object Attribute Search", caption: "Find specific objects by color, type, and visual attributes across all footage" },
      { src: imgVideoIntel, alt: "Video Intelligence Server", caption: "Dedicated server infrastructure for AI video processing" },
    ],
    problem: [
      "Security teams face an impossible task: monitoring hours of video footage to identify specific events, objects, or individuals. Manual review is time-consuming, error-prone, and cannot scale with growing surveillance systems.",
      "Traditional video management systems lack the intelligence to automatically detect and categorize relevant events. Critical information gets lost in vast amounts of recorded footage.",
      "Video X - Deep Insight applies AI to automatically analyze video content, detect objects and faces, track movements, and provide actionable intelligence—reducing the need for human labor while improving accuracy."
    ],
    howItWorks: [
      { step: "01", title: "Import", description: "Load video files in various formats including AVI, MP4, H.264, H.265, and more." },
      { step: "02", title: "Analyze", description: "AI engine processes video to detect and classify all objects and faces." },
      { step: "03", title: "Track", description: "Follow specific objects or people across time and camera views." },
      { step: "04", title: "Search", description: "Query video content using characteristics, regions, or reference images." },
      { step: "05", title: "Report", description: "Generate summary videos and detailed analysis reports." }
    ],
    features: [
      {
        category: "Object Detection",
        items: ["Automatic object detection and listing", "Vehicle recognition and classification", "License plate clarification algorithms", "Clothing and accessory identification", "Object characteristic extraction"]
      },
      {
        category: "Face Recognition",
        items: ["Face detection and recognition", "Face timeline tracking", "Image-based face search", "Height and age estimation", "Multi-face comparison"]
      },
      {
        category: "Analysis Tools",
        items: ["Summary video generation", "Region-based object filtering", "Direction-based navigation filtering", "Task management interface", "Video originality verification"]
      }
    ],
    outcomes: [
      { value: "95%+", label: "Detection accuracy" },
      { value: "10x", label: "Faster video review" },
      { value: "50+", label: "Video formats supported" },
      { value: "12", label: "Languages supported" }
    ],
    useCases: [
      { icon: Scale, title: "Law Enforcement", description: "Rapid identification of suspects and vehicles in investigation footage." },
      { icon: Building2, title: "Security Operations", description: "Real-time monitoring assistance and post-incident analysis." },
      { icon: Factory, title: "Retail Analytics", description: "Customer behavior analysis and loss prevention." },
      { icon: Landmark, title: "Transportation", description: "Traffic analysis, incident detection, and vehicle tracking." },
      { icon: Users, title: "Event Security", description: "Crowd monitoring and person of interest identification." },
      { icon: FileSearch, title: "Forensic Analysis", description: "Evidence extraction and timeline reconstruction from video." }
    ],
    deployment: [
      { title: "Software License", description: "Install on existing hardware meeting specifications." },
      { title: "Workstation Bundle", description: "Pre-configured hardware with software installed." },
      { title: "Server Deployment", description: "High-performance server for large-scale processing." },
      { title: "Training & Support", description: "Operator training and technical support included." }
    ],
    includedHardware: [
      { title: "Workstation Option", items: ["Intel i7/i9 processor", "32-64GB RAM", "NVIDIA GPU (RTX series)", "NVMe SSD + HDD storage", "Windows 11 Pro"] },
      { title: "Server Option", items: ["Dual Xeon processors", "128GB+ RAM", "Multi-GPU configuration", "Enterprise storage array", "Redundant power supply"] }
    ],
    includedSoftware: [
      { title: "Video X Platform", items: ["AI analysis engine", "Object detection module", "Face recognition module", "License plate module", "Multi-language interface"] },
      { title: "Management Tools", items: ["Task management dashboard", "User/role management", "Report generator", "API for integration", "Audit logging"] }
    ],
    implementation: [
      { title: "Installation", description: "Software installation and configuration on your hardware or our appliance." },
      { title: "Integration", description: "Connection to existing video sources and storage systems." },
      { title: "Training", description: "Operator training on search, analysis, and reporting functions." },
      { title: "Go-Live Support", description: "On-site support during initial operational period." }
    ],
    warranty: {
      hardware: "3-year warranty (if hardware bundle selected)",
      software: "1-year software updates and support",
      sla: "Business hours support, 24/7 available"
    },
    configurations: [
      { name: "Software Only", description: "License for installation on customer-provided hardware.", recommended: false },
      { name: "Workstation Bundle", description: "Pre-configured workstation with Video X installed.", recommended: true },
      { name: "Server Bundle", description: "High-performance server for enterprise deployments.", recommended: false }
    ],
    faqs: [
      { question: "What video formats are supported?", answer: "We support AVI, MKV, MPEG4, MOV, WMV, DVR, ASF, RT4, DIVX, 264, H264, H265, GE5, TS, 3GP, XBA, MP4, FLV, and many more." },
      { question: "How accurate is face recognition?", answer: "Face recognition achieves 95%+ accuracy under optimal conditions. Performance varies based on video quality, lighting, and angle." },
      { question: "Can it process multiple videos simultaneously?", answer: "Yes, the system supports batch processing and can analyze multiple video files in parallel." },
      { question: "What languages are supported?", answer: "The interface supports German, English, French, Vietnamese, Japanese, Korean, Chinese, and more." },
      { question: "Is internet connection required?", answer: "No, Video X operates entirely offline for security-sensitive environments." },
      { question: "Can I get a pre-configured hardware appliance?", answer: "Yes, we offer pre-configured workstations and servers with Video X installed and ready to use." }
    ]
  },
  "neo-insights": {
    icon: AudioLines,
    title: "Neo Insights",
    tagline: "Voice Recognition & Analysis Platform",
    category: "hybrid",
    heroDescription: "AI voice recognition, transcription, and speaker identification. Available as software or bundled with dedicated workstation/server.",
    heroImage: imgNeoInsightsHero,
    images: [
      { src: imgNeoInsightsSw, alt: "Voice Analysis Interface", caption: "Real-time voice transcription with speaker identification" },
      { src: imgNeoSpeakerTimeline, alt: "Speaker Diarization", caption: "Color-coded speaker timeline with synchronized transcript and keyword extraction" },
      { src: imgNeoVoiceprint, alt: "Voice Biometric Comparison", caption: "Forensic voice comparison with spectrogram analysis and match confidence scoring" },
      { src: imgNeoTranslation, alt: "Multi-Language Translation", caption: "Real-time transcription and translation across 40+ languages with entity detection" },
      { src: imgNeoInsightsHero, alt: "Analyst Workstation", caption: "Dedicated voice intelligence analyst workstation with dual-monitor setup" },
    ],
    problem: [
      "Organizations deal with vast amounts of audio and video content that needs to be searched, transcribed, and analyzed. Manual transcription is slow, expensive, and cannot identify speakers or detect sensitive content.",
      "Traditional transcription services don't provide speaker identification, entity extraction, or content analysis. Critical information buried in hours of recordings remains inaccessible.",
      "Neo Insights uses AI to automatically transcribe, identify speakers, detect sensitive content, and extract entities from audio—transforming unstructured audio into searchable, actionable intelligence."
    ],
    howItWorks: [
      { step: "01", title: "Ingest", description: "Upload audio, video, or image files containing speech." },
      { step: "02", title: "Transcribe", description: "AI converts speech to text with speaker identification." },
      { step: "03", title: "Analyze", description: "Extract entities, detect sentiment, and flag sensitive content." },
      { step: "04", title: "Translate", description: "Automatically translate content to Vietnamese or other languages." },
      { step: "05", title: "Export", description: "Generate searchable transcripts and analysis reports." }
    ],
    features: [
      {
        category: "Voice Processing",
        items: ["Voice-to-text transcription", "Speaker identification and labeling", "Voice library development", "Multi-speaker separation", "Accent and dialect handling"]
      },
      {
        category: "Content Analysis",
        items: ["Negative content detection", "Reflective content identification", "Block keyword detection", "Entity extraction (nouns, names)", "Text nuance analysis"]
      },
      {
        category: "Language & Translation",
        items: ["Automatic Vietnamese translation", "Multi-language transcription", "Real-time processing", "Custom terminology support", "Searchable transcript database"]
      }
    ],
    outcomes: [
      { value: "95%+", label: "Transcription accuracy" },
      { value: "50x", label: "Faster than manual" },
      { value: "100+", label: "Languages supported" },
      { value: "Real-time", label: "Processing speed" }
    ],
    useCases: [
      { icon: Scale, title: "Legal & Compliance", description: "Transcribe depositions, hearings, and compliance recordings with speaker identification." },
      { icon: Landmark, title: "Law Enforcement", description: "Process interview recordings, wiretaps, and surveillance audio." },
      { icon: Building2, title: "Corporate", description: "Meeting transcription, call center analysis, and training documentation." },
      { icon: HeartPulse, title: "Healthcare", description: "Medical dictation, patient consultations, and clinical documentation." },
      { icon: GraduationCap, title: "Education", description: "Lecture transcription, research interviews, and accessibility services." },
      { icon: Users, title: "Media & Broadcasting", description: "Subtitle generation, content indexing, and archive searchability." }
    ],
    deployment: [
      { title: "Desktop Application", description: "Install on Windows workstations for individual use." },
      { title: "Server Edition", description: "High-volume processing for enterprise environments." },
      { title: "API Integration", description: "Integrate transcription into existing workflows." },
      { title: "Custom Libraries", description: "Build organization-specific voice and terminology libraries." }
    ],
    includedHardware: [
      { title: "Workstation Option", items: ["Intel i7/i9 processor", "32GB RAM", "GPU acceleration support", "SSD storage", "Windows 11 Pro"] },
      { title: "Server Option", items: ["Multi-core Xeon processor", "64GB+ RAM", "NVMe storage array", "High-throughput audio input", "Redundant configuration"] }
    ],
    includedSoftware: [
      { title: "Neo Insights Platform", items: ["Voice-to-text engine", "Speaker identification", "Content analysis module", "Translation engine", "Search interface"] },
      { title: "Management", items: ["Voice library management", "User/role access control", "Case/project organization", "Export and reporting", "Audit logging"] }
    ],
    implementation: [
      { title: "Installation", description: "Software installation and initial configuration." },
      { title: "Voice Library Setup", description: "Build initial voice libraries for speaker identification." },
      { title: "Training", description: "User training on transcription workflow and analysis tools." },
      { title: "Integration", description: "API setup for workflow integration (if needed)." }
    ],
    warranty: {
      hardware: "3-year warranty (if hardware bundle selected)",
      software: "1-year software updates and support",
      sla: "Business hours support, extended options available"
    },
    configurations: [
      { name: "Software Only", description: "License for installation on customer hardware.", recommended: false },
      { name: "Workstation Bundle", description: "Pre-configured workstation ready to run.", recommended: true },
      { name: "Server Bundle", description: "High-volume server deployment.", recommended: false }
    ],
    faqs: [
      { question: "What audio formats are supported?", answer: "We support all major audio formats including MP3, WAV, M4A, FLAC, and audio tracks from video files." },
      { question: "How does speaker identification work?", answer: "The system learns voice characteristics and can identify previously registered speakers. New speakers are automatically separated and can be labeled for future recognition." },
      { question: "What is negative content detection?", answer: "AI analyzes transcribed text to identify potentially harmful, offensive, or policy-violating content based on configurable keyword lists and sentiment analysis." },
      { question: "Can it handle multiple languages in one file?", answer: "Yes, the system can detect language changes within a single recording and transcribe each segment in its respective language." },
      { question: "Is processing done locally or in the cloud?", answer: "Both options are available. On-premises processing ensures data never leaves your network. Server bundles include all necessary hardware." },
      { question: "Can I get a ready-to-run hardware bundle?", answer: "Yes, we offer pre-configured workstations and servers with Neo Insights installed and optimized for immediate use." }
    ]
  },
  "face-recognition": {
    icon: ScanFace,
    title: "Face Recognition Solutions",
    tagline: "Biometric Identification for Security",
    category: "turnkey",
    heroDescription: "Real-time face detection and identification for access control, watchlist alerting, and security operations. Available as software or complete turnkey system with cameras and servers.",
    heroImage: imgFaceRecLive,
    images: [
      { src: imgFaceRecSw, alt: "Face Recognition Interface", caption: "Real-time face detection with watchlist matching" },
      { src: imgFaceEnrollment, alt: "Enrollment Station", caption: "Self-service face enrollment kiosk for staff and visitor registration" },
      { src: imgFaceMulticam, alt: "Cross-Camera Tracking", caption: "Track individuals across multiple cameras with movement path visualization" },
      { src: imgFaceRecLive, alt: "Access Control Gate", caption: "Face recognition access control with turnstile integration at building entrance" },
    ],
    problem: [
      "Traditional access control relies on cards, PINs, or manual ID checks—all of which can be stolen, shared, or faked. Security teams cannot quickly identify persons of interest across multiple locations.",
      "Manual facial identification is slow and error-prone. High-security facilities need automated, real-time identification that scales across cameras without adding staff.",
      "Our Face Recognition solution automates identification at entrances, perimeters, and checkpoints—alerting security in real-time when watchlist matches occur."
    ],
    howItWorks: [
      { step: "01", title: "Capture", description: "Cameras capture facial images at entry points or within monitored areas." },
      { step: "02", title: "Detect", description: "AI detects and extracts facial features in real-time." },
      { step: "03", title: "Match", description: "Compare against enrolled database and watchlists." },
      { step: "04", title: "Alert", description: "Instant alerts for matches or access decisions." },
      { step: "05", title: "Log", description: "Complete audit trail for compliance and investigation." }
    ],
    features: [
      {
        category: "Core Recognition",
        items: ["Real-time face detection", "1:1 verification mode", "1:N identification mode", "Liveness detection (anti-spoofing)", "Mask-aware recognition"]
      },
      {
        category: "Watchlist & Alerts",
        items: ["Multi-watchlist management", "Real-time alert notifications", "Configurable matching thresholds", "False-positive controls", "Alert escalation workflows"]
      },
      {
        category: "Management & Compliance",
        items: ["Enrollment management", "Photo quality validation", "Role-based access control", "Audit logging", "GDPR/privacy controls"]
      }
    ],
    outcomes: [
      { value: "99.5%", label: "Recognition accuracy" },
      { value: "<1s", label: "Identification time" },
      { value: "24/7", label: "Continuous monitoring" },
      { value: "1M+", label: "Database capacity" }
    ],
    useCases: [
      { icon: Building2, title: "Building Access", description: "Frictionless entry for employees with automated door release." },
      { icon: GraduationCap, title: "Campus Security", description: "Monitor entry points and identify unauthorized individuals." },
      { icon: Factory, title: "Critical Infrastructure", description: "High-security facilities requiring biometric verification." },
      { icon: Users, title: "Event Security", description: "VIP identification and watchlist screening at venues." },
      { icon: Landmark, title: "Government Facilities", description: "Secure access control with audit trail requirements." },
      { icon: ParkingCircle, title: "Perimeter Monitoring", description: "Long-range identification at checkpoints and gates." }
    ],
    deployment: [
      { title: "Software License", description: "Install on customer-provided servers." },
      { title: "Edge Deployment", description: "Processing at camera level for low latency." },
      { title: "Turnkey Bundle", description: "Cameras + server + software + installation." },
      { title: "Managed Service", description: "We operate and maintain the system for you." }
    ],
    includedHardware: [
      { title: "Camera Options", items: ["Face-optimized IP cameras", "Wide dynamic range (WDR)", "IR illumination for low light", "Vandal-resistant housing", "Indoor/outdoor ratings"] },
      { title: "Processing", items: ["Edge compute devices", "Central server options", "GPU acceleration", "NVMe storage", "Redundant configuration"] },
      { title: "Enrollment Station", items: ["Capture camera", "Enrollment software", "Quality validation", "ID card integration (optional)"] }
    ],
    includedSoftware: [
      { title: "Recognition Engine", items: ["Face detection AI", "Feature extraction", "Matching algorithms", "Liveness detection", "Age/gender estimation"] },
      { title: "Management Platform", items: ["Watchlist management", "Alert dashboard", "Access control integration", "Reporting & analytics", "API for integration"] }
    ],
    implementation: [
      { title: "Site Assessment", description: "Camera placement planning for optimal capture angles." },
      { title: "Installation", description: "Camera mounting, cabling, and server deployment." },
      { title: "Enrollment", description: "Initial database population and watchlist setup." },
      { title: "Integration", description: "Connect to access control, VMS, or alerting systems." },
      { title: "Training", description: "Operator training on enrollment, monitoring, and response." }
    ],
    warranty: {
      hardware: "3-year warranty on cameras and servers",
      software: "1-year software maintenance and updates",
      sla: "24/7 support with <2 hour critical response"
    },
    configurations: [
      { name: "Single Entry Point", description: "1-4 cameras for a single entrance/checkpoint.", recommended: false },
      { name: "Multi-Zone", description: "8-16 cameras covering multiple entry points.", recommended: true },
      { name: "Campus-Wide", description: "32+ cameras with centralized management.", recommended: false }
    ],
    faqs: [
      { question: "How accurate is the face recognition?", answer: "Our system achieves 99.5% accuracy under optimal conditions (proper lighting, frontal capture angle, sufficient image resolution)." },
      { question: "Can it recognize faces with masks?", answer: "Yes, our latest algorithms include mask-aware recognition, though accuracy is slightly reduced compared to full-face capture." },
      { question: "What about privacy compliance?", answer: "The system includes GDPR-compliant data handling, consent management, and configurable retention policies. We provide documentation for regulatory compliance." },
      { question: "How many faces can the database hold?", answer: "The system supports databases exceeding 1 million enrolled faces with sub-second matching times." },
      { question: "Can it integrate with our access control system?", answer: "Yes, we support integration with major access control platforms via API or standard protocols (Wiegand, OSDP)." },
      { question: "Do you provide the cameras or can we use existing ones?", answer: "Both options are available. We can recommend optimal cameras for face recognition, or assess your existing cameras for compatibility." }
    ]
  },
  "plate-recognition": {
    icon: CarFront,
    title: "Plate Recognition (ANPR/LPR)",
    tagline: "Automatic License Plate Recognition",
    category: "turnkey",
    heroDescription: "Automatic license plate recognition for parking, access control, toll collection, and traffic management. Complete turnkey systems with cameras, software, and integration.",
    heroImage: imgAnprHighway,
    images: [
      { src: imgAnprSystem, alt: "ANPR Camera System", caption: "Multi-camera ANPR system for highway and urban deployment" },
      { src: imgAnprParking, alt: "Parking Gate Integration", caption: "Automated parking barrier with ANPR camera for touchless vehicle access" },
      { src: imgAnprDashboard, alt: "ANPR Management Dashboard", caption: "Real-time plate recognition with vehicle database matching" },
      { src: imgAnprDatabase, alt: "Vehicle Database", caption: "Searchable vehicle database with VIP/Staff/Blacklist classification and access history" },
      { src: imgAnprHighway, alt: "Highway Deployment", caption: "ANPR cameras deployed on highway gantry for traffic monitoring" },
    ],
    problem: [
      "Manual vehicle identification at entry gates, parking lots, and checkpoints is slow and error-prone. Staff cannot reliably track thousands of vehicles or maintain accurate records.",
      "Without automation, enforcing parking rules, tracking vehicle movements, and managing access lists requires significant labor and still produces unreliable results.",
      "Our ANPR solution automatically captures and recognizes license plates, enabling real-time access decisions, comprehensive vehicle logging, and integration with barriers and gate systems."
    ],
    howItWorks: [
      { step: "01", title: "Capture", description: "Specialized cameras capture high-quality plate images in all conditions." },
      { step: "02", title: "Recognize", description: "OCR engine extracts plate characters with high accuracy." },
      { step: "03", title: "Match", description: "Compare against whitelist, blacklist, or database records." },
      { step: "04", title: "Action", description: "Trigger barrier open, alert, or logging based on rules." },
      { step: "05", title: "Report", description: "Analytics dashboard with search, export, and integration." }
    ],
    features: [
      {
        category: "Recognition Engine",
        items: ["Multi-country plate formats", "Region/state profile support", "High-speed capture (up to 200km/h)", "Night vision with IR illumination", "Dirty/damaged plate handling"]
      },
      {
        category: "Access Management",
        items: ["Whitelist/blacklist management", "Visitor pre-registration", "Automatic barrier control", "Alert notifications", "SMS/email notifications"]
      },
      {
        category: "Analytics & Integration",
        items: ["Vehicle attribute detection (color, type)", "Time-stamp and location logging", "API for external systems", "Parking duration tracking", "Export and reporting"]
      }
    ],
    outcomes: [
      { value: "99%+", label: "Recognition accuracy" },
      { value: "<100ms", label: "Processing time" },
      { value: "24/7", label: "All-weather operation" },
      { value: "200km/h", label: "Capture speed" }
    ],
    useCases: [
      { icon: ParkingCircle, title: "Parking Management", description: "Automated entry/exit with ticketless parking and payment integration." },
      { icon: Building2, title: "Corporate Facilities", description: "Employee and visitor vehicle access control with pre-registration." },
      { icon: Warehouse, title: "Logistics & Yards", description: "Track vehicle movements in loading bays and distribution centers." },
      { icon: Landmark, title: "Toll & Highway", description: "High-speed capture for toll collection and traffic monitoring." },
      { icon: Factory, title: "Secure Zones", description: "Vehicle verification at high-security checkpoints." },
      { icon: GraduationCap, title: "Campus & Residential", description: "Resident/visitor management with automated gate access." }
    ],
    deployment: [
      { title: "Software License", description: "Install on customer-provided infrastructure." },
      { title: "Edge Camera", description: "Processing at camera with local output." },
      { title: "Turnkey System", description: "Cameras + server + software + barrier integration." },
      { title: "SaaS Option", description: "Cloud-based management with on-site cameras." }
    ],
    includedHardware: [
      { title: "ANPR Cameras", items: ["Purpose-built ANPR cameras", "IR illumination for night", "IP67 weatherproof rating", "Vandal-resistant housing", "PoE powered"] },
      { title: "Processing", items: ["Edge compute (per camera) or central server", "NVMe storage for evidence", "UPS backup power", "Network switches"] },
      { title: "Integration", items: ["Barrier controller interface", "LED display boards", "Intercom integration", "Payment terminal connection"] }
    ],
    includedSoftware: [
      { title: "Recognition Platform", items: ["ANPR engine with OCR", "Multi-country plate support", "Vehicle attribute detection", "Whitelist/blacklist management", "Real-time alerting"] },
      { title: "Management", items: ["Web dashboard", "Mobile access", "Reporting & analytics", "API for integration", "User management"] }
    ],
    implementation: [
      { title: "Site Survey", description: "Assess lane widths, speeds, lighting, and mounting positions." },
      { title: "Installation", description: "Camera mounting, cabling, and barrier connection." },
      { title: "Configuration", description: "Plate format setup, zones, and access rules." },
      { title: "Integration", description: "Connect to parking, ERP, or access control systems." },
      { title: "Training", description: "Operator training and SOP documentation." }
    ],
    warranty: {
      hardware: "3-year warranty on cameras and hardware",
      software: "1-year software updates and support",
      sla: "24/7 support with <4 hour on-site response"
    },
    configurations: [
      { name: "Single Lane", description: "1 entry or exit point with barrier integration.", recommended: false },
      { name: "Dual Lane", description: "Entry + exit with central management.", recommended: true },
      { name: "Multi-Site", description: "Multiple locations with centralized dashboard.", recommended: false }
    ],
    faqs: [
      { question: "What plate formats are supported?", answer: "We support plates from 100+ countries including Asia-Pacific, Europe, Americas, and Middle East. Custom formats can be added." },
      { question: "How does it work at night?", answer: "ANPR cameras include IR illumination that captures clear plate images in complete darkness without affecting drivers." },
      { question: "Can it capture high-speed vehicles?", answer: "Yes, our cameras can capture plates at speeds up to 200km/h with specialized high-speed shutter modes." },
      { question: "Does it integrate with parking payment systems?", answer: "Yes, we support integration with major parking management and payment platforms via API." },
      { question: "How are the lists managed?", answer: "Whitelist/blacklist management is via web dashboard, bulk import, or API integration with HR/visitor management systems." },
      { question: "What happens if a plate is unreadable?", answer: "The system captures evidence images for manual review and can trigger alerts for failed reads." }
    ]
  },
  "traffic-violation-monitoring": {
    icon: TrafficCone,
    title: "Traffic Violation Monitoring",
    tagline: "Automated Enforcement System",
    category: "turnkey",
    heroDescription: "Automated traffic violation detection with evidence management and case workflow. Complete roadside-to-control-center solution with cameras, AI, and enforcement platform.",
    heroImage: imgTrafficViolation,
    images: [
      { src: imgTrafficViolation, alt: "Enforcement Camera Unit", caption: "Roadside enforcement camera with radar sensor and LED strobe" },
      { src: imgTrafficEvidence, alt: "Violation Evidence Package", caption: "Complete evidence package: photo sequence, plate crop, speed reading, and signal status" },
      { src: imgTrafficIntersection, alt: "Multi-Intersection Coverage", caption: "City-wide intersection monitoring with centralized enforcement management" },
      { src: imgAnprDashboard, alt: "Case Management Dashboard", caption: "End-to-end violation case workflow from detection to prosecution" },
    ],
    problem: [
      "Manual traffic enforcement is resource-intensive, inconsistent, and covers only a fraction of road network. Violations that occur when officers aren't present go undetected.",
      "Traditional traffic cameras require manual review to identify violations. Without automation, enforcement agencies cannot process the volume of footage to improve compliance.",
      "Our Traffic Violation Monitoring system uses AI to automatically detect violations, generate evidence packages, and manage enforcement workflows from detection to resolution."
    ],
    howItWorks: [
      { step: "01", title: "Capture", description: "Roadside cameras monitor traffic continuously with video and snapshots." },
      { step: "02", title: "Detect", description: "AI identifies violation events based on configured rules." },
      { step: "03", title: "Evidence", description: "System generates evidence package: video clip, snapshots, metadata." },
      { step: "04", title: "Review", description: "Operators review flagged violations for confirmation." },
      { step: "05", title: "Process", description: "Approved violations proceed to enforcement workflow." }
    ],
    features: [
      {
        category: "Violation Detection",
        items: ["Red light running", "Wrong-way driving", "Lane violations", "Illegal parking/stopping", "Speed violation (with sensor)", "No seatbelt / phone use (optional)"]
      },
      {
        category: "Evidence & Case Management",
        items: ["Video clip + snapshot package", "Timestamp and location metadata", "ANPR integration for plate capture", "Review and approval workflow", "Case status tracking"]
      },
      {
        category: "Operations & Analytics",
        items: ["Multi-site dashboard", "Camera health monitoring", "Violation statistics", "Export and reporting", "Role-based access control"]
      }
    ],
    outcomes: [
      { value: "95%+", label: "Detection accuracy" },
      { value: "24/7", label: "Continuous monitoring" },
      { value: "80%", label: "Reduction in manual review" },
      { value: "100%", label: "Evidence compliance" }
    ],
    useCases: [
      { icon: Landmark, title: "Intersections", description: "Red light and lane violation detection at signalized intersections." },
      { icon: Factory, title: "Highways", description: "Speed enforcement and incident detection on highways." },
      { icon: Building2, title: "City Surveillance", description: "Comprehensive traffic monitoring for smart city initiatives." },
      { icon: ParkingCircle, title: "Parking Enforcement", description: "Illegal parking and no-stopping zone monitoring." },
      { icon: GraduationCap, title: "School Zones", description: "Enhanced enforcement in school and pedestrian areas." },
      { icon: Warehouse, title: "Industrial Zones", description: "Truck routing compliance and restricted area enforcement." }
    ],
    deployment: [
      { title: "Roadside Unit", description: "Camera + edge compute for intersection/roadside deployment." },
      { title: "Control Center", description: "Central server for evidence management and case workflow." },
      { title: "Mobile Unit", description: "Vehicle-mounted system for flexible enforcement." },
      { title: "Maintenance Package", description: "Ongoing calibration, cleaning, and system health." }
    ],
    includedHardware: [
      { title: "Roadside Equipment", items: ["Traffic enforcement cameras", "IR illumination", "Edge compute device", "Weatherproof enclosure (IP67)", "Pole mounting hardware"] },
      { title: "Control Center", items: ["Evidence server", "Storage array (RAID)", "Operator workstations", "Video wall (optional)", "UPS backup"] },
      { title: "Networking", items: ["4G/5G connectivity", "VPN security", "Bandwidth management", "Redundant links"] }
    ],
    includedSoftware: [
      { title: "Detection Engine", items: ["AI violation detection", "Configurable rule sets", "ANPR integration", "Evidence generation", "Camera health monitoring"] },
      { title: "Case Management", items: ["Review workflow", "Approval/rejection tracking", "Case export", "Reporting & statistics", "Integration API"] }
    ],
    implementation: [
      { title: "Site Assessment", description: "Traffic analysis, camera placement, and connectivity planning." },
      { title: "Installation", description: "Roadside equipment, control center, and network setup." },
      { title: "Calibration", description: "Detection zone configuration and rule calibration." },
      { title: "Testing", description: "Validation testing with real traffic conditions." },
      { title: "Training", description: "Operator training on review workflow and system management." },
      { title: "Maintenance", description: "Ongoing calibration, cleaning, and support." }
    ],
    warranty: {
      hardware: "3-year warranty on all hardware",
      software: "1-year software updates and support",
      sla: "24/7 monitoring with <4 hour critical response"
    },
    configurations: [
      { name: "Single Intersection", description: "1 intersection with 4-8 cameras.", recommended: false },
      { name: "Multi-Site", description: "5-20 intersections with central management.", recommended: true },
      { name: "City-Wide", description: "50+ sites with advanced analytics.", recommended: false }
    ],
    faqs: [
      { question: "What violations can the system detect?", answer: "Red light running, wrong-way driving, lane violations, illegal parking, and more. Speed detection requires additional sensor integration." },
      { question: "How is evidence integrity ensured?", answer: "All evidence is timestamped, watermarked, and stored with hash verification. Full audit trail for legal admissibility." },
      { question: "Can operators contest or reject violations?", answer: "Yes, the workflow includes review steps where operators can approve, reject, or request additional review." },
      { question: "How does it integrate with enforcement systems?", answer: "We provide API integration with notice generation, fine management, and court systems." },
      { question: "What about privacy concerns?", answer: "The system captures only violation events, not continuous surveillance. Data retention follows local regulations." },
      { question: "Who provides ongoing maintenance?", answer: "We offer maintenance packages including calibration, cleaning, firmware updates, and hardware replacement." }
    ]
  },
  "neo-collect": {
    icon: Share2,
    title: "NEO Collect",
    tagline: "Social Media Network Analysis",
    category: "hybrid",
    heroDescription: "Social media intelligence platform for network analysis, entity extraction, and relationship mapping. Available as software or bundled with secure analyst workstation.",
    heroImage: imgNeoCollectGraph,
    images: [
      { src: imgNeoCollectGraph, alt: "Network Analysis Graph", caption: "Interactive social network graph with entity relationship mapping" },
      { src: imgCollectEntity, alt: "Entity Intelligence Profile", caption: "Comprehensive entity dossier with social accounts, contacts, and activity timeline" },
      { src: imgCollectTimeline, alt: "Investigation Timeline", caption: "Chronological case timeline with multi-source intelligence events" },
      { src: imgCollectReport, alt: "Intelligence Report", caption: "Automated OSINT report generation with network visualizations and evidence attachments" },
    ],
    problem: [
      "Investigators and analysts need to understand connections between entities across social media platforms. Manual analysis is impossibly slow for the volume of data involved.",
      "Without proper tools, critical relationships and patterns remain hidden. Analysts cannot visualize networks, track influence, or identify communities at scale.",
      "NEO Collect automates data collection, entity extraction, and relationship mapping—enabling analysts to uncover insights and document findings efficiently."
    ],
    howItWorks: [
      { step: "01", title: "Collect", description: "Gather data from social media sources (compliance with platform policies)." },
      { step: "02", title: "Extract", description: "AI identifies entities: people, organizations, locations, events." },
      { step: "03", title: "Map", description: "Build relationship graphs showing connections and influence." },
      { step: "04", title: "Analyze", description: "Visualize communities, centrality, and network patterns." },
      { step: "05", title: "Report", description: "Document findings with exports and case management." }
    ],
    features: [
      {
        category: "Data Collection",
        items: ["Social media connectors", "Keyword/hashtag monitoring", "Profile data gathering", "Historical data retrieval", "Compliance-first approach"]
      },
      {
        category: "Analysis Engine",
        items: ["Entity extraction (NER)", "Relationship mapping", "Graph visualization", "Community detection", "Centrality/influence scoring"]
      },
      {
        category: "Case Management",
        items: ["Case/project workspaces", "Tagging and notes", "Export and reporting", "Role-based access", "Audit logging"]
      }
    ],
    outcomes: [
      { value: "10x", label: "Faster analysis" },
      { value: "1000s", label: "Entities per case" },
      { value: "Visual", label: "Network graphs" },
      { value: "Secure", label: "On-premises option" }
    ],
    useCases: [
      { icon: Scale, title: "Investigations", description: "Criminal investigations requiring social network analysis and evidence." },
      { icon: Shield, title: "Threat Intelligence", description: "Monitor threat actors and identify network affiliations." },
      { icon: Landmark, title: "Government/Intel", description: "National security analysis requiring secure, on-premises deployment." },
      { icon: Building2, title: "Corporate Security", description: "Brand protection, fraud investigation, and insider threat analysis." },
      { icon: Users, title: "Research", description: "Academic and think-tank research on social movements and networks." },
      { icon: FileSearch, title: "Due Diligence", description: "Background checks and risk assessment for M&A or partnerships." }
    ],
    deployment: [
      { title: "Software License", description: "Install on customer-provided secure infrastructure." },
      { title: "Analyst Workstation", description: "Bundled with pre-configured, air-gapped capable workstation." },
      { title: "Server Deployment", description: "Multi-analyst server for team environments." },
      { title: "Training Package", description: "Analyst training on OSINT methodology and platform use." }
    ],
    includedHardware: [
      { title: "Analyst Workstation", items: ["Intel i7/i9 processor", "32GB RAM", "NVMe SSD storage", "Dual monitors", "Windows 11 Pro (hardened)"] },
      { title: "Server Option", items: ["Multi-core processor", "64GB+ RAM", "RAID storage", "Secure network configuration", "Backup solution"] }
    ],
    includedSoftware: [
      { title: "NEO Collect Platform", items: ["Data collection engine", "Entity extraction AI", "Graph database", "Visualization tools", "Search interface"] },
      { title: "Case Management", items: ["Project workspaces", "Tagging system", "Report generator", "Export tools", "User management"] }
    ],
    implementation: [
      { title: "Installation", description: "Secure installation on customer infrastructure or provided workstation." },
      { title: "Configuration", description: "Data source setup and compliance configuration." },
      { title: "Training", description: "Analyst training on OSINT methodology and platform capabilities." },
      { title: "Support", description: "Ongoing technical support and platform updates." }
    ],
    warranty: {
      hardware: "3-year warranty (if workstation bundle selected)",
      software: "1-year software updates and support",
      sla: "Business hours support, secure communication channels"
    },
    configurations: [
      { name: "Software Only", description: "License for customer-managed installation.", recommended: false },
      { name: "Analyst Workstation", description: "Single-user bundle with pre-configured workstation.", recommended: true },
      { name: "Team Server", description: "Multi-analyst deployment with centralized management.", recommended: false }
    ],
    faqs: [
      { question: "What social media platforms are supported?", answer: "We support major platforms with public data access. Specific platform support depends on their API policies and terms of service." },
      { question: "Is this compliant with platform terms of service?", answer: "We design our tools to work within platform guidelines and public data access. Compliance responsibility includes user adherence to applicable laws." },
      { question: "Can it work in an air-gapped environment?", answer: "Yes, for sensitive deployments, the analyst workstation can operate offline after data collection phase." },
      { question: "How is data secured?", answer: "On-premises deployment means data never leaves your network. Encrypted storage and role-based access control are included." },
      { question: "What training is provided?", answer: "We provide analyst training covering OSINT methodology, platform features, and investigation best practices." },
      { question: "Can I get a pre-configured workstation?", answer: "Yes, we offer analyst workstation bundles with NEO Collect pre-installed and security-hardened." }
    ]
  },
  "edge-compute": {
    icon: Cpu,
    title: "Edge Compute Devices",
    tagline: "AI Edge Processing Hardware",
    category: "turnkey",
    heroDescription: "Compact, industrial-grade edge computing devices for on-site AI inference, video analytics, and real-time processing—without cloud dependency.",
    heroImage: imgEdgeComputeDeploy,
    images: [
      { src: imgEdgeCompute, alt: "Edge Compute Device", caption: "Compact fanless edge computing device for AI processing" },
      { src: imgEdgeManagement, alt: "Fleet Management Dashboard", caption: "Centralized device management with health monitoring, firmware updates, and model deployment" },
      { src: imgEdgeComputeDeploy, alt: "Indoor Deployment", caption: "Edge device installed alongside security cameras in warehouse environment" },
      { src: imgEdgeOutdoor, alt: "Outdoor Enclosure", caption: "IP65 weatherproof outdoor enclosure with solar power for remote locations" },
    ],
    problem: [
      "Cloud-based AI processing introduces latency, bandwidth costs, and data sovereignty concerns—critical issues in security and surveillance operations.",
      "Traditional servers are too large, power-hungry, and complex for distributed edge deployments at remote sites, intersections, or building lobbies.",
      "Our Edge Compute devices bring GPU-accelerated AI processing directly to the data source, enabling real-time inference with minimal infrastructure."
    ],
    howItWorks: [
      { step: "01", title: "Deploy", description: "Compact fanless devices installed on-site near cameras, sensors, or access points." },
      { step: "02", title: "Ingest", description: "Direct video/data feeds from local cameras via PoE or network switch." },
      { step: "03", title: "Process", description: "GPU-accelerated AI models run locally for face recognition, object detection, ANPR, etc." },
      { step: "04", title: "Alert", description: "Real-time alerts pushed to central command or mobile devices." },
      { step: "05", title: "Sync", description: "Results and metadata synced to central server for unified reporting." }
    ],
    features: [
      {
        category: "Hardware Specs",
        items: ["NVIDIA Jetson / Intel i7 options", "GPU acceleration for AI inference", "Fanless industrial design", "Operating temp: -20°C to 60°C", "IP40 / IP65 enclosure options"]
      },
      {
        category: "AI Capabilities",
        items: ["Real-time video analytics", "Face detection & recognition", "License plate recognition (ANPR)", "Object & person counting", "Anomaly detection"]
      },
      {
        category: "Connectivity",
        items: ["Multiple GbE ports", "WiFi / 4G LTE options", "PoE input support", "USB 3.0 / serial ports", "HDMI output for local display"]
      }
    ],
    outcomes: [
      { value: "<50ms", label: "Inference latency" },
      { value: "0", label: "Cloud dependency" },
      { value: "15W", label: "Typical power consumption" },
      { value: "24/7", label: "Continuous operation" }
    ],
    useCases: [
      { icon: Building2, title: "Building Security", description: "Face recognition and access control at entry points without a dedicated server room." },
      { icon: ParkingCircle, title: "Parking & Traffic", description: "ANPR processing at gates, intersections, or toll points with instant plate matching." },
      { icon: Factory, title: "Industrial Sites", description: "Safety compliance monitoring—PPE detection, restricted zone intrusion, and equipment tracking." },
      { icon: ShoppingCart, title: "Retail Analytics", description: "People counting, heatmaps, and customer flow analysis at store entrances." }
    ],
    deployment: [
      { title: "Standalone", description: "Single device per location with local display and alerts." },
      { title: "Distributed", description: "Multiple devices across sites, centrally managed from HQ." },
      { title: "Hybrid", description: "Edge processing with periodic cloud sync for analytics aggregation." }
    ],
    faqs: [
      { question: "How many camera streams can one device handle?", answer: "Depending on resolution and AI model complexity, our devices typically handle 4-16 concurrent streams at 1080p." },
      { question: "Do I need internet connectivity?", answer: "No, edge devices operate fully offline. Internet is only needed for remote management and result synchronization." },
      { question: "What AI models are supported?", answer: "We support AIVION Video X models, custom ONNX models, and popular frameworks like TensorRT and OpenVINO." },
      { question: "How is the device managed remotely?", answer: "Via our central management dashboard—monitor health, push firmware updates, and adjust AI model parameters." }
    ],
    includedHardware: [
      { title: "Compute Unit", items: ["NVIDIA Jetson Orin / Intel i7", "16-32GB RAM", "256GB-1TB NVMe SSD", "Fanless enclosure"] },
      { title: "Connectivity", items: ["4x GbE PoE ports", "WiFi 6 / 4G module (optional)", "USB 3.0 x4", "HDMI 2.0 output"] }
    ],
    includedSoftware: [
      { title: "AI Runtime", items: ["Pre-loaded AI inference engine", "Model management interface", "Auto-update framework"] },
      { title: "Management", items: ["Web-based local dashboard", "Central fleet management client", "SNMP monitoring agent"] }
    ],
    implementation: [
      { title: "Site Assessment", description: "Evaluate camera positions, network infrastructure, and power requirements." },
      { title: "Configuration", description: "Pre-configure AI models, alerting rules, and network settings in our lab." },
      { title: "Installation", description: "Mount device, connect to cameras and network, verify video feeds." },
      { title: "Validation", description: "Test AI detection accuracy, latency, and alert delivery end-to-end." }
    ],
    warranty: { hardware: "2-year hardware warranty", software: "1-year AI model updates & firmware", sla: "Next business day replacement" }
  }
};

// Default data for solutions not fully defined
const defaultSolution: SolutionData = {
  icon: Settings,
  title: "Solution",
  tagline: "Enterprise Technology Solution",
  category: "software",
  heroDescription: "A powerful enterprise solution designed to solve your business challenges.",
  problem: [
    "Modern enterprises face complex technology challenges that require sophisticated solutions.",
    "Traditional approaches often fall short, leading to inefficiencies and missed opportunities.",
    "Our solution addresses these challenges with proven technology and methodology."
  ],
  howItWorks: [
    { step: "01", title: "Assess", description: "Evaluate current state and identify requirements." },
    { step: "02", title: "Design", description: "Architect the optimal solution for your needs." },
    { step: "03", title: "Implement", description: "Deploy with minimal disruption to operations." },
    { step: "04", title: "Optimize", description: "Continuously improve based on performance data." }
  ],
  features: [
    {
      category: "Core Features",
      items: ["Enterprise-grade performance", "Scalable architecture", "Advanced security", "Real-time analytics", "API integrations"]
    }
  ],
  outcomes: [
    { value: "50%", label: "Efficiency improvement" },
    { value: "40%", label: "Cost reduction" },
    { value: "99%", label: "Availability SLA" }
  ],
  useCases: [
    { icon: Building2, title: "Enterprise", description: "Comprehensive solution for large organizations." },
    { icon: Factory, title: "Manufacturing", description: "Optimized for industrial environments." }
  ],
  deployment: [
    { title: "Cloud", description: "Fully managed cloud deployment." },
    { title: "On-Premises", description: "Self-hosted option available." },
    { title: "Support", description: "24/7 technical support included." }
  ],
  faqs: [
    { question: "How long does implementation take?", answer: "Implementation typically takes 4-8 weeks depending on complexity." },
    { question: "What support is included?", answer: "24/7 technical support with guaranteed response times." }
  ]
};

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionsData[slug || ""] || { ...defaultSolution, title: slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Solution" };
  const Icon = solution.icon;
  const isTurnkey = solution.category === "turnkey" || solution.category === "hybrid";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${solution.heroImage || solutionHeroDefault})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        
        <div className="container-wide relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link 
              to="/solutions" 
              className="inline-flex items-center text-sm text-white/70 hover:text-accent transition-colors mb-4"
            >
              ← Back to Solutions
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
                <Icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {solution.tagline}
                </span>
                {isTurnkey && (
                  <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/30 px-2 py-0.5 text-xs font-medium text-white">
                    <Package className="h-3 w-3" /> Hardware + Software
                  </span>
                )}
              </div>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {solution.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/catalog">Download Brochure</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="The Challenge"
            title="Problem We Solve"
            align="left"
          />
          <div className="mt-8 max-w-3xl space-y-4">
            {solution.problem.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      {solution.images && solution.images.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              label="Product Gallery"
              title="See It In Action"
              description="Real deployments, real interfaces, real results."
            />
            <div className={`mt-12 grid gap-6 ${solution.images.length === 1 ? 'max-w-2xl mx-auto' : solution.images.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {solution.images.map((img, index) => (
                <motion.div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-border bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-semibold text-foreground text-sm">{img.alt}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Included Hardware (for turnkey solutions) */}
      {isTurnkey && solution.includedHardware && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              label="Hardware"
              title="Included Hardware"
              description="Complete hardware package included with turnkey deployment."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solution.includedHardware.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="rounded-lg border border-border bg-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <HardDrive className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Included Software (for turnkey solutions) */}
      {isTurnkey && solution.includedSoftware && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeader
              label="Software"
              title="Included Software"
              description="Software platforms and modules included in the solution."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {solution.includedSoftware.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="rounded-lg border border-border bg-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className={`section-padding ${isTurnkey ? 'bg-muted/30' : 'bg-muted/30'}`}>
        <div className="container-wide">
          <SectionHeader
            label="Our Approach"
            title="How It Works"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {solution.howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <span className="font-heading text-lg font-bold">{step.step}</span>
                </div>
                <h3 className="mt-4 font-heading font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Capabilities"
            title="Key Features"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((category, index) => (
              <motion.div
                key={category.category}
                className="rounded-lg border border-border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Package (for turnkey solutions) */}
      {isTurnkey && solution.implementation && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              label="Implementation"
              title="Integration & Deployment"
              description="Full implementation service included with turnkey systems."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solution.implementation.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Wrench className="mx-auto h-8 w-8 text-accent" />
                  <h3 className="mt-3 font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Warranty & Support (for turnkey solutions) */}
      {isTurnkey && solution.warranty && (
        <section className="section-padding">
          <div className="container-wide">
            <SectionHeader
              label="Support"
              title="Warranty & Support"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <motion.div
                className="rounded-lg border border-border bg-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <HardDrive className="mx-auto h-8 w-8 text-accent" />
                <h3 className="mt-3 font-heading font-semibold text-foreground">Hardware Warranty</h3>
                <p className="mt-2 text-sm text-muted-foreground">{solution.warranty.hardware}</p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-border bg-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Monitor className="mx-auto h-8 w-8 text-accent" />
                <h3 className="mt-3 font-heading font-semibold text-foreground">Software Maintenance</h3>
                <p className="mt-2 text-sm text-muted-foreground">{solution.warranty.software}</p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-border bg-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Package className="mx-auto h-8 w-8 text-accent" />
                <h3 className="mt-3 font-heading font-semibold text-foreground">SLA Support</h3>
                <p className="mt-2 text-sm text-muted-foreground">{solution.warranty.sla}</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Configurations (for turnkey solutions) */}
      {isTurnkey && solution.configurations && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              label="Options"
              title="Available Configurations"
              description="Choose the configuration that fits your scale and requirements."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solution.configurations.map((config, index) => (
                <motion.div
                  key={config.name}
                  className={`rounded-lg border p-6 ${config.recommended ? 'border-accent bg-accent/5' : 'border-border bg-card'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {config.recommended && (
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground mb-3">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-semibold text-foreground">{config.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{config.description}</p>
                  <Button asChild variant={config.recommended ? "accent" : "outline"} size="sm" className="mt-4">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      <section className="gradient-hero section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Results"
            title="Measurable Outcomes"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solution.outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-heading text-4xl font-bold text-accent sm:text-5xl">
                  {outcome.value}
                </div>
                <div className="mt-2 text-white/80">
                  {outcome.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Industries"
            title="Use Cases"
            description="See how organizations across industries leverage this solution."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="rounded-lg border border-border bg-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <useCase.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-3 font-heading font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment (for non-turnkey or as secondary) */}
      {!isTurnkey && (
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <SectionHeader
              label="Implementation"
              title="Deployment & Support"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solution.deployment.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-4">
              {solution.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-lg border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Request a quote for {solution.title}. We'll configure the right solution 
            for your specific requirements—hardware, software, and deployment included.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

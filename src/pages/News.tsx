import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, TrendingUp, Eye, Zap, Shield, Cpu, AudioLines, Camera, CarFront, Users, Clock } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsAiSurveillance from "@/assets/news-ai-surveillance.png";
import newsCybersecurity from "@/assets/news-cybersecurity.png";
import newsAnprTraffic from "@/assets/news-anpr-traffic.png";
import newsEdgeComputing from "@/assets/news-edge-computing.png";
import newsForensicsLab from "@/assets/news-forensics-lab.png";

const newsArticles = [
  {
    slug: "buying-surveillance-system-2026",
    title: "What to Look for When Buying a Surveillance System in 2026",
    excerpt: "Buying a surveillance system is no longer a matter of picking cameras off a shelf. As facilities grow more complex and threats more sophisticated, the gap between a well-designed system and a poorly-scoped one can mean the difference between actionable intelligence and gigabytes of useless footage.",
    date: "2026-04-12",
    category: "Security",
    image: newsAiSurveillance,
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "pdpa-surveillance-singapore-guide",
    title: "PDPA and Surveillance: What Singapore Businesses Need to Know Before Deploying Cameras",
    excerpt: "Singapore's Personal Data Protection Act (PDPA) governs how organizations collect, use, and disclose personal data — and surveillance systems that capture identifiable images of individuals fall squarely within its scope. Yet many businesses deploy cameras without a proper data protection framework in place.",
    date: "2026-02-25",
    category: "Compliance",
    image: newsCybersecurity,
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "ip-camera-vs-analog",
    title: "IP Camera vs. Analog: Which Is Right for Your Facility?",
    excerpt: "If you're upgrading or building a new surveillance system, you'll encounter a fundamental choice early in the process: IP cameras or analog? The answer depends on your facility size, budget, existing infrastructure, and what you expect the system to do.",
    date: "2025-11-10",
    category: "Technology",
    image: newsForensicsLab,
    readTime: "7 min read",
  },
  {
    slug: "what-is-anpr-lpr",
    title: "What Is ANPR and How Are Organizations Using It?",
    excerpt: "Automatic Number Plate Recognition (ANPR) is one of the most widely deployed AI applications in physical security today. Despite its prevalence, many organizations considering deployment have a limited understanding of how it works, what it can realistically achieve, and where its limitations lie.",
    date: "2025-08-05",
    category: "Technology",
    image: newsAnprTraffic,
    readTime: "9 min read",
  },
  {
    slug: "edge-computing-surveillance",
    title: "Edge Computing in Surveillance: Why Processing at the Camera Changes Everything",
    excerpt: "For most of the history of video surveillance, the camera was a passive device: it captured light and sent the resulting signal somewhere else for storage and review. AI changed the software side of this equation years ago. What's less discussed is where that AI runs — and why it matters enormously.",
    date: "2025-03-18",
    category: "Insights",
    image: newsEdgeComputing,
    readTime: "8 min read",
  },
];

const categories = ["All", "Security", "Compliance", "Technology", "Insights"];


export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const containerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.anime-element',
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      delay: anime.stagger(100, { start: 200 }),
      easing: 'easeOutElastic(1, .8)',
      duration: 1500
    });
    
    anime({
      targets: '.anime-glow',
      textShadow: [
        '0px 0px 0px rgba(245, 158, 11, 0)',
        '0px 0px 20px rgba(245, 158, 11, 0.6)'
      ],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 2000
    });
  }, []);

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28" ref={containerRef}>
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="anime-element text-sm font-semibold uppercase tracking-wider text-accent inline-block">
              News & Insights
            </span>
            <h1 className="anime-element anime-glow mt-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Intelligence Briefings & Updates
            </h1>
            <p className="anime-element mt-4 text-lg text-white/80">
              Stay ahead of the curve with the latest developments in AI surveillance, 
              cybersecurity, digital forensics, and enterprise intelligence systems. 
              Expert analysis from our engineering and research teams.
            </p>
          </div>
        </div>
      </section>


      {/* Filters */}
      <section className="border-b border-border py-6">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Large Cards */}
      {featuredArticles.length > 0 && (
        <section className="section-padding bg-muted/20">
          <div className="container-wide">
            <div className="mb-8 flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <h2 className="font-heading text-xl font-bold text-foreground">Featured Stories</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Link
                    to={`/news/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg card-hover"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>

                      </div>
                      <h2 className="mt-4 font-heading text-2xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="mb-8">
            <h2 className="font-heading text-xl font-bold text-foreground">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
              <span className="ml-2 text-sm font-normal text-muted-foreground">({regularArticles.length} articles)</span>
            </h2>
          </div>
          {regularArticles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={`/news/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card card-hover"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                      <h2 className="mt-3 font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-end">
                        <span className="inline-flex items-center text-sm font-medium text-accent">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Topic Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-12">
            Explore By Topic
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Camera, label: "AI Surveillance", count: 4, color: "bg-orange-500/10 text-orange-500" },
              { icon: Shield, label: "Cybersecurity", count: 3, color: "bg-red-500/10 text-red-500" },
              { icon: Cpu, label: "Edge Computing", count: 2, color: "bg-amber-500/10 text-amber-500" },
              { icon: CarFront, label: "Traffic Intelligence", count: 2, color: "bg-yellow-500/10 text-yellow-500" },
              { icon: AudioLines, label: "Voice Intelligence", count: 2, color: "bg-orange-600/10 text-orange-600" },
              { icon: Eye, label: "Facial Recognition", count: 2, color: "bg-amber-600/10 text-amber-600" },
              { icon: Shield, label: "Compliance & PDPA", count: 2, color: "bg-red-600/10 text-red-600" },
              { icon: Users, label: "Company Updates", count: 3, color: "bg-yellow-600/10 text-yellow-600" },
            ].map((topic, index) => (
              <motion.div
                key={topic.label}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 cursor-pointer card-hover"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory("All")}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${topic.color}`}>
                  <topic.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{topic.label}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count} articles</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Intelligence Briefing — Delivered Weekly
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Join 12,000+ security professionals and enterprise leaders who receive our weekly 
            intelligence briefing. Get early access to threat reports, product announcements, 
            and exclusive technical deep-dives.
          </p>
          <div className="mx-auto mt-8 flex max-w-md gap-3">
            <Input type="email" placeholder="Enter your work email" className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Button variant="accent">Subscribe Free</Button>
          </div>
          <p className="mt-3 text-xs text-white/50">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";


const legalLinks = [
  { name: "Legal Notice", href: "/legal-notice" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookies Policy", href: "/cookies" },
  { name: "Impressum", href: "/impressum" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md text-white">
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 font-heading text-xl font-bold">
              <img src={logo} alt="E Vision System" className="h-10 w-10 object-contain" />
              <span>E Vision System</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Delivering enterprise technology solutions that drive measurable business outcomes. Your trusted partner
              for digital transformation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>
                  8 Burn Road, #04-04
                  <br />
                  Trivex, Singapore 369977
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@evisionsys.com" className="transition-colors hover:text-accent">
                  info@evisionsys.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+16269359995" className="transition-colors hover:text-accent">
                  +1 6269359995
                </a>
              </li>
            </ul>
          </div>



          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/80 transition-colors hover:text-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 md:flex-row">
            <p>© {currentYear} Snap Outsourcing Pte. Ltd. (UEN: 202433440R). All rights reserved.</p>
            <p>Technology Solutions & Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

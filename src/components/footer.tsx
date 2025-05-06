import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Jaideo Automation</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Leading provider of industrial automation and smart building
              solutions
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/services#industrial"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#building"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Building Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services#energy"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Energy Efficiency
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  C224, Flat No 101, Gyan Marg, Jaipur - 302004, Rajasthan,
                  India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 8045478947</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  info@jaideoautomation.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Jaideo Automation India Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Building2,
  Factory,
  Lightbulb,
  Settings,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

const services = [
  {
    id: "industrial",
    title: "Industrial Automation",
    description:
      "Comprehensive automation solutions for industrial applications",
    icon: Factory,
    features: [
      "Control Valve Solutions",
      "Building Management Systems",
      "HVAC Control",
      "Industrial Gas Systems",
      "Process Automation",
      "System Integration",
    ],
  },
  {
    id: "fire-safety",
    title: "Fire Safety Solutions",
    description: "Complete fire protection and safety systems",
    icon: Shield,
    features: [
      "Fire Sprinkler Systems",
      "Fire Fighting Equipment",
      "Alarm Systems",
      "Safety Installation",
      "Maintenance Services",
      "Emergency Systems",
    ],
  },
  {
    id: "hvac",
    title: "HVAC Solutions",
    description: "Advanced heating, ventilation, and air conditioning systems",
    icon: Building2,
    features: [
      "Air Handling Units",
      "Fan Coil Units",
      "Air Curtains",
      "Temperature Control",
      "Ventilation Systems",
      "Energy Management",
    ],
  },
  {
    id: "building",
    title: "Building Management",
    description: "Smart building automation and control solutions",
    icon: Settings,
    features: [
      "BMS Integration",
      "Temperature Control",
      "Humidity Control",
      "Pressure Management",
      "System Monitoring",
      "Energy Optimization",
    ],
  },
  {
    id: "air-systems",
    title: "Air Systems",
    description: "Efficient air movement and circulation solutions",
    icon: Factory,
    features: [
      "Axial Flow Fans",
      "Mixed Flow Fans",
      "Centrifugal Fans",
      "Air Curtains",
      "Ventilation Systems",
      "Industrial Fans",
    ],
  },
  {
    id: "gas-solutions",
    title: "Industrial Gas Solutions",
    description: "Specialized gas handling and management systems",
    icon: Lightbulb,
    features: [
      "Refrigerant Gas",
      "Industrial Gases",
      "Gas Handling",
      "Safety Systems",
      "Technical Support",
      "Maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 sm:py-32 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Comprehensive automation solutions tailored to your specific
                needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 sm:py-32 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="flex flex-col">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/contact?service=${service.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-background pb-16">
          <div className="absolute inset-0">
            <Image
              src={images.cta.products}
              alt="Industrial Automation"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Transform Your Operations?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Contact us today to discuss how our automation solutions can
                  benefit your business
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

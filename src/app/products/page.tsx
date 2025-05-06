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
import Image from "next/image";
import {
  Building2,
  Cpu,
  Factory,
  Lightbulb,
  Settings,
  Shield,
} from "lucide-react";
import { images } from "@/lib/images";

const products = [
  {
    id: "control-valve",
    title: "Control Valve",
    description:
      "High-quality control valves for precise flow control in industrial applications",
    icon: Settings,
    features: [
      "Pressure Independent Control Valves",
      "Ball Valves",
      "Butterfly Valves",
      "Gate Valves",
      "Water Valves",
      "FCU Valve Kits",
    ],
    image: images.products.controlValve,
  },
  {
    id: "fire-fighting",
    title: "Fire Fighting Equipment",
    description: "Comprehensive fire safety and protection solutions",
    icon: Shield,
    features: [
      "Fire Sprinklers",
      "Fire Hose Pipes",
      "Fire Hydrant Valves",
      "Fire Safety Equipment",
      "Alarm Valves",
      "Installation Services",
    ],
    image: images.products.fireFighting,
  },
  {
    id: "hvac",
    title: "HVAC Solutions",
    description: "Complete heating, ventilation, and air conditioning systems",
    icon: Building2,
    features: [
      "Air Handling Units",
      "Fan Coil Units",
      "Air Curtains",
      "Chillers",
      "Refrigerant Gas",
      "Temperature Controllers",
    ],
    image: images.products.hvac,
  },
  {
    id: "bms",
    title: "Building Management Systems",
    description: "Advanced building automation and control solutions",
    icon: Cpu,
    features: [
      "Honeywell BMS Controllers",
      "Temperature Sensors",
      "Humidity Sensors",
      "Pressure Switches",
      "Building Automation",
      "System Integration",
    ],
    image: images.products.bms,
  },
  {
    id: "air-systems",
    title: "Air Circulation Systems",
    description: "Efficient air movement and ventilation solutions",
    icon: Factory,
    features: [
      "Axial Flow Fans",
      "Mixed Flow Fans",
      "Centrifugal Fans",
      "Air Curtains",
      "Ventilation Systems",
      "Industrial Fans",
    ],
    image: images.products.airSystems,
  },
  {
    id: "industrial-gas",
    title: "Industrial Gas Solutions",
    description: "Specialized gases and gas handling equipment",
    icon: Lightbulb,
    features: [
      "Refrigerant Gas",
      "Sulfur Hexafluoride",
      "Industrial Gases",
      "Gas Handling",
      "Safety Equipment",
      "Technical Support",
    ],
    image: images.products.industrialGas,
  },
];

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={images.hero.products}
            alt="Industrial Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                Our Products
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-200">
                Cutting-edge automation solutions designed to drive efficiency
                and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-none bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-square relative overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={product.id === "control-valve"}
                    />
                  </div>
                  <CardHeader className="p-6">
                    <product.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="text-2xl mt-4">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                        >
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      asChild
                      className="w-full transition-transform duration-300 hover:scale-105"
                    >
                      <Link href={`/products#${product.id}`}>Learn More</Link>
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
              <div className="mx-auto max-w-2xl text-center text-foreground">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Need a Custom Solution?
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Our team of experts can help you develop tailored automation
                  solutions for your specific needs
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Contact Us</Link>
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

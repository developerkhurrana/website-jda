import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Factory,
  Lightbulb,
  Shield,
  Settings,
  Cpu,
} from "lucide-react";
import { images } from "@/lib/images";

const featuredProducts = [
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
];

const services = [
  {
    id: "automation",
    title: "Industrial Automation",
    description:
      "State-of-the-art automation solutions for manufacturing and process industries",
    icon: Cpu,
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description:
      "Complete heating, ventilation, and air conditioning solutions",
    icon: Building2,
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    description: "Comprehensive fire protection and safety systems",
    icon: Shield,
  },
];

const features = [
  {
    id: "quality",
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
    icon: Shield,
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Cutting-edge technology and continuous improvement",
    icon: Lightbulb,
  },
  {
    id: "expertise",
    title: "Expert Team",
    description: "Highly skilled professionals with extensive experience",
    icon: Building2,
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: Factory,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full relative h-[80vh] overflow-hidden bg-background">
          <Image
            src={images.hero.products}
            alt="Industrial Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  Industrial Automation Solutions
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-200">
                  Cutting-edge automation solutions designed to drive efficiency
                  and innovation
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    asChild
                    size="lg"
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Link href="/products">Explore Products</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-transparent hover:border-primary hover:text-primary transition-transform duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured Products
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Discover our range of high-quality industrial automation
              solutions
            </p>
            <div className="mt-16 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
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

        {/* Services Section */}
        <section className="w-full py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Comprehensive solutions for your industrial needs
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group border-none bg-card/80 backdrop-blur-sm hover:bg-card/60 transition-colors duration-300"
                >
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="text-2xl mt-4 text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2 text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Experience the difference with our industry-leading solutions
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card
                  key={feature.id}
                  className="group border-none bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="text-xl mt-4">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full relative py-32 bg-background">
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
                  Ready to Transform Your Business?
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Let&apos;s discuss how our solutions can help you achieve your
                  goals
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Get Started</Link>
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

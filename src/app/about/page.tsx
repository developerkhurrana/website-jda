import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Factory, Lightbulb, Users } from "lucide-react";
import Image from "next/image";
import { images } from "@/lib/images";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={images.hero.about}
            alt="About Jaideo Automation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                About Us
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-200">
                Leading provider of industrial automation, HVAC solutions, and
                fire safety equipment in India
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.hero.about}
                  alt="Our Facility"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-tight">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2010, we&apos;ve been at the forefront of
                  industrial automation innovation. Our journey began with a
                  simple mission: to make automation accessible and efficient
                  for businesses of all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we&apos;re proud to serve clients across multiple
                  industries, providing cutting-edge solutions that drive
                  productivity and growth.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">500+</h3>
                    <p className="text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">98%</h3>
                    <p className="text-muted-foreground">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300">
                  To empower businesses with innovative automation solutions
                  that drive efficiency, sustainability, and growth.
                </p>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-bold tracking-tight">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300">
                  To be the global leader in industrial automation, setting
                  new standards for innovation and customer success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center">
              <div className="max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight">
                  Our Values
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="group border-none bg-transparent shadow-none">
                <CardHeader>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">200+</CardTitle>
                  <CardDescription className="text-lg">
                    Team Members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Skilled professionals dedicated to excellence
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-none bg-transparent shadow-none">
                <CardHeader>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">500+</CardTitle>
                  <CardDescription className="text-lg">
                    Projects Completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Successful implementations across industries
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-none bg-transparent shadow-none">
                <CardHeader>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">20+</CardTitle>
                  <CardDescription className="text-lg">
                    Years Experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Decades of industry expertise
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-none bg-transparent shadow-none">
                <CardHeader>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">50+</CardTitle>
                  <CardDescription className="text-lg">
                    Patents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Innovative solutions and technologies
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

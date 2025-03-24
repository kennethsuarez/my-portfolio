import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Download, User, Cpu, MapPin, Phone } from "lucide-react"
import NetworkGraph from "@/components/network-graph"
import { JSX, SVGProps } from "react"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="#" className="font-bold text-xl">
              <span className="text-primary">Kenneth</span>Suarez
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
                Education
              </Link>
            </nav>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-center md:text-left">
                <Badge className="px-3 py-1 text-sm mx-auto md:mx-0 inline-flex">Available for hire</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m <span className="text-primary">Kenneth</span> <br />
                  Backend Engineer
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
                  I build high-performance, scalable backend systems with Java and Spring Framework.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
                <div className="flex gap-4 pt-2 justify-center md:justify-start">
                  <Link
                    href="https://linkedin.com/in/kenneth-suarez"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:klsuarez18@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                  <Link href="tel:+639562366465" className="text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-square max-w-sm rounded-full border overflow-hidden">
                {/* <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Kenneth Suarez portrait"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Now First */}
        <section id="skills" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Cpu className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-10">
              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center border-b pb-2">Languages</h3>
                <ul className="space-y-2">
                  {["Java", "SQL (MySQL, PostgreSQL)", "Python", "C++", "JavaScript"].map((skill, index) => (
                    <li key={index} className="text-center py-2 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frameworks */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center border-b pb-2">Frameworks</h3>
                <ul className="space-y-2">
                  {["Spring Boot", "Spring Security", "Spring Batch"].map((skill, index) => (
                    <li key={index} className="text-center py-2 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CI/CD Tools */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center border-b pb-2">CI/CD Tools</h3>
                <ul className="space-y-2">
                  {["Jenkins", "Git", "GitHub Actions", "Docker"].map((skill, index) => (
                    <li key={index} className="text-center py-2 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cloud */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center border-b pb-2">Cloud</h3>
                <ul className="space-y-2">
                  {["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"].map((skill, index) => (
                    <li key={index} className="text-center py-2 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testing */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center border-b pb-2">Testing</h3>
                <ul className="space-y-2">
                  {["JUnit & Mockito (Unit Testing)", "JMeter (API Performance Testing)"].map((skill, index) => (
                    <li key={index} className="text-center py-2 px-3 bg-muted/50 rounded-md">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Now Second */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <NetworkGraph />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Result-driven Backend Engineer with 3 years of experience in Java, specializing in Spring Framework
                  (Boot, Core, Security, MVC) for Restful API development.
                </p>
                <p>
                  I&apos;m skilled in high-performance application development while using agile methodologies and have
                  extensive cloud infrastructure experience with AWS and GCP.
                </p>
                <p>
                  I graduated Magna Cum Laude with a Bachelor of Science in Computer Science from the University of the
                  Philippines - Diliman in 2022.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Philippines</span>
                </div>
                <div className="pt-4 flex gap-4">
                  <Link
                    href="mailto:klsuarez18@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>klsuarez18@gmail.com</span>
                  </Link>
                  <Link
                    href="tel:+639562366465"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(+63) 956-236-6465</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-2/3">
                    <h3 className="font-semibold text-xl">Bachelor of Science in Computer Science</h3>
                    <p className="text-primary font-medium">University of the Philippines - Diliman</p>
                    <p className="text-muted-foreground">Quezon City, Philippines • 2022</p>
                    <div className="mt-2">
                      <p>
                        <span className="font-medium">Relevant Coursework:</span> Object-Oriented Programming, Operating
                        Systems
                      </p>
                      <p>
                        <span className="font-medium">Honors:</span> Magna Cum Laude
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center md:justify-end">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      {/* <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="University logo"
                        fill
                        className="object-contain"
                      /> */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <Link href="#" className="font-bold text-xl">
                <span className="text-primary">Kenneth</span> Suarez
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                &copy; {new Date().getFullYear()} Kenneth Liwanag Suarez. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com/in/kenneth-suarez"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:klsuarez18@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+639562366465" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BookOpen(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


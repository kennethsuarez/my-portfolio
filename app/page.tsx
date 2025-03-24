import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  User,
  Cpu,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react"

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
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
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
                  Hi, I'm <span className="text-primary">Kenneth</span> <br />
                  Backend Engineer
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
                  I build high-performance, scalable backend systems with Java and Spring Framework.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Projects
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
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Kenneth Suarez portrait"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Working on code"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Result-driven Backend Engineer with 3 years of experience in Java, specializing in Spring Framework
                  (Boot, Core, Security, MVC) for Restful API development.
                </p>
                <p>
                  I'm skilled in high-performance application development while using agile methodologies and have
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
                <div className="pt-4">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
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

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="md:w-1/3">
                    <h3 className="font-semibold text-lg">Java Developer II (Specialist)</h3>
                    <p className="text-primary font-medium">Samsung Electronics</p>
                    <p className="text-sm text-muted-foreground">October 2022 - Present</p>
                    <p className="text-sm text-muted-foreground">Taguig, Philippines</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="mb-2">
                      Led a team of four backend developers in delivering a critical project with 100% uptime,
                      collaborating with overseas client and teams to align development efforts.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Developed and optimized RESTful APIs using Spring Boot, MySQL, and BigQuery, enhancing system
                        functionality by 50% and reducing intensive API response times by 90%.
                      </li>
                      <li>
                        Integrated JWT authentication with Spring Security to secure endpoints, complying with industry
                        standards in data protection.
                      </li>
                      <li>
                        Architected and implemented event-driven email notifications using asynchronous processing and
                        Apache Freemarker, cutting maintenance costs by 20%.
                      </li>
                      <li>
                        Maintained codebase of core project by upgrading from Java 8 to Java 17 and fixing dependency
                        versions, mitigating the flagging of system vulnerabilities by internal security audit.
                      </li>
                      <li>
                        Automated cloud deployments with GitHub Actions and Docker, streamlining release cycles and
                        improving deployment efficiency.
                      </li>
                      <li>
                        Enhanced software reliability using unit, integration and performance testing with JUnit,
                        Mockito, and JMeter, increase code quality maturity (CQM) and reducing QA bounce-back rate.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="md:w-1/3">
                    <h3 className="font-semibold text-lg">Web Developer Intern</h3>
                    <p className="text-primary font-medium">Creating Info</p>
                    <p className="text-sm text-muted-foreground">July 2021 - August 2021</p>
                    <p className="text-sm text-muted-foreground">Pasig City, Philippines</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Maintained key components (Bill-of-materials, inventory management, sales order, etc.) for an
                        E-commerce platform using JavaScript and REST API endpoints.
                      </li>
                      <li>
                        Implemented automated end-to-end testing using Cypress and Typescript, reducing the time for
                        testing by 30%.
                      </li>
                      <li>
                        Participated in the design of component optimization to improve website responsiveness by 10%.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="md:w-1/3">
                    <h3 className="font-semibold text-lg">Java Developer (Internal Contribution)</h3>
                    <p className="text-primary font-medium">Samsung Electronics</p>
                    <p className="text-sm text-muted-foreground">October 2023 - Present</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Architected and developed RESTful APIs and database schema for an inventory system, leveraging
                        Java 21, Spring Boot, and MySQL for enhanced asset tracking.
                      </li>
                      <li>
                        Automated deployment of a backend training API with Docker and WSL, reducing local setup time
                        and improving onboarding process by 30%.
                      </li>
                      <li>
                        Deployed containerized application to AWS for a data layer project, reducing down time and
                        centralizing data access for proprietary projects.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Inventory Management System",
                  description:
                    "A comprehensive inventory tracking system built with Java 21, Spring Boot, and MySQL for enhanced asset tracking.",
                  tags: ["Java 21", "Spring Boot", "MySQL", "RESTful API"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Event-Driven Notification Service",
                  description:
                    "Asynchronous email notification system using Spring Boot, Apache Freemarker, and event-driven architecture.",
                  tags: ["Spring Boot", "Apache Freemarker", "Async Processing"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Secure API Gateway",
                  description:
                    "Authentication and authorization system with JWT and Spring Security for securing API endpoints.",
                  tags: ["Spring Security", "JWT", "OAuth 2.0"],
                  image: "/placeholder.svg?height=300&width=500",
                },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden flex flex-col">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 bg-muted/50">
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
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="University logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm currently available for new opportunities. If you have a project that needs a skilled backend
                developer or a position to fill, feel free to contact me.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:klsuarez18@gmail.com" className="hover:text-primary transition-colors">
                      klsuarez18@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+639562366465" className="hover:text-primary transition-colors">
                      (+63) 956-236-6465
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/kenneth-suarez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/kenneth-suarez
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Philippines</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-xl mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
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

function BookOpen(props) {
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


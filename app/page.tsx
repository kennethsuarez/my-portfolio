import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  User,
  Cpu,
  MessageSquare,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="font-bold text-xl">
            <span className="text-primary">Dev</span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
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
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="space-y-6 text-center md:text-left">
                {/* <Badge className="px-3 py-1 text-sm mx-auto md:mx-0 inline-flex">Available for hire</Badge> */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="text-primary">Kenneth</span> <br />
                  Backend Engineer
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto md:mx-0">
                  I build scalable REST APIs, and design server infrastructure
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
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-square max-w-sm rounded-full border overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Developer portrait"
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
          <div className="container">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
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
                  I'm a passionate full-stack developer with 5+ years of experience building web applications. I
                  specialize in React, Next.js, Node.js, and modern web technologies.
                </p>
                <p>
                  My journey in software development began at University of Technology where I earned my Bachelor's
                  degree in Computer Science. Since then, I've worked with startups and established companies to deliver
                  high-quality, scalable solutions.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
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
          <div className="container">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Cpu className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Java", level: "Language" },
                { name: "TypeScript", level: "Expert" },
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Expert" },
                { name: "Node.js", level: "Advanced" },
                { name: "Express", level: "Advanced" },
                { name: "MongoDB", level: "Advanced" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "GraphQL", level: "Intermediate" },
                { name: "Docker", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Tailwind CSS", level: "Expert" },
              ].map((skill, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <Badge
                        variant={
                          skill.level === "Expert" ? "default" : skill.level === "Advanced" ? "secondary" : "outline"
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-featured online store with payment processing, user authentication, and admin dashboard.",
                  tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Task Management App",
                  description: "A collaborative task management tool with real-time updates and team workspaces.",
                  tags: ["React", "Firebase", "Redux", "Material UI"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Health & Fitness Tracker",
                  description: "Mobile-first application for tracking workouts, nutrition, and health metrics.",
                  tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
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
            <div className="mt-10 text-center">
              <Button variant="outline">View All Projects</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Testimonials</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Product Manager at TechCorp",
                  content:
                    "Alex delivered our project on time and exceeded our expectations. Their technical skills and communication made the development process smooth and efficient.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Michael Chen",
                  role: "CTO at StartupX",
                  content:
                    "Working with Alex was a pleasure. They quickly understood our requirements and implemented complex features with attention to detail and performance.",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder at DesignStudio",
                  content:
                    "Alex transformed our design concepts into a beautiful, functional website. Their expertise in frontend development and UX best practices was invaluable.",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">{testimonial.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "TechCorp Inc.",
                  period: "2021 - Present",
                  description:
                    "Lead the frontend development team in building and maintaining the company's main SaaS product. Implemented new features, improved performance, and mentored junior developers.",
                },
                {
                  role: "Full Stack Developer",
                  company: "StartupX",
                  period: "2019 - 2021",
                  description:
                    "Worked on all aspects of the product development cycle from ideation to deployment. Built RESTful APIs, designed database schemas, and developed responsive user interfaces.",
                },
                {
                  role: "Web Developer",
                  company: "Digital Agency",
                  period: "2017 - 2019",
                  description:
                    "Developed websites and web applications for various clients across different industries. Collaborated with designers and project managers to deliver high-quality solutions.",
                },
              ].map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="md:w-1/3">
                      <h3 className="font-semibold text-lg">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-muted-foreground">{job.period}</p>
                    </div>
                    <div className="md:w-2/3">
                      <p>{job.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and full-time positions. If you have a project that needs
                coding or a position to fill, contact me.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:alex@example.com" className="hover:text-primary transition-colors">
                      alex@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/alexdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/alexdev
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/alexdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/alexdev
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-primary" />
                    <a
                      href="https://twitter.com/alexdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      @alexdev
                    </a>
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
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div>
            <Link href="#" className="font-bold text-xl">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} Alex Developer. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CTASection } from '@/components/CtaSection'
import Image from 'next/image'

export const metadata = {
  title: 'Projekte – Fullstack Development',
  description:
    'Eine Auswahl meiner Projekte – von modernen Web-Apps über E-Commerce-Lösungen bis zu komplexen Backend-Systemen.',
}

// Dummy-Daten für Projekte - hier später deine echten Projekte einfügen
const projects = [
  {
    id: 1,
    title: 'Solarwelt-GmbH Photovoltaik',
    category: 'Fullstack Web App',
    description: 'Moderne E-Commerce-Plattform mit React, Node.js und Stripe-Integration. Komplettes Warenwirtschaftssystem mit Admin-Dashboard.',
    image: '/solarwelt.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2024',
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Web Application',
    description: 'Analytics-Dashboard für ein SaaS-Startup. Real-time Datenvisualisierung mit WebSockets und komplexem Rechtemanagement.',
    image: '/saas.png',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebSockets'],
    year: '2024',
    link: '#',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Website',
    description: 'Hochperformante Unternehmenswebsite mit Headless CMS. SEO-optimiert und perfekte Core Web Vitals Scores.',
    image: '/saas.png',
    tags: ['Next.js', 'Sanity CMS', 'Vercel'],
    year: '2023',
    link: '#',
  },
  {
    id: 4,
    title: 'Drei Brueder',
    category: 'Website',
    description: 'Online-Buchungssystem für Dienstleister mit Kalendersynchronisation, Zahlungsabwicklung und automatisierten E-Mail-Benachrichtigungen.',
    image: '/dreibrueder.png',
    tags: ['React', 'Express', 'PostgreSQL', 'AWS'],
    year: '2023',
    link: '#',
  },
  /*{
    id: 5,
    title: 'API Modernization',
    category: 'Backend',
    description: 'Migration einer Legacy REST API zu einer modernen GraphQL-Architektur. Performance-Verbesserung um 300%.',
    image: '/projects/api.jpg',
    tags: ['GraphQL', 'Node.js', 'Redis', 'Docker'],
    year: '2024',
    link: '#',
  },
  {
    id: 6,
    title: 'Progressive Web App',
    category: 'Mobile Web App',
    description: 'Offline-fähige PWA für Außendienstmitarbeiter. Synchronisation mit Backend-API und lokaler Datenspeicherung.',
    image: '/projects/pwa.jpg',
    tags: ['React', 'Service Workers', 'IndexedDB'],
    year: '2023',
    link: '#',
  },*/
]

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Java', level: 93 },
      { name: 'Go', level: 90 },
      { name: 'Spring/Quarkus', level: 85 },
      { name: 'GraphQL', level: 87 },
    ],
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'Prisma ORM', level: 87 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    technologies: [
      { name: 'Docker', level: 88 },
      { name: 'AWS', level: 82 },
      { name: 'CI/CD', level: 85 },
      { name: 'Vercel', level: 92 },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-26 mb-8">
      <Heading as="h1">Projekte, die Technologie und Design vereinen</Heading>
      <Lead className="mt-6 max-w-3xl">
        Eine Auswahl meiner Arbeiten – von modernen Web-Apps über E-Commerce-Lösungen 
        bis zu komplexen Backend-Systemen. Jedes Projekt mit Fokus auf Performance, 
        Skalierbarkeit und Best Practices.
      </Lead>
     <section className="mt-4 grid grid-cols-1 lg:grid-cols-1">
        <div className="lg:col-span-2">
          <p className="text-sm/6 text-gray-600">
            In den letzten Jahren habe ich eine Vielzahl von Projekten für Startups, 
            mittelständische Unternehmen und Enterprise-Kunden umgesetzt. Mein Fokus 
            liegt dabei auf modernen Tech-Stacks, die sowohl entwicklerfreundlich als 
            auch zukunftssicher sind.
          </p>
          <p className="mt-6 text-sm/6 text-gray-600">
            Jedes Projekt beginnt mit einer gründlichen Analyse der Anforderungen und 
            einer durchdachten Architektur. Ich lege großen Wert auf clean code, 
            automatisierte Tests und CI/CD-Pipelines, um langfristige Wartbarkeit zu 
            gewährleisten.
          </p>
          <p className="mt-6 text-sm/6 text-gray-600">
            Von der ersten Konzeption über das Design bis zum finalen Deployment – 
            ich begleite Projekte durch alle Phasen. Dabei arbeite ich eng mit meinen 
            Kunden zusammen und halte sie durch regelmäßige Updates auf dem Laufenden.
          </p>
        </div>   
       <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dd className="text-6xl font-medium tracking-tight">
                45+
              </dd>
              <dt className="text-sm/6 text-gray-600">Abgeschlossene Projekte</dt>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dd className="text-6xl font-medium tracking-tight">
                7+
              </dd>
              <dt className="text-sm/6 text-gray-600">Jahre Erfahrung</dt>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dd className="text-6xl font-medium tracking-tight">
                30+
              </dd>
              <dt className="text-sm/6 text-gray-600">Zufriedene Kunden</dt>
            </div>
          </dl>
            </div>
        </section>

    </Container>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group relative">
      <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-md ring-1 ring-black/5 transition hover:shadow-xl">
        <div className="relative mx-auto aspect-4/3 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Platzhalter für Projekt-Bild */}
          <div className="flex items-center justify-center text-gray-400">
               <Image 
            src={project.image} 
            alt={project.title}
            fill // Sagt dem Bild: Fülle den Eltern-Container aus
            className="object-cover transition duration-300 group-hover:scale-105" // object-cover verhindert Verzerrung
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Performance Optimierung
          />
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-gray-400">{project.year}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-950 group-hover:text-blue-600 transition">
            {project.title}
          </h3>
          <p className="mt-2 text-sm/6 text-gray-600">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="outline" href={project.link}>
              Details ansehen
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectsGrid() {
  return (
    <Container className="mt-24">
      <Subheading>Ausgewählte Projekte</Subheading>
      <Heading as="h3" className="mt-2">
        Von der Idee zur fertigen Lösung
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Jedes Projekt ist einzigartig und erfordert einen individuellen Ansatz. 
        Hier finden Sie eine Auswahl meiner Arbeiten aus verschiedenen Bereichen.
      </Lead>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}

function TechStackSection() {
  return (
    <div className="relative mt-32 bg-gray-900 py-24">
      <div className="absolute inset-0 bg-[url(/dot-texture.svg)] opacity-40" />
      <Container className="relative">
        <Subheading className="text-gray-400">Technologie-Stack</Subheading>
        <Heading as="h3" className="mt-2 text-white">
          Moderne Tools für moderne Lösungen
        </Heading>
        <Lead className="mt-6 max-w-3xl text-gray-300">
          Ich arbeite mit bewährten, zukunftssicheren Technologien, die sowohl 
          Performance als auch Entwicklerfreundlichkeit garantieren.
        </Lead>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {techStack.map((stack, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white">
                {stack.category}
              </h4>
              <div className="mt-6 space-y-6">
                {stack.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Analyse & Konzept',
      description: 'Gemeinsam definieren wir Ihre Anforderungen, Ziele und die optimale technische Architektur für Ihr Projekt.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Erstellung von Wireframes, UI-Designs und interaktiven Prototypen zur Visualisierung des finalen Produkts.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Entwicklung',
      description: 'Agile Entwicklung mit modernen Tech-Stacks. Regelmäßige Updates und Demos halten Sie auf dem Laufenden.',
      icon: '⚡',
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'Umfangreiche Tests, Performance-Optimierung und reibungsloser Deployment-Prozess mit CI/CD-Pipelines.',
      icon: '🚀',
    },
  ]

  return (
    <Container className="my-32">
      <Subheading>Mein Prozess</Subheading>
      <Heading as="h3" className="mt-2">
        Von der ersten Idee bis zum Launch
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Strukturiert, transparent und mit Fokus auf Ihre Anforderungen – 
        so arbeite ich an jedem Projekt.
      </Lead>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 shadow-md ring-1 ring-black/5 transition hover:shadow-xl"
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl">{step.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-950">
                    {step.title}
                  </h4>
                </div>
                <p className="mt-3 text-sm/6 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: 'Hervorragende Arbeit! Die Web-App wurde pünktlich geliefert und übertrifft unsere Erwartungen. Sehr professionelle Kommunikation und tiefes technisches Know-how.',
      author: 'Michael Schmidt',
      role: 'CEO, TechStart GmbH',
      image: '/testimonials/michael-schmidt.jpg',
    },
    {
      quote: 'Die Zusammenarbeit war reibungslos und effizient. Besonders beeindruckt hat uns die Fähigkeit, komplexe technische Anforderungen in verständliche Lösungen zu übersetzen.',
      author: 'Sarah Weber',
      role: 'Product Lead, InnovateLabs',
      image: '/testimonials/sarah-weber.jpg',
    },
    {
      quote: 'Endlich jemand, der nicht nur entwickelt, sondern mitdenkt. Die Architektur-Beratung hat uns vor vielen Problemen bewahrt. Absolut empfehlenswert!',
      author: 'Thomas Müller',
      role: 'CTO, DataFlow Systems',
      image: '/testimonials/thomas-mueller.jpg',
    },
  ]

  return (
    <Container className="my-32">
      <Subheading className="text-center">Was Kunden sagen</Subheading>
      <Heading as="h3" className="mt-2 text-center">
        Feedback aus echten Projekten
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5"
          >
            <blockquote>
              <p className="text-sm/6 text-gray-700">
                "{testimonial.quote}"
              </p>
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200" />
              <div>
                <p className="text-sm font-semibold text-gray-950">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default function Projects() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <ProjectsGrid />
      <ProcessSection />
      <TechStackSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
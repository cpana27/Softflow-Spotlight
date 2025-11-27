import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Beratung - Softflow',
  description:
   'Technische Beratung und Softwarelösungen von einem erfahrenen Fullstack-Entwickler'
}

function Header() {
  return (
    <Container className="mt-32 py-10">
      <Heading as="h1">Technische Beratung mit 8 Jahren Praxiserfahrung</Heading>
      <Lead className="mt-6 max-w-3xl">
        Als erfahrener Fullstack-Entwickler mit Schwerpunkt im Versicherungsbereich unterstütze ich Sie bei komplexen Softwareprojekten und technischen Herausforderungen.
      </Lead>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <p className="mt-6 text-sm/6 text-gray-600">
            Mit einem abgeschlossenen Studium der Technischen Informatik und 8 Jahren Berufserfahrung als Fullstack-Entwickler bringe ich fundiertes Wissen in moderne Softwarearchitekturen, Backend- und Frontend-Technologien sowie Datenbanksysteme mit.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Meine Expertise erstreckt sich von der Konzeption und Architektur über die Implementierung bis hin zur Optimierung bestehender Systeme. Besonders im Versicherungsbereich habe ich umfangreiche Erfahrung mit sicherheitskritischen Anwendungen und komplexen Geschäftsprozessen gesammelt.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Durch meine Leidenschaft für Low-Level-Hardwareprogrammierung verstehe ich nicht nur die Softwareseite, sondern auch die zugrunde liegende Hardware-Architektur. Diese ganzheitliche Perspektive ermöglicht es mir, performante und ressourceneffiziente Lösungen zu entwickeln.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Erfahrung in Zahlen</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Jahre Berufserfahrung</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={8} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Abgeschlossene Projekte</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={20} end={50} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function ServiceCard({ title, description, topics }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm/6 text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-600">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Services() {
  return (
    <Container className="mt-42">
      <Subheading>Beratungsleistungen</Subheading>
      <Heading as="h3" className="mt-2">
        Individuelle Lösungen für Ihre Herausforderungen
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Von der strategischen Technologieberatung bis zur hands-on Entwicklung unterstütze ich Sie in allen Phasen Ihres Projekts.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ServiceCard
          title="Softwarearchitektur & Design"
          description="Entwicklung skalierbarer und wartbarer Softwarearchitekturen für moderne Webanwendungen."
          topics={[
            "Microservices & Monolithen-Architektur",
            "API-Design & RESTful Services",
            "Datenbank-Design & Optimierung",
            "Cloud-native Architekturen",
            "Security Best Practices"
          ]}
        />
        
        <ServiceCard
          title="Fullstack-Entwicklung"
          description="Komplette Umsetzung von Frontend bis Backend mit modernen Technologien und Frameworks."
          topics={[
            "React, Next.js & moderne Frontend-Frameworks",
            "Node.js, Python & Backend-Entwicklung",
            "Datenbanken (SQL & NoSQL)",
            "CI/CD & DevOps-Praktiken",
            "Testing & Code-Qualität"
          ]}
        />
        
        <ServiceCard
          title="Legacy-System Modernisierung"
          description="Schrittweise Überführung bestehender Systeme in moderne, wartbare Architekturen."
          topics={[
            "Code-Analyse & Refactoring",
            "Migrationsstrategie & Planung",
            "Risikominimierung bei Updates",
            "Technologie-Stack Modernisierung",
            "Dokumentation & Wissenstransfer"
          ]}
        />
        
        <ServiceCard
          title="Performance-Optimierung"
          description="Analyse und Verbesserung der Performance Ihrer bestehenden Anwendungen."
          topics={[
            "Profiling & Bottleneck-Analyse",
            "Datenbank-Optimierung",
            "Frontend-Performance",
            "Backend-Skalierung",
            "Caching-Strategien"
          ]}
        />
      </div>
    </Container>
  )
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Erstgespräch",
      description: "In einem unverbindlichen Gespräch analysieren wir Ihre aktuellen Herausforderungen und Ziele."
    },
    {
      number: "02",
      title: "Konzeption",
      description: "Gemeinsam entwickeln wir eine maßgeschneiderte Strategie und technische Lösungsansätze."
    },
    {
      number: "03",
      title: "Umsetzung",
      description: "Ob beratend oder hands-on - ich unterstütze Sie bei der Implementierung Ihrer Lösung."
    },
    {
      number: "04",
      title: "Optimierung",
      description: "Nach dem Launch sorgen wir für kontinuierliche Verbesserung und Support."
    }
  ]

  return (
    <Container className="mt-32">
      <Subheading>Arbeitsweise</Subheading>
      <Heading as="h3" className="mt-2">
        Vom ersten Gespräch zur fertigen Lösung
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Ein strukturierter Prozess garantiert transparente Kommunikation und erfolgreiche Projektergebnisse.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['\201C'] after:absolute after:content-['\201D']">
            Die Kombination aus tiefem technischen Verständnis und praktischer Erfahrung im Versicherungsbereich war genau das, was unser Projekt zum Erfolg geführt hat.
          </p>
        </blockquote>
      </figure>
    </div>
  )
}

function Contact() {
  return (
    <Container className="my-32">
      <Subheading>Kontakt</Subheading>
      <Heading as="h3" className="mt-2">
        Lassen Sie uns über Ihr Projekt sprechen
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Egal ob kurze Frage oder umfangreiches Projekt - ich freue mich darauf, von Ihnen zu hören und gemeinsam die beste Lösung für Ihre Anforderungen zu finden.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Beratungsbereiche</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Bereich</th>
                  <th scope="col">Verfügbarkeit</th>
                  <th scope="col">Mehr erfahren</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Entwicklung
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Fullstack-Entwicklung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend-Architektur</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Frontend-Entwicklung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Beratung & Optimierung
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Technische Architektur</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Code-Review & Refactoring</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Performance-Optimierung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#kontakt">
                      Anfragen
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Consulting() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
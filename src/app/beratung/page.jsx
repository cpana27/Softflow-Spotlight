import React from 'react'
import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import HeaderImage from "@/images/codeS.jpg"
import Image from 'next/image'

export const metadata = {
  title: 'Beratung - Softflow',
  description:
    'Technische Beratung und Softwarelösungen von einem erfahrenen Fullstack-Entwickler',
}

// Hilfsfunktion für dynamische Daten
function calculateYears(dateString) {
  const today = new Date();
  const startDate = new Date(dateString);
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  return years;
}

function Header() {
  // STARTDATUM HIER ANPASSEN:
  const careerStart = '2017-01-01'; // Beispiel für Berufserfahrung
  const experienceYears = calculateYears(careerStart);

  return (
    <Container className="mt-32 py-10">
      <Heading as="h2">Technische Beratung mit {experienceYears} Jahren Praxiserfahrung</Heading>
      <Lead className="mt-6 max-w-3xl">
        Als erfahrener Fullstack-Entwickler mit Schwerpunkt im Versicherungsbereich unterstütze ich Sie bei komplexen Softwareprojekten und technischen Herausforderungen.
      </Lead>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <p className="mt-6 text-sm/6 text-gray-600">
            Mit einem abgeschlossenen Studium der Technischen Informatik und über {experienceYears} Jahren Berufserfahrung als Fullstack-Entwickler bringe ich fundiertes Wissen in moderne Softwarearchitekturen, Backend- und Frontend-Technologien sowie Datenbanksysteme mit.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Meine Expertise erstreckt sich von der Konzeption und Architektur über die Implementierung bis hin zur Optimierung bestehender Systeme. Besonders im Versicherungsbereich habe ich umfangreiche Erfahrung mit sicherheitskritischen Anwendungen und komplexen Geschäftsprozessen gesammelt.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Durch meine Leidenschaft für Low-Level-Hardwareprogrammierung verstehe ich nicht nur die Softwareseite, sondern auch die zugrunde liegende Hardware-Architektur. Diese ganzheitliche Perspektive ermöglicht es mir, performante und ressourceneffiziente Lösungen zu entwickeln.
          </p>
        </div>
        <div className="lg:row-span-2 lg:-mr-16 xl:mx-auto">
  <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
    <Image 
      src={HeaderImage}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

        </div>
        <div className="max-lg:mt-16 lg:col-span-1">Lass uns zusammenarbeiten
          <Subheading>Erfahrung in Zahlen</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Jahre Berufserfahrung</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={experienceYears} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Abgeschlossene Projekte</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={15} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

// Neues Design: Icon-Box Stil für Services
function ServiceCard({ title, description, topics, icon: Icon }) {
  return (
    <div className="group relative rounded-3xl bg-gray-50 p-8 hover:bg-gray-100 transition-all duration-300">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 group-hover:scale-110 transition-transform">
        {Icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-sm/6 text-gray-600">{description}</p>
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <ul className="space-y-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
              <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 group-hover:bg-gray-600" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Services() {
  // Icons als SVG Komponenten für saubereren Code
  const Icons = {
    Arch: <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
    Code: <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
    Modern: <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
    Perf: <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
  }

  return (
    <Container className="mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 lg:sticky lg:top-10">
          <Subheading>Beratungsleistungen</Subheading>
          <Heading className="mt-2">
            Individuelle Lösungen
          </Heading>
          <Lead className="mt-6">
            Von der strategischen Technologieberatung bis zur hands-on Entwicklung unterstütze ich Sie in allen Phasen Ihres Projekts.
          </Lead>
          <div className="mt-8">
            <Button href="/kontakt">Projekt anfragen</Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Softwarearchitektur & Design"
            description="Entwicklung skalierbarer und wartbarer Softwarearchitekturen."
            icon={Icons.Arch}
            topics={[
              "Microservices & Monolithen",
              "API-Design (REST/GraphQL)",
              "Datenbank-Design",
              "Cloud-native Architektur"
            ]}
          />
          
          <ServiceCard
            title="Fullstack-Entwicklung"
            description="End-to-End Umsetzung mit modernsten Technologien."
            icon={Icons.Code}
            topics={[
              "React, Next.js, TypeScript",
              "Node.js & Python Backends",
              "SQL & NoSQL Datenbanken",
              "CI/CD Pipelines"
            ]}
          />
          
          <ServiceCard
            title="Legacy Modernisierung"
            description="Überführung bestehender Systeme in die Moderne."
            icon={Icons.Modern}
            topics={[
              "Code-Refactoring",
              "Risikominimierte Migration",
              "Tech-Stack Updates",
              "Dokumentation"
            ]}
          />
          
          <ServiceCard
            title="Performance & Scale"
            description="Optimierung für Geschwindigkeit und Last."
            icon={Icons.Perf}
            topics={[
              "Profiling & Analyse",
              "Query-Optimierung",
              "Caching-Strategien",
              "Ladezeiten-Reduktion"
            ]}
          />
        </div>
      </div>
    </Container>
  )
}

// Neues Design: Horizontaler Prozess
function Process() {
  const steps = [
    { number: "01", title: "Analyse", desc: "Bestandsaufnahme & Ziele definieren" },
    { number: "02", title: "Konzeption", desc: "Strategie & Architektur entwickeln" },
    { number: "03", title: "Umsetzung", desc: "Agile Entwicklung & Integration" },
    { number: "04", title: "Optimierung", desc: "Launch & kontinuierliche Verbesserung" }
  ]

  return (
    <div className="mt-32 bg-gray-800 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">Arbeitsweise</span>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Der Weg zur Lösung
            </h3>
          </div>
          <p className="max-w-md text-gray-400 text-base/7">
            Ein transparenter, strukturierter Prozess garantiert Planungssicherheit und erfolgreiche Ergebnisse für Ihr Vorhaben.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative pl-8 md:pl-0">
              {/* Verbindungslinie (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-10 right-0 h-0.5 bg-gray-800" />
              )}
              {/* Verbindungslinie (Mobile) */}
              <div className="md:hidden absolute top-0 bottom-0 left-[11px] w-0.5 bg-gray-800" />
              
              <div className="relative flex flex-col gap-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-gray-900 z-10">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div>
                  <div className="text-sm font-mono text-emerald-400 mb-1">{step.number}</div>
                  <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function Contact() {
  return (
    <Container className="my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Linke Seite: Intro & Testimonial */}
        <div>
          <Subheading>Zusammenarbeit</Subheading>
          <Heading as="h3" className="mt-2">
            Lassen Sie uns starten
          </Heading>
          <Lead className="mt-6">
            Egal ob kurze technische Einschätzung oder langfristige Projektbegleitung - ich stehe Ihnen mit meiner Erfahrung zur Seite.
          </Lead>
          
          <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <figure>
              <blockquote className="text-lg/8 font-medium text-gray-900">
                <p>“Die Kombination aus tiefem technischen Verständnis und praktischer Erfahrung im Versicherungsbereich war genau das, was unser Projekt zum Erfolg geführt hat.”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Projektleiter</div>
                  <div className="text-gray-600">Versicherungsbranche</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Rechte Seite: Service Menu / Verfügbarkeit */}
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h4 className="text-base font-semibold leading-6 text-gray-900 mb-6">Aktuelle Verfügbarkeit</h4>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-4">
                <span className="font-semibold text-gray-900">Entwicklung</span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verfügbar</span>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Fullstack-Entwicklung</span>
                  <Button variant="text" arrow="right" className="text-xs" href="/kontakt">Anfragen</Button>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Backend-Architektur</span>
                  <Button variant="text" arrow="right" className="text-xs" href="/kontakt">Anfragen</Button>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-4">
                <span className="font-semibold text-gray-900">Beratung</span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verfügbar</span>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Technische Architektur</span>
                  <Button variant="text" arrow="right" className="text-xs" href="/kontakt">Anfragen</Button>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-600">Code-Review & Refactoring</span>
                  <Button variant="text" arrow="right" className="text-xs" href="/kontakt">Anfragen</Button>
                </li>
              </ul>
            </div>
            
            <div className="pt-4 mt-6 border-t border-gray-100">
               <Button className="w-full" href="mailto:kontakt@softflow.de">
                 Unverbindliches Erstgespräch vereinbaren
               </Button>
            </div>
          </div>
        </div>
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
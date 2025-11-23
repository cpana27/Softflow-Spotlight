import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Projects, Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import {Hero} from "@/components/Hero"

export const metadata = {
  description:
   'Softflow - Maßgeschneiderte Softwarelösung und Beratung',
}

import { CodeBracketIcon, CpuChipIcon, DevicePhoneMobileIcon, CloudIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'

export function FeatureSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-5">
            <Subheading>Entwicklung & Beratung</Subheading>
            <Heading as="h2" className="mt-2">
              Maßgeschneiderte Software-Lösungen
            </Heading>
            <p className="mt-6 text-xl text-gray-700">
              Als erfahrener Full-Stack Entwickler und Berater unterstütze ich dich von der ersten Idee bis zum erfolgreichen Launch – mit modernen Technologien und bewährten Best Practices.
              </p>
          </div>

          <div className="lg:col-span-3 ">
            <div className="max-w-2xl text-base/7 text-gray-600">
              <ul role="list" className="mt-4 space-y-6 text-gray-600">
                <li className="flex gap-x-3">
                  <CodeBracketIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Full-Stack Entwicklung.</strong> Von Go & Node.js im Backend bis React & TypeScript im Frontend – ich beherrsche den kompletten Stack für moderne Web-Anwendungen.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Mobile Apps.</strong> Native Android-Entwicklung mit Kotlin oder plattformübergreifende Lösungen mit Flutter – optimal für jedes Projekt.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CpuChipIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Performance & Skalierbarkeit.</strong> Hochperformante Backend-Systeme mit Go und Java für Enterprise-Anforderungen, die mit deinem Business wachsen.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">DevOps & Cloud.</strong> Container-Deployment mit Docker, CI/CD-Pipelines und moderne Cloud-Infrastruktur für maximale Verfügbarkeit.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Qualität & Testing.</strong> Clean Code mit TypeScript, automatisierte Tests und Code-Reviews sorgen für wartbare, fehlerfreie Software.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Agile Entwicklung.</strong> Regelmäßige Updates, transparente Kommunikation und schnelle Iterations-Zyklen für beste Ergebnisse.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Egal ob du eine neue Web-Anwendung entwickeln, bestehende Systeme modernisieren oder dein Team mit Expertenwissen unterstützen möchtest – ich finde die passende Lösung für deine Anforderungen.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <img
                alt="Code-Editor mit modernem Tech-Stack"
                src="/screenshots/codeS.jpg"
                className="w-full aspect-[4/3] rounded-2xl object-cover shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="mt-6 rounded-xl bg-gray-50 p-6 ring-1 ring-gray-900/5">
                <h3 className="text-sm font-semibold text-gray-900">Tech-Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Go</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">React</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">TypeScript</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Node.js</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Python</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Docker</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Kotlin</span>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Flutter</span>
                </div>
              </div>
            </div>
          </div>
        </div>

         <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Von der Beratung bis zum Launch</h2>
              <p className="mt-6">
                Mein Ansatz beginnt mit einer gründlichen Analyse deiner Anforderungen. Gemeinsam entwickeln wir eine technische Strategie, die zu deinem Business passt. Durch agile Methoden und regelmäßiges Feedback stelle ich sicher, dass das Endprodukt genau deinen Vorstellungen entspricht – und diese oft sogar übertrifft.
              </p>
      </Container>
    </div>
  )
}
function BentoSection() {
  return (
    <Container>
      <Subheading className="mt-26">Entwicklung & Tech-Stack</Subheading>
      <Heading as="h2" className="mt-2">
        Moderne Software Lösungen für dein Business.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Expertise"
          title="Full-Stack Entwicklung"
          description="Von Go & Node.js im Backend bis React & TypeScript im Frontend – ich entwickle skalierbare Web-Anwendungen mit modernen Technologien und Best Practices."
          graphic={
            <div className="h-80 bg-[url(/screenshots/code.jpg)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Technologie"
          title="Modernster Tech-Stack"
          description="Ich arbeite mit den neuesten Technologien: Go, TypeScript, React, Node.js, Python, Java, Docker, Kotlin und Flutter für Web, Backend und Mobile."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/modern.jpg)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Performance"
          title="Optimiert für Speed"
          description="Hochperformante Backend-Systeme mit Go und effiziente Frontend-Lösungen für schnelle Ladezeiten und beste User Experience."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Vielseitig"
          title="Web, Mobile & Cloud"
          description="Cross-Platform Mobile Apps mit Flutter, native Android-Entwicklung mit Kotlin und containerisierte Deployments mit Docker."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Enterprise"
          title="Business-Lösungen"
          description="Robuste Enterprise-Anwendungen mit Java, Datenanalyse und Automatisierung mit Python für komplexe Geschäftsanforderungen."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl py-32">
      <Container>
        <Subheading dark>Zusammenarbeit</Subheading>
        <Heading as="h2" className="mt-2">
          Von der Idee zur fertigen Lösung.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Beratung"
            title="Strategische Software-Beratung"
            description="Ich analysiere deine Anforderungen und entwickle maßgeschneiderte Technologie-Strategien von der Architektur bis zur erfolgreichen Implementierung."
            graphic={
              <div className="h-80 bg-[url(/screenshots/beratung.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            eyebrow="Integration"
            title="Nahtlose System-Integration"
            description="REST APIs, GraphQL, WebSockets und Microservices – ich verbinde deine Systeme zuverlässig und sicher miteinander."
            graphic={<LinkedAvatars />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            eyebrow="Entwicklung"
            title="Agiler Entwicklungsprozess"
            description="Strukturierte Entwicklung mit regelmäßigen Updates und Feedback-Schleifen – transparent, effizient und zielorientiert."
            graphic={<LogoTimeline />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            eyebrow="Qualität"
            title="Clean Code & Best Practices"
            description="Wartbarer, typsicherer Code mit TypeScript, automatisierte Tests und CI/CD-Pipelines für höchste Code-Qualität und Zuverlässigkeit."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-8">
        </Container>
            <BentoSection />
          <FeatureSection />
        <DarkBentoSection />
      </main>
      <Projects />
      <Footer />
    </div>
  )
}

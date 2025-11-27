import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


function FrequentlyAskedQuestions() {
  return (
    <Container className="mt-18"> 
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Häufig gestellte Fragen
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Transparenz von Anfang an
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Warum sind Ihre Preise günstiger als bei Agenturen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Sie zahlen bei mir nicht für Overhead, Projektmanager oder 
              Kommunikationswege. Als Fullstack-Entwickler setze ich Ihr 
              Projekt von der Datenbank bis zum Frontend komplett selbst um
              das spart Zeit und Kosten. Moderne Tech-Stacks wie React und 
              Node.js ermöglichen mir zudem eine effizientere Entwicklung. 
              Keine Büros, keine Vertriebsabteilungen nur pure Entwicklungsleistung.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Welche Projekte können Sie umsetzen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Von einfachen Landing Pages über komplexe E-Commerce-Plattformen 
              bis hin zu vollständigen SaaS-Anwendungen. Ich entwickle moderne 
              Web-Apps, Progressive Web Apps, REST/GraphQL APIs, Dashboards, 
              Admin-Panels und integriere Payment-Systeme. Auch Legacy-Code 
              Modernisierung, Datenbank-Migrationen und Backend-Erweiterungen 
              gehören zu meinem Alltag.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Was beinhaltet Ihre Beratungsleistung?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Meine Consulting-Services umfassen Tech-Stack Evaluation, 
              System-Architektur Design, Code Reviews, Security Audits, 
              Performance-Optimierung, Cloud-Strategie (AWS, Azure, GCP), 
              CI/CD Pipeline Setup und Team-Training. Ich helfe bei der 
              Entscheidungsfindung für neue Projekte, evaluiere bestehende 
              Systeme und gebe konkrete Handlungsempfehlungen für Skalierung, 
              Security und moderne Best Practices.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Wie läuft die Zusammenarbeit ab?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Direkter und persönlicher Kontakt ist mein Prinzip. Sie 
              kommunizieren nur mit mir kein Durchreichen an verschiedene 
              Abteilungen. Nach einem Erstgespräch erstelle ich ein Angebot, 
              das genau auf Ihre Anforderungen zugeschnitten ist. Während der 
              Entwicklung bleiben Sie durch regelmäßige Updates immer auf dem 
              Laufenden. Ich arbeite agil und liefere in kurzen Iterationen.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Welche Technologien setzen Sie ein?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Mein Fokus liegt auf modernen, bewährten Technologien: React, 
              Next.js und TypeScript für Frontends, Node.js, Express und NestJS 
              für Backend-APIs, PostgreSQL, MongoDB und Redis für Datenbanken. 
              Für das Hosting nutze ich moderne Cloud-Plattformen wie Vercel, 
              AWS, Railway oder DigitalOcean. DevOps mit Docker, CI/CD Pipelines 
              und Infrastructure as Code gehören zum Standard.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Was passiert nach dem Launch?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Jedes Projekt beinhaltet eine Support-Phase nach dem Launch. 
              Für langfristige Betreuung biete ich Wartungspakete an, die 
              Updates, Security Patches, Monitoring und kleinere Anpassungen 
              abdecken. Sie entscheiden selbst, ob Sie laufenden Support 
              benötigen oder lieber punktuell auf Stundenbasis arbeiten möchten.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Können Sie auch bestehende Projekte übernehmen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Ja, auf jeden Fall. Mit dem Quick Start Paket biete ich einen 
              Code Review und Security-Check an ideal, um den Zustand Ihres 
              Projekts zu bewerten. Danach kann ich gezielt Verbesserungen 
              vornehmen, Features hinzufügen, Performance optimieren oder das 
              gesamte Projekt modernisieren. Auch Legacy-Code Migrationen zu 
              modernen Tech-Stacks sind möglich.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Bieten Sie auch Backend-Entwicklung und Datenbank-Design an?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolut. Als Fullstack-Entwickler decke ich die komplette 
              Anwendungsarchitektur ab: RESTful und GraphQL APIs, 
              Microservices, Datenbank-Design und -Optimierung, Authentication 
              & Authorization, Payment-Integration (Stripe, PayPal), 
              Websockets für Real-time Features, Cloud-Deployment und 
              Serverless Functions. Ich entwickle skalierbare Backend-Systeme, 
              die mit Ihrem Business wachsen.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Wie stellen Sie die Sicherheit meiner Anwendung sicher?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Security ist bei jedem Projekt von Anfang an integriert. Ich 
              implementiere sichere Authentication (OAuth, JWT), verschlüsselte 
              Datenübertragung (HTTPS, TLS), Input-Validierung, SQL-Injection 
              Prevention, XSS-Protection und CORS-Policies. Bei Bedarf führe ich 
              auch dedizierte Security Audits und Penetration Tests durch. 
              Regelmäßige Dependency Updates und Security Patches gehören zum 
              Standard-Wartungspaket.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Arbeiten Sie auch mit meinem bestehenden Team zusammen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Ja, sehr gerne. Ich kann als externer Fullstack-Entwickler 
              zeitweise Ihr Team verstärken, Code Reviews durchführen, 
              Pair-Programming Sessions leiten oder Workshops zu modernen 
              Entwicklungs-Praktiken geben. Auch als technischer Berater für 
              strategische Entscheidungen stehe ich zur Verfügung. Die 
              Zusammenarbeit ist flexibel remote oder vor Ort (DACH-Region).
              </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}


export default function FAQ(){
    return (
        <main className="overflow-hidden">
          <GradientBackground />
          <Container>
            <Navbar />
          </Container>
          <FrequentlyAskedQuestions />
          <Footer />
        </main>
      )
}

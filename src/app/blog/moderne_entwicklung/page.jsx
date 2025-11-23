import { Container } from "@/components/container";
import { Heading, Lead, Subheading } from '@/components/text'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/button'
import { 
  CheckCircleIcon, 
  CommandLineIcon, 
  CubeTransparentIcon,
  ServerIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/20/solid'

// --- Hilfskomponenten für das moderne Blog-Design ---

function CodeWindow({ title, children }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-gray-900 shadow-xl ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/50" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
          <div className="h-3 w-3 rounded-full bg-green-500/50" />
        </div>
        <div className="ml-2 text-xs font-mono text-gray-400">{title}</div>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          {children}
        </pre>
      </div>
    </div>
  )
}

function KeyTakeaway({ title, points }) {
  return (
    <div className="my-10 rounded-2xl bg-blue-50/50 p-8 ring-1 ring-blue-900/5">
      <h3 className="flex items-center gap-3 font-semibold text-blue-900">
        <CheckCircleIcon className="h-5 w-5 text-blue-600" />
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-700">
            <span className="block h-1.5 w-1.5 mt-2 rounded-full bg-blue-400 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

function AuthorCard() {
  return (
    <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:mt-0 lg:sticky lg:top-24">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl">👨‍💻</div>
        <div>
          <div className="font-semibold text-gray-900">Dein Name</div>
          <div className="text-xs text-gray-500">Fullstack Architect</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Ich helfe Unternehmen, skalierbare Software-Architekturen zu bauen. 
        Spezialisiert auf Go, Java & React.
      </p>
      <div className="mt-6 border-t border-gray-100 pt-6">
        <Button variant="outline" href="/contact" className="w-full text-xs">
          Projekt anfragen
        </Button>
      </div>
    </div>
  )
}

// --- Hauptinhalt ---

function BlogPost() {
  return (
    <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-2 mb-6">
             <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Architecture</span>
             <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">12 Min Lesezeit</span>
          </div>
          <Heading as="h1" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Der "Polyglot" Stack: Skalierbare Architektur mit Go, Java & React
          </Heading>
          <Lead className="mt-6">
            Warum Monolithen ausgedient haben und wie man die Stärken von Go (Performance) und Java (Enterprise) in einer modernen Docker-Umgebung vereint.
          </Lead>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-[1fr_320px]">
          
          {/* Main Content Column */}
          <div className="prose prose-lg prose-gray max-w-none">
            
            <p>
              In der modernen Softwareentwicklung stehen wir oft vor einem Dilemma: Wir wollen die Entwicklungsgeschwindigkeit eines Startups, aber die Stabilität eines Enterprise-Konzerns. 
              Die Lösung liegt oft nicht in <em>einer</em> Sprache, sondern in der intelligenten Kombination der besten Werkzeuge.
            </p>

            <KeyTakeaway 
              title="Kern-Architektur im Überblick"
              points={[
                "Frontend: React (Next.js) für maximale Interaktivität",
                "API Gateway & High-Traffic Services: Go (Golang) für reine Performance",
                "Complex Business Logic: Java (Spring Boot) für Stabilität und Libraries",
                "Datenhaltung: PostgreSQL (Persistent) + Redis (Cache)",
                "Infrastructure: Vollständig containerisiert mit Docker"
              ]}
            />

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Das Backend: Why not both?</h2>
            <p>
              Lange Zeit war es üblich, sich für <em>einen</em> Backend-Stack zu entscheiden. Doch in komplexen Systemen stoßen wir an Grenzen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CommandLineIcon className="h-6 w-6 text-cyan-600" />
                  <h3 className="font-bold text-gray-900">Go (Golang)</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Perfekt für das <strong>API Gateway</strong> und Microservices, die extremen Traffic bewältigen müssen (z.B. Websockets, Event-Handling). Go verbraucht einen Bruchteil des Speichers einer JVM.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CubeTransparentIcon className="h-6 w-6 text-orange-600" />
                  <h3 className="font-bold text-gray-900">Java (Spring)</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Unschlagbar für komplexe <strong>Business-Logik</strong>. Wenn es um Rechnungslegung, komplexe Validierungen oder Integrationen in Legacy-Systeme geht, bietet Spring Boot die nötige Reife.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">Die Kommunikation</h3>
            <p>
              Die Services kommunizieren intern meist via <strong>gRPC</strong> (für maximale Geschwindigkeit zwischen Go und Java) oder asynchron über Message Broker (wie RabbitMQ oder Kafka). Nach außen hin exponiert das Go-Gateway eine saubere REST oder GraphQL API für das Frontend.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Persistenz: PostgreSQL & Redis</h2>
            <p>
              Ein performantes Backend bringt nichts, wenn die Datenbank der Flaschenhals ist. Meine Strategie setzt auf Caching-First.
            </p>

            <CodeWindow title="docker-compose.yml (Database Tier)">
{`services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: production_db
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    command: redis-server --save 60 1 --loglevel warning
    ports:
      - "6379:6379"`}
            </CodeWindow>

            <p>
              <strong>PostgreSQL</strong> dient als "Source of Truth". Dank JSONB-Support können wir hier relationale Integrität mit der Flexibilität von NoSQL verbinden. 
              <strong> Redis</strong> hingegen fängt bis zu 80% der Leseanfragen ab. User-Sessions, Leaderboards oder Produktlisten kommen direkt aus dem RAM – mit Antwortzeiten unter 5ms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. DevOps mit Docker</h2>
            <p>
              "Works on my machine" ist Geschichte. Durch die Containerisierung jedes einzelnen Services erreichen wir:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Isolierung:</strong> Der Java-Service beeinflusst nicht die Performance des Go-Services.</li>
              <li><strong>Skalierbarkeit:</strong> Wir können 10 Instanzen des Go-Gateways starten, aber nur eine des Java-Backends, je nach Last.</li>
              <li><strong>Onboarding:</strong> Ein `docker-compose up` genügt, und neue Entwickler haben die komplette Infrastruktur lokal laufen.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Das Frontend: React & Next.js</h2>
            <p>
              Das Frontend ist entkoppelt. Ich setze auf <strong>React</strong> (oft im Next.js Framework), um Server-Side-Rendering (für SEO) mit Client-Side-Interactivity zu verbinden.
            </p>
            <p>
              Da wir im Backend eine saubere API-Definition haben (oft via Swagger/OpenAPI dokumentiert), können Frontend- und Backend-Teams parallel arbeiten. TypeScript sorgt dafür, dass die Datentypen vom Backend bis ins Frontend konsistent bleiben.
            </p>

            <div className="mt-16 rounded-3xl">
              <h3 className="text-xl font-semibold">Brauchen Sie diese Architektur?</h3>
              <p className="mt-4 text-base">
                Dieser Stack ist mächtig, aber komplex. Als Berater analysiere ich, ob Ihr Projekt diesen Grad an Skalierbarkeit benötigt oder ob wir schlanker starten. Wenn Sie aber Performance und Zukunftssicherheit suchen, ist das der Weg.
              </p>
              <div className="mt-8">
                 <Button href="/kontakt" variant="solid" color="white">
                   Architektur-Gespräch vereinbaren <ArrowRightIcon className="ml-2 h-4 w-4" />
                 </Button>
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="lg:pl-8">
             <div className="hidden lg:block">
                <div className="text-sm font-semibold text-gray-900 mb-4 tracking-wider uppercase">Inhalt</div>
                <nav className="space-y-3 border-l border-gray-200 pl-4 mb-12">
                   <a href="#" className="block text-sm text-blue-600 font-medium hover:text-blue-800">1. Das Hybrid-Backend</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">2. Datenbank & Caching</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">3. Containerisierung</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">4. Modern Frontend</a>
                </nav>
             </div>
             <AuthorCard />
             
             {/* Tech Stack Tags Sidebar */}
             <div className="mt-12">
               <div className="text-sm font-semibold text-gray-900 mb-4 uppercase">Tech Stack</div>
               <div className="flex flex-wrap gap-2">
                 {['Golang', 'Java Spring', 'React', 'Docker', 'PostgreSQL', 'Redis', 'AWS'].map(tag => (
                   <span key={tag} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function EntwicklerBlog(){
 return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <BlogPost />
      <Footer />
    </main>
 )
}
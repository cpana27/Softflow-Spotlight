import { Container } from "@/components/container";
import { Heading, Lead } from '@/components/text'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/button'
import { 
  CheckCircleIcon, 
  ScaleIcon, 
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowRightIcon,
  XMarkIcon
} from '@heroicons/react/20/solid'

// --- Design Komponenten ---

function DecisionMatrix({ title, options }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
          <ScaleIcon className="h-4 w-4 text-gray-500"/> {title}
        </h4>
      </div>
      <div className="divide-y divide-gray-100">
        {options.map((opt, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 bg-white">
              <div className="font-bold text-gray-900 mb-2">{opt.scenario}</div>
              <p className="text-sm text-gray-500">{opt.desc}</p>
            </div>
            <div className={`p-6 flex items-center gap-3 ${opt.recommended ? 'bg-blue-50/50' : 'bg-red-50/50'}`}>
              {opt.recommended ? (
                <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
              )}
              <div>
                <div className={`font-semibold text-sm ${opt.recommended ? 'text-blue-900' : 'text-red-900'}`}>
                  {opt.result}
                </div>
                <div className="text-xs text-gray-600 mt-1">{opt.reason}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuoteBox({ text, author }) {
  return (
    <figure className="my-10 border-l-4 border-blue-600 bg-gray-50 p-6 pl-8">
      <blockquote className="text-lg font-medium italic text-gray-900">
        "{text}"
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-x-2 text-sm text-gray-600">
        <div className="h-0.5 w-6 bg-gray-400"></div>
        {author}
      </figcaption>
    </figure>
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
        Ich helfe Startups und Unternehmen, die richtigen technologischen Wetten einzugehen. Strategie vor Hype.
      </p>
      <div className="mt-6 border-t border-gray-100 pt-6">
        <Button variant="outline" href="/kontakt" className="w-full text-xs">
          Beratung anfragen
        </Button>
      </div>
    </div>
  )
}

// --- Content ---

function BlogPost() {
  return (
    <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-2 mb-6">
             <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Consulting</span>
             <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Strategy</span>
          </div>
          <Heading as="h1" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Architektur als Investment: Wie man teure Tech-Fehlentscheidungen vermeidet
          </Heading>
          <Lead className="mt-6">
            Software-Architektur ist nicht das Zeichnen von bunten Kästchen. Es ist Risikomanagement. Warum "Boring Technology" oft die beste Wahl für Ihr Budget ist.
          </Lead>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-[1fr_320px]">
          
          {/* Main Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            
            <p>
              Jeden Tag erscheinen neue JavaScript-Frameworks, Datenbanken und Cloud-Services. Für CTOs und Gründer ist die Versuchung groß, immer auf das neueste Pferd zu setzen.
              Doch in meiner Beratungstätigkeit sehe ich oft das gleiche Bild: Projekte scheitern nicht an schlechtem Code, sondern an <strong>unnötiger Komplexität</strong>.
            </p>

            <p>
              Gute Architektur bedeutet nicht, das komplexeste System zu bauen, das möglich ist. Es bedeutet, das einfachste System zu bauen, das funktioniert und wartbar bleibt.
            </p>

            <div className="my-10 rounded-2xl bg-purple-50/50 p-8 ring-1 ring-purple-900/5">
              <h3 className="flex items-center gap-3 font-semibold text-purple-900">
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
                Meine Grundprinzipien
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Business Value schlägt Tech Hype",
                  "Monolith First (meistens)",
                  "Buy before Build (bei Standardproblemen)",
                  "Datenintegrität ist wichtiger als Features"
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="block h-1.5 w-1.5 mt-2 rounded-full bg-purple-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Die "Monolith vs. Microservices" Falle</h2>
            <p>
              "Netflix macht Microservices, also sollten wir das auch tun." Das ist der teuerste Satz in der Softwareentwicklung. 
              Microservices lösen Organisationsprobleme (für Teams mit 100+ Entwicklern), schaffen aber technische Probleme (Latenz, Konsistenz, Debugging).
            </p>
            <p>
              Für 95% meiner Kunden empfehle ich den <strong>Modularen Monolithen</strong>. Er ist einfacher zu deployen, einfacher zu testen und performanter – bis Sie wirklich Scale-Probleme haben.
            </p>

            <DecisionMatrix 
              title="Entscheidungshilfe: Architektur-Stil"
              options={[
                {
                  scenario: "Startup / MVP Phase",
                  desc: "Team < 5 Entwickler, Fokus auf schnelle Iteration.",
                  result: "Modularer Monolith",
                  reason: "Kein Overhead durch Netzwerk-Latenz oder komplexe Deployments.",
                  recommended: true
                },
                {
                  scenario: "Hyper-Growth Phase",
                  desc: "Team > 50 Entwickler, Domänen sind klar getrennt.",
                  result: "Microservices",
                  reason: "Teams können unabhängig deployen. Der Overhead lohnt sich jetzt.",
                  recommended: true
                },
                {
                  scenario: "Kleines Team, Microservices Architektur",
                  desc: "3 Entwickler verwalten 15 Services und Docker-Container.",
                  result: "Operational Hell",
                  reason: "Sie verbringen mehr Zeit mit DevOps als mit Features.",
                  recommended: false
                }
              ]}
            />

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Build vs. Buy: Das Ego ausschalten</h2>
            <p>
              Als Entwickler lieben wir es, Dinge zu bauen. Aber aus Business-Sicht ist "Selbstgebaut" oft eine Verbindlichkeit (Liability), kein Asset.
            </p>
            
            <QuoteBox 
              text="Schreiben Sie nur Code für das, was Ihr Unternehmen einzigartig macht (Core Domain). Für alles andere gibt es SaaS."
              author="Strategie-Grundsatz"
            />

            <p>
              <strong>Ein Beispiel:</strong> Ein Kunde wollte ein eigenes Authentifizierungs-System bauen. 
              Kostenpunkt: 3 Wochen Entwicklung + endlose Sicherheits-Updates. 
              Meine Empfehlung: Nutzung von Auth0 oder Clerk. 
              Ergebnis: Implementiert an einem Nachmittag. Die gesparten 6.000€ flossen in Features, die dem Kunden echten Mehrwert bieten.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. TCO: Die unsichtbaren Kosten</h2>
            <p>
              Wenn wir einen Tech-Stack auswählen, schauen wir oft nur auf die initiale Entwicklung. Aber die <strong>Total Cost of Ownership (TCO)</strong> entsteht in der Wartung.
            </p>
            <ul className="list-none pl-0 space-y-4 my-6">
              <li className="flex gap-4">
                <div className="flex-none rounded-full bg-red-100 p-1">
                  <XMarkIcon className="h-5 w-5 text-red-600" />
                </div>
                <span className="text-gray-700"><strong>Exotische Sprachen:</strong> Cool, aber finden Sie in 2 Jahren Entwickler dafür?</span>
              </li>
              <li className="flex gap-4">
                <div className="flex-none rounded-full bg-blue-100 p-1">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700"><strong>Standard Tech (React/Node/Go):</strong> Ein riesiger Pool an Talenten und Bibliotheken sorgt für langfristige Wartbarkeit.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fazit: Pragmatismus gewinnt</h2>
            <p>
              Gute Architektur ist langweilig. Sie funktioniert einfach. Sie skaliert, wenn es nötig ist, und steht nicht im Weg, wenn schnell Features geliefert werden müssen.
            </p>
            <p>
              Wenn Sie unsicher sind, ob Ihr geplanter Tech-Stack Sie in zwei Jahren ausbremsen wird, lassen Sie uns sprechen. Ein Architektur-Review kostet einen Bruchteil dessen, was ein Refactoring in 12 Monaten kostet.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:pl-8">
             <div className="hidden lg:block">
                <div className="text-sm font-semibold text-gray-900 mb-4 tracking-wider uppercase">Inhalt</div>
                <nav className="space-y-3 border-l border-gray-200 pl-4 mb-12">
                   <a href="#" className="block text-sm text-gray-600 hover:text-purple-600 transition">Microservices Falle</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-purple-600 transition">Build vs. Buy</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-purple-600 transition">Total Cost of Ownership</a>
                   <a href="#" className="block text-sm text-gray-600 hover:text-purple-600 transition">Pragmatismus</a>
                </nav>
             </div>
             
             <AuthorCard />
             
             <div className="mt-12 rounded-2xl bg-gray-50 p-6 border border-gray-100">
               <div className="text-sm font-semibold text-gray-900 mb-4">Beliebte Themen</div>
               <div className="flex flex-wrap gap-2">
                 {['MVP Building', 'Scalability', 'Cost Optimization', 'Legacy Migration', 'Cloud Strategy'].map(tag => (
                   <span key={tag} className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200 shadow-sm">
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

export default function ArchitectureBlog(){
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
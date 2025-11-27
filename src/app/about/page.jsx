import React from 'react'
import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Über mich - Christian',
  description:
    'Software-Entwickler, Gründer und Technik-Enthusiast aus Deutschland',
}

// --- Dynamische Berechnung ---
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
  // DATEN ANPASSEN
  const age = calculateYears('1995-07-02');
  const exp = calculateYears('2017-01-01'); // Startdatum der Karriere

  return (
    <Container className="mt-16 mb-24">
      {/* Überschrift Bereich */}
      <div className="max-w-4xl">
        <Heading as="h1" className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Entwickler mit Leidenschaft für Code, <br className="hidden sm:block" />
          Hardware und Design.
        </Heading>
        <Lead className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Seit mehr als {exp} Jahren arbeite ich als Entwickler und habe meine Neugier für Technologie zum Beruf gemacht. Ich baue Brücken zwischen komplexer Hardware und intuitiver Software.
        </Lead>
      </div>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        {/* Text Bereich - Erweitert */}
        <div className="max-w-xl text-base leading-7 text-gray-600 space-y-8">
          <p>
            Mit <strong>{age} Jahren</strong> blicke ich auf ein abgeschlossenes Studium der Technischen Informatik zurück. 
            Dieses Studium war für mich mehr als nur Theorie es war der Schlüssel, um zu verstehen, was "unter der Haube" passiert. 
            Schon früh entdeckte ich die Faszination, durch Code eigene Ideen zum Leben zu erwecken. Diese Begeisterung treibt mich bis heute an, 
            mich ständig in neue Technologien einzuarbeiten.
          </p>
          <p>
            Beruflich bringe ich nun <strong>{exp} Jahre Erfahrung</strong> als Fullstack-Entwickler primär im Versicherungsbereich mit. 
            In dieser Branche sind Präzision, Datensicherheit und Ausfallsicherheit keine Option, sondern Pflicht. 
            Ich habe gelernt, komplexe Geschäftslogiken in effiziente, benutzerfreundliche Softwarelösungen zu übersetzen, ohne dabei die Performance aus den Augen zu verlieren.
          </p>

          <p>
            Doch Software existiert nicht im luftleeren Raum. Neben der Entwicklung beschäftige ich mich in meiner Freizeit intensiv mit <strong>Low-Level-Hardwareprogrammierung</strong>. 
            Die direkte Interaktion mit Mikrocontrollern und Hardware-Schnittstellen fasziniert mich, da sie mir einen ganzheitlichen Blick auf IT-Systeme ermöglicht.
          </p>

          <p>
             Wenn ich nicht am Computer sitze, finde ich meinen Ausgleich beim Kraftsport. Die Disziplin, die ich dort aufbringe Ziele setzen, kontinuierlich arbeiten, Grenzen verschieben übertrage ich auch auf meine Arbeit. 
             Außerdem teile ich eine große Leidenschaft für Autos und Produktdesign; zwei Welten, in denen Technik und Ästhetik, genau wie in der Softwareentwicklung, perfekt harmonieren müssen.
          </p>
        </div>

        {/* Bilder Grid & Zahlen - Ursprüngliches Design modernisiert */}
        <div className="pt-10 lg:pt-0 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="pt-10 lg:pt-0 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          
          {/* Einzelnes großes Bild */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/10 hover:scale-[1.01] transition-transform duration-500">
            <img
              alt="Profilbild"
              src="/chris.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

          {/* Zahlen Bereich */}
          <div className="mt-2 lg:mt-8 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <Subheading>Erfahrung in Zahlen</Subheading>
            <hr className="mt-6 border-t border-gray-100" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm leading-6 text-gray-500">Jahre Berufserfahrung</dt>
                <dd className="order-first text-5xl font-bold tracking-tight text-gray-900">
                  <AnimatedNumber start={0} end={exp} />+
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm leading-6 text-gray-500">Erfolgreiche Projekte</dt>
                <dd className="order-first text-5xl font-bold tracking-tight text-gray-900">
                  <AnimatedNumber start={10} end={50} />+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Container>
  )
}

function Expertise() {
  return (
    <Container className="mt-32">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <Subheading>Kompetenzen</Subheading>
          <Heading as="h3" className="mt-2">
            Technologie-Stack & Fokus
          </Heading>
        </div>
      </div>
      
      <hr className="mt-8 border-t border-gray-200" />
       <p className="mt-8 md:mt-4 max-w-xl text-base/7 text-gray-600">
          Ein breites Fundament an Wissen ermöglicht mir, die richtigen Werkzeuge für jedes Problem auszuwählen, egal ob im Frontend, Backend oder auf Chipebene.
        </p>
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li className="group">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Fullstack-Entwicklung</h3>
          </div>
          <p className="text-sm/6 text-gray-600">
            Von React und Next.js im Frontend bis hin zu komplexen Node.js oder Python Backends. 
            Ich entwickle End-to-End Lösungen, bei denen Datenbankarchitektur und UI-Design Hand in Hand gehen.
          </p>
        </li>

        <li className="group">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Hardware & Embedded</h3>
          </div>
          <p className="text-sm/6 text-gray-600">
            Die Verbindung zur physischen Welt. Low-Level C++ Programmierung und das Verständnis für Hardware-Architekturen 
            erlauben mir, auch dort Lösungen zu finden, wo reine Software an ihre Grenzen stößt.
          </p>
        </li>

        <li className="group">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Architektur & Qualität</h3>
          </div>
          <p className="text-sm/6 text-gray-600">
            Clean Code und Skalierbarkeit sind für mich keine Schlagworte, sondern tägliche Praxis. 
            Durch Code Reviews, automatisiertes Testing und CI/CD Pipelines sorge ich für langlebige Software.
          </p>
        </li>
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative mt-24 sm:mt-32">
        <Container>
            <div className="relative flex flex-col items-center text-center rounded-[2.5rem] bg-emerald-600 px-6 py-24 sm:px-16 shadow-2xl overflow-hidden">
                {/* Dekorativer Hintergrund */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.emerald.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800 shadow-xl shadow-emerald-600/10 ring-1 ring-indigo-50/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                
                <figure className="max-w-2xl">
                    <p className="text-xl/8 font-medium text-white sm:text-2xl/9">
                    “Die Kombination aus tiefem technischen Verständnis und der Fähigkeit, komplexe Probleme praktisch zu lösen, macht die Zusammenarbeit mit Christian zu einem echten Gewinn für jedes Projekt.”
                    </p>
                    <figcaption className="mt-10">
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">Projektleiter</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-500">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-400">Versicherungsbranche</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </Container>
    </div>
  )
}

function Contact() {
  // Eine modernere Tabelle/Liste, die sauberer aussieht
  return (
    <Container className="my-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_28rem]">
        {/* Linker Text Bereich */}
        <div className="lg:max-w-2xl">
          <Subheading>Zusammenarbeit</Subheading>
          <Heading as="h3" className="mt-2 text-3xl font-bold">
            Bereit für neue Herausforderungen
          </Heading>
          <Lead className="mt-6">
            Egal ob Sie Unterstützung bei der Entwicklung einer neuen Plattform benötigen, 
            Legacy-Code modernisieren wollen oder einen Sparringspartner für technische Entscheidungen suchen ich freue mich auf den Austausch.
          </Lead>
          <p className="mt-8 text-base text-gray-600">
            Schicken Sie mir gerne eine Projektanfrage oder vernetzen Sie sich für einen unverbindlichen Austausch.
          </p>
          <div className="mt-8">
             <Button href="mailto:kontakt@example.com">Kontakt aufnehmen</Button>
          </div>
        </div>

        {/* Rechte Tabelle (Modernisiert) */}
        <div>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-200">
               <h3 className="font-semibold text-gray-900">Aktuelle Kapazitäten</h3>
            </div>
            
            <table className="w-full text-left">
              <colgroup>
                <col className="w-7/12" />
                <col className="w-5/12" />
              </colgroup>
              <tbody className="divide-y divide-gray-100">
                
                {/* Section Header */}
                <tr>
                  <th scope="col" colSpan={2} className="px-6 py-3 bg-gray-50/30 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entwicklung
                  </th>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Fullstack-Entwicklung</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verfügbar</span>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Backend-Architektur</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verfügbar</span>
                  </td>
                </tr>

                {/* Section Header */}
                <tr>
                  <th scope="col" colSpan={2} className="px-6 py-3 bg-gray-50/30 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Consulting
                  </th>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Tech-Stack Beratung</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verfügbar</span>
                  </td>
                </tr>
                <tr className="group hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Code Reviews</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Begrenzt</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Expertise />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
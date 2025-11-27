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
   'Software-Entwickler, Gründer und Technik-Enthusiast aus Deutschland'
}

function Header() {
  return (
    <Container className="mt-16 mb-8">
      <Heading as="h1">Entwickler mit Leidenschaft für Technik, Hardware und Design.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Seit mehr als 8 Jahren arbeite ich als Entwickler und habe meine Leidenschaft für Technologie zum Beruf gemacht.
      </Lead>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <p className="mt-6 text-sm/6 text-gray-600">
            Mit 30 Jahren blicke ich auf ein abgeschlossenes Studium der Technischen Informatik zurück, das mir das Fundament für meine heutige Tätigkeit gegeben hat.
            Meine Faszination für Programmierung reicht weit zurück. Schon früh entdeckte ich die Möglichkeit, durch Code eigene Ideen zum Leben zu erwecken. Diese Begeisterung hat mich durch mein Studium begleitet und ist bis heute ungebrochen.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Beruflich bringe ich 8 Jahre Erfahrung als Fullstack-Entwickler im Versicherungsbereich mit, wo ich meine technischen Fähigkeiten täglich einsetzen und erweitern kann. Die Kombination aus theoretischem Wissen und praktischer Erfahrung ermöglicht es mir, komplexe Probleme zu lösen und effiziente, benutzerfreundliche Softwarelösungen zu entwickeln.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Neben der Softwareentwicklung beschäftige ich mich in meiner Freizeit intensiv mit Low-Level-Hardwareprogrammierung. Die direkte Interaktion mit der Hardware fasziniert mich und bietet mir einen tieferen Einblick in die Funktionsweise von Computersystemen.
            Wenn ich nicht am Computer sitze, findet man mich häufig beim Kraftsport, wo ich den nötigen Ausgleich zur sitzenden Tätigkeit finde. Außerdem teile ich meine Begeisterung für Autos und Design – zwei Bereiche, in denen Technik und Ästhetik auf faszinierende Weise zusammenkommen.
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
          <Subheading>Die Zahlen</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Jahre Erfahrung</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={8} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Projekte</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={50} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Expertise() {
  return (
    <Container className="mt-32">
      <Subheading>Expertise</Subheading>
      <Heading as="h3" className="mt-2">
        Vielseitige Entwicklungskompetenz
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Mit 8 Jahren Berufserfahrung als Fullstack-Entwickler im Versicherungsbereich 
        und fundiertem Wissen in Technischer Informatik entwickle ich durchdachte Lösungen.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Technologien & Bereiche
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <h3 className="text-lg font-semibold">Fullstack-Entwicklung</h3>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Mit umfassender Erfahrung in der Fullstack-Entwicklung erstelle ich 
            komplette Softwarelösungen – von der Benutzeroberfläche bis zur 
            Datenbankarchitektur. Meine Arbeit im Versicherungsbereich hat mir 
            gezeigt, wie wichtig robuste und sichere Anwendungen sind.
          </p>
        </li>
        <li>
          <h3 className="text-lg font-semibold">Hardware-Programmierung</h3>
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Die Low-Level-Programmierung ermöglicht mir die direkte Arbeit mit 
            Hardware-Komponenten. Diese Verbindung zwischen Software und physischer 
            Technik bietet mir tiefe Einblicke in Computersysteme und eröffnet 
            spannende Möglichkeiten für innovative Projekte.
          </p>
        </li>
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
            <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['\201C'] after:absolute after:content-['\201D']">
            Die Kombination aus technischem Verständnis und praktischer Umsetzung 
            macht den Unterschied in jedem Projekt.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Christian</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              Software-Entwickler & Gründer
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Contact() {
  return (
    <Container className="my-32">
      <Subheading>Kontakt</Subheading>
      <Heading as="h3" className="mt-2">
        Lass uns zusammenarbeiten
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Du hast ein spannendes Projekt oder möchtest mehr über meine Arbeit erfahren? 
        Ich freue mich auf den Austausch.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Zusammenarbeit</Subheading>
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
                      Softwareentwicklung
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Fullstack-Entwicklung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend-Entwicklung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Frontend-Entwicklung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Beratung
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Technische Beratung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Projektplanung</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      Anfragen
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Code-Review</td>
                  <td className="px-0 py-4 text-gray-600">Verfügbar</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
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

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  )
}
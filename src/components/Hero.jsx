import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import chrisImage from '@/images/chris.png'
import Image from 'next/image'


export function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-base font-semibold text-emerald-600 mb-4">
                Software-Entwickler, Gründer und Technik-Enthusiast
              </p>
              <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[0.8] md:text-7xl/[0.8]">
                Hi, ich bin Christian
              </h1>
              <p className="mt-6 text-lg/8 text-gray-700">
                Ein Software-Entwickler und Technik-Begeisterter aus Deutschland.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                Mit 29 Jahren und einem abgeschlossenen Studium der Technischen Informatik bringe ich 5 Jahre Berufserfahrung als Fullstack-Entwickler im Versicherungsbereich und in allgemeinen Programmiertätigkeiten mit. Diese vielseitigen Kenntnisse ermöglichen es mir, komplexe Softwarelösungen zu entwickeln, die sowohl effizient als auch benutzerfreundlich sind.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                In meiner Freizeit widme ich mich dem Kraftsport und vertiefe mich in Hardware-Projekte – eine perfekte Balance zwischen körperlicher Aktivität und technischer Kreativität.
              </p>
              <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="#projekte">Meine Projekte</Button>
                <Button variant="secondary" href="#kontakt">
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gray-100 shadow-2xl ring-1 ring-gray-900/10">
                <Image
                    src={chrisImage}
                    alt="Christian"
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element in grün passend zum Logo */}
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

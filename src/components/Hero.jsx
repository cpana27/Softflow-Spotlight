import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import chrisImage from '@/images/chris.png'
import Image from 'next/image'




export function Hero() {

  const calculateYears = (dateString) => {
    const today = new Date();
    const startDate = new Date(dateString);
    
    let years = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    
    // Wenn der Monat noch nicht erreicht ist oder wir im gleichen Monat sind, 
    // aber der Tag noch nicht erreicht ist, ziehen wir ein Jahr ab.
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
      years--;
    }
    
    return years;
  }

      // 1. Dein Geburtsdatum
  const age = calculateYears('1995-07-02');

  // 2. Dein Karrierestart (Datum anpassen!)
  // Damit aktuell "7 Jahre" rauskommt, habe ich hier den 01.01.2018 angenommen.
  // Wenn du z.B. erst im Oktober angefangen hast, ändere das Datum entsprechend.
  const experience = calculateYears('2017-01-01');

  return (
    <div className="relative mt-6">
      <Container className="relative">
        <Navbar />
        <div className="pt-12 mt-10 mb-16 pb-12 sm:pt-8 sm:pb-24 md:pt-32 md:pb-32">
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
                Mit {age} Jahren und einem abgeschlossenen Studium der Technischen Informatik bringe ich {experience} Jahre Berufserfahrung als Fullstack-Entwickler im Versicherungsbereich und in allgemeinen Programmiertätigkeiten mit. Diese vielseitigen Kenntnisse ermöglichen es mir, komplexe Softwarelösungen zu entwickeln, die sowohl effizient als auch benutzerfreundlich sind.
              </p>
              <p className="mt-4 text-base/7 text-gray-600">
                In meiner Freizeit widme ich mich dem Kraftsport und vertiefe mich in Hardware-Projekte – eine perfekte Balance zwischen körperlicher Aktivität und technischer Kreativität.
              </p>
              <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="projekte">Meine Projekte</Button>
                <Button variant="secondary" href="kontakt">
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gray-100 shadow-2xl ring-1 ring-gray-900/10">
                <Image
                    src={chrisImage}
                    alt="Christian"
                    className="h-full w-full object-cover rounded-4xl"
                    fill
                    sizes="(max-width: 768px) 90vw, 50vw"
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

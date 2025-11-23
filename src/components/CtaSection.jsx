import { Heading, Lead, Subheading } from '@/components/text'
import { Button } from '@/components/button'
import { Container } from '@/components/container'


export function CTASection() {
  return (
    <div className="relative overflow-hidden mb-18">
      <Container className="relative">
        <div className="mx-auto max-w-3xl rounded-4xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-16 text-center shadow-2xl ring-1 ring-blue-500/50">
          <Heading as="h2" className="text-white">
            Bereit für Ihr nächstes Projekt?
          </Heading>
          <p className="mt-6 text-lg text-blue-100">
            Lassen Sie uns gemeinsam Ihre Idee in die Realität umsetzen. 
            Egal ob Web-App, Website oder komplexes Backend-System – 
            ich freue mich auf Ihre Anfrage.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#" className="bg-white text-blue-600 hover:bg-gray-50">
              Projekt anfragen
            </Button>
            <Button 
              href="#" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10"
            >
              Kostenlose Beratung
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
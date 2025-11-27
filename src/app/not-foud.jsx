import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export default function NotFound() {
  return (
    <main className="overflow-hidden min-h-screen flex flex-col">
      <GradientBackground />
      
      <Container>
        <Navbar />
      </Container>

      {/* flex-grow sorgt dafür, dass dieser Bereich den verfügbaren Platz einnimmt 
         und den Footer nach unten drückt, falls der Bildschirm hoch ist.
      */}
      <div className="flex-grow flex items-center justify-center">
        <Container className="flex flex-col items-center py-24 sm:py-32 text-center">
          
          <Subheading>404</Subheading>
          
          <Heading as="h1" className="mt-4">
            Seite nicht gefunden
          </Heading>
          
          <Lead className="mt-6 max-w-xl mx-auto">
            Ups! Die Seite, die Sie suchen, existiert nicht mehr, wurde verschoben 
            oder Sie haben sich vielleicht in der URL vertippt.
          </Lead>

          <div className="mt-10">
            <Button href="/" color="cyan" variant="solid">
              Zurück zur Startseite
            </Button>
          </div>

        </Container>
      </div>

      <Footer />
    </main>
  )
}
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Datenschutz',
  description: 'Transparente und moderne Datenschutzerklärung für unsere Beratungs- und Softwaredienstleistungen.'
}

function PrivacyContent() {
  return (
    <Container className="mt-18">
      <section id="privacy" className="scroll-mt-8">
        {/* Header-Sektion im exakten Stil der FAQ */}
        <div className="text-center">
          <Subheading>Rechtliches</Subheading>
          <Heading as="h1" className="mt-2">
            Datenschutzerklärung
          </Heading>
          <Lead className="mx-auto mt-6 max-w-2xl text-center">
            Datenschutz ist für uns nicht nur eine gesetzliche Pflicht, sondern ein wesentlicher Bestandteil unserer Arbeitsphilosophie.
          </Lead>
        </div>

        {/* Content-Bereich: Gleiche Breite (3xl) und Abstände wie FAQ für Konsistenz */}
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          
          <section>
            <h3 className="text-sm font-semibold text-gray-900">1. Verantwortlicher</h3>
            <div className="mt-4 text-sm/6 text-gray-600">
              <p><strong>Softflow</strong></p>
              <p>Christian Pana</p>
              <p>Thomas-Dehler-Weg 7, 51109 Köln</p>
              <p>christian.pana@softflow.dev</p>
              <p>015126968541</p>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">2. Unsere Datenschutz-Grundsätze</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Wir gestalten Beratung und Softwarelösungen nach klaren Datenschutzprinzipien:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm/6 text-gray-600 marker:text-gray-400">
              <li><strong>Datensparsamkeit:</strong> Wir verarbeiten nur Daten, die wirklich notwendig sind.</li>
              <li><strong>Transparenz:</strong> Sie erfahren klar und verständlich, welche Daten genutzt werden.</li>
              <li><strong>Sicherheit:</strong> Wir arbeiten mit modernen Schutzmechanismen wie Verschlüsselung und Zugriffskontrollen.</li>
              <li><strong>Keine Weitergabe:</strong> Daten werden niemals verkauft und nur weitergegeben, wenn es zwingend notwendig oder gesetzlich vorgeschrieben ist.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">3. Welche Daten wir verarbeiten</h3>
            
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900">3.1 Website-Besuch</h4>
                <p className="mt-2 text-sm/6 text-gray-600">
                  Bei jedem Besuch unserer Website werden technisch notwendige Daten automatisch verarbeitet (z.B. IP-Adresse, Browser, Betriebssystem). Dies dient ausschließlich der Sicherheit und Stabilität der Seite.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">3.2 Kontaktaufnahme</h4>
                <p className="mt-2 text-sm/6 text-gray-600">
                  Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir ausschließlich die Daten, die Sie uns mitteilen, um Ihre Anfrage beantworten zu können.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-900">3.3 Kundenprojekte & Beratung</h4>
                <p className="mt-2 text-sm/6 text-gray-600">
                  Im Rahmen von Projekten verarbeiten wir nur die Daten, die für Planung, Umsetzung, Kommunikation und Sicherheit erforderlich sind. Wir speichern alle projektbezogenen Daten geschützt und zugriffsbeschränkt.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">4. Cookies & Analysetools</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Wir setzen ausschließlich technisch notwendige Cookies oder Tools ein, denen Sie ausdrücklich zugestimmt haben. Auf Tracking verzichten wir grundsätzlich, sofern nicht anders angegeben.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">5. Weitergabe von Daten</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Eine Weitergabe Ihrer Daten erfolgt nur, wenn eine gesetzliche Verpflichtung besteht, es technisch zur Projektausführung nötig ist (z. B. Hosting) oder Sie ausdrücklich eingewilligt haben.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">6. Auftragsverarbeitung & Hosting</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Für Hosting, E-Mail und Infrastruktur nutzen wir ausschließlich DSGVO-konforme Anbieter. Mit allen Dienstleistern bestehen Verträge zur Auftragsverarbeitung (AVV).
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">7. Ihre Rechte</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Sie können jederzeit Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten verlangen. Kontaktieren Sie uns dazu einfach unter der oben angegebenen E-Mail-Adresse.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">8. Sicherheit</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Wir nutzen moderne technische und organisatorische Maßnahmen wie Verschlüsselung (SSL/TLS), Zugriffskontrollen, regelmäßige Updates und Monitoring, um Ihre Daten zu schützen.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-900">9. Änderungen</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Diese Datenschutzerklärung wird aktualisiert, wenn sich Prozesse oder gesetzliche Vorgaben ändern.
            </p>
          </section>

        </div>
      </section>
    </Container>
  )
}

export default function Datenschutz() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <PrivacyContent />
      <Footer />
    </main>
  )
}
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Impressum',
  description: 'Rechtliche Anbieterkennzeichnung und Impressum.'
}

function ImpressumContent() {
  return (
    <Container className="mt-18">
      <section id="impressum" className="scroll-mt-8">
        
        {/* Header-Sektion im Stil der FAQ/Datenschutz */}
        <div className="text-center">
          <Subheading>Rechtliche Hinweise</Subheading>
          <Heading as="h1" className="mt-2">
            Impressum
          </Heading>
          <Lead className="mx-auto mt-6 max-w-2xl text-center">
            Anbieterkennzeichnung gemäß § 5 TMG.
          </Lead>
        </div>

        {/* Content-Bereich: Gleiche Breite und Typografie wie Datenschutz */}
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Angaben gemäß § 5 TMG</h3>
            <div className="mt-4 text-sm/6 text-gray-600">
              <p className="font-medium text-gray-900">Christian Pana</p>
              <p>Softflow</p>
              <p>Thomas-Dehler-Weg 7</p>
              <p>51109 Köln</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Kontakt</h3>
            <div className="mt-4 text-sm/6 text-gray-600">
              <p>Telefon: 015126968541</p>
              <p>E-Mail: <a href="mailto:deine-email@example.com" className="text-gray-900 hover:text-gray-600">christian.pana@softflow.dev</a></p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
 
          {/* EU-Streitschlichtung */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">EU-Streitschlichtung</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 text-gray-900 hover:text-gray-700 underline decoration-gray-400 underline-offset-2">
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Verbraucherstreitbeilegung</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Haftung für Inhalte</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis 
              einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Haftung für Links</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte 
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900">Urheberrecht</h3>
            <p className="mt-4 text-sm/6 text-gray-600">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
              erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
              umgehend entfernen.
            </p>
          </section>

        </div>
      </section>
    </Container>
  )
}

export default function Impressum() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ImpressumContent />
      <Footer />
    </main>
  )
}
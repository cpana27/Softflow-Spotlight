// pages/cybersicherheit.jsx
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Cybersicherheit',
  description: 'Professionelle Cybersecurity-Beratung, Sicherheitsanalysen und Aufklärung für moderne Unternehmen.'
}

export default function Cybersicherheit() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      <Container className="mt-20 mb-24 max-w-4xl">
        <Heading as="h1">Cybersicherheit als Dienstleistung</Heading>
        <Lead className="mt-6">
          Digitale Sicherheit ist heute keine Option mehr – sie ist eine Grundvoraussetzung für den Erfolg moderner Unternehmen.
          Ich unterstütze Sie dabei, Angriffe zu verhindern, Risiken zu erkennen und nachhaltige Schutzmaßnahmen aufzubauen.
        </Lead>

        {/* Abschnitt 1 – Einleitung */}
        <section className="mt-20">
          <Subheading>1. Was ich unter moderner Cybersicherheit verstehe</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Cybersicherheit bedeutet nicht nur Software und Firewalls. Es bedeutet Bewusstsein, Prozesse, Technik und die Fähigkeit,
            Angriffe frühzeitig zu erkennen. Ich kombiniere technische Expertise mit praxisnaher Beratung, um Ihnen alle wichtigen
            Bereiche verständlich und greifbar zu machen.
          </p>
        </section>

        {/* Abschnitt 2 – Leistungen */}
        <section className="mt-16">
          <Subheading>2. Meine Cybersecurity-Dienstleistungen</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Die folgenden Services können einzeln oder als modulare Sicherheitsstrategie gebucht werden:
          </p>

          <ul className="mt-6 list-disc pl-6 text-gray-600 text-sm/6 space-y-2">
            <li><strong>Sicherheitsberatung:</strong> Analyse Ihrer aktuellen Lage, Priorisierung von Risiken und klare Handlungsempfehlungen.</li>
            <li><strong>Security Awareness Aufklärung:</strong> Schulungen für Teams, Erkennen von Social Engineering, Schutz vor Phishing.</li>
            <li><strong>Technische Sicherheitsanalysen:</strong> Prüfung von Systemen, Geräten, Software und Netzwerken.</li>
            <li><strong>Code- & Architektur-Reviews:</strong> Identifikation sicherheitsrelevanter Schwachstellen in Softwareprojekten.</li>
            <li><strong>Incident Unterstützung:</strong> Erste Maßnahmen, Schadensbegrenzung und Recovery nach sicherheitsrelevanten Vorfällen.</li>
          </ul>
        </section>

        {/* Abschnitt 3 – Arbeitsweise */}
        <section className="mt-16">
          <Subheading>3. Mein Ansatz für nachhaltige Sicherheit</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Gute Sicherheit ist kein Produkt – sie ist ein Prozess. Darum orientiere ich mich an modernen Standards wie Zero-Trust,
            kontinuierlicher Überwachung und klaren Entscheidungswegen.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 text-sm/6 space-y-1">
            <li><strong>Verständlichkeit:</strong> Alle Sicherheitskonzepte werden klar erklärt.</li>
            <li><strong>Praxisorientierte Umsetzung:</strong> Keine theoretischen Lösungen ohne Nutzen.</li>
            <li><strong>Datensparsamkeit:</strong> Weniger Daten bedeuten automatisch mehr Sicherheit.</li>
            <li><strong>State-of-the-Art Methoden:</strong> Moderne Verschlüsselung, sichere Softwareentwicklung und robuste Prozesse.</li>
          </ul>
        </section>

        {/* Abschnitt 4 – Zielgruppen */}
        <section className="mt-16">
          <Subheading>4. Für wen eignet sich meine Cybersecurity-Beratung?</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Meine Dienstleistungen richten sich an jede Organisation, die ihren Sicherheitsstatus verbessern möchte – unabhängig von Größe und Branche.
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600 text-sm/6 space-y-1">
            <li>Unternehmen, die ihre IT modernisieren möchten</li>
            <li>Teams, die Wissen über digitale Gefahren benötigen</li>
            <li>Softwareentwickler, die sichere Produkte bauen wollen</li>
            <li>Privatkunden, die ihr digitales Umfeld besser schützen möchten</li>
          </ul>
        </section>

        {/* Abschnitt 5 – Ablauf */}
        <section className="mt-16">
          <Subheading>5. So läuft die Zusammenarbeit ab</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Der Prozess ist klar, strukturiert und effizient:
          </p>

          <ol className="mt-4 list-decimal pl-6 text-gray-600 text-sm/6 space-y-1">
            <li>Unverbindliches Erstgespräch</li>
            <li>Analyse der aktuellen Sicherheitslage</li>
            <li>Planung individueller Maßnahmen</li>
            <li>Umsetzung & Schulung</li>
            <li>Optional: fortlaufende Betreuung</li>
          </ol>
        </section>

        {/* Abschnitt 6 – Kontakt */}
        <section className="mt-16">
          <Subheading>6. Kontakt</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Für Fragen oder eine Beratung schreiben Sie gerne an: <strong>[E-Mail einfügen]</strong>
          </p>
        </section>
      </Container>

      <Footer />
    </main>
  )
}
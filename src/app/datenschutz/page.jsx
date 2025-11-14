// pages/datenschutz.jsx
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Datenschutz',
  description: 'Transparente und moderne Datenschutzerklärung für unsere Beratungs- und Softwaredienstleistungen.'
}

export default function Datenschutz() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      <Container className="mt-20 mb-24 max-w-4xl">
        <Heading as="h1">Datenschutz</Heading>
        <Lead className="mt-6">
          Datenschutz ist für uns nicht nur eine gesetzliche Pflicht, sondern ein wesentlicher Bestandteil unserer Arbeitsphilosophie.
          Als Unternehmen für Beratung und Softwareentwicklung behandeln wir alle Daten mit höchster Sorgfalt und Verantwortung.
        </Lead>

        {/* Abschnitt 1 – Verantwortlicher */}
        <section className="mt-20">
          <Subheading>1. Verantwortlicher</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            <strong>[Dein Unternehmensname]</strong><br />
            [Adresse]<br />
            [E-Mail]<br />
            [Telefon]
          </p>
        </section>

        {/* Abschnitt 2 – Grundprinzipien */}
        <section className="mt-16">
          <Subheading>2. Unsere Datenschutz-Grundsätze</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Wir gestalten Beratung und Softwarelösungen nach klaren Datenschutzprinzipien:
          </p>
          <ul className="mt-4 list-disc pl-6 text-gray-600 text-sm/6 space-y-2">
            <li><strong>Datensparsamkeit:</strong> Wir verarbeiten nur Daten, die wirklich notwendig sind.</li>
            <li><strong>Transparenz:</strong> Sie erfahren klar und verständlich, welche Daten genutzt werden.</li>
            <li><strong>Sicherheit:</strong> Wir arbeiten mit modernen Schutzmechanismen wie Verschlüsselung und Zugriffskontrollen.</li>
            <li><strong>Keine Weitergabe:</strong> Daten werden niemals verkauft und nur weitergegeben, wenn es zwingend notwendig oder gesetzlich vorgeschrieben ist.</li>
          </ul>
        </section>

        {/* Abschnitt 3 – Datenkategorien */}
        <section className="mt-16">
          <Subheading>3. Welche Daten wir verarbeiten</Subheading>

          <h3 className="mt-6 font-semibold text-gray-800 text-base">3.1 Website-Besuch</h3>
          <p className="mt-2 text-gray-600 text-sm/6">
            Bei jedem Besuch unserer Website werden technisch notwendige Daten automatisch verarbeitet:
          </p>
          <ul className="mt-2 list-disc pl-6 text-gray-600 text-sm/6 space-y-1">
            <li>IP-Adresse (gekürzt oder nur temporär verarbeitet)</li>
            <li>Browsertyp und Version</li>
            <li>Betriebssystem</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Referrer-URL</li>
          </ul>

          <h3 className="mt-8 font-semibold text-gray-800 text-base">3.2 Kontaktaufnahme</h3>
          <p className="mt-2 text-gray-600 text-sm/6">
            Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir ausschließlich die Daten, die Sie uns mitteilen, um Ihre Anfrage beantworten zu können.
          </p>

          <h3 className="mt-8 font-semibold text-gray-800 text-base">3.3 Kundenprojekte & Beratung</h3>
          <p className="mt-2 text-gray-600 text-sm/6">
            Im Rahmen von Projekten verarbeiten wir nur die Daten, die für Planung, Umsetzung, Kommunikation und Sicherheit erforderlich sind.
            Wir speichern alle projektbezogenen Daten geschützt und zugriffsbeschränkt.
          </p>
        </section>

        {/* Abschnitt 4 – Cookies */}
        <section className="mt-16">
          <Subheading>4. Cookies & Analysetools</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Wir setzen ausschließlich technisch notwendige Cookies oder Tools ein, denen Sie ausdrücklich zugestimmt haben.
            Auf Tracking verzichten wir grundsätzlich, sofern nicht anders angegeben.
          </p>
        </section>

        {/* Abschnitt 5 – Weitergabe */}
        <section className="mt-16">
          <Subheading>5. Weitergabe von Daten</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Eine Weitergabe Ihrer Daten erfolgt nur, wenn:
          </p>
          <ul className="mt-2 list-disc pl-6 text-gray-600 text-sm/6 space-y-1">
            <li>eine gesetzliche Verpflichtung besteht</li>
            <li>es technisch zur Projektausführung nötig ist (z. B. Hosting)</li>
            <li>Sie ausdrücklich eingewilligt haben</li>
          </ul>
        </section>

        {/* Abschnitt 6 – Auftragsverarbeitung */}
        <section className="mt-16">
          <Subheading>6. Auftragsverarbeitung & Hosting</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Für Hosting, E-Mail und Infrastruktur nutzen wir ausschließlich DSGVO-konforme Anbieter.
            Mit allen Dienstleistern bestehen Verträge zur Auftragsverarbeitung (AVV).
          </p>
        </section>

        {/* Abschnitt 7 – Rechte */}
        <section className="mt-16">
          <Subheading>7. Ihre Rechte</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Sie können jederzeit folgende Rechte ausüben:
          </p>
          <ul className="mt-2 list-disc pl-6 text-gray-600 text-sm/6 space-y-1">
            <li>Auskunft über gespeicherte Daten</li>
            <li>Berichtigung falscher Daten</li>
            <li>Löschung (Recht auf Vergessenwerden)</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen Verarbeitung</li>
            <li>Widerruf erteilter Einwilligungen</li>
          </ul>
          <p className="mt-4 text-gray-600 text-sm/6">Kontakt: <strong>[E-Mail einfügen]</strong></p>
        </section>

        {/* Abschnitt 8 – Sicherheit */}
        <section className="mt-16">
          <Subheading>8. Sicherheit</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Wir nutzen moderne technische und organisatorische Maßnahmen wie Verschlüsselung, Zugriffskontrollen, regelmäßige Updates und Monitoring,
            um Ihre Daten zu schützen. Sicherheit ist fester Bestandteil unserer Softwareentwicklung.
          </p>
        </section>

        {/* Abschnitt 9 – Änderungen */}
        <section className="mt-16">
          <Subheading>9. Änderungen</Subheading>
          <p className="mt-4 text-gray-600 text-sm/6">
            Diese Datenschutzerklärung wird aktualisiert, wenn sich Prozesse oder gesetzliche Vorgaben ändern.
          </p>
        </section>
      </Container>

      <Footer />
    </main>
  )
}
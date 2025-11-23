import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Softflow - Cybersicherheit und Prävention'
}

function Header() {
  return (
    <Container className="mt-16 mb-24">
    </Container>
  )
}

function WorkInProgressSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 mb-8 animate-pulse">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        
        <Subheading className="mb-4">In Entwicklung</Subheading>
        <Heading as="h2" className="mb-6">
          Bald verfügbar
        </Heading>
        <Lead className="text-gray-600 mb-12">
          Wir arbeiten an einer ganzheitlichen Cybersicherheitslösung mit Schwerpunkt auf Prävention, Risikomanagement und Incident Response für Ihr Unternehmen.
        </Lead>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              <AnimatedNumber start={0} end={24} />/<AnimatedNumber start={0} end={7} />
            </div>
            <p className="text-sm text-gray-600">Monitoring & Support</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              <AnimatedNumber start={0} end={99} />.<AnimatedNumber start={0} end={9} />%
            </div>
            <p className="text-sm text-gray-600">Bedrohungserkennung</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              &lt;<AnimatedNumber start={0} end={15} />min
            </div>
            <p className="text-sm text-gray-600">Reaktionszeit</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-red-100">
          <Subheading className="mb-4 text-emerald-900">Geplante Services</Subheading>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">Penetrationstests & Vulnerability Assessments</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">Security Awareness Training</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">Incident Response & Forensik</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">Compliance & Datenschutz (DSGVO)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">Sicherheitsarchitektur & Beratung</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700">24/7 Security Operations Center</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Interessiert an unseren Cybersicherheitslösungen? Lassen Sie sich benachrichtigen!
          </p>
          <Button href="/kontakt">
            Frühzeitigen Zugang sichern
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Cybersecurity() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <WorkInProgressSection />
      <Footer />
    </main>
  )
}
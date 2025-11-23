import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Softflow - Maßgeschneiderte Softwarelösung und Beratung'
}

function WorkInProgressSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 mb-8 animate-pulse">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        
        <Subheading className="mb-4">In Entwicklung</Subheading>
        <Heading as="h2" className="mb-6">
          Bald verfügbar
        </Heading>
        <Lead className="text-gray-600 mb-12">
          Ich entwickeln gerade eine umfassende Webinar-Plattform mit exklusiven Inhalten zu den Themen Softwareentwicklung, KI-Integration und digitale Transformation.
        </Lead>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              <AnimatedNumber start={0} end={10} />+
            </div>
            <p className="text-sm text-gray-600">Geplante Webinare</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              <AnimatedNumber start={0} end={2} />+
            </div>
            <p className="text-sm text-gray-600">Experten-Referenten</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 backdrop-blur border border-gray-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              <AnimatedNumber start={0} end={20} />+
            </div>
            <p className="text-sm text-gray-600">Stunden Content</p>
          </div>
        </div>
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
      <WorkInProgressSection></WorkInProgressSection>
      <Footer />
    </main>
  )
}

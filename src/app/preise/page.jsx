import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Preise – Fullstack Development',
  description:
    'Agentur-Qualität zu Freelancer-Konditionen. Transparente Preise für moderne Web-Apps, MVPs und professionelle Websites.',
}

const services = [
  {
    category: 'Development',
    icon: '⚡',
    items: [
      'Web Apps & Progressive Web Apps',
      'Corporate Websites & Landing Pages',
      'E-Commerce & Shop-Systeme',
      'Dashboards & Admin-Panels',
      'REST APIs & GraphQL Backends',
      'Datenbank-Design & -Migration',
      'Cloud-Deployment & DevOps',
      'Legacy-Code Modernisierung',
    ],
  },
  {
    category: 'Consulting & Architektur',
    icon: '🎯',
    items: [
      'Tech-Stack Beratung & Evaluation',
      'System-Architektur & Design',
      'Code Reviews & Quality Audits',
      'Performance-Optimierung',
      'Security & Penetration Testing',
      'Cloud-Strategie (AWS, Azure, GCP)',
      'CI/CD Pipeline Setup',
      'Team-Training & Workshops',
    ],
  },
  {
    category: 'Spezialisierungen',
    icon: '🚀',
    items: [
      'React, Next.js, TypeScript',
      'Node.js, Express, NestJS',
      'PostgreSQL, MongoDB, Redis',
      'Docker, Kubernetes, Terraform',
      'Stripe, PayPal Integration',
      'Auth0, JWT, OAuth',
      'Websockets & Real-time Apps',
      'Microservices Architecture',
    ],
  },
]

const tiers = [
  {
    name: 'Quick Start',
    slug: 'quick-start',
    description: 'Der perfekte Einstieg – kennenlernen ohne Risiko.',
    price: 490,
    priceLabel: 'Einmalig',
    href: '#',
    badge: 'Beliebt',
    highlights: [
      { description: 'Umfassender Code Review' },
      { description: 'Security & Vulnerability Scan' },
      { description: 'Tech-Stack Analyse (2 Std.)' },
      { description: 'Architektur-Feedback' },
      { description: 'Detaillierte Handlungsempfehlungen' },
      { description: 'Follow-up Video Call' },
    ],
    features: [
      { section: 'Leistungen', name: 'Code Review', value: true },
      { section: 'Leistungen', name: 'Security Audit', value: true },
      { section: 'Leistungen', name: 'Beratungsstunden', value: '2 Std.' },
      { section: 'Leistungen', name: 'Implementierung', value: false },
      { section: 'Support', name: 'E-Mail Support', value: true },
      { section: 'Support', name: 'Follow-up Call', value: true },
      { section: 'Zeitrahmen', name: 'Lieferzeit', value: '3-5 Tage' },
    ],
  },
  {
    name: 'Professional Web',
    slug: 'professional-web',
    description: 'Moderne Websites mit Premium-Performance.',
    price: 3200,
    priceLabel: 'Ab',
    href: '#',
    badge: 'Empfohlen',
    highlights: [
      { description: 'React/Next.js Frontend mit TypeScript' },
      { description: 'SEO-optimiert & Core Web Vitals' },
      { description: 'Headless CMS Integration (Sanity/Strapi)' },
      { description: 'Responsive & Mobile-First Design' },
      { description: 'Analytics & Tracking Setup' },
      { description: '2 Monate kostenloser Support' },
    ],
    features: [
      { section: 'Leistungen', name: 'Code Review', value: true },
      { section: 'Leistungen', name: 'Security Audit', value: true },
      { section: 'Leistungen', name: 'Beratungsstunden', value: 'Inklusive' },
      { section: 'Leistungen', name: 'Implementierung', value: 'Komplett' },
      { section: 'Support', name: 'E-Mail Support', value: true },
      { section: 'Support', name: 'Follow-up Call', value: true },
      { section: 'Zeitrahmen', name: 'Lieferzeit', value: '2-4 Wochen' },
    ],
  },
  {
    name: 'MVP Launch',
    slug: 'mvp-launch',
    description: 'Von der Idee zur lauffähigen Web-App.',
    price: 11500,
    priceLabel: 'Ab',
    href: '#',
    badge: 'Enterprise',
    highlights: [
      { description: 'Fullstack Web-App (React + Node.js)' },
      { description: 'RESTful API oder GraphQL Backend' },
      { description: 'PostgreSQL/MongoDB Datenbank' },
      { description: 'User Authentication & Authorization' },
      { description: 'Cloud-Deployment & CI/CD' },
      { description: 'Admin-Dashboard inklusive' },
      { description: '3 Monate Support & Updates' },
    ],
    features: [
      { section: 'Leistungen', name: 'Code Review', value: true },
      { section: 'Leistungen', name: 'Security Audit', value: true },
      { section: 'Leistungen', name: 'Beratungsstunden', value: 'Unbegrenzt' },
      { section: 'Leistungen', name: 'Implementierung', value: 'Komplett' },
      { section: 'Support', name: 'E-Mail Support', value: true },
      { section: 'Support', name: 'Follow-up Call', value: true },
      { section: 'Zeitrahmen', name: 'Lieferzeit', value: '6-10 Wochen' },
    ],
  },
]

const hourlyRates = [
  {
    title: 'Fullstack Development',
    rate: '75-90',
    market: '100-140',
    description: 'React, Node.js, Datenbanken, APIs',
    badge: 'Standard',
  },
  {
    title: 'Senior Consulting',
    rate: '95-110',
    market: '160-250',
    description: 'Architektur, Security, Cloud-Strategie',
    badge: 'Premium',
  },
]

const retainerOptions = [
  {
    name: 'Essential',
    price: 150,
    market: '250-350',
    features: [
      'Security Updates & Patches',
      'Server Monitoring & Uptime',
      'Backup Management',
      'Bug Fixes (bis 2 Std./Monat)',
      'E-Mail Support',
    ],
  },
  {
    name: 'Professional',
    price: 250,
    market: '400-500',
    features: [
      'Alles aus Essential',
      'Feature Updates & Anpassungen',
      'Performance-Optimierung',
      'Erweiterte Analysen',
      'Bis 5 Std. Development/Monat',
      'Priority Support',
    ],
  },
]

function Header() {
  return (
    <Container className="mt-28">
      <Heading as="h1">Agentur-Qualität zu Freelancer-Konditionen</Heading>
      <Lead className="mt-6 max-w-xl">
        Fullstack-Entwicklung von Apps, Websites bis komplexe Web-Anwendungen. 
        Direkter Kontakt zum Experten, moderne Tech-Stacks und faire Preise – 
        ohne Agentur-Overhead.
      </Lead>
    </Container>
  )
}

function ServicesOverview() {
  return (
    <div className="relative py-24">
      <Container>
        <Subheading className="text-center">Mein Leistungsspektrum</Subheading>
        <Heading as="div" className="mt-2 mb-12 text-center">
          Von der Idee bis zum Launch – alles aus einer Hand
        </Heading>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-8 shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:ring-black/10"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-950">
                {service.category}
              </h3>
              <ul className="mt-6 space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCards() {
  return (
    <div className="relative bg-gray-50 py-24">
      <Container className="relative">
        <Subheading className="text-center">Projekt-Pakete</Subheading>
        <Heading as="div" className="mt-2 mb-12 text-center">
          Der richtige Einstieg für jedes Ziel
        </Heading>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="relative -m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              {tier.price.toLocaleString('de-DE')}€
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>{tier.priceLabel}</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href} className="w-full">
              Jetzt anfragen
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Inklusive:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function HourlyRatesSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Stundensätze & Beratung</Subheading>
      <Heading as="div" className="mt-2 mb-12 text-center">
        Flexibel für individuelle Anforderungen
      </Heading>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {hourlyRates.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5 transition hover:shadow-xl"
          >
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {item.badge}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-950">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-950">
                {item.rate}€
              </span>
              <span className="text-sm text-gray-500">/ Stunde</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-gray-500">Marktüblich:</span>
              <span className="text-sm font-medium text-gray-400 line-through">
                {item.market}€
              </span>
              <span className="ml-auto text-sm font-semibold text-green-600">
                Ersparnis bis zu {Math.round(((parseInt(item.market.split('-')[1]) - parseInt(item.rate.split('-')[1])) / parseInt(item.market.split('-')[1])) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          <strong>Direkter Expertenkontakt:</strong> Sie zahlen nicht für 
          Projektmanager oder Kommunikationswege – nur für qualitative Entwicklung.
        </p>
      </div>
    </Container>
  )
}

function RetainerSection() {
  return (
    <div className="relative bg-gray-900 py-24">
      <div className="absolute inset-0 bg-[url(/dot-texture.svg)] opacity-40" />
      <Container className="relative">
        <Subheading className="text-center text-gray-400">
          Wartung & Support
        </Subheading>
        <Heading as="div" className="mt-2 mb-12 text-center text-white">
          Langfristig sorgenfrei
        </Heading>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {retainerOptions.map((option, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/10 p-8 shadow-xl ring-1 ring-white/20 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {option.name}
                </h3>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  {option.price}€
                </span>
                <span className="text-sm text-gray-400">/ Monat</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="text-gray-400">Marktüblich:</span>
                <span className="font-medium text-gray-500 line-through">
                  {option.market}€
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="outline" href="#" className="w-full border-white/20 text-white hover:bg-white/10">
                  Details anfordern
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ValueProposition() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading className="text-center">Warum diese Preise?</Subheading>
          <Heading as="div" className="mt-2 mb-12 text-center">
            Smart Efficiency statt Agentur-Overhead
          </Heading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8">
              <h3 className="text-lg font-semibold text-gray-950">
                🎯 Single Point of Contact
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Keine Stille Post zwischen Kundenberater, Projektmanager und 
                Entwickler. Sie kommunizieren direkt mit mir – das spart Zeit, 
                Missverständnisse und Kosten.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 p-8">
              <h3 className="text-lg font-semibold text-gray-950">
                ⚡ Fullstack-Vorteil
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Von der Datenbank über das Backend bis zum Frontend – ich 
                setze Features vertikal um. Keine Übergaben, keine 
                Reibungsverluste, schnellere Ergebnisse.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 p-8">
              <h3 className="text-lg font-semibold text-gray-950">
                🚀 Moderne Tech-Stacks
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                React, Node.js und moderne Cloud-Infrastruktur ermöglichen 
                effizientere Entwicklung. Was früher Wochen dauerte, ist heute 
                in Tagen umsetzbar – ohne Qualitätsverlust.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 p-8">
              <h3 className="text-lg font-semibold text-gray-950">
                💡 Keine versteckten Kosten
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Kein Büro, keine Vertriebsabteilung, kein Marketing-Team. 
                Diese Einsparungen gebe ich direkt an meine Kunden weiter – 
                bei gleicher Qualität.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <Subheading className="mb-8 text-center">
        Detaillierter Leistungsvergleich
      </Subheading>
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Anfragen
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Anfragen
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon className="size-4 shrink-0 fill-green-600" />
      </span>
      {disabled && <span className="sr-only">Nicht enthalten:</span>}
      {description}
    </li>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Häufig gestellte Fragen
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Transparenz von Anfang an
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              Warum sind Ihre Preise günstiger als bei Agenturen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Sie zahlen bei mir nicht für Overhead, Projektmanager oder 
              Kommunikationswege. Als Fullstack-Entwickler setze ich Ihr 
              Projekt von der Datenbank bis zum Frontend komplett selbst um – 
              das spart Zeit und Kosten. Moderne Tech-Stacks wie React und 
              Node.js ermöglichen mir zudem eine effizientere Entwicklung. 
              Keine Büros, keine Vertriebsabteilungen – nur pure Entwicklungsleistung.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Welche Projekte können Sie umsetzen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Von einfachen Landing Pages über komplexe E-Commerce-Plattformen 
              bis hin zu vollständigen SaaS-Anwendungen. Ich entwickle moderne 
              Web-Apps, Progressive Web Apps, REST/GraphQL APIs, Dashboards, 
              Admin-Panels und integriere Payment-Systeme. Auch Legacy-Code 
              Modernisierung, Datenbank-Migrationen und Backend-Erweiterungen 
              gehören zu meinem Alltag.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Was beinhaltet Ihre Beratungsleistung?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Meine Consulting-Services umfassen Tech-Stack Evaluation, 
              System-Architektur Design, Code Reviews, Security Audits, 
              Performance-Optimierung, Cloud-Strategie (AWS, Azure, GCP), 
              CI/CD Pipeline Setup und Team-Training. Ich helfe bei der 
              Entscheidungsfindung für neue Projekte, evaluiere bestehende 
              Systeme und gebe konkrete Handlungsempfehlungen für Skalierung, 
              Security und moderne Best Practices.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Wie läuft die Zusammenarbeit ab?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Direkter und persönlicher Kontakt ist mein Prinzip. Sie 
              kommunizieren nur mit mir – kein Durchreichen an verschiedene 
              Abteilungen. Nach einem Erstgespräch erstelle ich ein Angebot, 
              das genau auf Ihre Anforderungen zugeschnitten ist. Während der 
              Entwicklung bleiben Sie durch regelmäßige Updates immer auf dem 
              Laufenden. Ich arbeite agil und liefere in kurzen Iterationen.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Welche Technologien setzen Sie ein?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Mein Fokus liegt auf modernen, bewährten Technologien: React, 
              Next.js und TypeScript für Frontends, Node.js, Express und NestJS 
              für Backend-APIs, PostgreSQL, MongoDB und Redis für Datenbanken. 
              Für das Hosting nutze ich moderne Cloud-Plattformen wie Vercel, 
              AWS, Railway oder DigitalOcean. DevOps mit Docker, CI/CD Pipelines 
              und Infrastructure as Code gehören zum Standard.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Was passiert nach dem Launch?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Jedes Projekt beinhaltet eine Support-Phase nach dem Launch. 
              Für langfristige Betreuung biete ich Wartungspakete an, die 
              Updates, Security Patches, Monitoring und kleinere Anpassungen 
              abdecken. Sie entscheiden selbst, ob Sie laufenden Support 
              benötigen oder lieber punktuell auf Stundenbasis arbeiten möchten.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Können Sie auch bestehende Projekte übernehmen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Ja, auf jeden Fall. Mit dem Quick Start Paket biete ich einen 
              Code Review und Security-Check an – ideal, um den Zustand Ihres 
              Projekts zu bewerten. Danach kann ich gezielt Verbesserungen 
              vornehmen, Features hinzufügen, Performance optimieren oder das 
              gesamte Projekt modernisieren. Auch Legacy-Code Migrationen zu 
              modernen Tech-Stacks sind möglich.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Bieten Sie auch Backend-Entwicklung und Datenbank-Design an?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Absolut. Als Fullstack-Entwickler decke ich die komplette 
              Anwendungsarchitektur ab: RESTful und GraphQL APIs, 
              Microservices, Datenbank-Design und -Optimierung, Authentication 
              & Authorization, Payment-Integration (Stripe, PayPal), 
              Websockets für Real-time Features, Cloud-Deployment und 
              Serverless Functions. Ich entwickle skalierbare Backend-Systeme, 
              die mit Ihrem Business wachsen.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Wie stellen Sie die Sicherheit meiner Anwendung sicher?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Security ist bei jedem Projekt von Anfang an integriert. Ich 
              implementiere sichere Authentication (OAuth, JWT), verschlüsselte 
              Datenübertragung (HTTPS, TLS), Input-Validierung, SQL-Injection 
              Prevention, XSS-Protection und CORS-Policies. Bei Bedarf führe ich 
              auch dedizierte Security Audits und Penetration Tests durch. 
              Regelmäßige Dependency Updates und Security Patches gehören zum 
              Standard-Wartungspaket.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Arbeiten Sie auch mit meinem bestehenden Team zusammen?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Ja, sehr gerne. Ich kann als externer Fullstack-Entwickler 
              zeitweise Ihr Team verstärken, Code Reviews durchführen, 
              Pair-Programming Sessions leiten oder Workshops zu modernen 
              Entwicklungs-Praktiken geben. Auch als technischer Berater für 
              strategische Entscheidungen stehe ich zur Verfügung. Die 
              Zusammenarbeit ist flexibel – remote oder vor Ort (DACH-Region).
              </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing({ searchParams }) {
  let params = await searchParams
  let tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <ServicesOverview />
      <PricingCards />
      <HourlyRatesSection />
      <RetainerSection />
      <ValueProposition />
      <PricingTable selectedTier={tier} />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
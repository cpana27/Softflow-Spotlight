'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'
import Solarwelt from "@/images/solarwelt.png"


const projects = [
  {
    img: '/solarwelt.png',
    company: 'Solarwelt GmbH',
    industry: 'Photovoltaik Anlagen',
    description:
      'Entwicklung eines interaktiven PV-Konfigurators mit React zur Lead-Generierung. Anbindung an das interne CRM-System und Performance-Optimierung für mobile Endgeräte.',
  },
  {
    img: '/dreibrueder.png',
    company: 'Drei Brüder Friseur',
    industry: 'Friseur Salon',
    description:
      'Design und Umsetzung eines modernen Webauftritts mit Fokus auf Local SEO. Integration eines digitalen Terminbuchungssystems zur Automatisierung der Kundenverwaltung.',
  },
  {
    img:  '/saas.png',
    company: 'MedTech Solutions',
    industry: 'SaaS-Startup',
    description:
      'Aufbau eines skalierbaren B2B-Dashboards zur Datenvisualisierung. Implementierung einer sicheren Multi-Tenant-Architektur und REST-APIs für medizinische Daten.',
  },
  {
    img: '/web.png',
    company: 'LogisticPro',
    industry: 'Unternehmenswebsite',
    description:
      'Relaunch der Corporate Website mit Next.js für maximale Ladegeschwindigkeit. Integration eines Headless CMS (Sanity) für die eigenständige Content-Pflege durch den Kunden.',
  },
  /*{
    img: '/projects/saas-project.jpg',
    company: 'StartupXYZ',
    industry: 'SaaS',
    description:
      'Full-Stack Entwicklung einer B2B-Plattform mit TypeScript, React und Node.js. CI/CD-Pipeline und Cloud-Deployment mit Docker.',
  },
  {
    img: '/projects/iot-project.jpg',
    company: 'SmartHome Tech',
    industry: 'IoT',
    description:
      'Native Android-App mit Kotlin für Smart-Home-Steuerung. WebSocket-Integration für Echtzeit-Kommunikation mit IoT-Geräten.',
  },*/
]

function ProjectCard({
  company,
  industry,
  img,
  children,
  bounds,
  scrollX,
  ...props
}) {
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            {children}
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{company}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {industry}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Gemeinsam entwickeln wir maßgeschneiderte Software-Lösungen für dein Business. 
        Lass uns über dein nächstes Projekt sprechen.
      </p>
      <div className="mt-2">
        <Link
          href="kontakt"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-emerald-600"
        >
          Projekt anfragen
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Projects() {
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Referenzen</Subheading>
          <Heading as="h3" className="mt-2">
            Erfolgreiche Projekte & Beratungen.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {projects.map(({ img, company, industry, description }, projectIndex) => (
          <ProjectCard
            key={projectIndex}
            company={company}
            industry={industry}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(projectIndex)}
          >
            {description}
          </ProjectCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {projects.map(({ company }, projectIndex) => (
              <Headless.Button
                key={projectIndex}
                onClick={() => scrollTo(projectIndex)}
                data-active={
                  activeIndex === projectIndex ? true : undefined
                }
                aria-label={`Scroll to project for ${company}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-emerland-300 transition',
                  'data-active:bg-emerland-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
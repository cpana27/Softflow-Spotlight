import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

import Port from '@/images/mailand.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function CodeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )
}

function WorkoutIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 5v14"></path>
      <path d="M18 5v14"></path>
      <path d="M2 8h4"></path>
      <path d="M2 16h4"></path>
      <path d="M18 8h4"></path>
      <path d="M18 16h4"></path>
      <path d="M6 9h12"></path>
      <path d="M6 15h12"></path>
    </svg>
  )
}

function ChipIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
      <path d="M8 3v4"></path>
      <path d="M16 3v4"></path>
      <path d="M8 21v-4"></path>
      <path d="M16 21v-4"></path>
      <path d="M3 8h4"></path>
      <path d="M17 8h4"></path>
      <path d="M3 16h4"></path>
      <path d="M17 16h4"></path>
      <path d="M9 9h6"></path>
      <path d="M9 15h6"></path>
      <path d="M9 12h6"></path>
    </svg>
  )
}

function CarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.2-.9-1.9-1L9 6c-1.2 0-2.2.9-2.3 2.1L6.6 9c-.3.7-.6 1.3-.8 2-.2.6-.3 1.3-.3 1.9M19 17H5c-.6 0-1-.4-1-1v-1.1c0-1.5.4-2.9 1.2-4.2"></path>
      <circle cx="7.5" cy="17.5" r="2.5"></circle>
      <circle cx="16.5" cy="17.5" r="2.5"></circle>
    </svg>
  )
}

function DesignIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
      <path d="M2 2l7.586 7.586"></path>
      <circle cx="11" cy="11" r="2"></circle>
    </svg>
  )
}

export const metadata = {
  title: 'Über Mich',
  description: 'Entwickler mit Leidenschaft für Technik, Hardware und Design.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={Port}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Entwickler mit Leidenschaft für Technik, Hardware und Design.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Seit mehr als 5 Jahren arbeite ich als Entwickler und habe meine
              Leidenschaft für Technologie zum Beruf gemacht. Mit 29 Jahren
              blicke ich auf ein Studium der Technischen Informatik zurück, das
              mir das Fundament für meine heutige Tätigkeit gegeben hat.
            </p>
            <p>
              Meine Faszination für Programmierung reicht weit zurück. Schon
              früh entdeckte ich die Möglichkeit, durch Code eigene Ideen zum
              Leben zu erwecken. Diese Begeisterung hat mich durch mein Studium
              begleitet und ist bis heute ungebrochen.
            </p>
            <p>
              Beruflich bin ich in Vollzeit als Entwickler tätig, wo ich meine
              technischen Fähigkeiten täglich einsetzen und erweitern kann. Die
              Kombination aus theoretischem Wissen und praktischer Erfahrung
              ermöglicht es mir, komplexe Probleme zu lösen und innovative
              Lösungen zu entwickeln.
            </p>
            <p>
              Neben der Softwareentwicklung beschäftige ich mich in meiner
              Freizeit intensiv mit Low-Level-Hardwareprogrammierung. Die
              direkte Interaktion mit der Hardware fasziniert mich und bietet
              mir einen tieferen Einblick in die Funktionsweise von
              Computersystemen.
            </p>
            <p>
              Wenn ich nicht am Computer sitze, findet man mich häufig beim
              Kraftsport, wo ich den nötigen Ausgleich zur sitzenden Tätigkeit
              finde. Außerdem teile ich meine Begeisterung für Autos und Design
              – zwei Bereiche, in denen Technik und Ästhetik auf faszinierende
              Weise zusammenkommen.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/cpana27" icon={GitHubIcon}>
              Folge mir auf GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/christian-cornelius-pana-b9831b245/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Vernetze dich auf LinkedIn
            </SocialLink>

            <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                Meine Interessen
              </h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <CodeIcon className="h-6 w-6 flex-none stroke-zinc-500" />
                  <span className="ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Programmierung
                  </span>
                </li>
                <li className="flex items-center">
                  <ChipIcon className="h-6 w-6 flex-none stroke-zinc-500" />
                  <span className="ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Low-Level Hardware Programmierung
                  </span>
                </li>
                <li className="flex items-center">
                  <WorkoutIcon className="h-6 w-6 flex-none stroke-zinc-500" />
                  <span className="ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Kraftsport
                  </span>
                </li>
                <li className="flex items-center">
                  <DesignIcon className="h-6 w-6 flex-none stroke-zinc-500" />
                  <span className="ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Design
                  </span>
                </li>
                <li className="flex items-center">
                  <CarIcon className="h-6 w-6 flex-none stroke-zinc-500" />
                  <span className="ml-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Autos
                  </span>
                </li>
              </ul>
            </li>

            <SocialLink
              href="mailto:email@example.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              christian.pana@softflow.dev
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}

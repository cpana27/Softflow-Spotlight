'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  /*{
      name: 'Planetaria',
      description:
        'Creating technology to empower civilians to explore space on their own terms.',
      link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
      logo: logoPlanetaria,
      category: 'Space Exploration',
    },*/
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Meine Projekte"
      intro="Hier findest du eine Auswahl meiner besten Arbeiten. Viele davon sind Open-Source - wenn dich etwas interessiert, schau dir gerne den Code an und teile deine Ideen zur Verbesserung."
    >
      <div className="space-y-8">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-zinc-200 dark:border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm font-semibold text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
              Entdecke meine Arbeit
            </span>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                as="li"
                className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg dark:bg-zinc-800/50 dark:shadow-zinc-700/10"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 shadow-lg">
                      <div className="absolute inset-0 rounded-full bg-white/90 dark:bg-zinc-800/90"></div>
                      <Image
                        src={project.logo}
                        alt=""
                        className="relative h-8 w-8 rounded-full"
                        unoptimized
                      />
                    </div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="mt-6 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link
                      href={project.link.href}
                      className="transition-colors hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      {project.name}
                    </Card.Link>
                  </h2>

                  <Card.Description className="mt-2 flex-1">
                    {project.description}
                  </Card.Description>

                  <div className="mt-6 flex items-center">
                    <div className="relative z-10 flex items-center text-sm font-medium text-zinc-500 transition group-hover:text-teal-500 dark:text-zinc-300">
                      <LinkIcon className="h-5 w-5 flex-none" />
                      <span className="ml-2">{project.link.label}</span>
                    </div>
                    <div className="ml-auto">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600">
                        <svg
                          className="h-5 w-5 text-zinc-500 dark:text-zinc-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Alle Projekte anzeigen
            <svg
              className="-mr-1 ml-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </SimpleLayout>
  )
}

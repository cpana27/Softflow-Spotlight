'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { useTheme } from 'next-themes'

// Lokale Bilder importieren
import logoGo from '@/images/logos/Go-Logo_LightBlue.svg'
import logoJs from '@/images/logos/js.svg'
import logoTs from '@/images/logos/typescript.svg'
import logoReact from '@/images/logos/react.svg'
import logoNode from '@/images/logos/nodejs.png'
import logoPython from '@/images/logos/python.svg'
import logoJava from '@/images/logos/java.svg'
import logoDocker from '@/images/logos/docker.png'
import logoKotlin from '@/images/logos/kotlin.svg'
import logoFlutter from '@/images/logos/flutter.svg'

export default function Kenntnisse() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  // Definiere alle Technologien mit ihren Details
  const technologies = [
    {
      name: 'Go',
      src: logoGo,
      description:
        'Server-seitige Systeme mit hoher Performance und Skalierbarkeit',
      category: 'Backend Entwicklung',
      size: 'large',
      position: 1,
    },
    {
      name: 'JavaScript',
      src: logoJs,
      description: 'Webentwicklung mit modernem ES6+',
      category: 'Frontend',
      size: 'small',
      position: 2,
    },
    {
      name: 'TypeScript',
      src: logoTs,
      description: 'Typsicherheit für JavaScript-Projekte',
      category: 'Frontend',
      size: 'small',
      position: 3,
    },
    {
      name: 'React',
      src: logoReact,
      description: 'Moderne, reaktive Benutzeroberflächen',
      category: 'Frontend Frameworks',
      size: 'large',
      position: 4,
    },
    {
      name: 'Node.js',
      src: logoNode,
      description: 'JavaScript-basierte Backends',
      category: 'Backend',
      size: 'small',
      position: 5,
    },
    {
      name: 'Python',
      src: logoPython,
      description: 'Datenanalyse und Automatisierung',
      category: 'Scripting',
      size: 'small',
      position: 6,
    },
    {
      name: 'Java',
      src: logoJava,
      description: 'Enterprise-Anwendungen',
      category: 'Backend',
      size: 'small',
      position: 7,
    },
    {
      name: 'Docker',
      src: logoDocker,
      description: 'Container & Deployment',
      category: 'DevOps',
      size: 'small',
      position: 8,
    },
    {
      name: 'Kotlin',
      src: logoKotlin,
      description: 'Native Android-Entwicklung',
      category: 'Mobile',
      size: 'small',
      position: 9,
    },
    {
      name: 'Flutter',
      src: logoFlutter,
      description: 'Cross-Platform Mobile Apps',
      category: 'Mobile',
      size: 'small',
      position: 10,
    },
  ]

  return (
    <Container>
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold">
            Meine Skills
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-3xl font-semibold tracking-tight text-balance text-gray-950 sm:text-4xl dark:text-zinc-100">
            Technologien und Werkzeuge
          </p>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Go - Großes Element */}
            <div className="relative md:col-span-1 md:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white md:rounded-l-[1.5rem] dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)] md:rounded-l-[calc(1.5rem+1px)]">
                <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[0].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[0].description}
                  </p>
                </div>
                <div className="@container relative flex min-h-[16rem] w-full grow items-center justify-center max-md:mx-auto max-md:max-w-sm">
                  <Image
                    src={technologies[0].src}
                    alt={technologies[0].name}
                    width={180}
                    height={180}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[0].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 md:rounded-l-[1.5rem] dark:ring-white/10"></div>
            </div>

            {/* JavaScript */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[1].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[1].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[1].src}
                    alt={technologies[1].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[1].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* TypeScript */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[2].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[2].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[2].src}
                    alt={technologies[2].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[2].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* React - Großes Element */}
            <div className="relative md:col-span-1 md:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white md:rounded-r-[1.5rem] dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)] md:rounded-r-[calc(1.5rem+1px)]">
                <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[3].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[3].description}
                  </p>
                </div>
                <div className="relative flex min-h-[16rem] w-full grow items-center justify-center">
                  <Image
                    src={technologies[3].src}
                    alt={technologies[3].name}
                    width={180}
                    height={180}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[3].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 md:rounded-r-[1.5rem] dark:ring-white/10"></div>
            </div>

            {/* Node.js */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[4].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[4].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[4].src}
                    alt={technologies[4].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[4].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* Python */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[5].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[5].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[5].src}
                    alt={technologies[5].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[5].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* Java */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[6].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[6].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[6].src}
                    alt={technologies[6].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[6].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* Docker */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[7].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[7].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[7].src}
                    alt={technologies[7].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[7].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* Kotlin */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[8].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[8].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[8].src}
                    alt={technologies[8].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[8].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>

            {/* Flutter */}
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-zinc-800"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)]">
                <div className="px-6 pt-6 sm:px-8">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-md:text-center dark:text-zinc-200">
                    {technologies[9].category}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-md:text-center dark:text-zinc-400">
                    {technologies[9].description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center p-4">
                  <Image
                    src={technologies[9].src}
                    alt={technologies[9].name}
                    width={80}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <span className="font-medium text-gray-950 dark:text-zinc-200">
                    {technologies[9].name}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 dark:ring-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

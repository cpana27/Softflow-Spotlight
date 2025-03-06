'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'

import GO from '@/images/logos/Go-Logo_LightBlue.svg'

export default function Kenntnisse() {
  const [position, setPosition] = useState(0)

  const logos = [
    {
      name: 'Go',
      src:  GO ,
      width: 258,
      height: 68,
    },
    {
      name: 'Reform',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
    },
    {
      name: 'SavvyCal',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
    },
    {
      name: 'Statamic',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
    },
    // Logos wiederholen für nahtloses Scrollen
    {
      name: 'Transistor',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
    },
    {
      name: 'Reform',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
    },
    {
      name: 'SavvyCal',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
    },
    {
      name: 'Statamic',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
    },
  ]

  useEffect(() => {
    // Animation für den Carousel-Effekt
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Wenn die Animation den Endpunkt erreicht hat, zurück zum Anfang
        if (prevPosition <= -50) {
          return 0
        }
        // Position langsam verschieben
        return prevPosition - 0.5
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-white-900 text-center text-lg font-semibold">
            Trusted by the world's most innovative teams
          </h2>
          <div className="relative mt-10">
            {/* Hauptcarousel-Container */}
            <div className="relative w-full overflow-hidden">
              {/* Animierter innerer Container */}
              <div
                className="flex items-center whitespace-nowrap transition-transform duration-1000 ease-linear"
                style={{ transform: `translateX(${position}%)` }}
              >
                {logos.map((logo, index) => (
                  <div key={index} className="mx-4 w-40 flex-none">
                    <Image
                      alt={logo.name}
                      src={logo.src}
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain brightness-0 invert filter"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

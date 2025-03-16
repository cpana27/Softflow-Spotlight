import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-teal-500 dark:text-teal-400">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Entschuldigung, die gesuchte Seite konnte nicht gefunden werden.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button
            href="/"
            variant="primary"
            className="transition-all duration-300 hover:scale-105"
          >
            Zurück zur Startseite
          </Button>
          <Button
            href="/projects"
            variant="secondary"
            className="transition-all duration-300 hover:scale-105"
          >
            Projekte entdecken
          </Button>
        </div>
        <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-500">
          Du suchst etwas Bestimmtes? Schreib mir gerne eine{' '}
          <a
            href="mailto:christianc.pana@icloud.com"
            className="text-teal-500 underline hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
          >
            E-Mail
          </a>
          .
        </p>
      </div>
    </Container>
  )
}

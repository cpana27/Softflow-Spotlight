import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, title, icon, ...props }) {
  return (
      <Section {...props}>
        <div className="flex items-center mb-8 border-b border-zinc-200 pb-4 dark:border-zinc-700/40">
          <div className="mr-4 text-teal-500 dark:text-teal-400">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{title}</h2>
        </div>
        <ul role="list" className="space-y-12">
          {children}
        </ul>
      </Section>
  )
}

function Tool({ title, href, icon, children }) {
  return (
      <Card as="li" className="group relative transition-all duration-300">
        <div className="flex items-start">
          {icon && (
              <div className="flex-shrink-0 mr-4 text-zinc-500 dark:text-zinc-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                {icon}
              </div>
          )}
          <div>
            <Card.Title as="h3" href={href} className="text-base font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
              {title}
            </Card.Title>
            <Card.Description className="mt-2 text-sm">{children}</Card.Description>
          </div>
        </div>
      </Card>
  )
}

// Icons for sections
function WorkstationIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
  )
}

function DevToolsIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
  )
}

function DesignIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
  )
}

function ProductivityIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
  )
}

// Icons for tools
function LaptopIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="20" x2="22" y2="20"></line>
      </svg>
  )
}

function DesktopIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
  )
}

function MonitorIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
  )
}

function ChairIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2"></path>
        <path d="M6 10v12"></path>
        <path d="M18 10v12"></path>
        <path d="M6 14h12"></path>
      </svg>
  )
}

function CodeIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
  )
}

function GitIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
  )
}

function NodeIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2v20M2 6h20M2 18h20M7 12h10"></path>
      </svg>
  )
}

function TailwindIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
  )
}

function FigmaIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
      </svg>
  )
}

function TeamsIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
  )
}

function OutlookIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2"></path>
        <path d="M22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6"></path>
        <polyline points="2 6 12 13 22 6"></polyline>
      </svg>
  )
}

function NotionIcon() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
  )
}

export const metadata = {
  title: 'Meine Tools',
  description: 'Software und Hardware, die ich für meine Arbeit verwende.',
}

export default function Uses() {
  return (
      <SimpleLayout
          title="Die Tools, die ich für meine tägliche Arbeit verwende"
          intro="Hier ist eine Übersicht meiner Hardware, Software und Tools, die mir helfen, effizient zu arbeiten und produktiv zu bleiben."
      >
        <div className="space-y-16">
          <ToolsSection title="Arbeitsplatz" icon={<WorkstationIcon />}>
            <Tool title="MacBook Pro 16 Zoll" icon={<LaptopIcon />}>
              Mein primäres Arbeitsgerät für unterwegs. Leistungsstark genug für alle Entwicklungsaufgaben und mit einem hervorragenden Display für Design-Arbeit.
            </Tool>
            <Tool title="Windows Tower" icon={<DesktopIcon />}>
              Meine stationäre Workstation für rechenintensive Aufgaben. Mit ausreichend Leistung für komplexe Entwicklungsaufgaben und paralleles Arbeiten mit mehreren Anwendungen.
            </Tool>
            <Tool title="Apple Studio Display" icon={<MonitorIcon />}>
              Beeindruckende Bildqualität und Farbgenauigkeit. Perfekt für Design-Arbeit und das Arbeiten mit mehreren Anwendungen gleichzeitig. Die integrierte Kamera und die Lautsprecher sind ein großes Plus für Videomeetings.
            </Tool>
            <Tool title="Fractal Ergonomic Chair" icon={<ChairIcon />}>
              Ergonomischer Stuhl, der auch lange Arbeitszeiten komfortabel macht. Die anpassbaren Einstellungen sorgen dafür, dass ich eine optimale Sitzposition finden kann.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Entwicklungstools" icon={<DevToolsIcon />}>
            <Tool title="WebStorm / IntelliJ" icon={<CodeIcon />}>
              Meine bevorzugten IDEs aus dem JetBrains-Ökosystem. WebStorm für JavaScript/TypeScript-Entwicklung und IntelliJ für andere Sprachen. Die leistungsstarken Funktionen und Plugins machen die Entwicklung effizienter.
            </Tool>
            <Tool title="Git" icon={<GitIcon />}>
              Für die Versionskontrolle aller meiner Projekte. Die Integration in WebStorm macht den Workflow noch einfacher.
            </Tool>
            <Tool title="Node.js" icon={<NodeIcon />}>
              Die Basis für meine JavaScript-Entwicklung im Backend. Zusammen mit Express für das Erstellen von APIs und Webanwendungen.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Design" icon={<DesignIcon />}>
            <Tool title="Tailwind CSS" icon={<TailwindIcon />}>
              Mein bevorzugtes CSS-Framework für schnelles und konsistentes Styling. Die utility-first Philosophie beschleunigt den Entwicklungsprozess erheblich und ermöglicht ein präzises Design ohne Custom-CSS zu schreiben.
            </Tool>
            <Tool title="Figma" icon={<FigmaIcon />}>
              Mein wichtigstes Design-Tool für UI/UX-Design und Prototyping. Die Kollaborationsfunktionen machen die Zusammenarbeit mit dem Team einfach und effizient.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Produktivität" icon={<ProductivityIcon />}>
            <Tool title="Microsoft Teams" icon={<TeamsIcon />}>
              Für die tägliche Kommunikation und Zusammenarbeit im Team. Video-Calls, Chat und die Integration mit anderen Microsoft-Produkten machen es zu einem zentralen Tool in meinem Arbeitsalltag.
            </Tool>
            <Tool title="Microsoft Outlook" icon={<OutlookIcon />}>
              Für die Verwaltung meiner E-Mails und Termine. Die Integration mit anderen Microsoft-Produkten erleichtert die Organisation meines Arbeitstages.
            </Tool>
            <Tool title="Notion" icon={<NotionIcon />}>
              Mein zentrales Tool für Notizen, Dokumentation und Projektmanagement. Die flexiblen Datenbanken und die vielseitigen Formatierungsmöglichkeiten machen es zu einem unverzichtbaren Werkzeug für die Organisation.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
  )
}
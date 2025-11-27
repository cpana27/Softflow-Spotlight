import React from 'react'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Button } from '@/components/button'

export const metadata = {
  title: 'Blog - Softflow',
  description: 'Gedanken zu Softwarearchitektur, Hardware und Entwicklung.',
}

// 1. Die Daten für die Blogposts
// Hier kannst du später einfach weitere Objekte hinzufügen.
const posts = [
  {
    id: 1,
    title: 'Der "Polyglot" Stack: Skalierbare Architektur mit Go, Java & React',
    excerpt: 'In der modernen Softwareentwicklung stehen wir oft vor einem Dilemma: Wir wollen die Entwicklungsgeschwindigkeit eines Startups, aber die Stabilität eines Enterprise-Konzerns.',
    date: '15. Nov 2024',
    datetime: '2024-11-15',
    category: { title: 'Architektur', href: '/blog/moderne_entwicklung' },
    author: {
      name: 'Christian',
      role: 'Fullstack Developer',
       imageUrl:
      '/chris.png',
    },
    imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    href: '/blog/moderne_entwicklung'
  },
  {
    id: 2,
    title: 'Architektur als Investment: Wie man teure Tech-Fehlentscheidungen vermeidet',
    excerpt: 'Jeden Tag erscheinen neue JavaScript-Frameworks, Datenbanken und Cloud-Services. Für CTOs und Gründer ist die Versuchung groß, immer auf das neueste Pferd zu setzen.',
    date: '02. Okt 2024',
    datetime: '2024-10-02',
    category: { title: 'Hardware & Tech', href: '/blog/architektur' },
    author: {
      name: 'Christian',
      role: 'Fullstack Developer',
            imageUrl:
      '/chris.png',
    },
    imageUrl:  'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    href: '/blog/architektur'
  },
]

function BlogHeader() {
  return (
    <Container className="mt-16 mb-16">
      <div className="max-w-2xl">
        <Heading as="h1" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Insights & Tutorials
        </Heading>
        <Lead className="mt-6 text-lg leading-8 text-gray-600">
          Hier schreibe ich über technische Herausforderungen aus meinem Alltag als Entwickler – von komplexen Datenbank-Migrationen bis hin zu Low-Level Hardware-Projekten.
        </Lead>
      </div>
    </Container>
  )
}

function BlogGrid() {
  return (
    <Container className="pb-24">
      {/* Grid Layout für die Karten */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="flex flex-col items-start justify-between group rounded-3xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300"
          >
            
            {/* Bild Bereich - abgerundet innerhalb des Rahmens */}
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9]">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover bg-gray-100 transition duration-500 group-hover:scale-105"
              />
              {/* Overlay für besseren Kontrast bei hellen Bildern (optional) */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>

            {/* Text Bereich - mit etwas Padding (Abstand) zum Rahmen */}
            <div className="flex flex-col flex-1 px-4 py-4 w-full">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-indigo-50 px-2.5 py-1 font-medium text-indigo-600 hover:bg-indigo-100 transition-colors"
                >
                  {post.category.title}
                </a>
              </div>
              
              <div className="group relative">
                <h3 className="mt-4 text-lg font-bold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.excerpt}
                </p>
              </div>

              {/* Autor Sektion - wird nach unten gedrückt (mt-auto), damit alle Karten gleich hoch wirken */}
              <div className="relative mt-8 flex items-center gap-x-4 border-t border-gray-100 pt-6 w-full">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100 object-cover" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                  <p className="text-gray-500 text-xs">{post.author.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
         <Button variant="outline" href="#">Alle Artikel ansehen</Button>
      </div>
    </Container>
  )
}
export default function Blog() {
  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <BlogHeader />
      <BlogGrid />
      <Footer />
    </main>
  )
}
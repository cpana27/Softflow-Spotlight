import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'

// Diese Funktion wird nun während der Build-Zeit ausgeführt
export async function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Christian Pana',
    email: 'christian.pana@softflow.dev',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // Diese Methode funktioniert im statischen Export nicht zuverlässig
  // Wir ersetzen sie durch direkte Verarbeitung der MDX-Dateien
  const articlesDir = path.join(process.cwd(), 'src/app/articles')
  const articleIds = fs.readdirSync(articlesDir).filter((dir) => {
    // Überprüfe, ob es sich um ein Verzeichnis mit page.mdx handelt
    const stat = fs.statSync(path.join(articlesDir, dir))
    return (
      stat.isDirectory() &&
      fs.existsSync(path.join(articlesDir, dir, 'page.mdx'))
    )
  })

  for (let id of articleIds) {
    // Wir lesen die MDX-Datei direkt
    const mdxPath = path.join(articlesDir, id, 'page.mdx')
    const mdxContent = fs.readFileSync(mdxPath, 'utf-8')

    // Einfache Extraktion von Metadaten (passe dies an dein MDX-Format an)
    const titleMatch = mdxContent.match(/# (.*)/)
    const dateMatch = mdxContent.match(
      /export const meta = \{\s*date: ['"](.*)['"],/s,
    )

    const title = titleMatch ? titleMatch[1] : `Artikel: ${id}`
    const date = dateMatch ? dateMatch[1] : new Date().toISOString()

    // Inhalt vereinfacht
    const content = mdxContent
      .replace(/^---[\s\S]*?---/m, '') // Frontmatter entfernen
      .replace(/import.*$/gm, '') // Imports entfernen
      .replace(/export.*$/gm, '') // Exports entfernen

    const publicUrl = `${siteUrl}/articles/${id}`

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content: `<div>${content}</div>`,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 'public, max-age=3600',
    },
  })
}

// Damit Next.js weiß, dass dies eine statische Route sein so

import { metadata } from '$lib/content/config'

export const prerender = true

export const GET = async () => {
  const data = await Promise.all(
    Object.entries(import.meta.glob('$lib/content/posts/*.md')).map(
      async ([path, page]) => {
        const { metadata } = await page()
        const slug = path.split('/').pop().split('.').shift()
        return { ...metadata, slug }
      }
    )
  ).then((posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const body = render(data)
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  }
  return new Response(body, {
    status: 200,
    headers,
  })
}

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${metadata.title}</title>
<description>${metadata.description}</description>
<link>${metadata.link}</link>
<atom:link href="https://${metadata.URL}/api/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">https://${metadata.URL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://${metadata.URL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`

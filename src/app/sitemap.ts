import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexaworks.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/contact',
    '/process',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts - import dynamically to avoid build issues
  const posts: any[] = []
  try {
    const { getAllPosts } = require('@/lib/blog')
    const allPosts = getAllPosts()
    allPosts.forEach((post: any) => {
      posts.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  } catch (error) {
    // Fallback if blog lib not available during build
    console.warn('Could not load blog posts for sitemap')
  }

  return [...staticPages, ...posts]
}
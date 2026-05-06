import { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/case-studies',
    '/pipeline-audit',
    '/process',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const dynamicRoutes: any[] = []

  // Add Services
  try {
    const { SERVICES } = await import('@/lib/services')
    SERVICES.forEach((service) => {
      dynamicRoutes.push({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })
  } catch (e) {}

  // Add Case Studies
  try {
    const { CASE_STUDIES } = await import('@/lib/case-studies')
    CASE_STUDIES.forEach((cs) => {
      dynamicRoutes.push({
        url: `${baseUrl}/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })
  } catch (e) {}

  // Blog posts
  const posts: any[] = []
  try {
    const { getAllPosts } = await import('@/lib/blog')
    const allPosts = getAllPosts()
    allPosts.forEach((post: any) => {
      posts.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  } catch (error) {}

  return [...staticPages, ...dynamicRoutes, ...posts]
}
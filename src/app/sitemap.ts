import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    '',
    '/case-studies',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const dynamicRoutes: any[] = []

  // Add Solutions
  try {
    const { SOLUTIONS } = await import('@/lib/solutions')
    SOLUTIONS.forEach((solution) => {
      dynamicRoutes.push({
        url: `${baseUrl}/solutions/${solution.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      })
    })
  } catch (e) {}

  // Add Comparisons
  try {
    const { COMPARISONS } = await import('@/lib/comparisons')
    COMPARISONS.forEach((comparison) => {
      dynamicRoutes.push({
        url: `${baseUrl}/compare/${comparison.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
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
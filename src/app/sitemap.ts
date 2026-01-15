import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devflow.co.in'
  const currentDate = new Date().toISOString()
  
  // Note: Hash/fragment URLs (like #capabilities) are not indexed by Google
  // as separate pages. They are client-side navigation only.
  // For better SEO, consider creating separate pages for each service
  // like /services/ai-solutions, /services/web-development, etc.
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}

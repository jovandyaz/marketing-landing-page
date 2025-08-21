import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sinergiastudio.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/profile/', '/log-in/', '/sign-up/']
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}

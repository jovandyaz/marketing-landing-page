'use client';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'website';
}

export const StructuredData = ({ type }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      name: 'Sinergia Marketing',
      description:
        'Especialistas en marketing digital, community management y talleres de formación',
      url: 'https://sinergiastudio.vercel.app',
      logo: 'https://sinergiastudio.vercel.app/logo.webp',
      image: 'https://sinergiastudio.vercel.app/images/photo_home.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Spanish'
      },
      sameAs: []
    };

    switch (type) {
      case 'organization':
        return {
          '@type': 'Organization',
          ...baseData,
          foundingDate: '2024',
          areaServed: 'ES',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios de Marketing Digital',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Community Management',
                  description: 'Gestión profesional de redes sociales y comunidades online'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Marketing Digital',
                  description: 'Estrategias integrales de marketing digital'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Talleres de Formación',
                  description: 'Formación especializada en marketing digital'
                }
              }
            ]
          }
        };

      case 'localBusiness':
        return {
          '@type': 'LocalBusiness',
          ...baseData,
          priceRange: '$$',
          openingHours: 'Mo-Fr 09:00-18:00',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            ratingCount: '50'
          }
        };

      case 'website':
        return {
          '@type': 'WebSite',
          ...baseData,
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://sinergiastudio.vercel.app/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
};

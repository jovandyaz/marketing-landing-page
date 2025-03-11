import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';

interface Brand {
  id: number;
  name: string;
  logo: string;
}

export const SocialProof = () => {
  const brands: Brand[] = [
    { id: 1, name: 'Herbal Essences', logo: '/images/brands/herbal_essences.webp' },
    { id: 2, name: 'Nivea', logo: '/images/brands/nivea.webp' },
    { id: 3, name: 'Santa Carne', logo: '/images/brands/santa_carne.webp' },
    { id: 4, name: 'Garnier Fructis', logo: '/images/brands/garnier_fructis.webp' },
    { id: 5, name: 'Carlota', logo: '/images/brands/carlota.webp' },
    { id: 6, name: 'Tlali', logo: '/images/brands/tlali.webp' }
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  const highlightedWords = [
    'Marketing',
    'Community Management',
    'emprendedora',
    'freelancer',
    'redes sociales',
    'metodología efectiva'
  ];

  const textParts = [
    'Especialista en Marketing y Community Management',
    'con experiencia como emprendedora y freelancer.',
    'Mi trayectoria me llevó a descubrir el poder de las redes sociales,',
    'colaborando con marcas reconocidas y desarrollando una',
    'metodología efectiva para posicionamiento de marca.'
  ];

  const highlightText = (text: string) => {
    let result = text;
    highlightedWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-yellow-500 font-bold">$1</span>');
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <section className="w-full bg-white py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-4xl">
          <Card className="overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="relative mb-6">
                <div className="absolute top-0 -left-4 h-full w-1 bg-yellow-400"></div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="mb-4 text-sm font-medium tracking-wider text-gray-500 uppercase">
                    Hola, soy Mary Carmen.
                  </h3>
                </motion.div>

                {textParts.map((part, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + index * 0.1,
                      ease: [0.21, 0.45, 0.15, 0.95]
                    }}
                    className={`text-lg md:text-xl ${index > 0 ? 'mt-2' : 'font-bold'}`}
                  >
                    {highlightText(part)}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 flex flex-wrap items-center justify-start gap-3"
              >
                <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                  #CreadoraDeContenido
                </div>
                <div className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">
                  #CommunityManager
                </div>
                <div className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  #MarketingDigital
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <h2 className="relative mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Marcas que{' '}
            <span className="relative">
              confían
              <div className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-400"></div>
            </span>{' '}
            en mí
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Colaboramos con grandes marcas y aquellas que aspiran a serlo
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

          <div className="logo-carousel marquee-pause overflow-hidden py-8">
            <div className="animate-marquee flex w-fit items-center gap-12 md:gap-16">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="relative h-20 w-28 flex-shrink-0 grayscale transition-all duration-300 hover:grayscale-0 md:h-24 md:w-32"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`Logo de ${brand.name}`}
                      width={120}
                      height={80}
                      className="h-14 w-auto rounded-full object-contain md:h-16"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

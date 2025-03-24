import React from 'react';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { brands } from './brands';
import { highlightedWords, profesionalDescription } from './texts';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'motion/react';

export function highlightText(text: string, highlightedWords: string[]) {
  let result = text;
  highlightedWords.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<span class="text-yellow-500 font-bold">$1</span>');
  });
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export const SocialProof = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-white py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-24 max-w-4xl">
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
                    Hola, soy Maca Pavón.
                  </h3>
                </motion.div>

                {profesionalDescription.map((part, index) => (
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
                    {highlightText(part, highlightedWords)}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 flex flex-wrap items-center justify-start gap-3"
              >
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 px-3 py-1.5 text-sm text-yellow-800"
                >
                  #CreadoraDeContenido
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 px-3 py-1.5 text-sm text-purple-800"
                >
                  #CommunityManager
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 px-3 py-1.5 text-sm text-blue-800"
                >
                  #MarketingDigital
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 pt-16 text-center"
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
            Colaboro con grandes marcas y aquellas que aspiran a serlo
          </p>
        </motion.div>

        <div className="relative mb-8 w-full overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

          <div className="logo-carousel marquee-pause overflow-hidden py-8">
            <div className="animate-marquee flex w-fit items-center gap-12 md:gap-16">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="relative h-20 w-28 flex-shrink-0 transition-all duration-300 md:h-24 md:w-32"
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

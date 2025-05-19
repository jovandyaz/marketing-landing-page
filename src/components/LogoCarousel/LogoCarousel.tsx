import React from 'react';
import Image from 'next/image';
import { brands } from './brands';
import { motion } from 'motion/react';

export const LogoCarousel = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto mb-12 px-4 pt-8 text-center md:px-8"
      >
        <span className="text-primary-600 dark:text-primary-400 mb-3 block text-sm font-medium tracking-wider uppercase">
          Colaboraciones
        </span>
        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Marcas que{' '}
          <span className="relative inline-block">
            confían
            <div className="from-secondary-400 to-secondary-600 absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r"></div>
          </span>{' '}
          en mí
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Colaboro con grandes marcas y aquellas que aspiran a serlo
        </p>
      </motion.div>
      <div className="relative mb-8 w-full overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>

        <div className="logo-carousel marquee-pause overflow-hidden py-8">
          <div className="animate-marquee flex w-fit items-center gap-16 md:gap-20">
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                initial={{ opacity: 0.5, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative h-24 w-32 flex-shrink-0 filter transition-all duration-300 md:h-28 md:w-36"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

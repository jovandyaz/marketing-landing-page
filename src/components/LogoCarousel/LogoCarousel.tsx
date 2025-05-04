import React from 'react';
import Image from 'next/image';
import { brands } from './brands';
import { motion } from 'motion/react';

export const LogoCarousel = () => {
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section>
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
    </section>
  );
};

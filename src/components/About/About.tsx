'use client';

import React from 'react';
import { highlightedWords, profesionalDescription } from './texts';
import { Badge, CuteCard, CuteCardContent, Image3DEffect } from '@/components';
import { motion } from 'motion/react';

export function highlightText(text: string, highlightedWords: string[]) {
  let result = text;
  highlightedWords.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(
      regex,
      '<span class="text-secondary-600 dark:text-secondary-400 font-bold">$1</span>'
    );
  });
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="container mx-auto mb-24 w-full px-4 md:px-8">
        <CuteCard variant="light">
          <CuteCardContent className="text-justify">
            <div className="relative mb-8">
              <div className="from-secondary-400 to-secondary-600 absolute top-0 -left-4 h-full w-1 rounded-full bg-gradient-to-b"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="animate-gradient mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-2xl font-bold tracking-wider text-transparent uppercase">
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
                  className={`text-lg md:text-xl ${index > 0 ? 'mt-3' : 'font-bold'}`}
                >
                  {highlightText(part, highlightedWords)}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Badge
                variant="secondary"
                className="bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800 text-primary-800 dark:text-primary-300 rounded-full px-4 py-2 text-sm transition-colors"
              >
                #CreadoraDeContenido
              </Badge>
              <Badge
                variant="secondary"
                className="bg-secondary-100 hover:bg-secondary-200 dark:bg-secondary-900 dark:hover:bg-secondary-800 text-secondary-800 dark:text-secondary-300 rounded-full px-4 py-2 text-sm transition-colors"
              >
                #CommunityManager
              </Badge>
              <Badge
                variant="secondary"
                className="bg-tertiary-100 hover:bg-tertiary-200 dark:bg-tertiary-900 dark:hover:bg-tertiary-800 text-tertiary-800 dark:text-tertiary-300 rounded-full px-4 py-2 text-sm transition-colors"
              >
                #MarketingDigital
              </Badge>
            </motion.div>
          </CuteCardContent>
        </CuteCard>
      </div>
      <div className="container mx-auto w-full px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative w-full"
          >
            <div className="w-full max-w-md">
              <Image3DEffect
                src="/images/lavander.jpg"
                alt="Enfoque creativo"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Mezclamos{' '}
              <span className="from-primary-500 to-primary-400 bg-gradient-to-r bg-clip-text text-transparent">
                creatividad
              </span>{' '}
              y{' '}
              <span className="relative">
                <span className="from-secondary-500 to-secondary-400 bg-gradient-to-r bg-clip-text text-transparent">
                  resultados
                </span>
                <motion.div
                  className="from-secondary-500 to-primary-500 absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                ></motion.div>
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              No encontrarás muchas agencias creativas que entiendan de negocios ni agencias de
              negocios que entiendan de creatividad.
            </p>

            <p className="animate-gradient mb-6 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-2xl font-bold tracking-wider text-transparent">
              ¡Aquí es donde soy diferente!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

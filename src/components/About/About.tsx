'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { highlightedWords, profesionalDescription } from './texts';
import { Card, CardContent } from '@/components/ui/card';
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
        <Card className="via-primary-50/50 dark:via-primary-950/30 relative w-full overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-slate-50 to-neutral-50 shadow-lg backdrop-blur-sm dark:from-gray-900 dark:to-gray-950">
          <CardContent className="relative z-10 flex w-full flex-col items-center p-8 text-justify md:p-10">
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto w-full px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative h-[400px] w-full md:h-[550px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/lavander.jpg"
                alt="Enfoque creativo"
                fill
                className="rounded-2xl object-cover shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
              <div className="from-primary-500/30 absolute inset-0 rounded-2xl bg-gradient-to-tr to-transparent opacity-60 mix-blend-overlay"></div>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                whileHover={{ opacity: 0.6 }}
              ></motion.div>
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

            <p className="text-xl font-medium text-gray-900 dark:text-white">
              ¡Aquí es donde soy diferente!
            </p>

            <Link
              href="/services"
              className="group text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 relative inline-flex items-center overflow-hidden font-medium transition-colors"
            >
              <span className="relative z-10">Conoce más sobre mis servicios</span>
              <motion.span
                className="from-primary-400 to-secondary-500 absolute bottom-0 left-0 h-[2px] bg-gradient-to-r"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
              <svg
                className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

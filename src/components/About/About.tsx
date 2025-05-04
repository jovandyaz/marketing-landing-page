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
    result = result.replace(regex, '<span class="text-yellow-500 font-bold">$1</span>');
  });
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export const About = () => {
  return (
    <section id="about" className="w-full bg-white py-6 md:py-14">
      <div className="container mx-auto mb-24 w-full px-4 md:px-8">
        <Card className="w-full overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-md">
          <CardContent className="flex w-full flex-col items-center p-6 text-justify md:p-8">
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
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
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
              <Badge variant="secondary" className="bg-blue-100 px-3 py-1.5 text-sm text-blue-800">
                #MarketingDigital
              </Badge>
            </motion.div>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto w-full px-4 md:px-8">
        <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] w-full md:h-[500px]"
          >
            <Image
              src="/images/lavander.jpg"
              alt="Enfoque creativo"
              fill
              className="rounded-lg object-cover shadow-xl"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Mezclamos <span className="text-primary-600">creatividad</span> y{' '}
              <span className="text-secondary-600">resultados</span>
            </h2>

            <div className="bg-secondary-500 h-1 w-20"></div>

            <p className="text-lg text-gray-600">
              No encontrarás muchas agencias creativas que entiendan de negocios ni agencias de
              negocios que entiendan de creatividad.
            </p>

            <p className="text-lg text-gray-600">Aquí es donde soy diferente.</p>

            <Link
              href="/services"
              className="text-primary-600 hover:text-primary-700 inline-flex items-center"
            >
              Conoce más sobre mis servicios
              <svg
                className="ml-2 h-5 w-5"
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

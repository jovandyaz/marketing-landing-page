'use client';

import {
  Badge,
  FadeContainer,
  FadeDiv,
  FadeSpan,
  Image3DEffect,
  ScrollReveal,
  Services,
  SubtleBlobAnimation
} from '@/components';
import { motion } from 'motion/react';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pb-16">
      <section className="relative flex w-full items-center justify-center md:h-screen">
        <SubtleBlobAnimation>
          <FadeContainer className="container mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
                <FadeSpan className="block">
                  Soluciones de <span className="text-secondary-600">marketing</span> para
                </FadeSpan>
                <FadeSpan className="block">hacer crecer tu negocio</FadeSpan>
              </h1>
              <FadeDiv className="mx-auto mt-6 max-w-2xl">
                <p className="text-lg text-gray-700">
                  Estrategias personalizadas para potenciar tu presencia digital, conectar con tu
                  audiencia y convertir tus seguidores en clientes leales.
                </p>
              </FadeDiv>
            </div>
          </FadeContainer>
        </SubtleBlobAnimation>
      </section>

      <ScrollReveal variant="fade-up" delay={0.3} duration={0.9}>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col gap-16 md:flex-row md:items-center">
              <motion.div className="relative md:w-2/3">
                <Image3DEffect
                  alt="Mujer posando en el campo"
                  src="/images/photo_home_1.webp"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                  aspectRatio="aspect-[4/3] md:aspect-[16/9]"
                />
              </motion.div>
              <div className="px-4 md:w-1/3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative mb-4">
                    <div className="absolute top-0 -left-4 h-full w-1 bg-yellow-400"></div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Mi experiencia, <br />
                      <span className="text-secondary-600">tu mejor aliado</span>
                    </h2>
                  </div>
                  <p className="mb-6 text-lg text-gray-700">
                    Como experta en marketing digital, mi pasión es entender las necesidades únicas
                    de cada cliente para diseñar estrategias efectivas que transformen la
                    visibilidad en resultados concretos para tu negocio.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    <Badge className="bg-yellow-100 px-3 py-1.5 text-sm text-yellow-800">
                      +7 años de experiencia
                    </Badge>
                    <Badge className="bg-blue-100 px-3 py-1.5 text-sm text-blue-800">
                      Resultados garantizados
                    </Badge>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={0.3} duration={0.9}>
        <Services />
      </ScrollReveal>
    </div>
  );
}

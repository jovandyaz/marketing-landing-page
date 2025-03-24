'use client';

import React from 'react';
import Image from 'next/image';
import { Service, ServiceCard } from '@/components';
import { FadeContainer, FadeDiv, FadeSpan } from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon, BookOpenIcon, PhoneIcon, Share2Icon, UsersIcon } from 'lucide-react';
import { motion } from 'motion/react';

const services: Service[] = [
  {
    id: 'workshops',
    title: 'Talleres Formativos',
    description:
      'Descubre el potencial de Canva para crear diseños profesionales que eleven la imagen de tu marca, entre otros más.',
    icon: <BookOpenIcon className="h-6 w-6" />,
    color: 'bg-yellow-100',
    badges: ['Presencial', 'Online', 'Canva'],
    popular: true
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description:
      'Creo y gestiono contenido impactante para tus redes sociales que conecta con tu audiencia y convierte seguidores en clientes.',
    icon: <Share2Icon className="h-6 w-6" />,
    color: 'bg-purple-100',
    badges: ['Estrategia', 'Contenido']
  },
  {
    id: 'community',
    title: 'Community Management',
    description:
      'Me especializo en la construcción y gestión de comunidades digitales que fortalecen la relación con tu audiencia y generan engagement real.',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-blue-100',
    badges: ['Engagement', 'Crecimiento']
  },
  {
    id: 'consulting',
    title: 'Asesoría Personalizada',
    description:
      'Ofrezco consultoría estratégica adaptada a las necesidades específicas de tu marca para maximizar resultados y optimizar recursos.',
    icon: <PhoneIcon className="h-6 w-6" />,
    color: 'bg-green-100',
    badges: ['1:1', 'Seguimiento']
  }
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-8 pb-16">
      <section className="flex w-full items-center justify-center md:h-screen">
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
            <FadeDiv className="mt-12 hidden md:block">
              <a
                href="#services"
                className="bg-secondary-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white transition-transform hover:scale-105"
              >
                Ver servicios
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </FadeDiv>
          </div>
        </FadeContainer>
      </section>

      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16 md:flex-row md:items-center">
            <FadeDiv className="relative aspect-square overflow-hidden rounded-xl shadow-lg md:aspect-video md:w-2/3">
              <Image
                alt="Equipo de la agencia de marketing trabajando"
                src="/images/photo_home_1.webp"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center"
              />
            </FadeDiv>
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
                  Como experta en marketing digital, mi pasión es entender las necesidades únicas de
                  cada cliente para diseñar estrategias efectivas que transformen la visibilidad en
                  resultados concretos para tu negocio.
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

      <section id="services" className="flex min-h-screen w-full items-center py-4">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 hidden text-center md:block"
          >
            <h2 className="relative mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Servicios{' '}
              <span className="relative">
                destacados
                <div className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-400"></div>
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Diseñados para impulsar tu marca al siguiente nivel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

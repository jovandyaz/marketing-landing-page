'use client';

import { Service } from './Service.types';
import { ServiceCard } from './ServiceCard';
import { BookOpenIcon, PhoneIcon, Share2Icon, UsersIcon } from 'lucide-react';
import { motion } from 'motion/react';

const services: Service[] = [
  {
    id: 'workshops',
    title: 'Talleres Formativos',
    description:
      'Aprende a monetizar redes sociales, crea diseños profesionales con Canva y desarrolla estrategias digitales efectivas para potenciar tu marca.',
    icon: <BookOpenIcon className="h-6 w-6" />,
    color: 'bg-yellow-100',
    badges: ['Presencial', 'Online', 'Canva'],
    popular: true
  },
  {
    id: 'community',
    title: 'Community Management',
    description:
      'Construcción y gestión de comunidades digitales que fortalecen la relación con tu audiencia y generan engagement real.',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-blue-100',
    badges: ['Engagement', 'Crecimiento']
  },
  {
    id: 'consulting',
    title: 'Asesoría Personalizada',
    description:
      'Consultoría estratégica adaptada a las necesidades de tu marca para maximizar resultados y optimizar recursos.',
    icon: <PhoneIcon className="h-6 w-6" />,
    color: 'bg-green-100',
    badges: ['1:1', 'Seguimiento', 'Socias']
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description:
      'Diseño de identidad de marca: manual corporativo, logotipo, colorimetría y plantillas de contenido que atraen a tu audiencia ideal.',
    icon: <Share2Icon className="h-6 w-6" />,
    color: 'bg-purple-100',
    badges: ['Estrategia', 'Contenido']
  }
];

export function CompactServices() {
  return (
    <section className="w-full py-12 md:py-20">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
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
  );
}

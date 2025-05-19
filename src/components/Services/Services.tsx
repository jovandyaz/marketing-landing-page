import Link from 'next/link';
import { Service } from './Service.types';
import { colorMap } from './constants';
import { Badge } from '@/components';
import { SINERGIA_WHATSAPP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, BookOpenIcon, PhoneIcon, Share2Icon, UsersIcon } from 'lucide-react';
import { motion } from 'motion/react';

const services: Service[] = [
  {
    id: 'Service, workshops',
    title: 'Talleres Formativos',
    description:
      'Aprende a monetizar tus redes sociales, domina Canva para crear diseños profesionales, desarrolla pilares de contenido efectivos y descubre estrategias digitales avanzadas para potenciar tu marca.',
    icon: <BookOpenIcon className="h-6 w-6" />,
    color: 'bg-yellow-100',
    badges: ['Presencial', 'Online', 'Canva'],
    popular: true
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
    badges: ['1:1', 'Seguimiento', 'Socias']
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description:
      'Desarrollo tu identidad de marca completa: manual corporativo, logotipo, colorimetría y diseño de empaques, junto con plantillas de contenido impactante que atraen a tu audiencia ideal.',
    icon: <Share2Icon className="h-6 w-6" />,
    color: 'bg-purple-100',
    badges: ['Estrategia', 'Contenido']
  }
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-secondary-600 mb-4 block tracking-wider uppercase">Servicios</span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Soluciones para cada <br className="hidden md:block" />
            <span className="relative">
              emprendimiento
              <motion.div
                className="bg-secondary-500 absolute -bottom-1 left-0 h-1 w-0"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Diseñados para potenciar tu marca y conectar con tu audiencia ideal
          </p>
        </motion.div>

        <div className="grid gap-16 md:gap-24">
          {services.map((service, index) => {
            // Define style variables based on service
            const isEven = index % 2 === 0;
            const colorKey =
              index % 4 === 0
                ? 'primary'
                : index % 4 === 1
                  ? 'secondary'
                  : index % 4 === 2
                    ? 'tertiary'
                    : 'success';

            const colors = colorMap[colorKey];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={cn(
                  'flex flex-col gap-8',
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
              >
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ x: isEven ? -20 : 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={cn('relative aspect-[3/2] overflow-hidden rounded-2xl', colors.bg)}
                  >
                    <div
                      className={cn(
                        'absolute inset-0 rounded-2xl bg-gradient-to-br',
                        colors.gradient
                      )}
                    />

                    <motion.div
                      className={cn(
                        'absolute flex h-16 w-16 items-center justify-center rounded-full',
                        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        colors.bg,
                        colors.border,
                        'border-2 shadow-lg'
                      )}
                      initial={{ scale: 1 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: 5,
                        transition: {
                          duration: 0.3,
                          ease: 'easeOut'
                        }
                      }}
                    >
                      <div className={colors.accent}>{service.icon}</div>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="flex flex-col justify-center md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.badges.map(badge => (
                        <Badge
                          key={badge}
                          className={cn('px-3 py-1.5 text-sm', colors.bg, colors.accent)}
                        >
                          #{badge}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      className="mt-8"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href={SINERGIA_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium"
                      >
                        <span className={colors.accent}>Conocer más</span>
                        <ArrowRightIcon className={cn('h-5 w-5', colors.accent)} />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  categories: string[];
  results: string;
  link: string;
};

export const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'social', name: 'Social Media' },
    { id: 'paid', name: 'Publicidad' },
    { id: 'creative', name: 'Creatividad' },
    { id: 'influencer', name: 'Influencers' }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'case1',
      title: 'Campaña de Crecimiento Exponencial',
      client: 'Marca de Moda',
      description: 'Estrategia integral para aumentar seguidores y conversiones en redes sociales.',
      image: '/images/case-study-1.jpg',
      categories: ['social', 'paid'],
      results: 'Aumento de ingresos en 10x con Social Media y Search',
      link: '/casos/caso-1'
    },
    {
      id: 'case2',
      title: 'Reposicionamiento de Marca',
      client: 'Productos de Belleza',
      description: 'Campaña con enfoque en video para establecer nueva posición de marca.',
      image: '/images/case-study-2.jpg',
      categories: ['creative', 'influencer'],
      results: 'Alcance de 9.4M usuarios y 1.4M visualizaciones',
      link: '/casos/caso-2'
    },
    {
      id: 'case3',
      title: 'Engagement Orgánico',
      client: 'Marca de Alimentos',
      description: 'Estrategia de contenido para maximizar el engagement en plataformas sociales.',
      image: '/images/case-study-3.jpg',
      categories: ['social', 'creative'],
      results: 'Incremento del 97% en interacciones año tras año',
      link: '/casos/caso-3'
    }
  ];

  const filteredCaseStudies =
    activeCategory === 'all'
      ? caseStudies
      : caseStudies.filter(study => study.categories.includes(activeCategory));

  return (
    <section id="casos" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Nuestros <span className="text-primary-600">Casos de Éxito</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Historias de transformación digital y crecimiento de marcas con las que hemos trabajado
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {study.categories.map(cat => {
                    const category = categories.find(c => c.id === cat);
                    return (
                      <span
                        key={cat}
                        className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800"
                      >
                        {category?.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{study.title}</h3>
                <p className="text-primary-600 mb-1 text-sm font-medium">{study.client}</p>
                <p className="mb-4 text-gray-600">{study.description}</p>
                <div className="mb-4 flex items-center">
                  <svg
                    className="text-secondary-500 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{study.results}</span>
                </div>
                <Link
                  href={study.link}
                  className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-medium"
                >
                  Ver caso completo
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/casos"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Ver todos los casos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

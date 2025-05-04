'use client';

import React from 'react';
import Link from 'next/link';
import { contact } from '@/constants';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contacto" className="bg-primary-600 w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Hablemos de <span className="text-secondary-400">tu proyecto</span>
          </h2>
          <p className="text-primary-100 mx-auto max-w-2xl">
            Cuéntanos sobre tu marca y tus objetivos para que podamos ayudarte a alcanzar el
            siguiente nivel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-xl bg-white p-8 shadow-xl md:p-12"
        >
          <div className="bg-secondary-400/20 absolute -top-20 -right-20 h-40 w-40 rounded-full"></div>
          <div className="bg-primary-400/20 absolute -bottom-20 -left-20 h-40 w-40 rounded-full"></div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Contacto Directo</h3>
                <p className="text-gray-600">
                  Estamos aquí para responder tus preguntas y discutir cómo podemos colaborar para
                  hacer crecer tu marca.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="text-primary-600 mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="text-primary-600 mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Teléfono</p>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="text-primary-600 mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Ubicación</p>
                      <p className="text-gray-600">{contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">¿Listo para comenzar?</h3>
                <p className="text-gray-600">
                  Completa nuestro formulario de contacto y te responderemos en menos de 24 horas.
                </p>

                <div className="mt-6 flex flex-col space-y-4">
                  <Link
                    href="/contact"
                    className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    Contactar ahora
                  </Link>

                  <Link
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:ring-primary-500 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    Agendar una llamada
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

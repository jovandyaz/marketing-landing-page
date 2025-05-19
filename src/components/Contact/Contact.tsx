'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-12 md:py-20">
      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-sm md:p-12 dark:bg-gray-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        >
          <div className="bg-secondary-400/20 dark:bg-secondary-600/10 absolute -top-20 -right-20 h-40 w-40 rounded-full"></div>
          <div className="bg-primary-400/20 dark:bg-primary-600/10 absolute -bottom-20 -left-20 h-40 w-40 rounded-full"></div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-3">
              <div className="flex w-full max-w-2xl flex-col justify-center md:col-span-3 md:col-start-1 md:mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 opacity-10">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-500">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    ¿List@ para comenzar?
                  </h3>
                  <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                    Completa el formulario de contacto y te responderé a la brevedad.
                  </p>

                  <div className="mt-8 flex flex-col space-y-4">
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group w-full transform transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Link href="/contact">
                        <span className="flex items-center justify-center font-medium">
                          <span className="mr-2">Contáctame ahora</span>
                          <svg
                            className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-gray-50 px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                          o
                        </span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center justify-center">
                          <svg
                            className="text-primary-500 mr-2 h-5 w-5"
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
                          Agenda una llamada
                        </span>
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

'use client';

import { ImagesSlider } from '@/components/ui';
import { motion } from 'framer-motion';

export default function Home() {
  const images = [
    'https://images.unsplash.com/photo-1714914371645-059443708cdf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1641577052462-afdedd6c9632?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  return (
    <main className="w-screen flex flex-col">
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <ImagesSlider className="h-screen w-screen" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="z-50 flex flex-col  justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Empoderando emprendedoras
            </motion.p>
            <button className="px-4 py-2 backdrop-blur-sm border bg-pink-300/10 border-pink-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Únete →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-pink-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our Platform</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </main>
  );
}

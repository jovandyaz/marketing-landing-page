'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { PUBLIC_ROUTES } from '@/config/routes';
import { useUser } from '@clerk/nextjs';
import { motion } from 'motion/react';

export default function TalleresPage() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    redirect(PUBLIC_ROUTES.LOG_IN);
  }

  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-fullflex-col flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted rounded-lg p-6 text-center"
        >
          <div className="relative">
            <div className="from-primary/30 via-secondary/30 to-tertiary/30 animate-gradient absolute -inset-1 rounded-lg bg-gradient-to-r opacity-75 blur"></div>
            <div className="bg-card relative rounded-lg p-6">
              <h3 className="mb-4 text-xl font-semibold">Seguimos en construcción</h3>
              <p className="text-muted-foreground mb-6">
                Estamos trabajando para ofrecerte la mejor experiencia en tus talleres. Pronto
                podrás acceder a todo el contenido de tus talleres desde aquí.
              </p>
              <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="bg-muted relative mb-8 flex h-32 w-32 items-center justify-center rounded-full">
        <span className="text-6xl font-bold">404</span>
        <div className="animate-blob bg-primary/20 absolute -z-10 h-40 w-40 rounded-full blur-xl"></div>
        <div className="animate-blob animation-delay-2000 bg-tertiary/20 absolute -z-10 h-40 w-40 rounded-full blur-xl"></div>
      </div>

      <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">Página no encontrada</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild variant="default" size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver atrás
        </Button>
      </div>
    </div>
  );
}

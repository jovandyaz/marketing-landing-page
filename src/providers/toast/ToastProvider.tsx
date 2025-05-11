'use client';

import React from 'react';
import { Toaster } from 'sonner';

interface ToastProviderProps {
  children: React.ReactNode;
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'bottom-center';
}

export function ToastProvider({ children, position = 'bottom-right' }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster position={position} />
    </>
  );
}

'use client';

import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

interface ClerkAuthProviderProps {
  children: React.ReactNode;
}

export function ClerkAuthProvider({ children }: ClerkAuthProviderProps) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: '#E37FFF',
          colorTextOnPrimaryBackground: 'white',
          colorText: '#272727',
          colorTextSecondary: '#969696',
          colorBackground: 'white',
          colorDanger: '#f44336',
          colorSuccess: '#4CAF50',
          colorWarning: '#FFE169',
          borderRadius: '0.625rem'
        },
        elements: {
          formButtonPrimary: 'bg-primary text-white hover:bg-primary/90 font-medium',
          footerActionLink: 'text-primary hover:text-primary/90 font-medium',
          formFieldInput:
            'border border-gray-200 focus:border-primary focus:ring-primary rounded-md',
          card: 'rounded-xl shadow-none border-0 bg-white',
          headerTitle: 'text-gray-900 font-bold',
          headerSubtitle: 'text-gray-600',
          socialButtonsBlockButton: 'border border-gray-200 hover:bg-gray-50 text-gray-900',
          formField__label: 'font-medium text-gray-700',
          modalCloseButton: 'text-gray-500 hover:bg-gray-100 focus:outline-none',
          identityPreview: 'border border-gray-200 focus:border-primary',
          userPreview: 'hover:bg-gray-50',
          userButtonPopoverCard: 'rounded-xl shadow-md border border-gray-100',
          userButtonPopoverActionButton: 'text-gray-700 hover:bg-gray-50',
          userButtonPopoverActionButtonIcon: 'text-gray-500',
          userButtonAvatarBox: 'border border-gray-200 shadow-sm',

          // Profile page specific styles
          userProfilePage: 'w-full border-0 shadow-none p-0',
          userProfilePageBleed: 'p-0',
          userProfileSectionTitle: 'text-xl font-bold text-gray-900',
          userProfileSectionTitleText: 'border-0 pb-2',
          userProfilePrimarySection: 'p-0 md:p-4',
          userProfilePrimarySectionTitle: 'text-lg font-semibold text-gray-800',
          userProfile__detail: 'mt-4',
          userProfile__detailLabel: 'text-sm font-medium text-gray-600',
          userProfile__detailValue: 'text-base font-medium text-gray-900',
          accordionContent: 'p-0',
          profileSectionContent: 'p-0',
          pageScrollBox: 'p-0',
          page: 'p-0',
          avatarUploader: 'mx-auto mb-4',
          avatarBox: 'rounded-full overflow-hidden border border-gray-200',

          // Navigation and general elements
          navbar: 'hidden',
          navbarMobileMenu: 'hidden',
          navbarButton: 'hidden',
          breadcrumbs: 'hidden',
          accordion: 'border-0',
          accordionTriggerButton: 'hidden',
          accordionTrigger: 'hidden',
          navbarMobileMenuButton: 'hidden'
        },
        layout: {
          socialButtonsVariant: 'blockButton',
          socialButtonsPlacement: 'top',
          showOptionalFields: true,
          shimmer: true
        }
      }}
      localization={{
        socialButtonsBlockButton: 'Continuar con {{provider}}',
        dividerText: 'o',
        formFieldLabel__emailAddress: 'Correo electrónico',
        formFieldLabel__password: 'Contraseña',
        formFieldLabel__firstName: 'Nombre',
        formFieldLabel__lastName: 'Apellido',
        formButtonPrimary: 'Continuar',
        signIn: {
          start: {
            title: 'Inicia sesión en Sinergia',
            subtitle: 'para continuar con tu experiencia'
          }
        },
        signUp: {
          start: {
            title: 'Crea tu cuenta',
            subtitle: 'para empezar con Sinergia'
          }
        },
        userButton: {
          action__signOut: 'Cerrar sesión',
          action__manageAccount: 'Gestionar cuenta'
        }
      }}
    >
      {children}
    </ClerkProvider>
  );
}

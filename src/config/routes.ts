/**
 * Application routes configuration
 * Centralized route definitions to avoid magic strings throughout the codebase
 */

export const PUBLIC_ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOG_IN: '/log-in',
  SIGN_UP: '/sign-up'
} as const;

export const PROTECTED_ROUTES = {
  ADMIN: '/admin',
  ADMIN_WILDCARD: '/admin(.*)',
  DASHBOARD: '/dashboard',
  DASHBOARD_WILDCARD: '/dashboard(.*)',
  SETTINGS: '/settings',
  SETTINGS_WILDCARD: '/settings(.*)',
  WORKSHOPS: '/workshops',
  WORKSHOPS_WILDCARD: '/workshops(.*)'
} as const;

export type PublicRoutePath = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
export type ProtectedRoutePath = (typeof PROTECTED_ROUTES)[keyof typeof PROTECTED_ROUTES];
export type AppRoutePath = PublicRoutePath | ProtectedRoutePath;

export interface NavItem {
  name: string;
  link: AppRoutePath;
  highlighted?: boolean;
}

export const BASE_NAV_ITEMS: NavItem[] = [
  {
    name: 'Servicios',
    link: PUBLIC_ROUTES.SERVICES
  },
  {
    name: 'Contacto',
    link: PUBLIC_ROUTES.CONTACT,
    highlighted: true
  }
];

export const AUTHENTICATED_NAV_ITEMS: NavItem[] = [
  BASE_NAV_ITEMS[0],
  {
    name: 'Talleres',
    link: PROTECTED_ROUTES.WORKSHOPS
  },
  BASE_NAV_ITEMS[1]
];

export const getProtectedRoutePatterns = (): string[] => [
  PROTECTED_ROUTES.ADMIN_WILDCARD,
  PROTECTED_ROUTES.DASHBOARD_WILDCARD,
  PROTECTED_ROUTES.SETTINGS_WILDCARD,
  PROTECTED_ROUTES.WORKSHOPS_WILDCARD
];

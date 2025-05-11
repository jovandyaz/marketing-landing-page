# Providers Architecture

This directory contains all the providers used in the application, organized following the principles of Screaming Architecture and the Single Responsibility Principle.

## Structure

```markdown
providers/
├── AppProviders.tsx       # Main provider composition
├── README.md             # This documentation
├── analytics/            # Analytics providers
│   ├── AnalyticsProvider.tsx
│   └── index.ts
├── clerk/                # Authentication providers
│   ├── ClerkAuthProvider.tsx
│   └── index.ts
├── index.ts              # Main exports
└── toast/                # Notification providers
    ├── ToastProvider.tsx
    └── index.ts
```

## Usage

In your `layout.tsx` file, wrap your application with the `AppProviders` component:

```tsx
import { AppProviders } from '@/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppProviders>
          {/* Your application content */}
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
```

## Adding a New Provider

To add a new provider:

1. Create a new directory under `providers/` with the name of your provider category (e.g., `theme/`)
2. Create a provider component file (e.g., `ThemeProvider.tsx`)
3. Create an `index.ts` file to export your provider
4. Update `AppProviders.tsx` to include your new provider

Example:

```tsx
// providers/theme/ThemeProvider.tsx
'use client';

import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <div className="theme-provider">
      {children}
    </div>
  );
}

// providers/theme/index.ts
export * from './ThemeProvider';

// Update AppProviders.tsx
import { ThemeProvider } from './theme';

// Add it to the provider composition
<ClerkAuthProvider>
  <ThemeProvider>
    <AnalyticsProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AnalyticsProvider>
  </ThemeProvider>
</ClerkAuthProvider>
```

## Best Practices

1. Each provider should handle only one concern (Single Responsibility Principle)
2. Providers should be composable and not depend on each other
3. Keep configuration values in environment variables or constants
4. Use TypeScript for type safety
5. Add proper JSDoc comments to explain complex configuration options

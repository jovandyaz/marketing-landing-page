'use client';

import { SignIn } from '@clerk/nextjs';

export default function LogInPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn
          path="/log-in"
          routing="path"
          appearance={{
            elements: {
              rootBox: 'mx-auto w-full',
              card: 'shadow-xl border border-gray-100'
            }
          }}
        />
      </div>
    </div>
  );
}

'use client';

import { UserProfile } from '@clerk/nextjs';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <div className="flex-1 px-4 pt-6">
        <UserProfile path="/profile" routing="path" />
      </div>
    </div>
  );
}

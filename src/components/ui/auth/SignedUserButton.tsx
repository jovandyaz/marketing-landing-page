'use client';

import { SignedIn, UserButton } from '@clerk/nextjs';
import { useIsMobile } from '@jovandyaz/react-hooks';

export const SignedUserButton = ({
  redirectToProfile = false
}: {
  redirectToProfile?: boolean;
}) => {
  const isMobile = useIsMobile();

  const scaleClass = isMobile
    ? 'rounded-full overflow-hidden scale-100'
    : 'rounded-full overflow-hidden scale-150';

  return (
    <SignedIn>
      <UserButton
        appearance={{
          elements: {
            userButtonTrigger: scaleClass
          }
        }}
        {...(redirectToProfile && {
          afterSignOutUrl: '/'
        })}
      />
    </SignedIn>
  );
};

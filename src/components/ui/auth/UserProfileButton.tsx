import { Button } from '@/components/ui';
import { SignInButton, SignedOut } from '@clerk/nextjs';
import { UserIcon } from 'lucide-react';

export const UserProfileButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <SignedOut>
      <SignInButton mode="modal">
        <Button
          onClick={onClick}
          variant="outline"
          size="icon"
          className="group relative flex h-12 w-12 items-center justify-center overflow-hidden bg-white p-0 transition-all duration-300 hover:shadow-md"
        >
          <UserIcon
            size={32}
            className="group-hover:text-primary text-gray-800 transition-colors duration-300"
            aria-hidden="true"
          />
        </Button>
      </SignInButton>
    </SignedOut>
  );
};

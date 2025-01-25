import { Button } from '@/components/ui';
import { motion } from 'motion/react';

interface MenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuButton = ({ isOpen, toggle }: MenuButtonProps) => {
  return (
    <Button
      onClick={toggle}
      className="relative z-10 flex h-10 w-10 items-center justify-center md:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-current"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 4 L 22 4"
          variants={{
            open: { d: 'M 3 20 L 21 3' },
            closed: { d: 'M 2 4 L 22 4' }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 12 L 22 12"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M 2 20 L 22 20"
          variants={{
            open: { d: 'M 3 3 L 21 20' },
            closed: { d: 'M 2 20 L 22 20' }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.svg>
    </Button>
  );
};

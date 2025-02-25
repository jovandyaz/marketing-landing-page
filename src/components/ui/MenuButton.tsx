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
      variant="ghost"
      className="relative z-10 flex h-12 w-12 items-center justify-center md:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      size="icon"
    >
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="text-current"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 10 L 30 10"
          variants={{
            open: { d: 'M 4 28 L 28 4' },
            closed: { d: 'M 2 10 L 30 10' }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 22 L 30 22"
          variants={{
            open: { d: 'M 4 4 L 28 28' },
            closed: { d: 'M 2 22 L 30 22' }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.svg>
    </Button>
  );
};

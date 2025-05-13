import { EasingType } from './ScrollReveal';
import { Variants, motion } from 'motion/react';

interface ScrollItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  easing?: EasingType;
}

export const ScrollItem = ({
  children,
  className = '',
  delay = 0,
  easing = 'easeOut'
}: ScrollItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easing,
        delay
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

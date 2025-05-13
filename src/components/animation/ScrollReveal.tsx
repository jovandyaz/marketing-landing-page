'use client';

import { useEffect, useRef } from 'react';
import { Variants, motion, useAnimation, useInView } from 'motion/react';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip';

export type EasingType =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'circIn'
  | 'circOut'
  | 'circInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'anticipate';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  easing?: EasingType;
  stagger?: boolean;
  staggerDelay?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  easing = 'easeOut',
  stagger = false,
  staggerDelay = 0.2,
  className = 'w-full'
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const getVariants = (): Variants => {
    const baseTransition = {
      duration,
      delay,
      ease: easing,
      ...(stagger && { staggerChildren: staggerDelay })
    };

    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition
          }
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition
          }
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition
          }
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: baseTransition
          }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition
          }
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.2 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: baseTransition
          }
        };
      case 'flip':
        return {
          hidden: { opacity: 0, rotateX: 90 },
          visible: {
            opacity: 1,
            rotateX: 0,
            transition: {
              ...baseTransition,
              duration: duration * 1.2 // Slightly longer for flip animation
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: baseTransition
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

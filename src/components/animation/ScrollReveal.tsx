'use client';

import { useEffect, useRef } from 'react';
import { UseInViewOptions, Variants, motion, useAnimation, useInView } from 'motion/react';

export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip'
  | 'slide-up'
  | 'slide-down'
  | 'scale-up'
  | 'blur-in';

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
  | 'anticipate'
  | 'spring';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  easing?: EasingType;
  stagger?: boolean;
  staggerDelay?: number;
  className?: string;
  viewport?: UseInViewOptions;
}

export const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  easing = 'easeOut',
  stagger = false,
  staggerDelay = 0.2,
  className = 'w-full',
  viewport = { once: true, amount: 0.1 }
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const getVariants = (): Variants => {
    // Use spring physics for more natural animation when specified
    const springTransition = {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 1,
      delay
    };

    const baseTransition = {
      duration,
      delay,
      ease: easing === 'spring' ? undefined : easing,
      ...(stagger && { staggerChildren: staggerDelay })
    };

    const transition = easing === 'spring' ? springTransition : baseTransition;

    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition
          }
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition
          }
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition
          }
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: {
            opacity: 1,
            x: 0,
            transition
          }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition
          }
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.2 },
          visible: {
            opacity: 1,
            scale: 1,
            transition
          }
        };
      case 'flip':
        return {
          hidden: { opacity: 0, rotateX: 90 },
          visible: {
            opacity: 1,
            rotateX: 0,
            transition: {
              ...transition,
              duration: duration * 1.2 // Slightly longer for flip animation
            }
          }
        };
      case 'slide-up':
        return {
          hidden: { y: 100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              ...transition,
              opacity: { duration: duration * 0.3, delay }
            }
          }
        };
      case 'slide-down':
        return {
          hidden: { y: -100, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              ...transition,
              opacity: { duration: duration * 0.3, delay }
            }
          }
        };
      case 'scale-up':
        return {
          hidden: { scale: 0.4, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              ...transition,
              scale: { duration: duration * 1.2, delay }
            }
          }
        };
      case 'blur-in':
        return {
          hidden: { filter: 'blur(20px)', opacity: 0 },
          visible: {
            filter: 'blur(0px)',
            opacity: 1,
            transition: {
              ...transition,
              filter: { duration: duration * 1.5, delay }
            }
          }
        };
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition
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

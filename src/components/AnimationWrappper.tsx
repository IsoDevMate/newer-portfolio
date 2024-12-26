// src/components/AnimationWrapper/AnimationWrapper.tsx
import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  customVariants?: Variants;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  className = "",
  threshold = 0.4,
  delay = 0,
  duration = 0.9,
  staggerChildren = 0.7,
  customVariants
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  });

  const defaultVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        staggerChildren,
      }
    }
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const childVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
  }
};

export const fadeInUpVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };
  
  export const staggerContainerVariants: Variants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
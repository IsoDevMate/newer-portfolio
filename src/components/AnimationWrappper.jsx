// src/components/AnimationWrapper/AnimationWrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export const AnimationWrapper = ({ children, className = "", threshold = 0.4, delay = 0, duration = 0.5, staggerChildren = 0.4, customVariants }) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce: true
    });
    const defaultVariants = {
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
    return (<motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>);
};
export const childVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
    }
};
export const fadeInUpVariants = {
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
export const staggerContainerVariants = {
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

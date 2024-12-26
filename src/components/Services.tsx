import React from 'react';
import { ServiceCard } from './servicecard';
import { Cloud, Code, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimationWrapper, childVariants } from './AnimationWrappper';

interface Services {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Services = () => {
  const services: Services[] = [
    {
      icon: <Cloud className="text-blue-400" />,
      title: 'Cloud Architecture',
      description: 'AWS certified solutions including EC2, S3, RDS deployment, and infrastructure management using Terraform.'
    },
    {
      icon: <Code className="text-green-400" />,
      title: 'Full Stack Development',
      description: 'End-to-end web development using React, Node.js, and modern JavaScript frameworks with responsive design.'
    },
    {
      icon: <Database className="text-purple-400" />,
      title: 'Database Management',
      description: 'Expert handling of both SQL and NoSQL databases including PostgreSQL, MongoDB, and Firebase Cloud Firestore.'
    },
    {
      icon: <Shield className="text-amber-400" />,
      title: 'Security & DevOps',
      description: 'Implementation of secure cloud infrastructure with CI/CD pipelines using GitHub Actions and Docker.'
    }
  ];

  return (
    <AnimationWrapper 
      className="py-20 px-6 bg-gray-900/50 backdrop-blur-sm"
      threshold={0.2}
      staggerChildren={0.3}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          variants={childVariants}
          className="text-center text-3xl md:text-4xl mb-4 text-white/90 font-heading"
        >
          Services<span className="text-blue-400">.</span>
        </motion.h2>
        
        <motion.p
          variants={childVariants}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Leveraging cloud expertise and full-stack development skills to deliver scalable solutions
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div key={service.title} variants={childVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationWrapper>
  );
};
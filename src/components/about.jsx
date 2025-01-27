import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Chip } from '@material-tailwind/react';
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0
    }
};

export const AboutSection = () => {
    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true
    });
    const workTools = [
        "AWS", "Python", "JavaScript", "React", "Node.js", "GraphQL",
        "Firebase", "Docker", "Terraform", "PostgreSQL", "MongoDB",
        "Git", "Linux", "REST APIs", "SQL"
    ];
    const certifications = [
        "AWS Certified Cloud Practitioner",
        "CCNA 1 Networking Certificate",
        "AfricanTech Girl Winner Hackathon"
    ];
    return (<motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-xl text-gray-100">
      <motion.h1 variants={itemVariants} className="text-4xl font-heading text-amber-50 mb-8">
        About<span className="text-blue-400">.</span>
      </motion.h1>

      <motion.div variants={itemVariants} className="flex gap-4 mb-6">
        <div className="h-10 w-10 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
          B
        </div>
        <div className="flex-1">
          <p className="text-gray-300 mb-4">
            Hey! I'm Barack, an AWS certified cloud practitioner with a passion for full-stack development. I specialize in cloud computing and web development, bringing together the best of both worlds to create scalable solutions.
          </p>
          <p className="text-gray-300 mb-4">
            I've worked with Yafreeka Entertainment PLC, where I developed payment solutions and implemented Firebase cloud functions. My experience spans from front-end development with React to cloud infrastructure management with AWS.
          </p>
          <p className="text-gray-300">
            I'm currently seeking opportunities where I can leverage my AWS expertise and full-stack development skills to drive innovation and business growth. Let's connect and build something amazing together! 🚀
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-sm">
            💼
          </div>
          <span className="text-gray-300">Technical Stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {workTools.map((tool) => (<Chip key={tool} value={tool} className="bg-gray-800 text-gray-300 font-normal"/>))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-sm">
            🏆
          </div>
          <span className="text-gray-300">Certifications</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (<Chip key={cert} value={cert} className="bg-gray-800 text-gray-300 font-normal"/>))}
        </div>
      </motion.div>
    </motion.div>);
};

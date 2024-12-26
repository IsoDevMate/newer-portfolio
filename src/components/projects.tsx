import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  ExternalLink, Folder, Star } from 'lucide-react';
import { AnimationWrapper, childVariants } from './AnimationWrappper';
import  { GitHub } from 'react-feather';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
  image?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'cloud';
}

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | Project['category']>('all');

  const projects: Project[] = [
    {
      title: "Yafreeka Payment Integration",
      description: "Implemented a secure payment system for Yafreeka platform using React and Firebase, enabling seamless transaction processing and improving user experience.",
      technologies: ["React", "Firebase", "Stripe", "TypeScript"],
      liveLink: "https://yafreeka.com",
      featured: true,
      category: 'frontend'
    },
    {
      title: "Smart Diffuser System",
      description: "Developed an IoT-based smart diffuser control system for BeeMultiscents, integrating device management and mobile app connectivity.",
      technologies: ["IoT", "React Native", "Node.js", "MongoDB"],
      featured: true,
      category: 'fullstack'
    },
    {
      title: "Elastic Web Server Infrastructure",
      description: "Designed and implemented a fully elastic Apache Web Server solution using AWS services, featuring auto-scaling and load balancing.",
      technologies: ["AWS", "Terraform", "Apache", "Docker"],
      featured: true,
      category: 'cloud'
    },
    {
      title: "BertLorBloom Academy App",
      description: "Created an educational platform with real-time updates and user management system for course delivery and student tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      githubLink: "https://github.com/yourusername/bertlorbloom-academy",
      liveLink: "https://academy.bertlorbloom.com",
      featured: false,
      category: 'fullstack'
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'cloud', label: 'Cloud' },
  ];

  return (
    <AnimationWrapper className="py-24 px-6 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={childVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-white/90 mb-4">
            Projects<span className="text-blue-400">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in web development and cloud computing
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          variants={childVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id as typeof filter)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${filter === category.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={childVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={childVariants}
              className="group relative bg-gray-800/50 rounded-lg p-6 border border-gray-700/30 backdrop-blur-sm
                        hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 text-blue-400">
                  <Folder size={40} />
                </div>
                <div className="flex gap-4 text-gray-400">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      <GitHub size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-heading text-white/90 mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.featured && (
                <div className="absolute top-3 right-3 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimationWrapper>
  );
};
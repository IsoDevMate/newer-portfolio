import React, { FC } from 'react';
import { AnimationWrapper, childVariants } from './AnimationWrappper';
import { motion } from 'framer-motion';

type SelectedCompany = 'Yafreeka PlatForm Ltd' | 'BerLorBloom' | 'BeeMultiscents' | 'AWS Restart Trainee';

interface Experience {
    [key: string]: {
      title: string;
      location: string;
      period?: string;
      duties: string[];
    };
    }

export const ExperienceSection:FC = () => {
  const [selectedCompany, setSelectedCompany] = React.useState<SelectedCompany>('BeeMultiscents');

  const experiences: Experience = {
    'Yafreeka PlatForm Ltd': {
      title: 'Fullstack Web Developer',
      location: 'Nairobi, Kenya ',
      period: 'Oct 2024 – Feb 2024',
      duties: [
        'Implemented a payments page using React framework, improving transaction processing efficiency.',
        'Migrated the application to Firebase for enhanced scalability and performance.',
        'Developed Firebase Cloud Functions to automate backend processes, demonstrating expertise in serverless architecture.',
      ],
    },
    'BerLorBloom': {
      title: 'Web and Mobile App Developer',
      location: 'Remote',
      period: 'April 2024 – July 2024',
      duties: [
        'Built and optimized the BertLorBloom website for performance and responsiveness.',
        'Developed an Academy App with real-time data updates and user management.',
        'Debugged and resolved performance issues for seamless functionality.',
        'Collaborated with designers and stakeholders to ensure branding and user experience alignment.',
      ],
    },
    'BeeMultiscents': {
      title: 'Smart Diffuser Developer',
      location: 'Hybrid,Chandaria Business Park, Kenyatta university',
      period: 'September 2024 – December 2024',
      duties: [
        'Designed and built a smart diffuser control system integrating IoT technologies.',
        'Developed and tested firmware to enable connectivity between devices and mobile applications.',
        'Implemented secure communication protocols for IoT devices.',
      ],
    },
    'AWS Restart Trainee': {
      title: 'AWS Cloud Practitioner Trainee',
      location: 'Nairobi, Kenya',
      period: 'May 2024 – August 2024',
      duties: [
        'Gained proficiency in setting up and managing Amazon S3 buckets and policies.',
        'Deployed and managed Amazon RDS for scalable relational database solutions.',
        'Launched and configured Amazon EC2 instances with load balancers and auto-scaling.',
        'Designed and implemented a fully elastic Apache Web Server solution using VPC, public/private subnets, NAT gateway, and internet gateway.',
      ],
    },
  };
  



  const companies = Object.keys(experiences) as SelectedCompany[];

  return (
    <AnimationWrapper
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
      threshold={0.2}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={childVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-white/90 mb-4">
            Experience<span className="text-blue-400">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A chronicle of my professional journey and the impactful projects I've worked on
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Company List */}
          <motion.div variants={childVariants} className="md:w-48">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`w-full text-left p-4 border-l-2 transition-all duration-300 hover:bg-gray-700/50 hover:text-blue-400
                  ${selectedCompany === company 
                    ? 'border-blue-400 text-blue-400 bg-gray-700/50'
                    : 'border-gray-700 text-gray-400'
                  }`}
              >
                {company}
              </button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div 
            variants={childVariants}
            className="flex-1 bg-gray-800/50 p-8 rounded-lg border border-gray-700/30 backdrop-blur-sm"
          >
            {experiences[selectedCompany] && (
              <>
                <h3 className="text-2xl mb-2 text-white/90">
                  {experiences[selectedCompany].title}
                  <span className="text-blue-400"> @ {selectedCompany}</span>
                </h3>
                <p className="text-gray-400 mb-6">
                  {experiences[selectedCompany].location}
                  {experiences[selectedCompany].period && (
                    <span className="block mt-1">{experiences[selectedCompany].period}</span>
                  )}
                </p>
                <ul className="space-y-4">
                  {experiences[selectedCompany].duties.map((duty, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1.5">▹</span>
                      <span className="text-gray-300">{duty}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </AnimationWrapper>
  );
};
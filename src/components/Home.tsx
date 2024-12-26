import React from 'react';
import { AboutSection } from './about';
import { ExperienceSection } from './experience';
import { Hero } from './Hero';
import { Brands } from './Brand';
import { Services } from './Services';
import { Contact } from './contact';
import { ProjectsSection } from './projects';


export const Home: React.FC  = () => {
    return (
        <div className="space-y-20">
            <Hero />
            <Brands />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          {/*  <Services />   */}
            <Contact />  
        </div>
    );
};


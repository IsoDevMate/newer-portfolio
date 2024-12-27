import React from 'react';
import { AboutSection } from './about';
import { ExperienceSection } from './experience';
import { Hero } from './Hero';
import { Brands } from './Brand';
import { Contact } from './contact';
import { ProjectsSection } from './projects';
export const Home = () => {
    return (<div className="space-y-20">
            <Hero />
            <Brands />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          {/*  <Services />   */}
            <Contact />  
        </div>);
};

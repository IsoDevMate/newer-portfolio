'use client';

import React, { Suspense } from 'react';
import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useFormState, useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);


const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

 const AccordionSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Accordion
      open={isOpen}
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <AccordionHeader
        onClick={() => setIsOpen(!isOpen)}
        className="transition-colors hover:text-blue-500"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="pt-0">
        {children}
      </AccordionBody>
    </Accordion>
  );
};

export const TermsOfService = () => {
  const [isPending, startTransition] = React.useTransition();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen py-12 px-4"
      >
        <Card
          className="max-w-4xl mx-auto"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardBody
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-6"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Terms of Service
            </Typography>

            <div className="space-y-4">
              <AccordionSection title="1. Acceptance of Terms">
                <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  By accessing and using this portfolio website, you accept and agree to be bound by the terms and provisions of this agreement.
                </Typography>
              </AccordionSection>

              <AccordionSection title="2. Use License">
                <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  Permission is granted to temporarily view the materials (information or software) on Barack Ouma's portfolio website for personal, non-commercial transitory viewing only.
                </Typography>
              </AccordionSection>

              <AccordionSection title="3. Intellectual Property Rights">
                <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Barack Ouma or its suppliers and protected by copyright and intellectual property laws.
                </Typography>
              </AccordionSection>

              <AccordionSection title="4. Restrictions">
                <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  You are specifically restricted from:
                </Typography>
                <List
                  className="mt-2"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <ListItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    Publishing any website material in any other media without permission
                  </ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Selling, sublicensing, and/or otherwise commercializing any website material</ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Publicly performing and/or showing any website material</ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Using this website in any way that impacts user access</ListItem>
                </List>
              </AccordionSection>

              <AccordionSection title="5. Disclaimer">
                <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                  The materials on Barack Ouma's portfolio website are provided on an 'as is' basis. Barack Ouma makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </Typography>
              </AccordionSection>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Suspense>
  );
};

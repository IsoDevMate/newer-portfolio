'use-client';
import React, { Suspense } from 'react';
import { Card, CardBody, Typography, List, ListItem, Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import { motion } from 'framer-motion';
const LoadingSpinner = () => (<div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>);
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};
const AccordionSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (<Accordion open={isOpen} className="mb-2 rounded-lg border border-blue-gray-100 px-4" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
      <AccordionHeader onClick={() => setIsOpen(!isOpen)} className="transition-colors hover:text-blue-500" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
        {title}
      </AccordionHeader>
      <AccordionBody className="pt-0">
        {children}
      </AccordionBody>
    </Accordion>);
};
export const PrivacyPolicy = () => {
    const [isPending, startTransition] = React.useTransition();
    return (<Suspense fallback={<LoadingSpinner />}>
      <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen py-12 px-4">
        <Card className="max-w-4xl mx-auto" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  <CardBody placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      <Typography variant="h2" color="blue-gray" className="mb-6" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              Privacy Policy
            </Typography>

            <div className="space-y-4">
              <AccordionSection title="1. Information Collection">
                <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  When you use the contact form on this portfolio website, we collect:
                </Typography>
                <List className="mt-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    First and last name
                  </ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    Email address
                  </ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    Message content
                  </ListItem>
                </List>
              </AccordionSection>

              <AccordionSection title="2. Use of Information">
                <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  The information collected is used solely for:
                </Typography>
                <List className="mt-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    Responding to your inquiries
                  </ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    Communicating about potential collaboration opportunities
                  </ListItem>
                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                    Improving website functionality and user experience
                  </ListItem>
                </List>
              </AccordionSection>

              <AccordionSection title="3. Data Protection">
                <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  Your data is protected through:
                </Typography>
                              <List className="mt-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Secure SSL encryption for all data transmission</ListItem>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Limited access to personal information</ListItem>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Regular security assessments and updates</ListItem>
                </List>
              </AccordionSection>

              <AccordionSection title="4. Data Retention">
                              <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  Contact form submissions are retained for a maximum of one year, after which they are automatically deleted unless ongoing communication necessitates retention.
                </Typography>
              </AccordionSection>

              <AccordionSection title="5. Your Rights">
                              <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>You have the right to:</Typography>
                              <List className="mt-2" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Request access to your personal data</ListItem>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Request correction or deletion of your personal data</ListItem>
                                  <ListItem placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>Withdraw your consent at any time</ListItem>
                </List>
              </AccordionSection>

              <AccordionSection title="6. Contact Information">
                              <Typography placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                  For any privacy-related questions or requests, please contact me at oumaduor5827@gmail.com
                </Typography>
              </AccordionSection>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </Suspense>);
};

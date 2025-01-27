'use client';
import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { MapPin } from "lucide-react";
import { motion } from 'framer-motion';
export const MapsSection = ({ location = "KAHAWA WENDANI", width = 600, height = 400, }) => {
    const encodedLocation = encodeURIComponent(location);
    const mapUrl = `https://maps.google.com/maps?width=${width}&height=${height}&hl=en&q=${encodedLocation}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;
    return (<section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
                  <Typography variant="h2" className="mb-4 text-3xl md:text-4xl text-white/90 font-heading" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
            Location<span className="text-blue-400">.</span>
          </Typography>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin size={20}/>
                      <Typography variant="lead" className="text-gray-400" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              Based in {location}, Kenya
            </Typography>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Card className="w-full max-w-[800px] mx-auto overflow-hidden bg-gray-800/50 backdrop-blur-sm" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
                      <CardBody className="p-0" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              <div className="relative w-full aspect-video">
                <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px] rounded-lg"></div>
                <iframe className="gmap_iframe w-full h-full rounded-lg" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={mapUrl} title="Google Maps Location" style={{
            filter: 'grayscale(1) invert(0.9)',
            mixBlendMode: 'luminosity'
        }}/>
              </div>
            </CardBody>
          </Card>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 text-center">
                      <Typography variant="small" className="text-gray-400" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>
              Feel free to reach out if you're in the area and would like to connect!
            </Typography>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .gmap_iframe {
          width: 100% !important;
          height: 100% !important;
          min-height: 400px;
        }
      `}</style>
    </section>);
};

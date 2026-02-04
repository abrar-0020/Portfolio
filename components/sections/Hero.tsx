'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { FadeIn } from '@/components/animations/Motion';

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Content */}
      <div className="container-custom section-padding text-center z-10">
        <FadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-display-xl font-display font-bold tracking-tight mb-6">
              Abrar Pasha
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-secondary mb-8 text-balance">
              AI-Assisted Developer & Blockchain Engineer
            </p>
            
            <p className="text-lg md:text-xl text-primary-secondary max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
              Building AI-powered and blockchain-enabled applications that solve real-world problems 
              with speed, accessibility, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-primary-text text-primary-bg rounded-full font-medium hover:bg-primary-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-primary-text text-primary-text rounded-full font-medium hover:bg-primary-soft transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </FadeIn>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-primary-text rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary-text rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { FadeIn } from '@/components/animations/Motion';

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary-bg">
      <div className="container-custom max-w-5xl">
        <FadeIn>
          <h2 className="text-display-md font-display font-bold mb-12 text-center">
            About
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-primary-secondary">
                I'm an AI-assisted developer and Computer Science Engineering student specializing in 
                <span className="text-primary-text font-medium"> Blockchain Technology</span> at Presidency University, Bangalore.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-primary-secondary">
                My focus is on building <span className="text-primary-text font-medium">AI-powered</span> and{' '}
                <span className="text-primary-text font-medium">blockchain-enabled applications</span> that 
                solve real-world problems with speed, accessibility, and innovation.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-primary-secondary">
                I specialize in <span className="text-primary-text font-medium">rapid prototyping</span>, 
                turning ideas into functional solutions quickly while maintaining quality and user experience.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-4 border-l-2 border-primary-border pl-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-secondary mb-1">
                  Location
                </h3>
                <p className="text-lg font-medium">Bangalore, India</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-secondary mb-1">
                  Education
                </h3>
                <p className="text-lg font-medium">B.Tech in Computer Science & Engineering</p>
                <p className="text-base text-primary-secondary">Blockchain Technology</p>
                <p className="text-sm text-primary-secondary mt-1">Presidency University • 2023 - Present</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-secondary mb-1">
                  Current Focus
                </h3>
                <p className="text-base text-primary-secondary">
                  AI Integration, Smart Contracts, Full-Stack Development
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

'use client';

import { FadeIn } from '@/components/animations/Motion';

const experience = [
  {
    role: 'AI Research Intern',
    company: 'Coding Jr',
    period: 'Jun 2025 - Sep 2025',
    description: 'Researched and developed AI-powered solutions, integrated machine learning models into applications, and contributed to AI-driven educational tools.',
    highlights: [
      'Implemented AI integrations for educational platforms',
      'Developed prototypes using AI APIs',
      'Collaborated on research projects',
    ],
  },
  {
    role: 'Blockchain Student',
    company: 'Presidency University',
    period: '2022 - Present',
    description: 'Specializing in Blockchain Technology within Computer Science Engineering program. Building decentralized applications and smart contracts.',
    highlights: [
      'Developed decentralized e-voting system',
      'Studied smart contract security',
      'Participated in blockchain hackathons',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-primary-bg">
      <div className="container-custom max-w-4xl">
        <FadeIn>
          <h2 className="text-display-md font-display font-bold mb-16 text-center">
            Experience
          </h2>
        </FadeIn>
        
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <FadeIn key={exp.role} delay={index * 0.1}>
              <div className="relative pl-8 border-l-2 border-primary-border hover:border-primary-accent transition-colors">
                <div className="absolute w-4 h-4 bg-primary-text rounded-full -left-[9px] top-2" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-semibold text-primary-text mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-primary-secondary font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-primary-secondary uppercase tracking-wider">
                    {exp.period}
                  </p>
                </div>
                
                <p className="text-primary-secondary leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-primary-secondary flex items-start">
                      <span className="text-primary-accent mr-2">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { FadeIn } from '@/components/animations/Motion';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Blockchain Technology',
    institution: 'Presidency University',
    location: 'Bangalore',
    period: '2023 - Present',
    highlights: [
      'Developed decentralized e-voting system',
      'Studied smart contract security',
      'Participated in blockchain hackathons',
    ],
  },
  {
    degree: 'Pre-University College (PUC)',
    institution: 'Presidency PU College',
    location: 'Bangalore',
    period: 'Completed',
    score: '80%',
  },
  {
    degree: 'High School',
    institution: 'Bharath English High School',
    location: 'Bangalore',
    period: 'Completed',
    score: '86%',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-primary-soft">
      <div className="container-custom max-w-4xl">
        <FadeIn>
          <h2 className="text-display-md font-display font-bold mb-16 text-center">
            Education
          </h2>
        </FadeIn>
        
        <div className="space-y-12">
          {education.map((edu, index) => (
            <FadeIn key={edu.degree} delay={index * 0.1}>
              <div className="relative pl-8 border-l-2 border-primary-border hover:border-primary-accent transition-colors">
                <div className="absolute w-4 h-4 bg-primary-text rounded-full -left-[9px] top-2" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-semibold text-primary-text mb-1">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <p className="text-lg text-primary-secondary font-medium mb-1">
                      {edu.specialization}
                    </p>
                  )}
                  <p className="text-lg text-primary-text font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="text-sm text-primary-secondary uppercase tracking-wider">
                      {edu.period}
                    </p>
                    {edu.score && (
                      <p className="text-sm font-semibold text-primary-accent">
                        Score: {edu.score}
                      </p>
                    )}
                  </div>
                </div>
                
                {edu.highlights && (
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className="text-primary-secondary flex items-start">
                        <span className="text-primary-accent mr-2">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

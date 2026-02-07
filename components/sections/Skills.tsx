'use client';

import { motion } from 'framer-motion';
import { FadeIn, staggerContainer, fadeInUp } from '@/components/animations/Motion';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'Java', 'C', 'Solidity', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Blockchain & AI',
    skills: ['Smart Contracts', 'Web3', 'AI APIs', 'Machine Learning Integration'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Rapid Prototyping'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-primary-soft">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-display-md font-display font-bold mb-16 text-center">
            Skills & Technologies
          </h2>
        </FadeIn>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="bg-primary-bg rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-primary-text">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-primary-secondary flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-accent rounded-full mr-3 group-hover:scale-150 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

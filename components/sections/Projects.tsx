'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, ScaleIn } from '@/components/animations/Motion';

const projects = [
  {
    id: 1,
    title: 'Decentralized E-Voting System',
    category: 'Blockchain',
    description: 'A secure blockchain-based voting platform ensuring transparency and immutability.',
    longDescription: 'Built a complete decentralized voting system using Ethereum smart contracts. The platform ensures vote integrity through blockchain immutability, provides real-time vote counting, and guarantees voter anonymity while maintaining transparency in the electoral process.',
    tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
    highlights: [
      'Smart contract-based vote recording',
      'Transparent and tamper-proof results',
      'Privacy-preserving voter authentication',
    ],
    githubUrl: 'https://github.com/abrar-0020/Decentralized-E-Voting-System-for-College',
  },
  {
    id: 2,
    title: 'Integri-Checker',
    category: 'Security',
    description: 'Python GUI application for file integrity verification using cryptographic hashing.',
    longDescription: 'A desktop application that helps users verify file integrity using SHA-256 hashing. Features include batch file processing, integrity monitoring, and detailed reporting for security auditing purposes.',
    tech: ['Python', 'Tkinter', 'Cryptography'],
    highlights: [
      'Real-time file integrity monitoring',
      'Batch file verification',
      'Detailed hash comparison reports',
    ],
    githubUrl: 'https://github.com/abrar-0020/Integri-Checker',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    category: 'AI/ML',
    description: 'Intelligent chat application powered by advanced AI APIs.',
    longDescription: 'Developed a conversational AI application integrating modern language models. Features context-aware responses, multi-turn conversations, and a clean user interface for seamless interaction.',
    tech: ['Python', 'AI APIs', 'Flask', 'JavaScript'],
    highlights: [
      'Natural language understanding',
      'Context-aware conversations',
      'Real-time response generation',
    ],
    githubUrl: 'https://github.com/abrar-0020/ai-chat-app',
  },
  {
    id: 4,
    title: 'Code-Canva-AI',
    category: 'AI/ML',
    description: 'AI-powered tool for converting designs and images to functional code.',
    longDescription: 'An innovative tool that uses computer vision and AI to transform design mockups and screenshots into working HTML/CSS code, significantly accelerating the frontend development workflow.',
    tech: ['Python', 'Computer Vision', 'AI APIs', 'React'],
    highlights: [
      'Image-to-code conversion',
      'Multiple framework support',
      'Responsive code generation',
    ],
    githubUrl: 'https://github.com/abrar-0020/Code-Canva-AI',
  },
  {
    id: 5,
    title: 'Voice Calculator',
    category: 'Mobile',
    description: 'Android application for hands-free calculations using voice recognition.',
    longDescription: 'A mobile calculator app that accepts voice input for mathematical operations. Designed for accessibility and convenience, supporting complex calculations through natural speech commands.',
    tech: ['Java', 'Android SDK', 'Speech Recognition'],
    highlights: [
      'Voice-activated calculations',
      'Natural language processing',
      'Offline functionality',
    ],
    githubUrl: 'https://github.com/abrar-0020/Voice-Calculator',
  },
  {
    id: 6,
    title: 'Expense_Tracker',
    category: 'Productivity',
    description: 'Local expense tracking and analysis application without internet dependency.',
    longDescription: 'A Flutter-based mobile application that helps users track and analyze their expenses locally without requiring internet access. Features robust offline functionality with SQL database for data persistence.',
    tech: ['Flutter', 'Dart', 'SQL'],
    highlights: [
      'Complete offline functionality',
      'Local SQL database for data storage',
      'Real-time expense analysis and insights',
    ],
    githubUrl: 'https://github.com/abrar-0020/Expense_Tracker',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-primary-soft">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-display-md font-display font-bold mb-16 text-center">
            Featured Projects
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.05}>
              <motion.div
                onClick={() => setSelectedProject(project.id)}
                className="bg-primary-bg rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-accent">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-semibold mb-4 text-primary-text group-hover:text-primary-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-primary-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-soft text-xs font-medium text-primary-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary-bg rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {projects.find((p) => p.id === selectedProject) && (
                <>
                  <div className="mb-6">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary-accent">
                      {projects.find((p) => p.id === selectedProject)?.category}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl font-display font-bold mb-6">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </h2>
                  
                  <p className="text-lg text-primary-secondary leading-relaxed mb-8">
                    {projects.find((p) => p.id === selectedProject)?.longDescription}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      {projects.find((p) => p.id === selectedProject)?.highlights.map((highlight) => (
                        <li key={highlight} className="text-primary-secondary flex items-start">
                          <span className="text-primary-accent mr-3">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {projects.find((p) => p.id === selectedProject)?.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-soft text-sm font-medium text-primary-text rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      const project = projects.find((p) => p.id === selectedProject);
                      if (project?.githubUrl) {
                        window.open(project.githubUrl, '_blank');
                      }
                    }}
                    className="w-full py-3 bg-primary-text text-primary-bg rounded-full font-medium hover:bg-primary-secondary transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Go to GitHub
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

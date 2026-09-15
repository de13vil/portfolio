import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's build something.
          </h2>
          <p className="text-secondary text-lg mb-12">
            I'm open to software engineering internships, projects, and interesting technical opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full">
            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-border bg-[#111] flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium text-lg">{portfolioData.personal.email}</span>
            </a>
            
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-border bg-[#111] flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-colors">
                <Github size={20} />
              </div>
              <span className="font-medium text-lg">GitHub</span>
            </a>
            
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-border bg-[#111] flex items-center justify-center group-hover:border-accent/50 group-hover:text-accent transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="font-medium text-lg">LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

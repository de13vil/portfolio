import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const SkillGroup = ({ title, skills, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="flex flex-col"
    >
      <h3 className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-4 py-2 bg-[#111] border border-border text-secondary rounded hover:text-primary hover:border-secondary/50 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <SkillGroup title="Languages" skills={portfolioData.skills.languages} delay={0.1} />
          <SkillGroup title="Frontend" skills={portfolioData.skills.frontend} delay={0.2} />
          <SkillGroup title="Backend" skills={portfolioData.skills.backend} delay={0.3} />
          <SkillGroup title="Database" skills={portfolioData.skills.database} delay={0.4} />
          <SkillGroup title="Computer Science" skills={portfolioData.skills.computerScience} delay={0.5} />
          <SkillGroup title="Tools" skills={portfolioData.skills.tools} delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

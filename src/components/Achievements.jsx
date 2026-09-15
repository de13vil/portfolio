import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 flex items-center gap-4"
        >
          <Award className="text-accent" size={32} />
          <h2 className="text-3xl font-bold tracking-tight">Achievements & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] border border-border p-6 rounded-lg hover:border-accent/30 transition-colors flex items-start gap-4"
            >
              <div className="mt-1 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(0,210,255,0.8)]"></div>
              </div>
              <p className="text-secondary leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

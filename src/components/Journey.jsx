import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Journey = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
        </motion.div>

        <div className="max-w-3xl relative">
          {/* Timeline Line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-border"></div>

          <div className="space-y-12">
            {portfolioData.journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-[16px] h-[16px] rounded-full bg-background border-2 border-accent"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <span className="text-accent font-mono text-sm tracking-wider uppercase">{item.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
                <h4 className="text-secondary font-medium mb-4">{item.institution}</h4>
                
                <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

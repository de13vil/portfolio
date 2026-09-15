import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-border p-8 md:p-12 rounded-lg relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#1a1a1a] border border-border items-center justify-center shrink-0">
                <GraduationCap className="text-secondary" size={28} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Motilal Nehru National Institute of Technology Allahabad</h3>
                <p className="text-lg text-secondary mb-1">B.Tech — Electronics & Communication Engineering</p>
                <div className="inline-block mt-3 px-3 py-1 bg-[#1a1a1a] border border-border rounded-full text-xs font-mono text-accent">
                  Pre-final Year
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

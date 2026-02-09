import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { writings } from '../data';

interface AllWritingsProps {
  onBack: () => void;
}

export const AllWritings: React.FC<AllWritingsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group by year
  const writingsByYear = writings.reduce((acc, writing) => {
    if (!acc[writing.year]) {
      acc[writing.year] = [];
    }
    acc[writing.year].push(writing);
    return acc;
  }, {} as Record<string, typeof writings>);

  const years = Object.keys(writingsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12 relative z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-black pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-4">
                     <span className="text-xs font-bold uppercase border border-black px-2 py-1 bg-black text-white">Archive</span>
                     <span className="text-xs font-bold uppercase text-gray-500">{writings.length} entries</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                    Signal /<br />Noise
                </h2>
            </motion.div>
            
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onBack}
                className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
                ← Back to Home
            </motion.button>
        </div>

        {/* List */}
        <div className="flex flex-col gap-24">
            {years.map((year, yearIndex) => (
                <div key={year} className="relative">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="sticky top-32 inline-block mb-8 md:mb-0 md:absolute md:-left-24 md:text-right w-16"
                    >
                        <span className="text-2xl font-black text-gray-300">{year}</span>
                    </motion.div>

                    <div className="space-y-12">
                        {writingsByYear[year].map((post, index) => (
                            <motion.a 
                                href={post.link}
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group block border-t border-gray-200 pt-8"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags?.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase text-gray-500 border border-gray-200 px-1.5 py-0.5 rounded-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold uppercase leading-tight group-hover:underline underline-offset-4 decoration-2 mb-2">
                                            {post.title}
                                        </h3>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mt-2 md:mt-1 shrink-0">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">{post.readTime}</span>
                                        <svg className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-32 text-center border-t border-gray-200 pt-12">
             <button
                onClick={onBack}
                className="text-sm font-black uppercase bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors inline-block"
            >
                Back to Home
            </button>
        </div>

      </div>
    </section>
  );
};
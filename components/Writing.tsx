import React from 'react';
import { motion } from 'framer-motion';
import { writings } from '../data';

interface WritingProps {
    onSeeAll: () => void;
}

export const Writing: React.FC<WritingProps> = ({ onSeeAll }) => {
    // Show only the latest 4 posts
    const featuredPosts = writings.slice(0, 4);

    return (
        <section id="writing" className="py-24 px-6 md:px-12 bg-white text-black border-t border-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-16">
                     <span className="text-xs font-bold uppercase border border-black px-2 py-1 bg-black text-white">LOG_01</span>
                     <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Signal /<br />Noise
                     </h2>
                </div>

                <div className="border-t border-black">
                    {featuredPosts.map((post, index) => (
                        <motion.a 
                            href={post.link}
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-black hover:bg-black hover:text-white transition-colors px-4 -mx-4 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                                <span className="font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">{post.year}</span>
                                <h3 className="text-2xl md:text-4xl font-bold uppercase group-hover:translate-x-2 transition-transform duration-300">{post.title}</h3>
                            </div>
                            <div className="flex items-center gap-4 mt-4 md:mt-0">
                                <span className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">{post.readTime}</span>
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </motion.a>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:text-left">
                    <button 
                        onClick={onSeeAll}
                        className="inline-block text-sm font-bold uppercase underline underline-offset-4 hover:text-gray-600 transition-colors"
                    >
                        View Archive
                    </button>
                </div>
            </div>
        </section>
    )
}
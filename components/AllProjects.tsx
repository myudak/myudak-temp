import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

interface AllProjectsProps {
  onBack: () => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.slice(0, 2);
  const archiveProjects = projects.slice(2);

  return (
    <section className="min-h-screen bg-white text-black pt-32 pb-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
            >
                Project<br />Archive
            </motion.h2>
            
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={onBack}
                className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
                ← Back to Overview
            </motion.button>
        </div>

        {/* Featured Section (Full Width) */}
        <div className="flex flex-col gap-32 mb-32">
           {featuredProjects.map((project, index) => (
             <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: index * 0.05 }}
               className="group relative"
             >
                <div className="flex items-center gap-4 mb-4">
                    <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Featured Work</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-black pt-8">
                   
                   <div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10">
                      <div>
                          <div className="flex items-baseline justify-between mb-4">
                            <span className="text-4xl font-black opacity-30">{project.id}</span>
                            <div className="flex flex-wrap gap-2 justify-end">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase border border-black px-1.5 py-0.5 bg-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                          </div>
                          
                          <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] mb-4">
                            {project.title}
                          </h3>
                          
                          <p className="font-mono text-sm uppercase tracking-wider mb-6 text-gray-600">
                             {project.role} // {project.outcome}
                          </p>

                          <ul className="space-y-2 mb-8">
                            {project.desc.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-800">
                                 <span className="mt-1.5 w-1.5 h-1.5 bg-black" />
                                 {item}
                              </li>
                            ))}
                          </ul>
                      </div>
                   </div>

                   <div className="lg:col-span-7 h-[300px] md:h-[500px]">
                      <div className="w-full h-full overflow-hidden relative">
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                         />
                      </div>
                   </div>

                </div>
             </motion.div>
           ))}
        </div>

        {/* Archive Grid Section */}
        <div className="border-t border-black pt-12">
            <div className="flex items-end justify-between mb-16">
                 <h3 className="text-4xl md:text-6xl font-black uppercase leading-none">
                    More<br/>Experiments
                 </h3>
                 <span className="text-sm font-mono text-gray-500 hidden md:block">
                    Total {projects.length} Projects
                 </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
                {archiveProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex flex-col"
                    >
                         {/* Image */}
                         <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-6 relative">
                             <div className="absolute top-4 left-4 z-10">
                                <span className="bg-white text-black text-[10px] font-bold uppercase px-2 py-1 border border-black">
                                    {project.id}
                                </span>
                             </div>
                             <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                             />
                         </div>

                         {/* Content */}
                         <div className="flex flex-col flex-1">
                             <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase text-gray-500">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                             
                             <h4 className="text-2xl font-black uppercase mb-2 group-hover:underline underline-offset-4 decoration-2">
                                {project.title}
                             </h4>
                             
                             <p className="font-mono text-xs uppercase tracking-wider text-gray-600 mb-4">
                                {project.role}
                             </p>
                             
                             <p className="text-sm text-gray-800 line-clamp-2 mb-4">
                                {project.outcome}
                             </p>
                         </div>
                    </motion.div>
                ))}
            </div>
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
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { projects } from '../data';

interface LayersProps {
  onSeeAll: () => void;
}

export const Layers: React.FC<LayersProps> = ({ onSeeAll }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Only show the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section ref={ref} id="work" className="min-h-screen py-24 px-6 md:px-12 bg-white text-black relative overflow-hidden">
      
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute -top-[10%] -right-[10%] text-[25vw] font-black leading-none text-black opacity-[0.03] whitespace-nowrap"
          >
             SELECTED
          </motion.div>
          <motion.div 
            style={{ y: backgroundY2 }}
            className="absolute top-[40%] -left-[10%] text-[25vw] font-black leading-none text-black opacity-[0.03] whitespace-nowrap"
          >
             WORKS
          </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-24 overflow-hidden">
             <motion.h2 
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
             >
                Selected <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black'}}>Works</span>
             </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
           {featuredProjects.map((project, index) => (
             <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative"
             >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t-2 border-black pt-8">
                   
                   {/* Project Info */}
                   <div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10">
                      <div>
                          <div className="flex items-baseline justify-between mb-4">
                            <span className="text-6xl font-black opacity-10 group-hover:opacity-100 transition-opacity duration-500">{project.id}</span>
                            <div className="flex flex-wrap gap-2 justify-end">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase border border-black px-1.5 py-0.5 bg-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                          </div>
                          
                          <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-4 group-hover:underline decoration-4 underline-offset-4">
                            {project.title}
                          </h3>
                          
                          <p className="font-mono text-sm uppercase tracking-wider mb-6 text-gray-600">
                             {project.role} // {project.outcome}
                          </p>

                          <ul className="space-y-2 mb-8">
                            {project.desc.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm font-medium">
                                 <span className="mt-1.5 w-1.5 h-1.5 bg-black" />
                                 {item}
                              </li>
                            ))}
                          </ul>
                      </div>

                      <div className="flex gap-6 mt-auto">
                         <button className="text-sm font-black uppercase bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                            View Project
                         </button>
                      </div>
                   </div>

                   {/* Project Image */}
                   <div className="lg:col-span-7 h-full min-h-[300px] lg:min-h-[500px]">
                      <div className="w-full h-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                         />
                      </div>
                   </div>

                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 flex justify-center">
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={onSeeAll}
                className="text-sm font-black uppercase bg-black text-white px-12 py-5 hover:bg-gray-800 transition-colors tracking-widest"
            >
                See All Works
            </motion.button>
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } }
};

export const Science: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto w-full border border-white/20 p-8 md:p-12 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white pb-8">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]"
           >
             Technical<br />Arsenal
           </motion.h2>
           <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
               <span className="text-xs font-bold uppercase tracking-widest bg-white text-black px-2 py-1">System Diagnostics: Online</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
           
           {/* Column 1: Robotics */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
           >
              <motion.h3 variants={itemVariants} className="text-xl font-bold uppercase mb-8 flex items-center gap-3">
                 <span className="w-3 h-3 bg-white"></span>
                 Robotics Engineering
              </motion.h3>
              
              <div className="space-y-8 border-l border-white/20 pl-6">
                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">ROS 2 Humble</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Nodes • Launch • TF • Lifecycle</p>
                 </motion.div>

                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Simulation</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Webots • World Creation • Physics</p>
                 </motion.div>

                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Control / Perception</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Sensor Fusion • Timing Loops • OpenCV</p>
                 </motion.div>
              </div>
           </motion.div>

           {/* Column 2: Software Engineering */}
           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="md:delay-300" 
           >
              <motion.h3 variants={itemVariants} className="text-xl font-bold uppercase mb-8 flex items-center gap-3">
                 <span className="w-3 h-3 border border-white"></span>
                 Full Stack Systems
              </motion.h3>
              
              <div className="space-y-8 border-l border-white/20 pl-6">
                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Web Architecture</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Next.js • TypeScript • Tailwind</p>
                 </motion.div>
                 
                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">DevOps Pipeline</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Docker • GitHub Actions • Linux/WSL</p>
                 </motion.div>

                 <motion.div 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group cursor-crosshair"
                 >
                    <h4 className="text-lg font-black uppercase mb-1 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Methodology</h4>
                    <p className="text-sm text-gray-400 font-mono uppercase transition-colors group-hover:text-gray-200">Docs-First • Git Flow • Clean Arch</p>
                 </motion.div>
              </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};
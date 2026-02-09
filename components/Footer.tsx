import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 border-t border-white/20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
        
        <div className="max-w-xl">
           <div className="overflow-hidden mb-8">
               <motion.h2 
                 initial={{ y: "110%" }}
                 whileInView={{ y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]"
               >
                 Ready to<br />Ship?
               </motion.h2>
           </div>
           
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
           >
               <p className="text-gray-400 text-lg mb-8 font-medium">
                 I’m open to internships, research collaborations, and robotics software engineering roles.
               </p>
               <div className="flex flex-col gap-4">
                 <a href="mailto:hello@myudak.dev" className="text-2xl md:text-4xl font-black text-white hover:bg-white hover:text-black transition-all inline-block p-2 -ml-2">
                   HELLO@MYUDAK.DEV
                 </a>
                 <div className="flex items-center gap-3 mt-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 595.28" className="h-6 w-6 fill-current">
                        <polygon points="206.43 406.96 297.66 564.99 297.65 565.01 115 565.01 206.32 406.83 206.34 406.8 206.43 406.96"/>
                        <polygon points="571.62 90.47 480.3 248.65 388.99 406.8 297.75 248.78 297.66 248.63 388.97 90.47 571.62 90.47"/>
                        <polygon points="297.65 248.65 115 248.65 23.67 90.47 206.32 90.47 297.65 248.65"/>
                    </svg>
                    <p className="text-sm font-bold uppercase tracking-widest">© 2025 myudak. Built with React & ROS 2 Spirit.</p>
                 </div>
               </div>
           </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4 items-start md:items-end"
        >
           <a href="#" className="text-xl font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black px-2 transition-all">GitHub</a>
           <a href="#" className="text-xl font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black px-2 transition-all">LinkedIn</a>
           <a href="#" className="text-xl font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black px-2 transition-all">CV / Resume</a>
        </motion.div>

      </div>
      
      {/* Decorative large text */}
      <div className="absolute -bottom-[5vw] -right-[5vw] pointer-events-none opacity-10">
         <span className="text-[30vw] font-black tracking-tighter text-white leading-none">MY</span>
      </div>
    </footer>
  );
};
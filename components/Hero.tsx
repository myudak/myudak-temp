import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  // As scrollY increases (user scrolls down), we translate elements down (positive y)
  // to make them appear to move slower than the scrolling viewport.
  const bgY = useTransform(scrollY, [0, 1000], [0, 450]); 
  const titleY = useTransform(scrollY, [0, 1000], [0, 250]);
  const infoY = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const title = "MYUDAK";

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      
      {/* Dynamic Background Grid */}
      <motion.div 
           style={{ 
             y: bgY,
             backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', 
             backgroundSize: '4rem 4rem',
             backgroundPosition: 'center'
           }}
           className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
      >
           <div 
             className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"
           />
      </motion.div>
      
      {/* CRT Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-10"></div>

      <div className="z-20 relative text-center px-4 w-full">
        
        {/* Staggered Title Reveal */}
        <motion.div 
            style={{ y: titleY }}
            className="overflow-hidden mb-6"
        >
            <motion.div
                className="flex justify-center"
            >
                {title.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                        className="text-[18vw] leading-[0.8] font-black tracking-tighter text-white uppercase inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>

        {/* Subtitles with Slide Up */}
        <motion.div 
          style={{ y: infoY, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-4"
        >
           <div className="overflow-hidden">
             <motion.p 
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5, delay: 1.2 }}
               className="text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-1"
             >
               Robotics Engineer
             </motion.p>
           </div>
           
           <div className="w-2 h-2 bg-white rotate-45 hidden md:block" />

           <div className="overflow-hidden">
             <motion.p 
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5, delay: 1.3 }}
               className="text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-1"
             >
               Software Architect
             </motion.p>
           </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Scroll</span>
        <div className="h-16 w-[1px] bg-white/20 overflow-hidden relative">
            <motion.div 
                animate={{ y: ["-100%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-white absolute top-0 left-0"
            />
        </div>
      </motion.div>
    </section>
  );
};
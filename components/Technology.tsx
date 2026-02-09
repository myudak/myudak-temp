import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Marquee: React.FC<{ items: string[], direction?: 'left' | 'right' }> = ({ items, direction = 'left' }) => {
  return (
    <div className="flex overflow-hidden py-4 border-y border-white/10 bg-white/5 whitespace-nowrap">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : "-50%" }}
        animate={{ x: direction === 'left' ? "-50%" : 0 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex gap-12 pr-12"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MaskText: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Technology: React.FC = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center bg-[#050505]">
      
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-x border-white/10">
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-8">
            <MaskText>
                <span className="text-xs font-bold uppercase border border-white px-2 py-1 block">001</span>
            </MaskText>
            <MaskText delay={0.1}>
                 <h2 className="text-4xl md:text-6xl font-black uppercase text-white block">
                  The Philosophy
                </h2>
            </MaskText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-2xl font-bold text-white leading-tight">
                <MaskText delay={0.2}>
                    <p>I construct digital systems that bridge the gap</p>
                </MaskText>
                <MaskText delay={0.25}>
                    <p>between chaotic reality and reliable execution.</p>
                </MaskText>
            </div>
            
            <div className="space-y-6 text-gray-400 font-medium">
              <div>
                <MaskText delay={0.3}>
                    <p>My approach is rooted in industrial precision.</p>
                </MaskText>
                <MaskText delay={0.35}>
                    <p>Whether it's a humanoid robot navigating a field</p>
                </MaskText>
                <MaskText delay={0.4}>
                    <p>or a web platform serving thousands, the principles</p>
                </MaskText>
                <MaskText delay={0.45}>
                    <p>remain the same: Determinism. Reliability. Scalability.</p>
                </MaskText>
              </div>
              
              <div className="text-white pt-4">
                 <MaskText delay={0.5}>
                    <p className="border-l-2 border-white pl-4">I don't just write code; I engineer outcomes.</p>
                 </MaskText>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Typography */}
      <div className="space-y-0 relative z-10">
        <div className="rotate-2 scale-105 origin-left">
             <Marquee items={["ROS 2 Humble", "Simulation", "Webots", "Gazebo", "Docker", "CI/CD"]} direction="left" />
        </div>
        <div className="-rotate-2 scale-105 origin-right mt-[-1rem]">
             <Marquee items={["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Three.js"]} direction="right" />
        </div>
      </div>

    </section>
  );
};
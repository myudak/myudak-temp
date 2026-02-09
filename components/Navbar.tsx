import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Log', href: '#writing' },
];

interface NavbarProps {
  onNavClick: () => void;
}

const NavLink: React.FC<{ label: string; href: string; onClick: () => void }> = ({ label, href, onClick }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="relative overflow-hidden group h-5 flex flex-col justify-center"
        >
             <span className="block text-sm font-bold uppercase tracking-widest text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                {label}
            </span>
            <span className="absolute top-0 left-0 block text-sm font-bold uppercase tracking-widest text-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                {label}
            </span>
             {/* Subtle underline indicator */}
             <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left opacity-50" />
        </a>
    )
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference bg-transparent"
    >
      <div className="flex items-center gap-2">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
            onNavClick();
          }}
          className="flex items-center gap-3 group"
        >
            <motion.div 
                className="group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 595.28" className="h-8 w-8 fill-current text-white group-hover:text-gray-300 transition-colors">
                    <polygon points="206.43 406.96 297.66 564.99 297.65 565.01 115 565.01 206.32 406.83 206.34 406.8 206.43 406.96"/>
                    <polygon points="571.62 90.47 480.3 248.65 388.99 406.8 297.75 248.78 297.66 248.63 388.97 90.47 571.62 90.47"/>
                    <polygon points="297.65 248.65 115 248.65 23.67 90.47 206.32 90.47 297.65 248.65"/>
                </svg>
            </motion.div>
            
            <div className="relative overflow-hidden h-6 w-24">
                <span className="absolute top-0 left-0 text-xl font-black tracking-tighter text-white uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    MYUDAK
                </span>
                <span className="absolute top-0 left-0 text-xl font-black tracking-tighter text-white uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                    MYUDAK
                </span>
            </div>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-12">
        {navItems.map((item) => (
          <NavLink key={item.label} {...item} onClick={() => onNavClick()} />
        ))}
      </div>

      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <a 
        href="#contact" 
        onClick={() => onNavClick()} 
        className="hidden md:block relative px-8 py-3 bg-white overflow-hidden group"
      >
        <span className="relative z-10 text-black text-sm font-black uppercase tracking-wider group-hover:text-white transition-colors duration-300">
            Contact
        </span>
        <div className="absolute inset-0 bg-[#050505] transform scale-y-0 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
      </a>
    </motion.nav>
  );
};
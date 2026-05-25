"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import content from "@/data/content.json";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = forceSolid || isScrolled;

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Diferenciais", href: "/#diferenciais" },
    { name: "Projetos", href: "/#projetos" },
    { name: "Sobre Nós", href: "/#sobre" },
    { name: "Depoimentos", href: "/#depoimentos" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Top Bar - Maroon - Hidden when scrolled to keep header thin */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: "auto", opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[var(--color-innova-maroon)] text-white/90 py-2 px-4 md:px-8 text-xs md:text-sm font-medium flex flex-col sm:flex-row justify-between items-center gap-2 overflow-hidden"
          >
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
              <a href={content.company.whatsappLink} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} /> {content.company.whatsapp}
              </a>
              <a href={`mailto:${content.company.email}`} className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} /> {content.company.email}
              </a>
            </div>
            <div className="hidden md:block font-bold tracking-wider">
              {content.hero.badge}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation - Dynamic Background */}
      <div 
        className={`transition-all duration-500 border-b relative ${
          isSolid 
            ? "bg-white/95 backdrop-blur-md border-gray-200 h-16 md:h-20 shadow-lg" 
            : "bg-transparent border-transparent py-6 md:py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full relative">
          {/* Logo Container - Flex centered */}
          <div className="w-40 md:w-56 h-full flex items-center">
            <a href="/" className="relative flex items-center z-[60]">
              <Image 
                src="/images/logo_innova_nova.png" 
                alt="Innova Pinturas" 
                width={240} 
                height={80} 
                priority
                className={`w-auto object-contain transition-all duration-500 transform-gpu
                  ${isSolid 
                    ? 'h-12 md:h-14 brightness-100 drop-shadow-sm' 
                    : 'h-14 md:h-16 brightness-0 invert drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]'
                  }`}
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className={`hidden lg:flex items-center gap-8 font-medium text-sm transition-colors ${isSolid ? 'text-gray-700' : 'text-white/90 drop-shadow-md'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[var(--color-innova-yellow)] transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Desktop & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={content.company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-innova-yellow)] text-black font-bold text-sm px-6 py-2.5 shadow-md inline-block uppercase tracking-wide"
              >
                Orçamento Grátis
              </motion.a>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2 transition-colors ${isSolid ? 'text-black' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 flex flex-col py-4 px-6 gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 font-bold text-lg py-2 border-b border-gray-50 hover:text-[var(--color-innova-yellow)]"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={content.company.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-innova-yellow)] text-black font-black text-center py-4 mt-4 text-lg uppercase tracking-wide"
            >
              Orçamento Grátis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

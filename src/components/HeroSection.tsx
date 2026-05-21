"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-32">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <Image 
          src={content.hero.image} 
          alt="Pintura Profissional Innova" 
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col items-start justify-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--color-innova-yellow)] text-white font-bold text-sm tracking-wider px-4 py-1.5 rounded uppercase mb-6"
        >
          {content.hero.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white font-bold max-w-4xl"
        >
          {content.hero.title} <br className="hidden md:block"/>
          {content.hero.titleHighlight1} <span className="text-[var(--color-innova-yellow)]">{content.hero.titleHighlight2}</span> <br className="hidden md:block"/>
          <span className="text-[var(--color-innova-yellow)]">{content.hero.titleHighlight3}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          {content.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={content.company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-innova-yellow)] text-black font-black px-8 py-4 text-center text-lg hover:bg-yellow-400 transition-colors uppercase tracking-widest"
          >
            {content.hero.ctaPrimary}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projetos"
            className="border border-white/40 text-white font-bold px-8 py-4 text-center text-lg hover:bg-white/10 hover:border-white transition-colors uppercase tracking-widest"
          >
            {content.hero.ctaSecondary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

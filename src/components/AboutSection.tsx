"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100" id="sobre">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Small Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 font-bold text-xs uppercase tracking-widest rounded-full">
                Nossa História
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-[1.1] uppercase">
              Sobre a <span className="text-[var(--color-innova-yellow)] drop-shadow-sm">Innova Pinturas</span>
            </h2>
            
            {/* Small yellow divider line */}
            <div className="w-16 h-1 bg-[var(--color-innova-yellow)] mb-8 rounded-full opacity-60"></div>
            
            <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed mb-10 max-w-xl">
              <p>
                A Innova Pinturas é mais do que uma empresa de pinturas e reformas; somos construtores de harmonia. Nossa história é moldada pela paixão em transformar ambientes e construir experiências memoráveis.
              </p>
              <p>
                Desde nossa fundação, trilhamos um caminho de inovação e excelência, tornando-nos uma referência no setor. Em cada projeto, nossa prioridade é a satisfação do cliente e a melhoria da qualidade de vida.
              </p>
            </div>
            
            <div>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={content.company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 text-white font-bold px-8 py-4 shadow-lg transition-all duration-300 group"
              >
                Fazer um Orçamento Grátis
                <span className="ml-2 w-1.5 h-1.5 bg-[var(--color-innova-yellow)] rounded-full group-hover:scale-150 transition-transform"></span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Premium Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-10 lg:mt-0"
          >
            {/* Background angled shape - Clean styling */}
            <div className="absolute inset-0 bg-gray-100 rotate-2 rounded-3xl scale-[1.03] translate-x-3 translate-y-3 hidden sm:block"></div>
            
            <div className="relative max-w-5xl mx-auto">
              
              {/* Floating Badge 15+ Anos - Placed OUTSIDE the overflow-hidden card to avoid clipping */}
              <motion.div 
                initial={{ opacity: 0, scale: 2, rotate: -25, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 15,
                  delay: 0.7 
                }}
                className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center rounded-2xl border-4 border-white z-50 hidden sm:flex"
              >
                {/* Decorative notched edge */}
                <div className="absolute inset-0 border-2 border-dashed border-gray-200 m-1 rounded-xl"></div>
                
                <span className="font-display text-5xl md:text-6xl font-black text-[var(--color-innova-yellow)] leading-none mb-1 drop-shadow-md relative z-10">15+</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-center leading-tight text-gray-600 relative z-10">Anos de<br/>Excelência</span>
                
                <div className="absolute -top-2 -right-2 bg-[var(--color-innova-yellow)] w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-1.5 border-b-2 border-l-2 border-black -rotate-45 -translate-y-0.5"></div>
                </div>
              </motion.div>

              {/* Main Card - Now just the image to avoid redundant text */}
              <div className="relative bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden z-10 h-[450px] sm:h-[550px] border border-white/20 group">
                <Image 
                  src="/images/imagem innova escritorio.jpg" 
                  alt="Escritório Innova Pinturas" 
                  fill
                  className="object-cover object-bottom transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Premium Depth Overlays: Inner Shadow + Vignette */}
                <div className="absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
              </div>

              {/* Mobile Badge - Simpler version for small screens */}
              <div className="sm:hidden mt-6 flex justify-center">
                <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100">
                  <span className="text-3xl font-black text-[var(--color-innova-yellow)]">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">Anos de Excelência</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

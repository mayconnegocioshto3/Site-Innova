"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import content from "@/data/content.json";
import { useRef } from "react";

export default function FooterCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring for "heavy" cinematic movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1.05, 1]);
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 0.95, 0.95, 0.4]);

  return (
    <footer className="w-full">
      <div 
        ref={containerRef}
        className="relative bg-[#050505] text-white py-32 px-4 flex flex-col items-center text-center overflow-hidden border-t border-white/5"
      >
        {/* Premium Background System - Part 3 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            style={{ 
              y: backgroundY, 
              scale: backgroundScale, 
              opacity: backgroundOpacity 
            }}
            className="w-full h-[115%] relative top-[-7.5%]"
          >
            <Image 
              src="/images/premium-bg-3.png" 
              alt="Innova Premium Footer Background" 
              fill
              sizes="100vw"
              className="object-cover brightness-100 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-20 h-1 bg-[var(--color-innova-yellow)] mb-10 rounded-full"></div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight uppercase leading-[1.1]">
            Pronto para <br className="hidden sm:block"/>
            <span className="text-[var(--color-innova-yellow)] drop-shadow-md">Transformar</span> seu Espaço?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-3xl font-light">
            Solicite seu orçamento grátis agora e receba uma resposta em menos de <strong className="text-white font-bold">1 hora</strong>.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={content.company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[var(--color-innova-yellow)] text-black font-black uppercase tracking-widest text-sm md:text-lg px-12 py-6 shadow-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all duration-300 rounded-sm"
          >
            {/* Simple SVG icon for WhatsApp */}
            <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Footer Section (Dark Gray) */}
      <div className="bg-[#1a1a1a] text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm leading-relaxed">
          
          {/* Column 1: Logo and About */}
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-black tracking-tighter mb-6">
              <span className="text-white">INNOVA</span><span className="text-[#F59E0B]">PINTURAS</span>
            </h3>
            <p className="text-gray-400">
              Somos um time de profissionais que atua há mais de 15 anos no ramo. Realizamos pinturas e reformas em eventos, apartamentos, residências, prédios, clubes, escritórios, ferragens.
            </p>
          </div>

          {/* Column 2: Informações */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-lg mb-3">Informações</h4>
            <a className="hover:text-white transition-colors" href="#">Início</a>
            <a className="hover:text-white transition-colors" href="#sobre">Sobre nós</a>
            <a className="hover:text-white transition-colors" href="#projetos">Projetos</a>
            <a className="hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
          </div>

          {/* Column 3: Serviços */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-lg mb-3">Serviços</h4>
            <a className="hover:text-white transition-colors" href="#servicos">Pinturas Residenciais</a>
            <a className="hover:text-white transition-colors" href="#servicos">Pinturas Comerciais</a>
            <a className="hover:text-white transition-colors" href="#servicos">Pinturas Decorativas</a>
            <a className="hover:text-white transition-colors" href="#servicos">Reformas e Instalações</a>
          </div>

          {/* Column 4: Atendimento */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg mb-2">Atendimento</h4>
            
            <div>
              <span className="font-bold text-white block mb-1">Endereço:</span>
              <p className="text-gray-400 leading-snug">{content.company.address}</p>
            </div>

            <div>
              <span className="font-bold text-white block mb-1">Horário:</span>
              <p className="text-gray-400">Seg a sex: 08H às 18H</p>
              <p className="text-gray-400">Sáb: 08H às 12H</p>
            </div>

            <div>
              <span className="font-bold text-white block mb-1">Contato:</span>
              <a className="text-gray-400 hover:text-white block transition-colors" href={`mailto:${content.company.email}`}>{content.company.email}</a>
              <a className="text-gray-400 hover:text-white block transition-colors" href={content.company.whatsappLink}>{content.company.whatsapp}</a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Line */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Innova Pinturas e Reformas. Todos os direitos reservados. CNPJ: {content.company.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}

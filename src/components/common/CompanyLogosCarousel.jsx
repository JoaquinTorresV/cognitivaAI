/**
 * TrustBadges - Componente para mostrar logos de empresas y badges de confianza
 * Incluye la funcionalidad de scroll horizontal automático
 */

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { useClientSideOnly } from '@/hooks/useClientSideOnly';
import { colors, borderRadius } from '@/lib/design-system/designTokens';

const logos = [
  {src: '/logo empresas/WalmartChile.png', fallback: '/logo empresas/WalmartChile.png', alt: 'Walmart Chile', width: 142, height: 48},
  {src: '/logo empresas/Capitalizarme.png', fallback: '/logo empresas/Capitalizarme.png', alt: 'Capitalizarme', width: 224, height: 48},
  {src: '/logo empresas/DrGadget.png', fallback: '/logo empresas/DrGadget.png', alt: 'Dr Gadget', width: 48, height: 48},
  {src: '/logo empresas/ProCasa.png', fallback: '/logo empresas/ProCasa.png', alt: 'Pro Casa', width: 142, height: 48},
  {src: '/logo empresas/agrak.png', fallback: '/logo empresas/agrak.png', alt: 'Agrak', width: 128, height: 48},
  {src: '/logo empresas/TriTech.png', fallback: '/logo empresas/TriTech.png', alt: 'TriTech', width: 181, height: 48},
  {src: '/logo empresas/turbo tuning.png', fallback: '/logo empresas/turbo tuning.png', alt: 'Turbo Tuning', width: 85, height: 48},
  {src: '/logo empresas/Velour.png', fallback: '/logo empresas/Velour.png', alt: 'Velour', width: 159, height: 48},
  {src: '/logo empresas/altoke.png', fallback: '/logo empresas/altoke.png', alt: 'Altoke', width: 173, height: 48},
  {src: '/logo empresas/property mentor.png', fallback: '/logo empresas/property mentor.png', alt: 'Property Mentor', width: 160, height: 48},
  {src: '/logo empresas/tft.png', fallback: '/logo empresas/tft.png', alt: 'TFT', width: 120, height: 48},
  {src: '/logo empresas/VOGUISH.png', fallback: '/logo empresas/VOGUISH.png', alt: 'Voguish Wardrobe', width: 150, height: 48},
  {src: '/logo empresas/bbcopete.png', fallback: '/logo empresas/bbcopete.png', alt: 'BB Copete', width: 120, height: 48},
  {src: '/logo empresas/beautyFull.png', fallback: '/logo empresas/beautyFull.png', alt: 'Beauty Full', width: 140, height: 48},
  {src: '/logo empresas/tham.png', fallback: '/logo empresas/tham.png', alt: 'Grupo Tham', width: 160, height: 48},
  {src: '/logo empresas/tecnofanatico.png', fallback: '/logo empresas/tecnofanatico.png', alt: 'Tecno Fanático', width: 150, height: 48},
  {src: '/logo empresas/advance.png', fallback: '/logo empresas/advance.png', alt: 'Advance Investment', width: 180, height: 48},
  {src: '/logo empresas/alcubo.png', fallback: '/logo empresas/alcubo.png', alt: 'Al Cubo', width: 130, height: 48},
  {src: '/logo empresas/alpen.png', fallback: '/logo empresas/alpen.png', alt: 'Alpen', width: 140, height: 48},
];

const CompanyLogosCarousel = ({ className = '', showTitle = true, variant = 'default' }) => {
  const hasMounted = useClientSideOnly();

  if (variant === 'inline') {
    // Versión inline para el Hero
    return (
      <div className={`flex flex-wrap items-center gap-4 ${className}`}>
        <div className="flex items-center gap-3">
          {logos.slice(0, 3).map((logo, i) => (
            <Image 
              key={i} 
              src={logo.src} 
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-6 w-auto hover:opacity-80 transition-opacity duration-300" 
              loading="lazy"
              sizes="32px"
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-300">
          <Shield className="h-3 w-3" />
          <span>ISO 27001</span>
          <span>·</span>
          <span>GDPR</span>
          <span>·</span>
          <span>SOC 2</span>
        </div>
      </div>
    );
  }

  // Versión completa con scroll horizontal
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`mt-1 sm:mt-2 md:mt-2 lg:mt-1 pt-2 sm:pt-3 md:pt-3 lg:pt-2 pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-t border-white/5 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm relative z-10 ${className}`}>
      <div className="container mx-auto px-2 sm:px-4">
        {showTitle && (
          <div className="text-center mb-1 sm:mb-2 md:mb-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/10 mb-1 sm:mb-2 md:mb-3">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
              <span className="text-xs font-light text-emerald-300">Empresas Verificadas</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-light text-blue-200/80 max-w-2xl mx-auto px-2">
              <span className="hidden sm:inline">Más de <span className="text-cyan-300 font-medium">50 empresas líderes</span> confían en nuestra tecnología de IA</span>
              <span className="sm:hidden"><span className="text-cyan-300 font-medium">+50 empresas</span> confían en nuestra IA</span>
            </p>
          </div>
        )}
        
        {/* Cinta transportadora de logos optimizada para móvil */}
        <div className="logo-carousel-container relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur border border-white/10 p-2 sm:p-3 md:p-4">
          {/* Gradientes de borde para efecto de desvanecimiento */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
          
          {/* Contenedor de logos con animación ACTIVADA */}
          <div className="logo-scroll-container">
            {/* Duplicamos los logos para efecto continuo - 38 imágenes totales (19 x 2) */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`logo-${i}-${logo.alt.replace(/\s+/g, '-').toLowerCase()}`}
                className="logo-item"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16 w-auto object-contain hover:opacity-80 transition-all duration-300 ${
                    logo.alt === 'Alpen' ? 'filter invert' : ''
                  }`}
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                />
              </div>
            ))}
          </div>
          
          {/* Indicador de movimiento */}
          {hasMounted && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Estadística flotante optimizada con espaciado equilibrado */}
        <div className="flex justify-center mt-3 sm:mt-4 md:mt-5 lg:mt-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
            <span className="text-xs font-light text-emerald-300">
              <span className="hidden sm:inline">+87% satisfacción promedio</span>
              <span className="sm:hidden">+87% satisfacción</span>
            </span>
          </div>
        </div>
      </div>

      {/* Estilos CSS para la animación de logos */}
      <style jsx>{`
        .logo-carousel-container {
          overflow: hidden;
        }
        
        .logo-scroll-container {
          display: flex;
          width: fit-content;
          animation: scrollLogos 30s linear infinite;
        }
        
        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 1rem;
          min-width: 80px;
        }
        
        @media (min-width: 640px) {
          .logo-item {
            margin: 0 1.5rem;
            min-width: 100px;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-item {
            margin: 0 2rem;
            min-width: 120px;
          }
        }
        
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-scroll-container:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .logo-scroll-container {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyLogosCarousel;
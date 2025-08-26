/**
 * CleanSwipeCard - Transición limpia sin mezcla de contenido
 * Implementa una animación de dos fases: salida completa → entrada completa
 * Basado en mejores prácticas de UX para transiciones de contenido
 */

"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useSwipeGestures from '@/hooks/useSwipeGestures';
import { useClientSideOnly } from '@/hooks/useClientSideOnly';
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients } from '@/lib/design-system/colorSystem';

const CleanSwipeCard = ({
  items = [],
  activeIndex = 0,
  onIndexChange,
  className = '',
  cardClassName = '',
  showIndicators = true,
  showArrows = false,
  enableSwipe = true,
  children,
  renderCard,
  cardPadding = 'p-4 sm:p-6 lg:p-8',
  cardBackground = '',
  cardBorder = '',
  indicatorPosition = 'bottom',
  transitionDuration = 400
}) => {
  // Estados para animación limpia
  const [displayIndex, setDisplayIndex] = useState(activeIndex); // Índice que se muestra actualmente
  const [targetIndex, setTargetIndex] = useState(activeIndex);   // Índice al que queremos ir
  const [animationPhase, setAnimationPhase] = useState('idle');  // 'idle', 'exit', 'enter'
  const [slideDirection, setSlideDirection] = useState('next');  // 'next' o 'prev'
  const [isMobile, setIsMobile] = useState(false);
  
  const hasMounted = useClientSideOnly();
  const containerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Detectar dispositivo móvil
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Sistema de transición en dos fases
  const executeTransition = useCallback((newIndex, direction) => {
    if (newIndex === displayIndex || animationPhase !== 'idle') return;

    // Fase 1: Iniciar salida
    setTargetIndex(newIndex);
    setSlideDirection(direction);
    setAnimationPhase('exit');

    // Fase 2: Después de la salida, cambiar contenido y entrar
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayIndex(newIndex);
      setAnimationPhase('enter');
      
      // Fase 3: Completar entrada y volver a idle
      transitionTimeoutRef.current = setTimeout(() => {
        setAnimationPhase('idle');
      }, transitionDuration / 2);
    }, transitionDuration / 2);
  }, [displayIndex, animationPhase, transitionDuration]);

  // Responder a cambios externos
  useEffect(() => {
    if (activeIndex !== displayIndex && animationPhase === 'idle') {
      const direction = activeIndex > displayIndex ? 'next' : 'prev';
      executeTransition(activeIndex, direction);
    }
  }, [activeIndex, displayIndex, animationPhase, executeTransition]);

  // Funciones de navegación
  const goToIndex = useCallback((index) => {
    if (index === displayIndex || animationPhase !== 'idle') return;
    
    const direction = index > displayIndex ? 'next' : 'prev';
    onIndexChange?.(index);
    executeTransition(index, direction);
  }, [displayIndex, animationPhase, onIndexChange, executeTransition]);

  const handleNext = useCallback(() => {
    const nextIndex = displayIndex === items.length - 1 ? 0 : displayIndex + 1;
    goToIndex(nextIndex);
  }, [displayIndex, items.length, goToIndex]);

  const handlePrevious = useCallback(() => {
    const prevIndex = displayIndex === 0 ? items.length - 1 : displayIndex - 1;
    goToIndex(prevIndex);
  }, [displayIndex, items.length, goToIndex]);

  // Configurar gestos swipe con optimización para móviles
  const swipeRef = useSwipeGestures({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
    threshold: 75,
    preventScrollOnTouch: false,
    enabled: enableSwipe && hasMounted && isMobile
  });

  // Estilos base de la tarjeta
  const defaultCardStyles = `
    rounded-xl sm:rounded-2xl
    ${gradients.cardGlass}
    border border-white/10
    ${cardPadding}
    ${cardBackground}
    ${cardBorder}
  `;

  // Renderizado de contenido
  const renderContent = useCallback(() => {
    const currentItem = items[displayIndex];
    
    if (children) {
      return children(currentItem, displayIndex);
    }
    
    if (renderCard) {
      return renderCard(currentItem, displayIndex);
    }
    
    // Renderizado por defecto
    return (
      <div className="space-y-4">
        {currentItem?.title && (
          <h3 className={`${typographyPresets.featureTitle} mb-2`}>
            {currentItem.title}
          </h3>
        )}
        {currentItem?.description && (
          <p className={typographyPresets.description}>
            {currentItem.description}
          </p>
        )}
      </div>
    );
  }, [items, displayIndex, children, renderCard]);

  // Calcular estilos de animación
  const getAnimationStyles = () => {
    const baseTransition = `all ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    
    switch (animationPhase) {
      case 'exit':
        return {
          transform: slideDirection === 'next' 
            ? 'translateX(-100%) scale(0.95)' 
            : 'translateX(100%) scale(0.95)',
          opacity: 0,
          transition: baseTransition
        };
        
      case 'enter':
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: baseTransition,
          // Inicial de entrada
          animation: slideDirection === 'next'
            ? `cleanSlideInLeft ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : `cleanSlideInRight ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
        };
        
      default: // 'idle'
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: baseTransition
        };
    }
  };

  // Indicadores de posición
  const renderIndicators = () => {
    if (!showIndicators || items.length <= 1) return null;

    return (
      <div className={`flex justify-center gap-2 ${indicatorPosition === 'top' ? 'mb-6' : 'mt-6'}`}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === displayIndex
                ? 'bg-cyan-400 w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            disabled={animationPhase !== 'idle'}
            aria-label={`Ir a tarjeta ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Flechas de navegación (desktop)
  const renderArrows = () => {
    if (!showArrows || (hasMounted && isMobile) || items.length <= 1) return null;

    return (
      <>
        <button
          onClick={handlePrevious}
          disabled={animationPhase !== 'idle'}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={animationPhase !== 'idle'}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta siguiente"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </>
    );
  };

  // Prevenir hidratación hasta que el componente esté montado
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Indicadores superiores */}
      {indicatorPosition === 'top' && renderIndicators()}
      
      {/* Container principal con overflow hidden para transiciones limpias */}
      <div 
        ref={enableSwipe && hasMounted && isMobile ? swipeRef : null}
        className="relative overflow-hidden"
        style={{
          touchAction: enableSwipe && hasMounted && isMobile ? 'pan-y' : 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Tarjeta principal - contenido único sin superposiciones */}
        <div
          data-swipeable-card
          className={`relative ${defaultCardStyles} ${cardClassName}`}
          style={{
            ...getAnimationStyles(),
            willChange: animationPhase !== 'idle' ? 'transform, opacity' : 'auto',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {renderContent()}
          {renderArrows()}
          
          {/* Indicadores de swipe para móviles - Mejorados */}
          {hasMounted && isMobile && enableSwipe && items.length > 1 && (
            <div 
              className="absolute bottom-4 right-4 flex items-center gap-1 opacity-50 pointer-events-none"
              style={{ zIndex: 5 }}
            >
              <div className="flex gap-0.5">
                <div className="w-1 h-3 bg-gradient-to-t from-cyan-400/50 to-cyan-400/10 rounded-full animate-pulse" />
                <div className="w-1 h-3 bg-gradient-to-t from-cyan-400/30 to-cyan-400/5 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
              <div className="text-xs text-cyan-400/50 font-light ml-1 select-none">swipe</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Indicadores inferiores */}
      {indicatorPosition === 'bottom' && renderIndicators()}
      
      {/* Información de navegación para móviles - Simplificada */}
      {hasMounted && isMobile && enableSwipe && items.length > 1 && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/5">
            <div className="text-xs text-cyan-400/60 font-light select-none">
              desliza para navegar
            </div>
            <div className="w-px h-2 bg-white/10"></div>
            <div className="flex gap-1">
              {[...Array(items.length)].map((_, index) => (
                <div 
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    index === displayIndex ? 'bg-cyan-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS para animaciones limpias */}
      <style jsx>{`
        @keyframes cleanSlideInLeft {
          from {
            transform: translateX(100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes cleanSlideInRight {
          from {
            transform: translateX(-100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CleanSwipeCard;
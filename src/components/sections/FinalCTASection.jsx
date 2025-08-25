"use client";
import React, { useState, useEffect } from "react";
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import CleanSwipeCard from '@/components/ui/CleanSwipeCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { useClientSideOnly } from '@/hooks/useClientSideOnly';
import { 
  ArrowRight, CheckCircle, ChevronDown, Rocket,
  Zap, Cog, Activity, Layers, ShieldCheck, 
  Users, Trophy, Heart, Timer, CalendarClock, Clock, 
  Plug, BarChart3, MessageSquare, Check, Star, Target,
  ShoppingBag, GraduationCap, Stethoscope, Building,
  CreditCard, Terminal, Plane, DollarSign, TrendingUp
} from "lucide-react";
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Beneficios clave resumidos
const KEY_BENEFITS = [
  {
    title: "Implementación rápida",
    description: "MVP operativo en 7-14 días con integraciones completas",
    icon: Rocket,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "ROI garantizado",
    description: "Resultados medibles desde el primer mes de operación",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Soporte integral",
    description: "Acompañamiento 24/7 y optimización continua",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500"
  }
];

// Métricas finales de la página
const FINAL_METRICS = [
  { value: "300%", label: "ROI promedio comprobado" },
  { value: "15h", label: "ahorro semanal por empresa" },
  { value: "50+", label: "empresas transformadas" },
  { value: "98%", label: "uptime garantizado" }
];


// Mini FAQ
const MINI_FAQ = [
  {
    q: "¿Cuándo empiezo a ver resultados?",
    a: "En la primera semana operativa ya se perciben mejoras en tiempo de respuesta y resolución. Las métricas de conversión se consolidan durante el primer mes."
  },
  {
    q: "¿Se integra con mi CRM/ecommerce actual?", 
    a: "Sí. Conectamos con HubSpot, Salesforce, Pipedrive, Shopify, WooCommerce, entre otros. Si no existe conector, lo construimos vía API/Webhook."
  },
  {
    q: "¿Pierdo el toque humano?",
    a: "No. La IA resuelve lo repetitivo y deriva con contexto a tu equipo cuando corresponde (handover)."
  },
  {
    q: "¿Cómo se mide el ROI?",
    a: "Comparamos antes vs. después en KPIs pactados: conversión, agendamientos, CSAT, FCR y ahorro operativo. Puedes usar la calculadora para una proyección inmediata."
  }
];

export default function FinalCTASection() {
  const { ref } = useScrollBasedAnimation();
  const hasMounted = useClientSideOnly();
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Section 
      id="final-cta" 
      className="animate-in"
      ref={ref}
      aria-label="Revoluciona tu negocio con IA"
    >
      {/* Header principal */}
      <SectionTitle
        subtitle="Agentes de IA, automatizaciones e integraciones empresariales para vender más, atender mejor y escalar 24/7. Enlazamos tus canales y tu CRM/ERP para resultados medibles desde el primer mes."
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
          ¿Listo para dar el siguiente paso
        </span>
        <br />
        <span className="text-white/90 font-light">con IA?</span>
      </SectionTitle>

      {/* Beneficios clave */}
      <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {KEY_BENEFITS.map((benefit, index) => (
            <div key={index} className={`p-6 sm:p-8 rounded-xl ${gradients.cardGlass} border border-white/10 hover:border-white/20 transition-all duration-300 group text-center`}>
              {/* Header con icono */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-10 blur-xl rounded-xl`} />
                <div className="relative flex flex-col items-center">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${benefit.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-light text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className={`${typographyPresets.description} leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Métricas finales - Responsive */}
      <div className="mb-12 lg:mb-16">
        <div className="text-center mb-6 px-4">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              Resultados que transforman
            </span>
            <br />
            <span className="text-white/90 font-light">tu negocio con IA</span>
          </h3>
          <p className={`${typographyPresets.description} max-w-2xl mx-auto`}>
            Métricas reales de nuestras implementaciones completas
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {FINAL_METRICS.map((metric, i) => (
              <div key={i} className="py-4 lg:py-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {metric.value}
                </div>
                <p className="text-sm lg:text-base font-light text-blue-200/70 leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* CTAs dobles con microcopy - Solo desktop */}
      <div className="text-center">
        {hasMounted && !isMobile && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {/* CTA Primario - Demo */}
            <div className="flex flex-col items-center">
              <DemoButton 
                variant="default"
                size="large"
                text="Ver Demo de 30 min"
                showSubtitle={false}
              />
              <p className="text-xs text-blue-200/60 mt-3 max-w-xs">
                Agenda inmediata • Sin costo • Caso de tu industria
              </p>
            </div>
            
            {/* CTA Secundario - WhatsApp */}
            <div className="flex flex-col items-center">
              <WhatsAppButton 
                variant="default"
                size="large"
                text="Hablar por WhatsApp ahora"
                showSubtitle={false}
              />
              <p className="text-xs text-emerald-200/60 mt-3 max-w-xs">
                Respuesta en &lt;2 min • 24/7
              </p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
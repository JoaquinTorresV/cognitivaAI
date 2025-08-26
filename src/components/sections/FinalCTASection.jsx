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
    title: "Inicio rápido",
    description: "MVP operativo en días (según alcance) e integraciones clave.",
    icon: Rocket,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Impacto medible",
    description: "Definimos métricas de éxito y seguimiento continuo.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Soporte continuo",
    description: "Acompañamiento 24/7 y mejora iterativa.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500"
  }
];

// Métricas finales de la página
const FINAL_METRICS = [
  { title: "Mayor rentabilidad", subtitle: "optimización de la inversión", icon: TrendingUp },
  { title: "Ahorro de tiempo", subtitle: "procesos más ágiles", icon: Timer },
  { title: "Operación conectada", subtitle: "sistemas y datos sincronizados", icon: Plug },
  { title: "Disponibilidad continua", subtitle: "servicio 24/7", icon: Activity }
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
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Prevenir hidratación hasta que el componente esté montado
  if (!hasMounted) {
    return null;
  }


  return (
    <Section 
      id="final-cta" 
      className="animate-in"
      ref={ref}
      aria-label="Revoluciona tu negocio con IA"
    >
      {/* Header principal */}
      <SectionTitle
        subtitle={<><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Agentes de IA</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">automatizaciones</span> e <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">integraciones</span> conectadas a tus sistemas para vender mejor, atender más rápido y escalar de forma sostenida. Definimos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">métricas de éxito</span> desde el inicio y las medimos en producción.</>}
      >
        ¿Listo para dar el <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">siguiente paso</span> con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">IA</span>?
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
                    <h3 className="text-lg sm:text-xl font-light mb-3">
                      {benefit.title === 'Inicio rápido' && (
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Inicio rápido</span>
                      )}
                      {benefit.title === 'Impacto medible' && (
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Impacto medible</span>
                      )}
                      {benefit.title === 'Soporte continuo' && (
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Soporte continuo</span>
                      )}
                    </h3>
                    <p className={`${typographyPresets.description} leading-relaxed`}>
                      {benefit.description === 'MVP operativo en días (según alcance) e integraciones clave.' && (
                        <>MVP operativo en <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">días (según alcance)</span> e integraciones clave.</>
                      )}
                      {benefit.description === 'Definimos métricas de éxito y seguimiento continuo.' && (
                        <>Definimos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">métricas de éxito</span> y seguimiento continuo.</>
                      )}
                      {benefit.description === 'Acompañamiento 24/7 y mejora iterativa.' && (
                        <>Acompañamiento <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">24/7</span> y mejora iterativa.</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Métricas finales - Responsive */}
      <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 mb-12 lg:mb-16">
        <div className="text-center mb-6 px-4">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            Resultados que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">impulsan</span> tu negocio con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">IA</span>
          </h3>
          <p className={`${typographyPresets.description} max-w-2xl mx-auto`}>
            Indicadores que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">priorizamos y medimos en producción</span>.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {FINAL_METRICS.map((metric, i) => {
              const IconComponent = metric.icon;
              const colorClasses = [
                "from-green-500 to-emerald-500",
                "from-blue-500 to-cyan-500", 
                "from-orange-500 to-red-500",
                "from-purple-500 to-indigo-500"
              ];
              
              return (
                <div key={i} className="py-4 lg:py-2">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[i]} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                    {metric.title === 'Mayor rentabilidad' && (
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Mayor rentabilidad</span>
                    )}
                    {metric.title === 'Ahorro de tiempo' && (
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Ahorro de tiempo</span>
                    )}
                    {metric.title === 'Operación conectada' && (
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Operación conectada</span>
                    )}
                    {metric.title === 'Disponibilidad continua' && (
                      <><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Disponibilidad continua</span></>
                    )}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">
                    {metric.subtitle === 'servicio 24/7' ? (
                      <>servicio <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">24/7</span></>
                    ) : (
                      metric.subtitle
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>


    </Section>
  );
}
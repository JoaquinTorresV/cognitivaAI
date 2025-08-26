"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import CleanSwipeCard from '@/components/ui/CleanSwipeCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { useClientSideOnly } from '@/hooks/useClientSideOnly';
import { INTEGRATIONS } from '@/lib/utils/businessConstants';
import { 
  ArrowRight, CheckCircle, ShoppingBag, GraduationCap, Stethoscope, Building,
  CreditCard, Shield, Terminal, Cpu, Plane, Truck, Scale, Briefcase,
  Timer, MessageCircle, ShieldCheck, Target, TrendingUp
} from "lucide-react";
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Datos de industrias
const INDUSTRIES_DATA = [
  {
    id: "ecommerce",
    title: "E-commerce / Retail",
    icon: ShoppingBag,
    color: "from-purple-600 to-pink-500",
    forWhom: "Tiendas online, retail omnicanal, marketplaces.",
    challenges: "Abandono de carrito, consultas repetitivas, postventa lenta.",
    solutions: [
      "Agente de ventas en WhatsApp/Web con recuperación de carrito.",
      "Respuestas sobre stock, envíos, cambios y devoluciones.",
      "Cross-sell y up-sell conectados a catálogo/CRM.",
      "Automatizaciones de postventa y NPS."
    ],
    impact: "+tasa de checkout, –tiempos de respuesta, +ticket promedio.",
    integrations: ["Shopify", "Stripe", "WhatsApp"],
    ctas: ["Ver casos de E-commerce", "Hablar con un experto"]
  },
  {
    id: "education",
    title: "Educación",
    icon: GraduationCap,
    color: "from-blue-600 to-cyan-500",
    forWhom: "Universidades, institutos, edtech, posgrados.",
    challenges: "Alto volumen de consultas, procesos de admisión lentos.",
    solutions: [
      "Asistente que orienta, califica y agenda entrevistas.",
      "Recordatorios y documentos automáticos por programa.",
      "Canalización de becas/financiamiento.",
      "Dashboard de inscripciones y rendimiento."
    ],
    impact: "+inscripciones, +resolución al primer contacto, –no-show.",
    integrations: ["Google", "HubSpot", "Microsoft"],
    ctas: ["Ver casos de Educación", "Solicitar diagnóstico"]
  },
  {
    id: "health",
    title: "Salud",
    icon: Stethoscope,
    color: "from-green-600 to-emerald-500",
    forWhom: "Clínicas, centros médicos, dentales, telemedicina.",
    challenges: "Call center saturado, no-show, clasificación manual.",
    solutions: [
      "Agenda médica por WhatsApp/Web con recordatorios.",
      "Triaje básico y derivación por especialidad.",
      "Gestión de reprogramaciones y exámenes.",
      "Informes de satisfacción y cumplimiento."
    ],
    impact: "–no-show, +CSAT, confirmaciones en minutos.",
    integrations: ["WhatsApp", "Google", "Microsoft"],
    ctas: ["Ver casos de Salud", "Hablar con un experto"]
  },
  {
    id: "real-estate",
    title: "Inmobiliaria",
    icon: Building,
    color: "from-orange-600 to-red-500",
    forWhom: "Desarrolladoras, corredoras, portales.",
    challenges: "Leads sin priorizar, respuesta tardía desde portales.",
    solutions: [
      "Captura desde portales y scoring automático.",
      "Agendamiento de visitas y envío de fichas/proyectos.",
      "Seguimiento y recordatorios por etapa.",
      "Reportes de conversión por canal."
    ],
    impact: "+cierre, –ciclo de ventas, +leads calificados.",
    integrations: ["Salesforce", "WhatsApp", "Google"],
    ctas: ["Ver casos de Inmobiliaria", "Solicitar propuesta"]
  },
  {
    id: "finance",
    title: "Finanzas & Seguros",
    icon: CreditCard,
    color: "from-indigo-600 to-blue-500",
    forWhom: "Bancos, fintech, aseguradoras, corredores.",
    challenges: "Onboarding complejo, verificación, soporte regulado.",
    solutions: [
      "Onboarding conversacional con verificación guiada.",
      "Cotizador y pre-aprobación automatizada.",
      "Gestión de siniestros y reclamos con derivación correcta.",
      "Alertas y comunicaciones transaccionales."
    ],
    impact: "+conversión de originación, –tiempos de gestión, +retención.",
    integrations: ["Salesforce", "Stripe", "AWS"],
    ctas: ["Ver casos de Finanzas/Seguros", "Hablar con un experto"]
  },
  {
    id: "saas",
    title: "SaaS / Tech",
    icon: Terminal,
    color: "from-teal-600 to-cyan-500",
    forWhom: "Software B2B/B2C, plataformas, startups.",
    challenges: "Leads MQL no calificados, soporte L1 repetitivo.",
    solutions: [
      "Calificación automática (ICP, tamaño, uso) y ruteo a ventas.",
      "Onboarding in-app y tutorización por chat.",
      "Base de conocimiento + respuestas L1.",
      "Playbooks de expansión (upsell/cross-sell)."
    ],
    impact: "+SQLs, –tiempo a valor, +retención/expansión.",
    integrations: ["HubSpot", "Slack", "AWS"],
    ctas: ["Ver casos de SaaS", "Probar demo guiada"]
  },
  {
    id: "tourism",
    title: "Turismo & Hospitalidad",
    icon: Plane,
    color: "from-amber-600 to-orange-500",
    forWhom: "Hoteles, cadenas, operadores, restaurantes.",
    challenges: "Reservas dispersas, estacionalidad, dudas repetidas.",
    solutions: [
      "Reservas por WhatsApp/Web con disponibilidad en vivo.",
      "Campañas de ocupación para horas/fechas valle.",
      "Gestión de cambios/cancelaciones y pre-check-in.",
      "Upsell de servicios (late checkout, traslados)."
    ],
    impact: "+ocupación, –tiempo de respuesta, +ingresos ancillaries.",
    integrations: ["Stripe", "WhatsApp", "Google"],
    ctas: ["Ver casos de Turismo", "Solicitar diagnóstico"]
  },
  {
    id: "logistics",
    title: "Logística & Última milla",
    icon: Truck,
    color: "from-slate-600 to-gray-600",
    forWhom: "Couriers, 3PL, e-commerce con despacho propio.",
    challenges: "Trazabilidad difusa, consultas por estado de entrega.",
    solutions: [
      "Tracking conversacional por pedido/guía.",
      "Notificaciones proactivas (retrasos, entrega, reintentos).",
      "Gestión de cambios de dirección o ventana horaria.",
      "Tablero de SLA y causas de fallas."
    ],
    impact: "–tickets repetitivos, +NPS, –intentos fallidos.",
    integrations: ["WhatsApp", "AWS", "Zapier"],
    ctas: ["Ver casos de Logística", "Hablar con un experto"]
  },
  {
    id: "legal",
    title: "Legal & Servicios Profesionales",
    icon: Scale,
    color: "from-violet-600 to-purple-500",
    forWhom: "Estudios jurídicos, consultoras, contables.",
    challenges: "Intake manual, clasificación lenta, seguimiento irregular.",
    solutions: [
      "Formulario conversacional y clasificación por tema/urgencia.",
      "Agenda con el profesional correcto.",
      "Recordatorios y gestión documental.",
      "Panel de estado por cliente/caso."
    ],
    impact: "+consultas cualificadas, –tiempo de onboarding, +satisfacción.",
    integrations: ["HubSpot", "Microsoft", "Google"],
    ctas: ["Ver casos de Legal/Servicios", "Solicitar propuesta"]
  }
];


// Métricas específicas por industria
const INDUSTRY_METRICS = [
  { title: "Experiencia del cliente", subtitle: "mejorada por cada punto de contacto", icon: Target },
  { title: "Operación conectada", subtitle: "sistemas y datos sincronizados", icon: Cpu },
  { title: "Crecimiento sostenible", subtitle: "embudos y campañas optimizadas", icon: TrendingUp },
  { title: "Gobierno de datos", subtitle: "seguridad y cumplimiento", icon: ShieldCheck }
];

export default function IndustryExpertise() {
  const { ref } = useScrollBasedAnimation();
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hasMounted = useClientSideOnly();

  // Detectar dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detectar hash de industria en URL y navegar automáticamente
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const industryMap = {
        '#industrias-ecommerce': 0,
        '#industrias-educacion': 1,
        '#industrias-salud': 2,
        '#industrias-inmobiliaria': 3,
        '#industrias-finanzas': 4,
        '#industrias-saas': 5,
        '#industrias-turismo': 6,
        '#industrias-logistica': 7,
        '#industrias-legal': 8
      };
      
      if (industryMap.hasOwnProperty(hash)) {
        setActiveIndustry(industryMap[hash]);
        
        // Scroll automático a la sección de industrias si no está visible
        setTimeout(() => {
          const industriasSection = document.getElementById('industrias');
          if (industriasSection) {
            industriasSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      } else if (hash === '#industrias') {
        setActiveIndustry(0);
        
        // Scroll automático para hash genérico también
        setTimeout(() => {
          const industriasSection = document.getElementById('industrias');
          if (industriasSection) {
            industriasSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Filtrar integraciones disponibles - mostrar 2-3 por industria
  const getIndustryIntegrations = (industryIntegrations) => {
    const matchedIntegrations = [];
    const seenImages = new Set();
    
    // Buscar coincidencias exactas primero
    for (const name of industryIntegrations) {
      const exactMatch = INTEGRATIONS.find(integration => 
        integration.name.toLowerCase() === name.toLowerCase()
      );
      
      if (exactMatch && !seenImages.has(exactMatch.src)) {
        seenImages.add(exactMatch.src);
        matchedIntegrations.push(exactMatch);
        // Limitar a 3 integraciones por industria para mejor visualización
        if (matchedIntegrations.length >= 3) break;
      }
    }
    
    // Si no hay suficientes coincidencias exactas, buscar coincidencias parciales
    if (matchedIntegrations.length < 2) {
      for (const integration of INTEGRATIONS) {
        if (matchedIntegrations.length >= 3) break;
        
        const hasPartialMatch = industryIntegrations.some(name => 
          integration.name.toLowerCase().includes(name.toLowerCase()) ||
          name.toLowerCase().includes(integration.name.toLowerCase())
        );
        
        if (hasPartialMatch && !seenImages.has(integration.src)) {
          seenImages.add(integration.src);
          matchedIntegrations.push(integration);
        }
      }
    }
    
    return matchedIntegrations;
  };

  // Renderizar tarjeta de industria
  const renderIndustryCard = (industry, index) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Contenido principal */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header con icono en la parte superior */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-10 blur-xl rounded-2xl`} />
          <div className="relative">
            {/* Icono en la parte superior */}
            <div className="flex justify-start mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${industry.color} shadow-lg`}>
                <industry.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            {/* Contenido del header */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-cyan-300 text-sm sm:text-base lg:text-lg font-light mb-4">
                Para quién: <span className="text-blue-200/80">{industry.forWhom}</span>
              </p>
              <p className="text-orange-300 text-sm sm:text-base font-light">
                Retos frecuentes: <span className="text-orange-100/80">{industry.challenges}</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTAs - Solo visible en desktop */}
        {hasMounted && !isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DemoButton 
              variant="default"
              size="medium"
              text={industry.ctas[0]}
              subtitle="Casos verificados"
              showSubtitle={true}
            />
            <WhatsAppButton 
              variant="default"
              size="medium"
              text={industry.ctas[1]}
              subtitle="Respuesta inmediata"
              showSubtitle={true}
            />
          </div>
        )}

        {/* Qué implementamos */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            Qué implementamos
          </h4>
          <ul className="space-y-3">
            {industry.solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                <span className={typographyPresets.featureItem}>{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impacto esperado */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-600/10 to-teal-600/10 border border-emerald-400/20">
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-3">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            Impacto esperado
          </h4>
          <p className="text-emerald-100/90 text-sm sm:text-base">{industry.impact}</p>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Integraciones con logos más grandes */}
        <div className={`p-4 sm:p-6 rounded-xl ${gradients.cardGlass} border border-white/10`}>
          <h4 className="text-lg font-medium text-white mb-4">Integraciones</h4>
          <div className="grid grid-cols-3 gap-3">
            {getIndustryIntegrations(industry.integrations).map((integration, idx) => (
              <div key={idx} className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <Image 
                  src={integration.src} 
                  alt={integration.name}
                  width={integration.width}
                  height={integration.height}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <Section 
      id="industrias" 
      className="animate-in"
      ref={ref}
      aria-label="Industrias especializadas"
    >
      {/* Header de sección */}
      <SectionTitle
        subtitle={<><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Agentes de IA</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">automatizaciones</span> e <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">integraciones</span> diseñadas para tu vertical. Operaciones más ágiles, costos controlados y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">embudos que convierten de principio a fin</span>.</>}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">IA empresarial</span> adaptada a tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">industria</span>
      </SectionTitle>

      {/* Sistema de navegación con iconos de industrias */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={INDUSTRIES_DATA}
          activeIndex={activeIndustry}
          onItemSelect={setActiveIndustry}
          variant="pills"
          size={hasMounted && isMobile ? "medium" : "large"}
          showIcons={true}
          showNumbers={false}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas */}
      <div className="max-w-6xl mx-auto">
        <CleanSwipeCard
          items={INDUSTRIES_DATA}
          activeIndex={activeIndustry}
          onIndexChange={setActiveIndustry}
          renderCard={renderIndustryCard}
          enableSwipe={hasMounted && isMobile}
          showIndicators={false}
          showArrows={false}
          className="mb-12"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
          transitionDuration={600}
        />
      </div>

      {/* Franja de métricas */}
      <div className="mt-12 lg:mt-16">
        <div className="text-center mb-6 px-4">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            Lo que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">priorizamos</span> en <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">cada industria</span>
          </h3>
          <p className={`${typographyPresets.description} max-w-2xl mx-auto`}>
            Indicadores y prácticas que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">medimos en producción</span> por vertical.
          </p>
        </div>
        
        <div className="mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {INDUSTRY_METRICS.map((stat, i) => {
              const IconComponent = stat.icon;
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
                    {stat.title}
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">
                    {stat.subtitle}
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
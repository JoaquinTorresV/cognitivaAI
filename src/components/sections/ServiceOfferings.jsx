"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { 
  MessageSquare, Zap, Plug, TrendingUp, Layout, BarChart3,
  CheckCircle, Bot, Target, Puzzle, ArrowRight, Calendar, MessageCircle,
  DollarSign, Clock, Users, Database, Gauge, Activity, 
  FileText, Search, ShoppingCart, Percent, Star
} from "lucide-react";
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import CleanSwipeCard from '@/components/ui/CleanSwipeCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { useClientSideOnly } from '@/hooks/useClientSideOnly';
import { INTEGRATIONS } from '@/lib/utils/businessConstants';
import { typographyPresets, textColors } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Datos de servicios optimizados para el nuevo sistema
const SERVICES_DATA = [
  {
    id: "agentes-ia",
    title: "Agentes de IA & Chatbots",
    subtitle: "para ventas, soporte y gestión 24/7",
    oneLiner: "Automatiza conversaciones en WhatsApp, Web e Instagram, con agentes virtuales entrenados con la información de tu negocio. Responde al instante, gestiona solicitudes, agenda reuniones y ofrece soporte continuo en un solo canal integrado con tus sistemas.",
    icon: MessageSquare,
    color: "from-blue-600 to-cyan-500",
    results: [
      "Atención inmediata y continua para tus clientes",
      "Clasificación y derivación automática de consultas y oportunidades",
      "Agendamiento y pagos directos desde el chat, sin fricción",
      "Mayor disponibilidad del equipo humano para tareas estratégicas"
    ],
    features: [
      "Flujos de venta, soporte y postventa listos para personalizar",
      "Entrenamiento con tu propio contenido: FAQs, políticas, catálogos y documentos",
      "Derivación fluida a agentes humanos con todo el contexto de la conversación",
      "Escalabilidad para miles de interacciones simultáneas",
      "Panel de control en tiempo real con métricas de atención y eficiencia"
    ],
    integrations: ["WhatsApp", "Instagram", "HubSpot", "Salesforce", "Stripe"],
    testimonial: "Pasamos de tardar horas a responder a hacerlo en segundos. El equipo ahora se enfoca en cerrar ventas.",
    faqs: [
      { q: "¿En cuánto tiempo puedo tener un agente funcionando?", a: "La mayoría de las implementaciones se completan en pocos días, dependiendo del nivel de personalización e integraciones que requieras." },
      { q: "¿Se integra con mis sistemas actuales (CRM, ERP, pasarela de pago)?", a: "Sí, conectamos con las principales plataformas como Salesforce, HubSpot, Shopify, pasarelas de pago y sistemas propios mediante API." },
      { q: "¿Qué pasa si necesito que un humano intervenga en la conversación?", a: "El agente transfiere la conversación a un asesor humano con todo el contexto previo, para que tu equipo continúe sin perder información." },
      { q: "¿Puedo actualizar las respuestas o entrenar al agente con nueva información?", a: "Sí, puedes actualizar fácilmente FAQs, catálogos o documentos para que el agente siempre responda con la información más reciente." },
      { q: "¿Cómo garantizan la seguridad de los datos?", a: "Cumplimos con estándares de seguridad como ISO 27001 y GDPR. Todos los datos son cifrados y almacenados de forma segura." }
    ],
    metrics: { roi: "Mayor rentabilidad", time_saved: "Ahorro de tiempo", response_time: "Respuestas inmediatas" }
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones Inteligentes",
    subtitle: "para escalar procesos sin esfuerzo",
    oneLiner: "Simplifica y optimiza tus operaciones con flujos automatizados que se adaptan a tu negocio. Reduce tareas manuales, asegura consistencia en cada interacción y conecta todas tus herramientas en tiempo real.",
    icon: Zap,
    color: "from-purple-600 to-pink-500",
    results: [
      "Flujos que reducen carga operativa y mejoran tiempos de respuesta",
      "Seguimientos automáticos que mantienen a tus clientes conectados",
      "Datos siempre actualizados y sincronizados en tus sistemas"
    ],
    features: [
      "Lead scoring y asignación automática de prioridades",
      "Flujos multicanal para ventas, soporte y retención",
      "Alertas automáticas a tus canales internos (Slack, Email, CRM)",
      "Tickets inteligentes clasificados por intención",
      "Biblioteca de playbooks para distintos escenarios de negocio"
    ],
    integrations: ["Make", "Zapier", "Slack", "Pipedrive", "Mailchimp"],
    testimonial: "Automatizamos recordatorios y recuperamos deals que dábamos por perdidos.",
    faqs: [
      { q: "¿Cuánto tiempo toma implementar las automatizaciones?", a: "Generalmente puedes tener los primeros flujos en marcha en pocos días, dependiendo de la complejidad." },
      { q: "¿Se integran con mis sistemas actuales?", a: "Sí, trabajamos con las principales plataformas de CRM, marketing, e-commerce y también desarrollamos integraciones personalizadas." },
      { q: "¿Puedo modificar los flujos por mi cuenta?", a: "Sí, cuentas con un panel intuitivo para editar, pausar o crear nuevos flujos sin necesidad de soporte técnico." },
      { q: "¿Qué soporte recibo después de la implementación?", a: "Nuestro equipo acompaña en la optimización continua y ofrecemos soporte 24/7 para incidencias técnicas." }
    ],
    metrics: { roi: "Procesos más ágiles", time_saved: "Menos tareas manuales", conversion_boost: "Operación escalable" }
  },
  {
    id: "integraciones",
    title: "Integraciones Empresariales",
    subtitle: "para unificar sistemas y optimizar procesos",
    oneLiner: "Conecta tus plataformas de ventas, soporte y gestión (CRM, ERP, ecommerce, pasarelas de pago y más) en un solo ecosistema. Elimina silos de información, asegura datos sincronizados y gana visibilidad total para tomar mejores decisiones.",
    icon: Plug,
    color: "from-green-600 to-emerald-500",
    results: [
      "Información integrada y trazabilidad de principio a fin",
      "Reducción de tareas manuales y procesos más rápidos",
      "Reportes confiables y actualizados en tiempo real"
    ],
    features: [
      "Conectores listos para CRM, ecommerce y pasarelas de pago",
      "Desarrollo de APIs y webhooks personalizados cuando se requiera",
      "Reglas de sincronización y control de duplicados",
      "Monitoreo con alertas de integridad de datos",
      "Documentación clara y acompañamiento técnico en cada etapa"
    ],
    integrations: ["HubSpot", "Salesforce", "Shopify Plus", "Stripe", "Zapier"],
    testimonial: "La información por fin está en un solo lugar; fin de los Excel paralelos.",
    faqs: [
      { q: "¿Qué sistemas se pueden integrar?", a: "Podemos conectar CRM, ERP, ecommerce, herramientas de marketing y sistemas propios mediante API." },
      { q: "¿Qué pasa si no existe un conector predefinido?", a: "Creamos integraciones personalizadas vía API o webhooks a medida." },
      { q: "¿Cómo evitan interrupciones en mis operaciones?", a: "Realizamos migraciones por etapas y ventanas controladas para que el negocio nunca se detenga." },
      { q: "¿Puedo monitorear la integridad de mis datos?", a: "Sí, recibirás alertas y reportes automáticos para garantizar que la información esté siempre sincronizada y confiable." }
    ],
    metrics: { roi: "Datos centralizados", data_accuracy: "Operación conectada", sync_time: "Decisiones más claras" }
  },
  {
    id: "marketing",
    title: "Marketing Digital & Embudos",
    subtitle: "para atraer, convertir y fidelizar clientes",
    oneLiner: "Diseñamos y ejecutamos estrategias digitales integrales con SEO, SEM, publicidad en redes sociales, embudos personalizados y automatización de campañas. Todo basado en datos reales y optimizado con IA para mejorar la captación, conversión y retención de clientes.",
    icon: Target,
    color: "from-orange-600 to-red-500",
    results: [
      "Audiencias mejor segmentadas y mayor visibilidad de marca",
      "Leads más calificados listos para tu equipo de ventas",
      "Embudos personalizados que aumentan conversión y fidelización"
    ],
    features: [
      "Investigación de palabras clave y auditoría SEO",
      "Campañas SEM y publicidad digital optimizadas continuamente",
      "Creación de landing pages de alto rendimiento (con pruebas A/B)",
      "Estrategias de retargeting basadas en comportamiento e intención de compra",
      "Automatización de mensajes y embudos dinámicos por industria o segmento"
    ],
    integrations: ["Meta", "Instagram", "LinkedIn", "TikTok", "Mailchimp"],
    testimonial: "Las campañas ahora conversan con el CRM; invertimos donde realmente convierte.",
    faqs: [
      { q: "¿Puedo aprovechar mis audiencias actuales?", a: "Sí, integramos tus bases de datos y audiencias previas para optimizarlas con nuevas campañas." },
      { q: "¿Qué canales publicitarios manejan?", a: "Trabajamos con buscadores, redes sociales, plataformas de display y remarketing." },
      { q: "¿Cómo se mide el rendimiento de las campañas?", a: "Tendrás acceso a reportes en tiempo real con métricas de captación, conversión y retorno." },
      { q: "¿Se pueden personalizar embudos para mi industria?", a: "Sí, diseñamos embudos específicos para retail, educación, servicios financieros, inmobiliaria, SaaS y más." }
    ],
    metrics: { roi: "Más alcance", cac_reduction: "Mejores leads", roas: "Mayor conversión" }
  },
  {
    id: "web-seo",
    title: "Desarrollo Web SEO-First",
    subtitle: "para cargar más rápido, posicionar mejor y convertir más",
    oneLiner: "Creamos sitios y landing pages con arquitectura SEO-first, alto rendimiento y seguridad. Diseños modernos y escalables que cargan en segundos, facilitan la gestión de contenidos y se integran con tus herramientas de marketing y ventas para impulsar la conversión desde el primer día.",
    icon: Layout,
    color: "from-indigo-600 to-blue-500",
    results: [
      "Mejor experiencia y posicionamiento en buscadores",
      "Más envíos de formularios y oportunidades para ventas",
      "Base tecnológica estable, segura y lista para escalar"
    ],
    features: [
      "Arquitectura modular con componentes reutilizables",
      "Optimización Core Web Vitals, sitemap y schema",
      "Formularios con validación, protección antispam y seguridad",
      "CMS flexible o Headless para autogestión y escalabilidad",
      "Integración con analítica, CRM y píxeles publicitarios"
    ],
    integrations: ["WordPress", "Shopify Plus", "AWS", "SiteGround", "PayPal"],
    testimonial: "El nuevo sitio carga rápido y genera leads desde el primer día.",
    faqs: [
      { q: "¿Qué pasa con mi contenido actual?", a: "Migramos tu contenido y lo dejamos optimizado para SEO y UX." },
      { q: "¿Puedo administrar el sitio sin equipo técnico?", a: "Sí, tendrás un CMS intuitivo para crear y editar páginas y formularios." },
      { q: "¿Con qué herramientas se integra?", a: "Conectamos con CRM, automatización de marketing, analítica y ads." },
      { q: "¿Cómo aseguran buen rendimiento de carga?", a: "Aplicamos prácticas de optimización (imágenes, caché, bundling) y monitoreamos Core Web Vitals." }
    ],
    metrics: { page_speed: "Carga ultrarrápida", seo_boost: "SEO optimizado", conversion_rate: "Conversión mejorada" }
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    subtitle: "para decisiones claras en tiempo real",
    oneLiner: "Unifica tus fuentes de datos y obtén dashboards en tiempo real, KPIs personalizados y modelos de atribución. Convierte información dispersa en insights accionables para optimizar procesos, ventas y planificación.",
    icon: BarChart3,
    color: "from-teal-600 to-cyan-500",
    results: [
      "Visibilidad completa del funnel y de los puntos críticos del negocio",
      "Detección de cuellos de botella y oportunidades de mejora",
      "Proyecciones y planificación más precisas para crecimiento"
    ],
    features: [
      "Integración con CRM, ecommerce, Ads y plataformas de soporte",
      "KPIs y vistas personalizadas por equipo o área",
      "Modelos de atribución y análisis por cohortes",
      "Alertas y reportes automáticos por canal",
      "Capacitación y buenas prácticas para adopción interna"
    ],
    integrations: ["Slack", "HubSpot", "Salesforce", "AWS", "n8n"],
    testimonial: "Pasamos de reportes manuales a decisiones en tiempo real.",
    faqs: [
      { q: "¿Qué datos puedo conectar?", a: "CRM, ecommerce, plataformas publicitarias, soporte, finanzas y más." },
      { q: "¿Pueden personalizar dashboards y KPIs?", a: "Sí, adaptamos métricas y vistas a los objetivos de cada área." },
      { q: "¿Cómo aseguran calidad y consistencia de datos?", a: "Validaciones, reglas de sincronización y alertas de integridad." },
      { q: "¿Necesito conocimientos técnicos para usarlo?", a: "No, los paneles son intuitivos y brindamos capacitación a tu equipo." }
    ],
    metrics: { data_accuracy: "Visión 360°", report_speed: "Insights accionables", insights_generated: "Reportes en tiempo real" }
  }
];

export default function ServiceOfferings() {
  const { ref } = useScrollBasedAnimation();
  const hasMounted = useClientSideOnly();
  const [activeService, setActiveService] = useState(0);
  const [openFaqs, setOpenFaqs] = useState({}); // Estado para FAQ abiertos

  // Detectar hash de servicio en URL y navegar automáticamente
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const serviceMap = {
        '#servicios-agentes-ia': 0,
        '#servicios-automatizaciones': 1,
        '#servicios-integraciones': 2,
        '#servicios-marketing': 3,
        '#servicios-web-seo': 4,
        '#servicios-analytics': 5
      };
      
      if (serviceMap.hasOwnProperty(hash)) {
        setActiveService(serviceMap[hash]);
        
        // Scroll automático a la sección de servicios si no está visible
        setTimeout(() => {
          const serviciosSection = document.getElementById('servicios');
          if (serviciosSection) {
            serviciosSection.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      } else if (hash === '#servicios') {
        setActiveService(0);
        
        // Scroll automático para hash genérico también
        setTimeout(() => {
          const serviciosSection = document.getElementById('servicios');
          if (serviciosSection) {
            serviciosSection.scrollIntoView({ 
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

  // Limpiar FAQs abiertas cuando cambia el servicio activo
  useEffect(() => {
    setOpenFaqs({});
  }, [activeService]);

  // Manejar FAQ toggle
  const toggleFaq = (serviceIndex, faqIndex) => {
    const faqId = `${serviceIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Métricas generales de servicios
  const SERVICES_METRICS = [
    { value: "Mayor", label: "rentabilidad" },
    { value: "Ahorro", label: "de tiempo" },
    { value: "Automatización", label: "24/7" },
    { value: "Disponibilidad", label: "continua" }
  ];

  // Mapeo de métricas a iconos específicos
  const getMetricIcon = (metricKey) => {
    const iconMap = {
      'roi': DollarSign,
      'time_saved': Clock,
      'response_time': Gauge,
      'conversion_boost': TrendingUp,
      'cac_reduction': Target,
      'roas': ShoppingCart,
      'data_accuracy': Database,
      'sync_time': Activity,
      'page_speed': Zap,
      'seo_boost': Search,
      'conversion_rate': Percent,
      'report_speed': BarChart3,
      'insights_generated': FileText
    };
    
    return iconMap[metricKey] || Activity; // Activity como icono por defecto
  };

  // Filtrar integraciones disponibles
  const getServiceIntegrations = (serviceIntegrations) => {
    return INTEGRATIONS.filter(integration => 
      serviceIntegrations.some(name => 
        integration.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(integration.name.toLowerCase())
      )
    ).slice(0, 6);
  };

  // Renderizar tarjeta de servicio
  const renderServiceCard = (service, index) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Contenido principal */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header con gradiente personalizado */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 blur-xl rounded-2xl`} />
          <div className="relative">
            {/* Icono en la parte superior */}
            <div className="flex justify-start mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            {/* Contenido del header */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
                {service.title}
              </h3>
              <p className="text-cyan-300 text-sm sm:text-base lg:text-lg font-light">
                {service.subtitle}
              </p>
            </div>
            <p className={`${typographyPresets.description} mb-6`}>
              {service.oneLiner}
            </p>
          </div>
        </div>

        {/* Métricas clave - CON ICONOS ESPECÍFICOS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {Object.entries(service.metrics).map(([key, value]) => {
            const MetricIcon = getMetricIcon(key);
            return (
              <div 
                key={key} 
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-slate-800 border border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MetricIcon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-blue-200/70 leading-tight">
                    {key.replace(/_/g, ' ')
                       .replace(/\b\w/g, l => l.toUpperCase())
                       .replace('Roi', 'ROI')
                       .replace('Cac', 'CAC') 
                       .replace('Roas', 'ROAS')
                       .replace('Seo', 'SEO')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs - Solo visible en desktop */}
        {hasMounted && (
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DemoButton 
            variant="default"
            size="medium"
            text="Ver Demo de 30 min"
            subtitle="Caso de tu industria"
            showSubtitle={true}
          />
          <WhatsAppButton 
            variant="default"
            size="medium"
            text="Hablar por WhatsApp"
            subtitle="Respuesta en <2 min"
            showSubtitle={true}
          />
        </div>
        )}

        {/* Resultados */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            Resultados que verás
          </h4>
          <ul className="space-y-3">
            {service.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className={typographyPresets.featureItem}>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <Puzzle className="h-5 w-5 text-cyan-400" />
            Qué incluye
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                <span className={typographyPresets.featureItem}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Integraciones con logos más grandes */}
        <div className={`p-4 sm:p-6 rounded-xl ${gradients.cardGlass} border border-white/10`}>
          <h4 className="text-lg font-medium text-white mb-4">Integraciones</h4>
          <div className="grid grid-cols-3 gap-3">
            {getServiceIntegrations(service.integrations).map((integration, idx) => (
              <div key={idx} className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <Image 
                  src={integration.src} 
                  alt={integration.name}
                  width={integration.width}
                  height={integration.height}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    if (integration.fallback) {
                      e.target.src = integration.fallback;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20">
          <blockquote className={`${typographyPresets.testimonial} mb-3`}>
            "{service.testimonial}"
          </blockquote>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* FAQ - SISTEMA COMPLETAMENTE NUEVO CON REACT STATE - MÓVIL FUNCIONAL */}
        <div className="space-y-3 relative z-20">
          <h4 
            className="text-lg font-medium mb-4"
            style={{ color: '#ffffff' }}
          >
            FAQ
          </h4>
          {service.faqs.map((faq, faqIdx) => {
            const faqId = `${index}-${faqIdx}`;
            const isOpen = openFaqs[faqId];
            
            return (
              <div 
                key={faqIdx} 
                className="border-b border-white/10 pb-3 last:border-b-0 relative z-30"
              >
                {/* Botón de pregunta - COMPLETAMENTE FUNCIONAL MÓVIL */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFaq(index, faqIdx);
                  }}
                  data-no-swipe
                  className="w-full cursor-pointer text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2 py-3 text-left touch-manipulation"
                  style={{ 
                    color: '#67e8f9',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    minHeight: '44px', // Área táctil mínima recomendada
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  {/* Icono de flecha con animación */}
                  <svg 
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                    style={{ 
                      color: 'rgba(34, 211, 238, 0.7)',
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{faq.q}</span>
                </button>
                
                {/* Respuesta con animación de altura - GARANTIZADA */}
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    paddingTop: isOpen ? '12px' : '0px',
                    marginTop: isOpen ? '12px' : '0px'
                  }}
                >
                  <div className="pl-6 pb-2">
                    <p 
                      className="text-xs sm:text-sm leading-relaxed border-l-2 pl-4"
                      style={{ 
                        color: 'rgba(255,255,255,0.85)',
                        borderColor: 'rgba(34, 211, 238, 0.3)',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <Section 
      id="servicios" 
      className="animate-in"
      ref={ref}
      aria-label="Servicios de automatización con IA"
      data-below-fold
    >
      {/* Header de sección */}
      <SectionTitle
        subtitle={<>Soluciones de <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">IA</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">automatización</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">integraciones</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">marketing digital</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">desarrollo web</span> y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">analítica</span> para crecer con eficiencia.</>}
      >
        Servicios que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">transforman tu negocio</span>
      </SectionTitle>

      {/* Sistema de navegación mejorado */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={SERVICES_DATA}
          activeIndex={activeService}
          onItemSelect={setActiveService}
          variant="pills"
          size="large"
          showIcons={true}
          showNumbers={false}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas con transición limpia */}
      <div className="max-w-6xl mx-auto">
        <CleanSwipeCard
          items={SERVICES_DATA}
          activeIndex={activeService}
          onIndexChange={setActiveService}
          renderCard={renderServiceCard}
          enableSwipe={true}
          showIndicators={false}
          showArrows={false}
          className="mb-8"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
          transitionDuration={600}
        />
      </div>


      {/* Métricas de servicios */}
      <div className="mt-12 lg:mt-16">
        <div className="text-center mb-6 px-4">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Impactos</span> que buscamos en nuestros <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">servicios</span>
          </h3>
          <p className={`${typographyPresets.description} max-w-2xl mx-auto`}>
            Indicadores que priorizamos y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">monitoreamos en producción</span>
          </p>
        </div>
        
        <div className="mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {SERVICES_METRICS.map((stat, i) => {
              const renderMetric = () => {
                switch(i) {
                  case 0: // Mayor / rentabilidad
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                            <DollarSign className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">Mayor</div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">
                          rentabilidad
                        </p>
                      </>
                    );
                  case 1: // Ahorro / de tiempo  
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">Ahorro</div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">
                          de tiempo
                        </p>
                      </>
                    );
                  case 2: // Automatización 24/7
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                            <Zap className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                          Automatización
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">24/7</p>
                      </>
                    );
                  case 3: // Disponibilidad continua
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
                            <Activity className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                          Disponibilidad
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">continua</p>
                      </>
                    );
                  default:
                    return (
                      <>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                          {stat.value}
                        </div>
                        <p className="text-sm lg:text-base font-light text-blue-200/70 leading-relaxed">
                          {stat.label}
                        </p>
                      </>
                    );
                }
              };
              
              return (
                <div key={i} className="py-4 lg:py-2">
                  {renderMetric()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
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
  ArrowRight, CheckCircle, Search, Compass, FileCheck, 
  Rocket, TrendingUp, Timer, MessageCircle, Shield, ShieldCheck,
  Clock, Calendar, Users, Zap, Target, 
  BarChart3, Star, DollarSign, Gauge, Activity
} from "lucide-react";
import { typographyPresets, textColors } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Datos de metodología adaptados al sistema de servicios
const METHODOLOGY_DATA = [
  {
    id: "descubrimiento",
    title: "Descubrimiento",
    subtitle: "alineamos objetivos y detectamos quick wins",
    oneLiner: "Reunión breve para entender tu contexto, mapear el customer journey actual y priorizar oportunidades de alto impacto. Saldrás con un plan claro de próximos pasos.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
    time: "25–30 min · diagnóstico inicial",
    results: [
      "Objetivos y métricas de éxito definidas desde el inicio",
      "Mapa del customer journey con puntos de fricción identificados",
      "Lista priorizada de quick wins y plan de siguientes pasos"
    ],
    features: [
      "Reunión con áreas clave (ventas, marketing, soporte/operaciones)",
      "Revisión de embudos y herramientas en uso (CRM, mensajería, web, ads)",
      "Identificación de problemas y oportunidades por impacto/esfuerzo",
      "Definición de métricas de éxito y criterios de seguimiento"
    ],
    deliverable: "Resumen ejecutivo de objetivos y métricas de éxito; mapa inicial del journey y flujos críticos; prioridades y próximos pasos sugeridos.",
    whatWeNeed: "1 responsable por área (ventas/soporte/marketing); acceso de lectura a materiales clave (FAQs, scripts, políticas); contexto de herramientas usadas (CRM, helpdesk, analytics).",
    testimonial: "En 30 minutos identificaron 3 oportunidades que no habíamos considerado.",
    faqs: [
      { q: "¿Quién debe participar?", a: "Un responsable por área involucrada (ventas, soporte, marketing). Con eso es suficiente para esta etapa." },
      { q: "¿Qué debo preparar antes de la reunión?", a: "Accesos de lectura o capturas de tus flujos actuales, FAQs, y una lista breve de pains u objetivos." },
      { q: "¿Es realmente gratuito y sin compromiso?", a: "Sí. Es un diagnóstico inicial para entender tu caso y proponer próximos pasos." },
      { q: "¿Necesitan acceso a mis sistemas?", a: "Solo lectura o material exportado. Si se requieren credenciales, trabajamos con NDA y cuentas limitadas." },
      { q: "¿La sesión es remota o presencial?", a: "Normalmente remota (videollamada). Presencial disponible según ubicación y agenda." },
      { q: "¿Qué recibo después del descubrimiento?", a: "Un resumen ejecutivo con oportunidades priorizadas, mapa del journey y propuesta de siguientes pasos." }
    ],
    metrics: { baseline_time: "Línea base operativa", response_rate: "Tiempos de respuesta", abandonment: "Puntos de fricción" }
  },
  {
    id: "diagnostico",
    title: "Diagnóstico",
    subtitle: "auditoría a fondo y plan de acción claro",
    oneLiner: "En 48 horas realizamos una auditoría técnica y de procesos (datos, conversaciones, embudos y herramientas). Terminamos con un roadmap priorizado por valor/esfuerzo y las dependencias para implementarlo con baja fricción.",
    icon: Compass,
    color: "from-purple-600 to-pink-500",
    time: "48 h · auditoría y roadmap",
    results: [
      "Inventario y evaluación de sistemas, flujos y datos",
      "Backlog priorizado con responsables y siguientes pasos",
      "Roadmap 30-60-90 con dependencias y hitos",
      "Recomendaciones de gobierno de datos y buenas prácticas"
    ],
    features: [
      "Auditoría de CRM, mensajería, web, analytics y ads",
      "Análisis de intenciones, volúmenes, SLA y puntos de fricción",
      "Mapa de integraciones actuales vs. requeridas (APIs, webhooks)",
      "Evaluación del potencial de automatización e IA por proceso",
      "Sesión de revisión de hallazgos y validación con tus equipos"
    ],
    deliverable: "Informe ejecutivo de hallazgos y riesgos; backlog priorizado (valor / esfuerzo); roadmap 30-60-90 con dependencias; mapa de integraciones y recomendaciones de datos/seguridad.",
    whatWeNeed: "Accesos de lectura o sandbox / tokens limitados; export o muestras de conversaciones/FAQs; punto de contacto técnico y de negocio para validar prioridades.",
    testimonial: "El diagnóstico reveló problemas que llevábamos arrastrando años sin detectar.",
    faqs: [
      { q: "¿Qué accesos requieren exactamente?", a: "Lectura a CRM/Helpdesk/Analytics o ambientes sandbox. Si se requieren credenciales, trabajamos con NDA, permisos mínimos y logs de acceso." },
      { q: "¿Interrumpe mi operación?", a: "No. La auditoría se hace con accesos de lectura y ventanas controladas de prueba." },
      { q: "¿Qué herramientas auditan?", a: "CRM, mensajería, ecommerce, web/landing, analytics/ads y cualquier sistema propio vía API." },
      { q: "¿Puedo ejecutar el plan por mi cuenta?", a: "Sí. El roadmap es accionable. Puedes implementarlo internamente o con nuestro equipo." },
      { q: "¿Qué ocurre después del diagnóstico?", a: "Presentamos hallazgos y acordamos el orden de implementación (quick wins y proyectos)." }
    ],
    metrics: { time_reduction: "Brechas y riesgos", cost_savings: "Prioridades claras", automation_potential: "Mapa de integraciones" }
  },
  {
    id: "propuesta",
    title: "Propuesta",
    subtitle: "plan de implementación por sprints con estimaciones claras",
    oneLiner: "Presentación ejecutiva con alcance, cronograma y estimaciones de impacto y tiempo-a-valor (TTV), basadas en los hallazgos de Descubrimiento y Diagnóstico. Incluye criterios de aceptación, responsables y siguientes pasos.",
    icon: FileCheck,
    color: "from-green-600 to-emerald-500",
    time: "Días 4–5 · plan detallado y roadmap con estimaciones",
    results: [
      "Plan por sprints con cronograma y responsables",
      "Estimaciones (impacto y TTV) con supuestos claramente documentados",
      "Criterios de aceptación y métricas de éxito por entregable",
      "Riesgos y dependencias identificados con plan de mitigación"
    ],
    features: [
      "Diseño detallado de flujos (conversacionales, automatizaciones y reglas)",
      "Arquitectura de integraciones y datos (APIs, webhooks, seguridad)",
      "Backlog priorizado valor/esfuerzo y roadmap 30-60-90",
      "Estimación de esfuerzo y costos por fase",
      "Plan de medición (métricas de éxito y cadencia de seguimiento)",
      "Plan de capacitación y change management"
    ],
    deliverable: "Documento de propuesta (PDF/Doc); cronograma por sprints y dependencias; criterios de aceptación y plan de pruebas; supuestos, exclusiones, riesgos y mitigaciones.",
    whatWeNeed: "Validación de casos de uso y tono de marca; priorización de backlog y aprobación de alcance; nombrar responsables por área (PO/tech lead).",
    testimonial: "La propuesta fue tan detallada que pudimos presentarla directamente al board.",
    faqs: [
      { q: "¿Cómo calculan el \"impacto estimado\" y el TTV?", a: "Usamos datos de volúmenes actuales, complejidad de procesos/integraciones y supuestos acordados. Las estimaciones se presentan en rangos y se revisan al inicio de cada sprint." },
      { q: "¿Qué pasa si cambia el alcance o la prioridad?", a: "Aplicamos control de cambios: reestimamos el sprint/roadmap y documentamos el impacto en tiempos y entregables." },
      { q: "¿Podemos implementar por fases?", a: "Sí. Priorizamos quick wins y planificamos entregas incrementales para capturar valor temprano." },
      { q: "¿Cómo mediremos el éxito del proyecto?", a: "Con criterios de aceptación y métricas de éxito definidas en la propuesta. Cada sprint incluye demo y validación." },
      { q: "¿Qué requiere de mi equipo?", a: "Un responsable de negocio y uno técnico para validar decisiones, más tiempos acotados para revisión de entregables." },
      { q: "¿Podemos ejecutar el plan internamente?", a: "Sí. Entregamos documentación completa; puedes implementarlo con tu equipo y nosotros acompañamos donde lo necesiten." }
    ],
    metrics: { projected_roi: "Impacto estimado", ttv: "TTV estimado", success_criteria: "Criterios de aceptación" }
  },
  {
    id: "implementacion",
    title: "Implementación",
    subtitle: "puesta en marcha controlada y sin fricciones",
    oneLiner: "Ejecutamos el plan: desarrollos finales, integraciones y go-live por fases con pruebas end-to-end. Dejamos el sistema en producción, monitoreado y con tu equipo capacitado para operar y escalar.",
    icon: Rocket,
    color: "from-orange-600 to-red-500",
    time: "Semana 1–2 · go-live por fases (según alcance)",
    results: [
      "Sistema en producción, integrado con tus canales y herramientas",
      "Monitoreo y alertas activos con panel de métricas",
      "Handover completo y equipo capacitado",
      "Plan de soporte y mejora continua acordado"
    ],
    features: [
      "Entrenamiento final de IA con datos del negocio y reglas de respuesta",
      "Conexión a WhatsApp, Web/Chat, Instagram y CRM/ERP/ecommerce",
      "Pruebas UAT y piloto en ambiente controlado, luego despliegue por fases",
      "Checklist de seguridad y accesos, logging y auditoría",
      "Tablero de métricas, alertas y documentación operativa",
      "Plan de rollback y contingencia ante incidentes"
    ],
    deliverable: "Flujos y bots activos en producción; credenciales, accesos y documentación (operativa y técnica); dashboard con métricas y alertas configuradas; plan de soporte / canales de atención y escalamiento.",
    whatWeNeed: "Ventanas de prueba y aprobaciones por sprint; punto de contacto técnico y de negocio; accesos de lectura/escritura acotados para despliegue.",
    testimonial: "En una semana teníamos funcionando lo que creíamos tomaría meses implementar.",
    faqs: [
      { q: "¿Interrumpe mis operaciones?", a: "No. Hacemos despliegue por fases, en ventanas controladas y con plan de contingencia." },
      { q: "¿Qué pasa si aparece un incidente en producción?", a: "Activamos el plan de rollback, resolvemos el incidente y reprogramamos la salida con los ajustes necesarios." },
      { q: "¿Cómo se valida que todo quedó bien integrado?", a: "Con pruebas UAT y de regresión, checklist de integraciones y verificación de eventos/métricas en el dashboard." },
      { q: "¿Qué requiere mi equipo durante la implementación?", a: "Validación rápida de pruebas, aprobación de hitos y un responsable técnico/negocio para decisiones puntuales." },
      { q: "¿Qué soporte tengo post go-live?", a: "Definimos un SLA, canal de soporte y una cadencia de seguimiento para mejoras continuas." },
      { q: "¿Pueden revertir o pausar un flujo específico?", a: "Sí. Los flujos se pueden pausar o revertir sin afectar el resto de la operación." }
    ],
    metrics: { response_time: "Go-live controlado", automation_rate: "Flujos activos", integration_success: "Monitoreo en tiempo real" }
  },
  {
    id: "optimizacion",
    title: "Optimización continua",
    subtitle: "mejora iterativa con experimentación y datos",
    oneLiner: "Ejecutamos un ciclo de experimentación, análisis y mejora: pruebas A/B, nuevas automatizaciones y reporting continuo. Priorizamos iniciativas por valor/esfuerzo y mantenemos un roadmap trimestral para evolucionar tu operación sin fricciones.",
    icon: TrendingUp,
    color: "from-indigo-600 to-blue-500",
    time: "Programa continuo · ciclos mensuales y QBR trimestral",
    results: [
      "Evolución sostenida de conversiones y experiencia del cliente",
      "Automatizaciones nuevas o mejoradas según patrones de uso",
      "Roadmap trimestral con prioridades y responsables",
      "Alertas y tableros para tomar decisiones a tiempo"
    ],
    features: [
      "A/B testing de mensajes, flujos y journeys clave",
      "Diseño y despliegue de automatizaciones basadas en insights",
      "Sesiones mensuales de revisión + QBR (Quarterly Business Review)",
      "Recomendaciones predictivas y plan de mejora continua",
      "Optimización de performance y resiliencia operativa"
    ],
    deliverable: "Roadmap trimestral con backlog priorizado; plan de experimentos (hipótesis, duración, métricas); informe ejecutivo mensual con hallazgos y decisiones; tableros actualizados y alertas configuradas.",
    whatWeNeed: "Feedback de equipos y validación de prioridades; ventanas para pruebas y despliegues acotados; accesos de lectura a datos y un PO/responsable por área.",
    testimonial: "Cada mes vemos mejoras medibles. El ROI sigue creciendo trimestre a trimestre.",
    faqs: [
      { q: "¿Cuál es la cadencia del programa?", a: "Trabajamos con revisiones mensuales y un QBR cada trimestre para ajustar roadmap y metas." },
      { q: "¿Cómo deciden qué optimizar primero?", a: "Usamos matriz valor/esfuerzo y datos de comportamiento; priorizamos quick wins y experimentos de mayor impacto potencial." },
      { q: "¿Cómo miden el progreso sin prometer KPIs fijos?", a: "Definimos métricas de éxito por experimento y las comparamos contra la línea base; documentamos supuestos y aprendizados." },
      { q: "¿Qué pasa si cambian nuestras prioridades de negocio?", a: "Reordenamos el backlog en la revisión mensual y actualizamos el roadmap trimestral." },
      { q: "¿Necesito un equipo dedicado?", a: "Solo un responsable por área para decisiones y feedback; nosotros nos encargamos de la ejecución." },
      { q: "¿Puedo pausar o terminar el servicio?", a: "Sí. Es un programa continuo mes a mes; puedes pausar o cerrar al término del período en curso." }
    ],
    metrics: { conversion_boost: "Mejora continua", csat_improvement: "Nuevas automatizaciones", first_contact_resolution: "Reporting ejecutivo" }
  }
];

// Métricas específicas del proceso
const PROCESS_METRICS = [
  { value: "Inicio", label: "rápido" },
  { value: "Metodología", label: "validada" },
  { value: "Eficiencia", label: "operativa" },
  { value: "5 etapas", label: "claras" }
];

// Mapeo de métricas a iconos (reutilizado de servicios)
const getMetricIcon = (metricKey) => {
  const iconMap = {
    'baseline_time': Timer,
    'response_rate': MessageCircle,
    'abandonment': TrendingUp,
    'time_reduction': Clock,
    'cost_savings': DollarSign,
    'automation_potential': Rocket,
    'projected_roi': DollarSign,
    'ttv': Gauge,
    'success_criteria': Target,
    'response_time': Timer,
    'automation_rate': Activity,
    'integration_success': CheckCircle,
    'conversion_boost': TrendingUp,
    'csat_improvement': Star,
    'first_contact_resolution': MessageCircle
  };
  
  return iconMap[metricKey] || Activity;
};

export default function WorkMethodology() {
  const { ref } = useScrollBasedAnimation();
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hasMounted = useClientSideOnly();
  const [openFaqs, setOpenFaqs] = useState({});

  // Detectar dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limpiar FAQs abiertas cuando cambia el paso activo
  useEffect(() => {
    setOpenFaqs({});
  }, [activeStep]);

  // Manejar FAQ toggle
  const toggleFaq = (stepIndex, faqIndex) => {
    const faqId = `${stepIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Renderizar tarjeta de metodología (adaptado del patrón de servicios)
  const renderMethodologyCard = (step, index) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Contenido principal */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header con gradiente personalizado */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-10 blur-xl rounded-2xl`} />
          <div className="relative">
            {/* Icono en la parte superior */}
            <div className="flex justify-start mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg`}>
                <step.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            {/* Contenido del header */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
                Paso {index + 1}: {step.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700/80 border border-white/20 text-white text-sm font-medium w-fit`}>
                  <Clock className="w-4 h-4" />
                  <span>{step.time}</span>
                </div>
                <p className="text-cyan-300 text-sm sm:text-base lg:text-lg font-light">
                  {step.subtitle}
                </p>
              </div>
            </div>
            <p className={`${typographyPresets.description} mb-6`}>
              {step.oneLiner}
            </p>
          </div>
        </div>

        {/* Métricas específicas del paso */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {Object.entries(step.metrics).map(([key, value]) => {
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
                       .replace('Ttv', 'TTV')
                       .replace('Csat', 'CSAT')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs específicos del paso - Solo visible en desktop */}
        {hasMounted && (
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DemoButton 
              variant="default"
              size="medium"
              text={step.id === 'propuesta' ? `Revisar ${step.title}` : `Agendar ${step.title}`}
              subtitle={step.id === 'propuesta' ? "Documento y cronograma" : "Reunión gratuita (25–30 min)"}
              showSubtitle={true}
            />
            <WhatsAppButton 
              variant="default"
              size="medium"
              text="Hablar por WhatsApp"
              subtitle="Respuesta en menos de 2 min"
              showSubtitle={true}
            />
        </div>
        )}

        {/* Resultados esperados */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            Resultados de esta etapa
          </h4>
          <ul className="space-y-3">
            {step.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className={typographyPresets.featureItem}>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Qué incluye */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <CheckCircle className="h-5 w-5 text-cyan-400" />
            Qué incluye este paso
          </h4>
          <ul className="space-y-3">
            {step.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                <span className={typographyPresets.featureItem}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar con información adicional */}
      <div className="space-y-6">
        {/* Entregables */}
        <div className={`p-4 sm:p-6 rounded-xl ${gradients.cardGlass} border border-white/10`}>
          <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            Entregables
          </h4>
          <p className={typographyPresets.description}>
            {step.deliverable}
          </p>
          
          <div className="mt-4 p-3 bg-orange-600/10 border border-orange-400/20 rounded-lg">
            <h5 className="text-orange-400 text-sm font-medium mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Qué necesitamos de ti
            </h5>
            <p className="text-orange-100/80 text-sm">{step.whatWeNeed}</p>
          </div>
        </div>

        {/* Testimonio */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20">
          <blockquote className={`${typographyPresets.testimonial} mb-3`}>
            "{step.testimonial}"
          </blockquote>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* FAQ específicas del paso */}
        <div className="space-y-3 relative z-20">
          <h4 className="text-lg font-medium mb-4 text-white">
            Preguntas frecuentes
          </h4>
          {step.faqs.map((faq, faqIdx) => {
            const faqId = `${index}-${faqIdx}`;
            const isOpen = openFaqs[faqId];
            
            return (
              <div 
                key={faqIdx} 
                className="border-b border-white/10 pb-3 last:border-b-0 relative z-30"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFaq(index, faqIdx);
                  }}
                  data-no-swipe
                  className="w-full cursor-pointer text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2 py-3 text-left touch-manipulation text-cyan-300"
                  style={{ 
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : 'rotate-0'
                  }`} />
                  <span>{faq.q}</span>
                </button>
                
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
                    <p className="text-xs sm:text-sm leading-relaxed border-l-2 border-cyan-400/30 pl-4 text-white/85">
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
      id="proceso" 
      className="animate-in"
      ref={ref}
      aria-label="Cómo trabajamos"
    >
      {/* Header de sección reutilizando el patrón de servicios */}
      <SectionTitle
        subtitle={<><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Metodología clara</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">entregables por etapa</span> y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">tiempos definidos</span>. Empezamos rápido, nos integramos con tus sistemas y medimos impacto desde el primer día.</>}
      >
        ¿Cómo trabajamos? <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Simple y efectivo</span>
      </SectionTitle>

      {/* Sistema de navegación reutilizado */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={METHODOLOGY_DATA}
          activeIndex={activeStep}
          onItemSelect={setActiveStep}
          variant="pills"
          size={hasMounted && isMobile ? "medium" : "large"}
          showIcons={true}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas reutilizado con contenido adaptado */}
      <div className="max-w-6xl mx-auto">
        <CleanSwipeCard
          items={METHODOLOGY_DATA}
          activeIndex={activeStep}
          onIndexChange={setActiveStep}
          renderCard={renderMethodologyCard}
          enableSwipe={hasMounted && isMobile}
          showIndicators={false}
          showArrows={false}
          className="mb-8"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
          transitionDuration={600}
        />
      </div>


      {/* Métricas generales del proceso */}
      <div className="mt-12 lg:mt-16">
        <div className="text-center mb-6 px-4">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            Qué puedes esperar de <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">nuestro proceso</span>
          </h3>
          <p className={`${typographyPresets.description} max-w-2xl mx-auto`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Metodología en 5 etapas</span> con entregables claros y seguimiento continuo.
          </p>
        </div>
        
        <div className="mt-8 p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10 max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {PROCESS_METRICS.map((stat, i) => {
              const renderMetric = () => {
                switch(i) {
                  case 0: // Inicio rápido
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                            <Rocket className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                          Inicio
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">rápido</p>
                      </>
                    );
                  case 1: // Metodología validada
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                          Metodología
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">validada</p>
                      </>
                    );
                  case 2: // Eficiencia operativa
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                            <Gauge className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">
                          Eficiencia
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">operativa</p>
                      </>
                    );
                  case 3: // 5 etapas / claras
                    return (
                      <>
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
                            <Target className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-thin text-white mb-1">5 etapas</div>
                        <p className="text-base sm:text-lg lg:text-xl font-thin text-white/80 leading-relaxed">claras</p>
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

// Documentación de cambios - SISTEMA COHERENTE REUTILIZADO:
// - Implementado sistema de tarjetas CleanSwipeCard reutilizado de servicios
// - Mantenida paleta de colores coherente con gradients y componentColors del design system
// - Reutilizada navegación TouchNavigation para consistencia
// - Adaptados iconos coherentes con el mapeo usado en servicios
// - Implementado patrón FAQ funcional móvil igual que servicios
// - Mantenida estructura Section/SectionTitle del sistema de diseño
// - Reutilizados componentes DemoButton y WhatsAppButton
// - Conservado el contenido específico del brief pero con sistema visual coherente
// - Eliminados fondos negros, usando bg-slate-800 y gradients consistentes
import {
  Bot, Zap, Database, Target, Globe, BarChart3, Award, Shield, Star,
  Phone, Clock, TrendingUp, PieChart, DollarSign, Lock, Cloud, Cpu,
  ShoppingCart, Rocket, Calendar, CheckCircle, GraduationCap, Heart,
  Home, UtensilsCrossed, Scale
} from "lucide-react";

/* ----------------------------- Marca & navegación ---------------------------- */
export const BRAND = Object.freeze({
  name: "Cognitiva",
  phone: "+56 9 3241 7147",
  email: "cognitivaspa@gmail.com",
  city: "Santiago, Chile",
  whatsappLink: "https://wa.me/56932417147?text=Hola%20Cognitiva,%20quiero%20saber%20m%C3%A1s",
  calendarLink: "https://cal.com/www.cognitiva-ai.agency",
});

export const NAV_LINKS = Object.freeze([
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Industrias", href: "#industrias" },
]);

export const TRUST_BADGES = Object.freeze([
  { icon: Award, label: "Partner Oficial" },
  { icon: Shield, label: "ISO 27001" },
  { icon: Star, label: "4.9/5 Reviews" },
  { icon: TrendingUp, label: "+6 Años de Experiencia" },
]);

/* --------------------------------- Servicios -------------------------------- */
export const SERVICES = Object.freeze([
  {
    icon: Bot,
    title: "Agentes de IA & Chatbots",
    bullets: [
      "Atiende y vende 24/7 en WhatsApp, Instagram y Web",
      "IA conversacional que persuade como un agente humano",
      "Soporte técnico y ventas en múltiples idiomas",
      "Respuestas instantáneas para reducir tiempos de espera",
      "Escalable para miles de conversaciones simultáneas",
    ],
    cta: "🚀 Activar mi agente inteligente",
  },
  {
    icon: Zap,
    title: "Automatizaciones Inteligentes",
    bullets: [
      "Captura y calificación automática de prospectos",
      "Workflows de ventas y marketing listos para usar",
      "Alertas y seguimientos en tiempo real",
      "Ahorra horas de trabajo con procesos automáticos",
      "Integración fluida con tus herramientas actuales",
    ],
    cta: "⚡ Empezar a automatizar",
  },
  {
    icon: Database,
    title: "Integraciones Empresariales",
    bullets: [
      "Conecta CRMs como HubSpot, Salesforce y Pipedrive",
      "Integración con ERPs y sistemas core de negocio",
      "APIs personalizadas y webhooks a medida",
      "Sincronización de datos sin errores ni duplicados",
      "Escalabilidad garantizada para el crecimiento",
    ],
    cta: "🔗 Conectar mi ecosistema",
  },
  {
    icon: Target,
    title: "Marketing Digital & Embudos",
    bullets: [
      "SEO/SEM optimizados con Inteligencia Artificial",
      "Campañas de retargeting para cerrar más ventas",
      "Embudos de conversión diseñados para ROI máximo",
      "Análisis continuo para optimizar resultados",
      "Creatividades y mensajes personalizados por audiencia",
    ],
    cta: "🎯 Optimizar mi marketing",
  },
  {
    icon: Globe,
    title: "Desarrollo Web SEO-First",
    bullets: [
      "Core Web Vitals en verde desde el día uno",
      "Arquitectura segura y fácilmente escalable",
      "Optimización móvil y Progressive Web App (PWA)",
      "Diseño UX/UI enfocado en conversión",
      "Carga ultrarrápida para mejorar posicionamiento",
    ],
    cta: "🌐 Crear mi web optimizada",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    bullets: [
      "Dashboards con métricas en tiempo real",
      "Predicción de ventas con Machine Learning",
      "KPIs automatizados y fáciles de interpretar",
      "Alertas inteligentes para decisiones rápidas",
      "Análisis de tendencias y oportunidades de negocio",
    ],
    cta: "📊 Ver mi panel de datos",
  },
]);

/* ---------------------------------- Proceso --------------------------------- */
export const PROCESS_STEPS = Object.freeze([
  {
    icon: Phone,
    title: "Descubrimiento",
    time: "Día 1",
    desc: "Llamada de 25–30 min para alinear objetivos, KPIs y oportunidades rápidas.",
  },
  {
    icon: PieChart,
    title: "Diagnóstico",
    time: "Día 2-3",
    desc: "Mapa de procesos, detección de gaps y priorización de quick wins de alto impacto.",
  },
  {
    icon: Target,
    title: "Propuesta",
    time: "Día 4-5",
    desc: "Plan de trabajo claro con entregables, plazos y ROI proyectado por iniciativa.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    time: "Semana 1-2",
    desc: "Despliegue ágil, integraciones y pruebas end-to-end listas para producción.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    time: "Continuo",
    desc: "Mejora continua basada en datos: A/B testing, nuevas automatizaciones y reporting.",
  },
]);

/* --------------------------------- Casos de uso ------------------------------ */
export const CASE_STUDIES = Object.freeze([
  {
    tag: "E-commerce",
    company: "TiendaOnline Pro",
    icon: ShoppingCart,
    problem:
      "67% de carritos abandonados que representaban miles de dólares en pérdidas mensuales.",
    solution:
      "Implementamos un Chatbot con IA que detecta abandono en tiempo real y envía ofertas personalizadas vía WhatsApp.",
    results:
      "+45% en conversión y +$6.000.000 en ventas mensuales recuperadas en solo 8 semanas.",
    stack: "WhatsApp API + Shopify Plus + IA",
    testimonial:
      "En 2 meses duplicamos las ventas online sin aumentar el presupuesto en publicidad.",
  },
  {
    tag: "Educación",
    company: "Universidad Digital",
    icon: GraduationCap,
    problem:
      "85% de estudiantes con dudas sin resolver fuera del horario de tutorías, afectando la retención estudiantil.",
    solution:
      "Desarrollamos un asistente educativo IA disponible 24/7 que responde consultas académicas y genera material de estudio personalizado.",
    results:
      "+92% satisfacción estudiantil y -40% en deserción del primer año en solo un semestre.",
    stack: "Canvas LMS + OpenAI + MongoDB",
    testimonial:
      "La IA transformó completamente nuestra experiencia educativa. Los estudiantes ahora tienen apoyo instantáneo cuando más lo necesitan.",
  },
  {
    tag: "Salud",
    company: "Clínica Moderna",
    icon: Heart,
    problem:
      "35% de citas perdidas por olvidos y proceso de agendamiento que tomaba 15 minutos por paciente.",
    solution:
      "Creamos un sistema inteligente de gestión de citas con recordatorios automáticos y reagendamiento por voz con IA.",
    results:
      "-78% en citas perdidas y +120% en eficiencia operativa, liberando 4 horas diarias del personal.",
    stack: "Twilio + Google Calendar + IA",
    testimonial:
      "Recuperamos más de $50.000 mensuales en citas que antes se perdían. La inversión se pagó sola en 3 semanas.",
  },
  {
    tag: "Real Estate",
    company: "Inmobiliaria Prime",
    icon: Home,
    problem:
      "Agentes perdían 70% del tiempo calificando leads no cualificados y mostrando propiedades inadecuadas.",
    solution:
      "Implementamos un agente virtual IA que precalifica leads 24/7 y programa visitas solo con compradores serios.",
    results:
      "+250% en productividad de agentes y 3x más cierres de venta en el primer trimestre.",
    stack: "MLS API + ChatGPT + CRM",
    testimonial:
      "Nuestros agentes ahora solo hablan con compradores listos para cerrar. Es un cambio total del negocio.",
  },
  {
    tag: "Gastronomía",
    company: "Restaurante Gourmet",
    icon: UtensilsCrossed,
    problem:
      "60% de llamadas perdidas en hora pico y errores constantes en pedidos telefónicos afectando la reputación.",
    solution:
      "Desplegamos un conserje virtual que toma pedidos por WhatsApp/voz, sugiere maridajes y gestiona reservas automáticamente.",
    results:
      "+180% en pedidos online y calificación de 4.2 a 4.8 estrellas en Google en 2 meses.",
    stack: "WhatsApp Business + Square + IA",
    testimonial:
      "Dejamos de perder ventas por llamadas no atendidas. Ahora procesamos el triple de pedidos sin contratar más personal.",
  },
  {
    tag: "Legal",
    company: "Firma Legal Asociados",
    icon: Scale,
    problem:
      "Abogados invertían 40% del tiempo en tareas administrativas y documentación repetitiva.",
    solution:
      "Automatizamos la generación de contratos, análisis de documentos y respuestas a consultas frecuentes con IA especializada.",
    results:
      "+60% más casos atendidos y reducción de 15 a 3 días en tiempos de respuesta a clientes.",
    stack: "DocuSign + GPT-4 + Notion",
    testimonial:
      "La IA nos devolvió el tiempo para hacer lo que mejor sabemos: defender a nuestros clientes.",
  },
]);

/* --------------------------------- Industrias ------------------------------- */
export const INDUSTRIES = Object.freeze([
  {
    icon: ShoppingCart,
    title: "Retail/E-commerce",
    pain: "Baja conversión",
    solution: "Recuperación + recomendación",
    kpi: "+40% conversión",
  },
  {
    icon: Award,
    title: "Educación",
    pain: "Admisiones saturadas",
    solution: "Agentes IA de orientación",
    kpi: "80% menos tiempo respuesta",
  },
  {
    icon: DollarSign,
    title: "Finanzas",
    pain: "Calificación lenta",
    solution: "Scoring en tiempo real",
    kpi: "3x aprobaciones",
  },
  {
    icon: Globe,
    title: "Turismo",
    pain: "Atención 24/7 multiidioma",
    solution: "Bots políglotas con reservas",
    kpi: "+60% satisfacción",
  },
  {
    icon: Shield,
    title: "Salud",
    pain: "No-shows y fricción",
    solution: "Citas y recordatorios IA",
    kpi: "-40% no-shows",
  },
  {
    icon: Cloud,
    title: "SaaS/Tech",
    pain: "Onboarding complejo",
    solution: "Agentes técnicos IA",
    kpi: "+50% retención",
  },
]);

/* ------------------------------- Integraciones ------------------------------ */
export const INTEGRATIONS = Object.freeze([
  { name: "AWS", src: "/optimized/aws-32x19.avif", fallback: "/logos herramientas/AWS.png", width: 32, height: 19 },
  { name: "Google", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "Google Analytics", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google G.png", width: 32, height: 32 },
  { name: "HTML", src: "/optimized/html-32x32.avif", fallback: "/logos herramientas/HTML.png", width: 32, height: 32 },
  { name: "HubSpot", src: "/optimized/hubspot-32x9.avif", fallback: "/optimized/hubspot-32x9.webp", width: 32, height: 9 },
  { name: "Instagram", src: "/optimized/instagram-32.avif", fallback: "/optimized/instagram-32.webp", width: 32, height: 32 },
  { name: "Mailchimp", src: "/optimized/mailchimp-32x32.avif", fallback: "/logos herramientas/Mailchimp.png", width: 32, height: 32 },
  { name: "Make", src: "/optimized/make-32x32.avif", fallback: "/logos herramientas/Make.png", width: 32, height: 32 },
  { name: "Mercado Libre", src: "/optimized/mercadolibre-32x32.avif", fallback: "/logos herramientas/mercadolibre.png", width: 32, height: 32 },
  { name: "Meta", src: "/optimized/meta-32x32.avif", fallback: "/logos herramientas/Meta.png", width: 32, height: 32 },
  { name: "Facebook", src: "/optimized/meta-32x32.avif", fallback: "/logos herramientas/Meta.png", width: 32, height: 32 },
  { name: "Microsoft", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "Office", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "Teams", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "n8n", src: "/optimized/n8n-32x32.avif", fallback: "/logos herramientas/n8n.png", width: 32, height: 32 },
  { name: "Node.js", src: "/optimized/nodejs-32x32.avif", fallback: "/logos herramientas/Node Js.png", width: 32, height: 32 },
  { name: "PayPal", src: "/optimized/paypal-32x27.avif", fallback: "/logos herramientas/Paypal.png", width: 32, height: 27 },
  { name: "Pipedrive", src: "/optimized/pipedrive-32x32.avif", fallback: "/logos herramientas/Pipedrive.png", width: 32, height: 32 },
  { name: "Salesforce", src: "/optimized/salesforce-32x23.avif", fallback: "/optimized/salesforce-32x23.webp", width: 32, height: 23 },
  { name: "Shopify Plus", src: "/optimized/shopify-32x9.avif", fallback: "/optimized/shopify-32x9.webp", width: 32, height: 9 },
  { name: "SiteGround", src: "/optimized/siteground-32x32.avif", fallback: "/logos herramientas/Siteground.png", width: 32, height: 32 },
  { name: "Slack", src: "/optimized/slack-32x32.avif", fallback: "/logos herramientas/Slack.png", width: 32, height: 32 },
  { name: "Stripe", src: "/optimized/stripe-32x14.avif", fallback: "/logos herramientas/stripe.png", width: 32, height: 14 },
  { name: "TikTok", src: "/optimized/tiktok-32x32.avif", fallback: "/logos herramientas/TikTok.png", width: 32, height: 32 },
  { name: "WhatsApp", src: "/optimized/whatsapp-32x27.avif", fallback: "/optimized/whatsapp-32x27.webp", width: 32, height: 27 },
  { name: "WordPress", src: "/optimized/wordpress-32x32.avif", fallback: "/logos herramientas/WordPress.png", width: 32, height: 32 },
  { name: "Zapier", src: "/optimized/zapier-32x32.avif", fallback: "/logos herramientas/Zapier.png", width: 32, height: 32 },
  // Aliases adicionales para mejor matching
  { name: "WooCommerce", src: "/optimized/wordpress-32x32.avif", fallback: "/logos herramientas/WordPress.png", width: 32, height: 32 },
  { name: "VTEX", src: "/optimized/shopify-32x9.avif", fallback: "/logos herramientas/Shopify 2.png", width: 32, height: 9 },
  { name: "Mercado Pago", src: "/optimized/mercadolibre-32x32.avif", fallback: "/logos herramientas/mercadolibre.png", width: 32, height: 32 },
  { name: "Gmail", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "Google Ads", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google G.png", width: 32, height: 32 },
  { name: "LinkedIn", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "Calendly", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "Calendar", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "Calendars", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "CRM", src: "/optimized/hubspot-32x9.avif", fallback: "/logos herramientas/HubSpot.png", width: 32, height: 9 },
  { name: "CRM inmobiliario", src: "/optimized/salesforce-32x23.avif", fallback: "/logos herramientas/Salesforce.png", width: 32, height: 23 },
  { name: "portales", src: "/optimized/wordpress-32x32.avif", fallback: "/logos herramientas/WordPress.png", width: 32, height: 32 },
  { name: "formularios", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "pasarela de pago", src: "/optimized/stripe-32x14.avif", fallback: "/logos herramientas/stripe.png", width: 32, height: 14 },
  { name: "pasarelas de pago", src: "/optimized/paypal-32x27.avif", fallback: "/logos herramientas/Paypal.png", width: 32, height: 27 },
  { name: "mensajería segura", src: "/optimized/whatsapp-32x27.avif", fallback: "/logos herramientas/WhatsApp.png", width: 32, height: 27 },
  { name: "HIS/EMR", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "Core bancario", src: "/optimized/aws-32x19.avif", fallback: "/logos herramientas/AWS.png", width: 32, height: 19 },
  { name: "scoring", src: "/optimized/salesforce-32x23.avif", fallback: "/logos herramientas/Salesforce.png", width: 32, height: 23 },
  { name: "KYC/AML", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "Product analytics", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google G.png", width: 32, height: 32 },
  { name: "Helpdesk", src: "/optimized/slack-32x32.avif", fallback: "/logos herramientas/Slack.png", width: 32, height: 32 },
  { name: "Billing", src: "/optimized/stripe-32x14.avif", fallback: "/logos herramientas/stripe.png", width: 32, height: 14 },
  { name: "PMS/Channel Manager", src: "/optimized/zapier-32x32.avif", fallback: "/logos herramientas/Zapier.png", width: 32, height: 32 },
  { name: "OMS/WMS/TMS", src: "/optimized/aws-32x19.avif", fallback: "/logos herramientas/AWS.png", width: 32, height: 19 },
  { name: "carriers", src: "/optimized/make-32x32.avif", fallback: "/logos herramientas/Make.png", width: 32, height: 32 },
  { name: "ecommerce", src: "/optimized/shopify-32x9.avif", fallback: "/logos herramientas/Shopify 2.png", width: 32, height: 9 },
  { name: "DMS", src: "/optimized/microsoft-32x32.avif", fallback: "/logos herramientas/Microsoft.png", width: 32, height: 32 },
  { name: "facturación", src: "/optimized/paypal-32x27.avif", fallback: "/logos herramientas/Paypal.png", width: 32, height: 27 },
  { name: "SIS/LMS", src: "/optimized/google-32x32.avif", fallback: "/logos herramientas/Google.png", width: 32, height: 32 },
  { name: "CRM de admisión", src: "/optimized/hubspot-32x9.avif", fallback: "/logos herramientas/HubSpot.png", width: 32, height: 9 },
  // Integraciones adicionales específicas por industria
  { name: "Zoom", src: "/optimized/zoom-32x32.avif", fallback: "/optimized/zoom-32x32.avif", width: 32, height: 32 },
  { name: "GitHub", src: "/optimized/github-32x32.avif", fallback: "/optimized/github-32x32.avif", width: 32, height: 32 },
  { name: "Calendly", src: "/optimized/calendly-32x32.avif", fallback: "/optimized/calendly-32x32.avif", width: 32, height: 32 }
]);

/* ----------------------------------- Seguridad ------------------------------ */
export const SECURITY = Object.freeze([
  { icon: Lock, title: "Cifrado AES-256", desc: "End-to-end en todos los canales" },
  { icon: Shield, title: "ISO 27001", desc: "Certificación internacional" },
  { icon: Cloud, title: "Multi-cloud", desc: "AWS, Google Cloud, Azure" },
  { icon: Cpu, title: "GDPR", desc: "Cumplimiento de normativa europea" },
]);

/* -------------------------------------- FAQ --------------------------------- */
export const FAQS = Object.freeze([
  { q: "¿Tiempo de implementación?", a: "Básico: 5-7 días. Complejo con múltiples integraciones: 2-3 semanas." },
  { q: "¿Compatibilidad con mi stack?", a: "Sí. Conectamos vía APIs, webhooks y conectores con la mayoría de CRMs/ERPs." },
  { q: "¿Qué pasa con mis datos?", a: "Son 100% tuyos. Cumplimos GDPR/ISO y usamos cifrado de grado bancario." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Entregamos setup, capacitación y soporte continuo." },
  { q: "¿ROI esperado?", a: "La mayoría ve ROI positivo el primer mes. Promedio 3.5x en 6 meses." },
  { q: "¿Puedo cancelar?", a: "Sí, mes a mes sin penalizaciones." },
]);
import {
    Bot, Zap, Database, Target, Globe, BarChart3, Award, Shield, Star,
    Users, Phone, Mail, MapPin, Clock, TrendingUp, PieChart, DollarSign,
    Lock, Cloud, Cpu, Code2, ShoppingCart, Rocket
  } from "lucide-react";

  
  export const BRAND = {
    name: "Cognitiva",
    phone: "+56 9 3241 7147",
    email: "hola@cognitiva.ai",
    city: "Santiago, Chile",
    whatsappLink: "https://wa.me/56932417147?text=Hola%20Cognitiva,%20quiero%20saber%20m%C3%A1s",
    calendarLink: "#agenda", // reemplaza por tu link real (Calendly u otro)
  };
  
  export const NAV_LINKS = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Casos", href: "#casos" },
    { label: "Planes", href: "#precios" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ];
  
  export const TRUST_BADGES = [
    { icon: Award, label: "Partner Oficial" },
    { icon: Shield, label: "ISO 27001" },
    { icon: Star, label: "4.9/5 Reviews" },
    { icon: TrendingUp, label: "+6 Años de Experiencia" }, // <-- Cambiado a Clock
  ];
  
  export const SERVICES = [
    {
      icon: Bot,
      title: "Agentes de IA & Chatbots",
      bullets: [
        "Atención 24/7 en WhatsApp, IG y Web",
        "Ventas automatizadas con IA conversacional",
        "Soporte técnico multiidioma"
      ],
      cta: "Ver cómo funciona",
    },
    {
      icon: Zap,
      title: "Automatizaciones Inteligentes",
      bullets: [
        "Captura y calificación automática de leads",
        "Workflows de ventas y marketing",
        "Notificaciones y seguimientos"
      ],
      cta: "Ver cómo funciona",
    },
    {
      icon: Database,
      title: "Integraciones Empresariales",
      bullets: [
        "CRMs (HubSpot, Salesforce, Pipedrive)",
        "Integración con ERPs y core",
        "APIs personalizadas y webhooks"
      ],
      cta: "Ver cómo funciona",
    },
    {
      icon: Target,
      title: "Marketing Digital & Embudos",
      bullets: [
        "SEO/SEM con IA",
        "Performance y retargeting",
        "Embudos de conversión"
      ],
      cta: "Ver cómo funciona",
    },
    {
      icon: Globe,
      title: "Desarrollo Web SEO-First",
      bullets: [
        "Core Web Vitals",
        "Arquitectura escalable y segura",
        "Optimización móvil y PWA",
      ],
      cta: "Ver cómo funciona",
    },
    {
      icon: BarChart3,
      title: "Analytics & BI",
      bullets: [
        "Dashboards tiempo real",
        "Predicción con ML",
        "KPIs automatizados"
      ],
      cta: "Ver cómo funciona",
    }
  ];
  
  export const PROCESS_STEPS = [
    { icon: Phone, title: "Descubrimiento", time: "Día 1", desc: "Llamada de 30min para alinear objetivos" },
    { icon: PieChart, title: "Diagnóstico", time: "Día 2-3", desc: "Análisis de procesos y gaps" },
    { icon: Target, title: "Propuesta", time: "Día 4-5", desc: "Plan de trabajo + ROI proyectado" },
    { icon: Rocket, title: "Implementación", time: "Semana 1-2", desc: "Despliegue e integraciones" },
    { icon: TrendingUp, title: "Optimización", time: "Continuo", desc: "Mejora continua basada en datos" },
  ];
  
  export const CASE_STUDIES = [
    {
      tag: "E-commerce",
      company: "TiendaOnline Pro",
      problem: "67% carritos abandonados",
      solution: "Chatbot IA para recuperación",
      results: "+45% conversión, +$180K/mes",
      stack: "WhatsApp API + Shopify + IA",
      testimonial: "En 2 meses duplicamos ventas online",
    },
    {
      tag: "Educación",
      company: "Universidad Digital",
      problem: "+500 consultas diarias",
      solution: "Agente IA 24/7 admisiones",
      results: "90% consultas resueltas",
      stack: "Webchat + CRM + Base IA",
      testimonial: "Ahora el equipo se enfoca en lo importante",
    },
    {
      tag: "Salud",
      company: "Clínica Moderna",
      problem: "Pérdida de citas",
      solution: "Agendamiento por WhatsApp",
      results: "-35% no-shows, +50% satisfacción",
      stack: "WhatsApp + Calendar + SMS",
      testimonial: "La mejor inversión tecnológica",
    },
  ];
  
  export const INDUSTRIES = [
    { icon: ShoppingCart, title: "Retail/E-commerce", pain: "Baja conversión", solution: "Recuperación + recomendación", kpi: "+40% conversión" },
    { icon: Award, title: "Educación", pain: "Admisiones saturadas", solution: "Agentes IA de orientación", kpi: "80% menos tiempo respuesta" },
    { icon: DollarSign, title: "Finanzas", pain: "Calificación lenta", solution: "Scoring en tiempo real", kpi: "3x aprobaciones" },
    { icon: Globe, title: "Turismo", pain: "Atención 24/7 multiidioma", solution: "Bots políglotas con reservas", kpi: "+60% satisfacción" },
    { icon: Shield, title: "Salud", pain: "No-shows y fricción", solution: "Citas y recordatorios IA", kpi: "-40% no-shows" },
    { icon: Cloud, title: "SaaS/Tech", pain: "Onboarding complejo", solution: "Agentes técnicos IA", kpi: "+50% retención" },
  ];
  
  export const INTEGRATIONS = [
    { name: "AWS", img: "AWS.png" },
    { name: "Google", img: "Google.png" },
    { name: "Google G", img: "Google G.png" },
    { name: "HTML", img: "HTML.png" },
    { name: "HubSpot", img: "HubSpot.png" },
    { name: "Instagram", img: "Instagram.png" },
    { name: "Mailchimp", img: "Mailchimp.png" },
    { name: "Make", img: "Make.png" },
    { name: "Mercado Libre", img: "mercadolibre.png" },
    { name: "Meta", img: "Meta.png" },
    { name: "Microsoft", img: "Microsoft.png" },
    { name: "n8n", img: "n8n.png" },
    { name: "Node Js", img: "Node Js.png" },
    { name: "Paypal", img: "Paypal.png" },
    { name: "Pipedrive", img: "Pipedrive.png" },
    { name: "Salesforce", img: "Salesforce.png" },
    { name: "Shopify", img: "Shopify.png" },
    { name: "Shopify 2", img: "Shopify 2.png" },
    { name: "Siteground", img: "Siteground.png" },
    { name: "Slack", img: "Slack.png" },
    { name: "Stripe", img: "stripe.png" },
    { name: "TikTok", img: "TikTok.png" },
    { name: "WhatsApp", img: "WhatsApp.png" },
    { name: "WordPress", img: "WordPress.png" },
    { name: "Zapier", img: "Zapier.png" },
  ];
  
  export const ROI_METRICS = [
    { icon: TrendingUp, metric: 47, suffix: "%", label: "Aumento conversión" },
    { icon: DollarSign, metric: 68, suffix: "%", label: "Costos - reducción" },
    { icon: Clock, metric: 24, suffix: "/7", label: "Atención continua" },
    { icon: PieChart, metric: 3.5, suffix: "x", label: "ROI promedio" },
    { icon: Zap, metric: 2, suffix: "min", label: "Tiempo respuesta" },
    { icon: Star, metric: 87, suffix: "%", label: "Satisfacción" },
  ];
  
  export const PRICING = [
    {
      name: "Starter",
      priceLabel: "$499/mes",
      subtitle: "Para empresas en crecimiento",
      features: ["1 Chatbot IA", "5.000 conversaciones/mes", "WhatsApp + Webchat", "Integración CRM básica", "Soporte por email"],
      highlighted: false,
      cta: "Comenzar Ahora",
    },
    {
      name: "Growth",
      priceLabel: "$999/mes",
      subtitle: "Para escalar rápidamente",
      features: ["3 Bots/Agentes", "20.000 conversaciones/mes", "Omnicanal completo", "Integraciones ilimitadas", "Analytics avanzado", "Soporte 24/7"],
      highlighted: true,
      cta: "Comenzar Ahora",
    },
    {
      name: "Enterprise",
      priceLabel: "Custom",
      subtitle: "Soluciones a medida",
      features: ["Ilimitado en bots y volumen", "Desarrollo a medida", "SLA garantizado", "Account Manager", "Training y certificación"],
      highlighted: false,
      cta: "Contactar Ventas",
    },
  ];
  
  export const SECURITY = [
    { icon: Lock, title: "Cifrado AES-256", desc: "End-to-end en todos los canales" },
    { icon: Shield, title: "ISO 27001", desc: "Certificación internacional" },
    { icon: Cloud, title: "Multi-cloud", desc: "AWS, Google Cloud, Azure" },
    { icon: Cpu, title: "GDPR", desc: "Cumplimiento de normativa europea" },
  ];
  
  export const FAQS = [
    { q: "¿Tiempo de implementación?", a: "Básico: 5-7 días. Complejo con múltiples integraciones: 2-3 semanas." },
    { q: "¿Compatibilidad con mi stack?", a: "Sí. Conectamos vía APIs, webhooks y conectores con la mayoría de CRMs/ERPs." },
    { q: "¿Qué pasa con mis datos?", a: "Son 100% tuyos. Cumplimos GDPR/ISO y usamos cifrado de grado bancario." },
    { q: "¿Necesito conocimientos técnicos?", a: "No. Entregamos setup, capacitación y soporte continuo." },
    { q: "¿ROI esperado?", a: "La mayoría ve ROI positivo el primer mes. Promedio 3.5x en 6 meses." },
    { q: "¿Puedo cancelar?", a: "Sí, mes a mes sin penalizaciones." },
  ];

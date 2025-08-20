"use client";
import React, { useState, useCallback, useMemo } from "react";
import { useScrollBasedAnimation } from "@/hooks/hookExports";
import { useClientSideOnly } from "@/hooks/useClientSideOnly";
import { ChevronDown, HelpCircle, MessageCircle, Bot, Settings, Plug, Shield, DollarSign, Headphones, ArrowRight } from "lucide-react";
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import CleanSwipeCard from '@/components/ui/CleanSwipeCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients } from '@/lib/design-system/colorSystem';

// Datos del FAQ organizados por categorías
const FAQ_DATA = {
  "agentes-ia": {
    title: "Agentes de IA & Chatbots",
    icon: Bot,
    color: "from-blue-600 to-cyan-500",
    questions: [
      {
        q: "¿Qué es un agente de IA y en qué se diferencia de un chatbot tradicional?",
        a: "Un agente de IA entiende intención, contexto y reglas de negocio; se conecta a tus sistemas (CRM, ecommerce, pasarela de pago) y actúa: califica leads, agenda, consulta stock o inicia pagos. Un chatbot tradicional suele responder guiones fijos sin integraciones profundas."
      },
      {
        q: "¿En qué canales funciona el agente (WhatsApp, Web, Instagram, Facebook Messenger)?",
        a: "Operamos en WhatsApp Business, Webchat, Instagram y Facebook Messenger. Puedes activar uno o varios canales y compartir la misma base de conocimiento."
      },
      {
        q: "¿Puede responder en varios idiomas automáticamente?",
        a: "Sí. Detecta el idioma del usuario y responde en +30 idiomas de forma natural, manteniendo tono y guías de tu marca."
      },
      {
        q: "¿Cuáles son los casos de uso más efectivos para vender con un chatbot de WhatsApp?",
        a: "Recuperación de carritos y remarketing conversacional. Calificación de leads y agendamiento automático. Soporte L1 (envíos, cambios, estado de pedido). Cobros/pagos dentro del chat (según integración)."
      },
      {
        q: "¿Sustituye a mi equipo humano?",
        a: "No. Complementa: resuelve lo repetitivo y deriva con contexto cuando requiere humano (handover), para que tu equipo se enfoque en cierres y casos complejos."
      },
      {
        q: "¿Cómo medimos el éxito de un agente de IA?",
        a: "Monitorizamos tiempo de respuesta, resolución al primer contacto (FCR), CSAT, tasa de conversión, tasa de agendamiento y valor de pedido (ecommerce)."
      }
    ]
  },
  "implementacion": {
    title: "Implementación",
    icon: Settings,
    color: "from-purple-600 to-pink-500",
    questions: [
      {
        q: "¿Cuánto tarda implementar un chatbot en WhatsApp para ventas y soporte?",
        a: "El MVP suele estar operativo entre 7 y 14 días, dependiendo de integraciones y volumen de contenido."
      },
      {
        q: "¿Cómo es el proceso paso a paso?",
        a: "Seguimos 5 etapas: Descubrimiento → Diagnóstico → Propuesta → Implementación → Optimización. Ver detalles en Cómo trabajamos."
      },
      {
        q: "¿Qué necesito para empezar?",
        a: "Accesos de lectura a tu CRM/ecommerce y documentación clave. Un responsable por área (ventas/soporte/marketing). Cuenta de WhatsApp Business (si aplica) y calendario para agendamientos."
      },
      {
        q: "¿Cómo se entrena el agente de IA con mis datos?",
        a: "Importamos FAQs, catálogos, políticas y documentos. Definimos reglas de marca, fuentes \"autorizadas\" y conectamos APIs para que pueda consultar/actualizar información."
      },
      {
        q: "¿Puedo probar antes del go-live?",
        a: "Sí. Trabajamos en un entorno de pruebas con scripts de QA, matriz de intenciones y pruebas end-to-end. No se publica hasta cumplir los criterios de aceptación."
      }
    ]
  },
  "integraciones": {
    title: "Integraciones",
    icon: Plug,
    color: "from-green-600 to-emerald-500",
    questions: [
      {
        q: "¿Se integra con HubSpot, Salesforce, Pipedrive u otros CRMs?",
        a: "Sí. Contamos con conectores para CRMs líderes. Si no existe un conector, lo implementamos vía API o webhook."
      },
      {
        q: "¿Pueden conectarse a Shopify, WooCommerce o VTEX?",
        a: "Sí. Integramos inventario, órdenes, envíos, cambios/devoluciones y recuperación de carritos."
      },
      {
        q: "¿Cómo evitan datos duplicados o inconsistentes entre sistemas?",
        a: "Definimos reglas de sincronización, campos clave (IDs) y estrategias de upsert/deduplicación. Todo queda auditado y con alertas ante errores."
      },
      {
        q: "¿Pueden procesar pagos en el chat?",
        a: "Sí, según tu pasarela y país. El agente inicia el flujo de pago, valida estado y actualiza el CRM/ecommerce."
      },
      {
        q: "¿Qué pasa si mi sistema es propietario o no tiene API pública?",
        a: "Evaluamos conectores a medida, exportaciones programadas o integración intermedia mediante colas/ETL."
      }
    ]
  },
  "seguridad": {
    title: "Seguridad & Privacidad",
    icon: Shield,
    color: "from-indigo-600 to-blue-500",
    questions: [
      {
        q: "¿Cómo protegen los datos de mis clientes?",
        a: "Aplicamos cifrado en tránsito y en reposo, control de acceso por roles, registro de auditoría y principio de mínimo privilegio. Los accesos quedan delimitados por contrato."
      },
      {
        q: "¿Usan mis datos para entrenar modelos públicos?",
        a: "No, tus datos no se usan para entrenar modelos públicos. Entrenamos y optimizamos solo con tu autorización y para tu caso de uso."
      },
      {
        q: "¿Cumplen con normativas como GDPR o políticas de datos locales?",
        a: "Operamos bajo buenas prácticas de privacidad y firmamos un DPA cuando corresponde. Adecuamos retención, ubicación de datos y derechos del titular según tu jurisdicción. Si requieres certificaciones específicas, las acordamos en el contrato."
      },
      {
        q: "¿Dónde se alojan los datos?",
        a: "Trabajamos con infraestructuras en la nube y regiones acordadas por contrato. Podemos restringir la residencia de datos según tus necesidades."
      }
    ]
  },
  "precios": {
    title: "Precios & ROI",
    icon: DollarSign,
    color: "from-orange-600 to-red-500",
    questions: [
      {
        q: "¿Cuánto cuesta un chatbot de IA para mi empresa?",
        a: "Depende de alcance, canales, volumen de conversaciones e integraciones. Ofrecemos setup inicial y plan mensual. Solicita una cotización personalizada."
      },
      {
        q: "¿Cómo calculan el ROI de un agente de IA?",
        a: "Comparamos antes/después: reducción de tiempos, tickets evitados, ventas adicionales, tasa de agendamiento y retención. Usa nuestra herramienta \"Calcular mi ROI\"."
      },
      {
        q: "¿Hay contrato mínimo o permanencia?",
        a: "Suele existir una permanencia mínima para cubrir setup y estabilización. Lo definimos según tu proyecto."
      },
      {
        q: "¿Ofrecen SLA?",
        a: "Sí. Definimos SLA de soporte y tiempos de respuesta dentro del contrato de servicio."
      }
    ]
  },
  "soporte": {
    title: "Soporte & Operación",
    icon: Headphones,
    color: "from-teal-600 to-cyan-500",
    questions: [
      {
        q: "¿Ofrecen soporte 24/7?",
        a: "Sí. Disponemos de canales de soporte y alertas proactivas."
      },
      {
        q: "¿Qué pasa si el bot no entiende una pregunta?",
        a: "Aplica fallback a artículos o deriva a humano con el contexto completo de la conversación, y se retroalimenta para mejorar la cobertura."
      },
      {
        q: "¿Cómo se actualiza el contenido del agente?",
        a: "Desde el panel de administración o integrando con tu repositorio de conocimiento. Podemos programar actualizaciones automáticas."
      },
      {
        q: "¿Pueden operar en varios países y husos horarios?",
        a: "Sí. Soportamos multiidioma, formatos locales y horarios por región."
      },
      {
        q: "¿Disponemos de reportes y dashboards?",
        a: "Sí. KPIs en tiempo real (CSAT, FCR, conversión, volumen, SLA) y reportes programados."
      }
    ]
  }
};

const SEO_QUESTIONS = [
  {
    q: "¿Cómo implementar un chatbot de WhatsApp para ventas paso a paso?",
    a: "1) Define objetivo y KPIs. 2) Prepara FAQs y catálogo. 3) Conecta WhatsApp Business y tu CRM/ecommerce. 4) Diseña flujos de calificación y agendamiento. 5) Prueba en sandbox, luego publica con monitoreo semanal."
  },
  {
    q: "¿Cuál es el mejor chatbot para e-commerce en español?",
    a: "El \"mejor\" es el que se integra a tu stack, recupera carritos, muestra stock/envíos en tiempo real y mide conversión de punta a punta. Nuestro enfoque es IA + integraciones + embudos de venta adaptados a tu vertical."
  },
  {
    q: "¿Cómo integrar HubSpot con WhatsApp Business sin perder datos?",
    a: "Usa un conector confiable o API intermedia con upsert por ID, mapea campos (contacto, deal, ticket), define propietarios y automatiza workflows (nurturing, tareas de ventas). Valida con ambiente de pruebas antes del go-live."
  },
  {
    q: "¿Cuánto cuesta implementar un chatbot en mi empresa (PYME vs. corporativo)?",
    a: "Varía por volumen, canales y complejidad. PYMEs: alcance acotado con setup ágil; corporativos: múltiples integraciones y gobernanza. Solicita diagnóstico para una propuesta precisa."
  },
  {
    q: "¿Cómo mejorar la atención al cliente con IA sin perder el toque humano?",
    a: "Automatiza lo repetitivo (L1), define tono/guías de marca, activa handover a humano en casos sensibles y mide CSAT y FCR para iterar."
  }
];

// Convertir datos FAQ para navegación
const FAQ_CATEGORIES = Object.entries(FAQ_DATA).map(([id, data]) => ({
  id,
  ...data
}));

export default function FAQ() {
  const { ref } = useScrollBasedAnimation();
  const hasMounted = useClientSideOnly();
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqs, setOpenFaqs] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivo móvil
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limpiar FAQs abiertas cuando cambia la categoría
  React.useEffect(() => {
    setOpenFaqs({});
  }, [activeCategory]);

  // Manejar FAQ toggle
  const toggleFaq = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Renderizar tarjeta de FAQ
  const renderFAQCard = (category, index) => (
    <div className="space-y-6">
      {/* Header de categoría */}
      <div className="relative mb-8">
        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 blur-xl rounded-2xl`} />
        <div className="relative">
          {/* Icono en la parte superior */}
          <div className="flex justify-start mb-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}>
              <category.icon className="h-7 w-7 text-white" />
            </div>
          </div>
          
          {/* Título de la categoría */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
              {category.title}
            </h3>
            <p className="text-cyan-300/80 text-sm sm:text-base font-light">
              Preguntas más frecuentes sobre {category.title.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Lista de preguntas de la categoría */}
      <div className="space-y-4">
        {category.questions.map((faq, questionIndex) => {
          const faqId = `${index}-${questionIndex}`;
          const isOpen = openFaqs[faqId];
          
          return (
            <div
              key={questionIndex}
              className={`rounded-xl ${gradients.cardGlass} border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              {/* Pregunta */}
              <button
                onClick={() => toggleFaq(index, questionIndex)}
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-white leading-relaxed pr-4">
                      {faq.q}
                    </h4>
                  </div>
                  <div className="flex-shrink-0">
                    <ChevronDown 
                      className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </div>
              </button>

              {/* Respuesta */}
              {isOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pt-4 border-t border-white/10">
                    <p className={`${typographyPresets.description} leading-relaxed`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Preguntas SEO solo en la última categoría */}
      {index === FAQ_CATEGORIES.length - 1 && (
        <div className="mt-12">
          <div className="mb-6">
            <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-violet-400" />
              Preguntas adicionales (SEO/SEM)
            </h4>
            <p className="text-violet-300/80 text-sm font-light">
              Consultas técnicas y de posicionamiento
            </p>
          </div>
          
          <div className="space-y-4">
            {SEO_QUESTIONS.map((faq, seoIndex) => {
              const seoFaqId = `seo-${seoIndex}`;
              const isOpen = openFaqs[seoFaqId];
              
              return (
                <div
                  key={seoIndex}
                  className={`rounded-xl bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-400/20 hover:border-violet-400/30 transition-all duration-300`}
                >
                  <button
                    onClick={() => {
                      const faqId = `seo-${seoIndex}`;
                      setOpenFaqs(prev => ({
                        ...prev,
                        [faqId]: !prev[faqId]
                      }));
                    }}
                    className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-violet-400/50 rounded-xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-medium text-white leading-relaxed pr-4">
                          {faq.q}
                        </h4>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronDown 
                          className={`w-5 h-5 text-violet-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-4 border-t border-violet-400/20">
                        <p className={`${typographyPresets.description} leading-relaxed`}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  // Schema.org JSON-LD para FAQPage - todas las preguntas
  const getAllQuestions = () => {
    const allQuestions = [];
    FAQ_CATEGORIES.forEach(category => {
      category.questions.forEach(q => {
        allQuestions.push(q);
      });
    });
    SEO_QUESTIONS.forEach(q => {
      allQuestions.push(q);
    });
    return allQuestions;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": getAllQuestions().map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <Section 
      id="faq" 
      className="animate-in"
      ref={ref}
      aria-label="Preguntas frecuentes sobre agentes de IA y chatbots"
    >
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />

      {/* Header de sección */}
      <SectionTitle
        subtitle="Resuelve en minutos las dudas más comunes sobre agentes de IA, chatbots en WhatsApp, automatizaciones, integraciones, seguridad y precios. Si no ves tu pregunta, nuestro equipo responde 24/7."
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
          Preguntas
        </span>
        <br />
        <span className="text-white/90 font-light">frecuentes</span>
      </SectionTitle>

      {/* Sistema de navegación con iconos de categorías */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={FAQ_CATEGORIES}
          activeIndex={activeCategory}
          onItemSelect={setActiveCategory}
          variant="pills"
          size={hasMounted && isMobile ? "medium" : "large"}
          showIcons={true}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas */}
      <div className="max-w-6xl mx-auto">
        <CleanSwipeCard
          items={FAQ_CATEGORIES}
          activeIndex={activeCategory}
          onIndexChange={setActiveCategory}
          renderCard={renderFAQCard}
          enableSwipe={hasMounted && isMobile}
          showIndicators={false}
          showArrows={false}
          className="mb-12"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
          transitionDuration={600}
        />
      </div>

      {/* CTA de cierre */}
      <div className="mt-12 lg:mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-light text-white mb-4">
            ¿Aún tienes preguntas?
          </h3>
          
          {hasMounted && !isMobile && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <WhatsAppButton 
                variant="default"
                size="large"
                text="Hablar por WhatsApp"
                showSubtitle={false}
              />
              <DemoButton 
                variant="minimal"
                size="large"
                text="Ver Demo de 30 min"
                showSubtitle={false}
              />
            </div>
          )}

          <p className="text-sm text-blue-200/60 flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3 text-emerald-400" />
              Respuesta en el día
            </span>
            <span className="text-cyan-400/50">•</span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-emerald-400" />
              Sin costo
            </span>
            <span className="text-cyan-400/50">•</span>
            <span className="flex items-center gap-1">
              <HelpCircle className="h-3 w-3 text-emerald-400" />
              Caso de tu industria
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}

"use client";
import React from "react";
import { INDUSTRIES } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  ShoppingCart,
  GraduationCap,
  DollarSign,
  Globe,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  Cross,
  Sparkles,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const INDUSTRY_ICONS = {
  "Retail/E-commerce": ShoppingCart,
  "Educación": GraduationCap,
  "Finanzas": DollarSign,
  "Turismo": Globe,
  "Salud": Cross,
  "SaaS/Tech": Cloud,
};

const UNIFIED = {
  "Retail/E-commerce": {
    pain: "Baja conversión por abandono y fricción en el checkout.",
    solution: "Recuperación automática y recomendaciones en tiempo real.",
    kpi: "+40% conversión",
    gradient: "from-purple-600 to-pink-600",
  },
  "Educación": {
    pain: "Admisiones saturadas y respuestas lentas a interesados.",
    solution: "Agentes IA 24/7 que orientan y agendan entrevistas.",
    kpi: "80% menos tiempo respuesta",
    gradient: "from-blue-600 to-indigo-600",
  },
  "Finanzas": {
    pain: "Calificación lenta y procesos con alta fricción.",
    solution: "Scoring y preaprobación automática en tiempo real.",
    kpi: "3× aprobaciones",
    gradient: "from-emerald-600 to-teal-600",
  },
  "Turismo": {
    pain: "Atención 24/7 y reservas manuales poco eficientes.",
    solution: "Bots multilingües con reserva y pago integrado.",
    kpi: "+60% satisfacción",
    gradient: "from-orange-600 to-amber-600",
  },
  "Salud": {
    pain: "Largas esperas, ausencias a citas y procesos manuales.",
    solution: "Recordatorios y confirmación automática vía WhatsApp y SMS.",
    kpi: "+65% satisfacción de pacientes",
    gradient: "from-red-600 to-rose-600",
  },
  "SaaS/Tech": {
    pain: "Onboarding complejo y churn en primeras semanas.",
    solution: "Agentes técnicos IA y guías proactivas in-app.",
    kpi: "+50% retención",
    gradient: "from-cyan-600 to-blue-600",
  },
};

export default function Industries() {
  const { ref } = useScrollAnimation();

  return (
    <section
      id="industrias"
      className="relative py-32 bg-[#000412] overflow-hidden"
      aria-label="Soluciones por industria"
    >
      {/* Efectos de fondo */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-blue-600/10 to-transparent blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-cyan-300">
                  Soluciones Especializadas por Sector
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">Potencia tu</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
              industria
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-2xl mx-auto">
            Experiencia específica y tecnología adaptada a los desafíos únicos de tu sector
          </p>
        </header>

        {/* Grid de industrias */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ title }, index) => {
            const Icon = INDUSTRY_ICONS[title] || Cloud;
            const { pain, solution, kpi, gradient } = UNIFIED[title] || {};

            return (
              <article
                key={title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Borde con gradiente (hover muy sutil) */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-[1px] transition-all duration-500`} />
                
                {/* Card con glassmorphism */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]">
                  
                {/* Glow interno (mucho más sutil) */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${gradient} opacity-5 blur-3xl transition-all duration-500 group-hover:opacity-10`} />
                  
                  {/* Header con icono */}
                  <div className="relative flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-25 group-hover:opacity-45 transition-opacity duration-500`} />
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white tracking-tight">{title}</h3>
                      <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                        <TrendingUp className="h-3 w-3 text-cyan-300" />
                        <span className="text-xs font-light text-cyan-300">{kpi}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative space-y-4 mb-6">
                    {/* Problema */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                          Desafío
                        </span>
                      </div>
                      <p className="text-sm font-light text-red-100/90 leading-relaxed">
                        {pain}
                      </p>
                    </div>

                    {/* Solución */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                          Solución IA
                        </span>
                      </div>
                      <p className="text-sm font-light text-emerald-100/90 leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button - CONVERTIDO A ENLACE */}
                  <a 
                    href="https://cal.com/www.cognitiva-ai.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full block"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                    <div className="relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover/btn:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                      <span className="text-sm font-light text-white">
                        Transformar mi {title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-white/90 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer de sección - CONVERTIDO A ENLACE */}
        <div className="mt-16 text-center">
          <p className="text-sm font-light text-blue-200/60 mb-6">
            ¿No ves tu industria? Creamos soluciones personalizadas para cualquier sector
          </p>
          <a 
            href="https://cal.com/www.cognitiva-ai.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative px-8 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <span className="text-base font-light text-white">Consultar solución personalizada</span>
            </div>
          </a>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

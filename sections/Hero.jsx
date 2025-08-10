"use client";
import React from "react";
import { ArrowRight, Bot, CheckCircle, Rocket } from "lucide-react";
import { Button } from "../ui/Button";
import SocialProof from "../common/SocialProof";
import { BRAND } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";

const logos = [
  { src: "/Capitalizarme.png", alt: "Capitalizarme" },
  { src: "/DrGadget.png", alt: "Dr Gadget" },
  { src: "/ProCasa.png", alt: "Pro Casa" },
  { src: "/ProCasaAdvance.png", alt: "ProCasa Advance" },
  { src: "/logo empresas/8D4B-AEA3902F6689.png", alt: "8D4B-AEA3902F6689" },
  { src: "/logo empresas/Letralogoazul.png", alt: "Letralogoazul" },
  { src: "/logo empresas/Logoynombre .png", alt: "Logoynombre" },
  { src: "/logo empresas/TriTechAlargado.png", alt: "TriTechAlargado" },
  { src: "/logo empresas/turbotuninglogo.png", alt: "turbotuninglogo" },
];

export default function Hero() {
  const { ref } = useScrollAnimation();

  return (
    <section
      id="hero"
      className="pt-24 pb-16 bg-gradient-to-r from-[#0a0f1f] via-[#0d1a33] to-[#0a0f1f] text-white overflow-x-clip"
    >
      {/* Contenedor responsive seguro */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-6">
          {/* Columna izquierda */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-full shadow">
              <Rocket className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-blue-800">
                Automatización con IA para crecer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Multiplica tus ventas con{" "}
              <span className="gradient-text text-blue-400">Agentes de IA</span> que trabajan 24/7
            </h1>

            <p className="text-base sm:text-lg text-gray-300">
              Transforma tu negocio con inteligencia artificial conversacional...
            </p>

            <div className="space-y-3 text-base text-gray-200">
              {[
                "+30% más leads calificados en 60 días",
                "−70% en tiempos de respuesta",
                "ROI comprobado desde el primer mes",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-0.5" />
                  <p>{t}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button as="a" href={BRAND.calendarLink} variant="primary" size="lg" className="px-6">
                <img src="/GoogleMeet.png" alt="Google Meet" className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Agenda una Reunión
              </Button>

              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors text-base sm:text-lg min-h-12"
              >
                <img src="/WhatsApp4.png" alt="WhatsApp" className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                Hablar por WhatsApp
              </a>
            </div>

            {/* Logos */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300 mb-3">Confían en nosotros:</p>
              <div className="relative overflow-hidden h-14">
                <div className="flex gap-6 items-center animate-scroll-logos w-[200%]">
                  {logos.concat(logos).map((logo, i) => (
                    <div
                      key={logo.alt + i}
                      className="bg-white/90 rounded-lg px-3 py-2 flex items-center border border-gray-100 shadow"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 w-auto max-w-[100px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: chat */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-blue-900 rounded-xl p-5 sm:p-6 shadow-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center mb-3 sm:mb-4 bg-blue-950 rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                <Bot className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400 mr-3" />
                <div>
                  <p className="font-semibold text-white">Agente IA Cognitiva</p>
                  <p className="text-xs sm:text-sm text-blue-200">En línea • Respondiendo 24/7</p>
                </div>
              </div>

              {/* Mensajes */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="bg-gray-900 text-white rounded-lg p-3 ml-auto max-w-[85%]">
                  <p className="text-sm">Hola 👋 ¿Necesitas automatizar tu atención al cliente?</p>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 mr-auto max-w-[85%]">
                  <p className="text-sm">Sí, quiero conocer más sobre sus agentes de IA.</p>
                </div>
                <div className="bg-gray-900 text-white rounded-lg p-3 ml-auto max-w-[85%]">
                  <p className="text-sm">Perfecto, cuéntame tu industria y objetivos 🎯</p>
                </div>
              </div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-2 rounded-full text-sm bg-white text-gray-900 outline-none"
                />
                <button className="bg-blue-600 text-white p-2 rounded-full">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Badges flotantes: dentro del contenedor en móvil */}
            <div className="absolute right-2 -top-3 sm:-top-4 sm:-right-4 bg-white rounded-lg shadow-lg px-3 py-1.5 sm:px-4 sm:py-2">
              <p className="text-xl sm:text-2xl font-bold text-green-600">+87%</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Satisfacción</p>
            </div>
            <div className="absolute left-2 -bottom-3 sm:-bottom-4 sm:-left-4 bg-white rounded-lg shadow-lg px-3 py-1.5 sm:px-4 sm:py-2">
              <p className="text-xl sm:text-2xl font-bold text-blue-600">3.2M</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Msgs/mes</p>
            </div>
          </div>
        </div>
      </div>

      <SocialProof />
    </section>
  );
}

"use client";
import React from "react";
import { Calendar, MessageSquare, Bot, ArrowRight, Rocket, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import Badge from "../ui/Badge";
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
      className="pt-24 pb-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white"
    >
      <div ref={ref} className="container-padded animate-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow">
              <Rocket className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">Automatización con IA para crecer</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Multiplica tus ventas con <span className="gradient-text text-blue-400">Agentes de IA</span> que trabajan 24/7
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Transforma tu negocio con inteligencia artificial conversacional...
            </p>

            <div className="space-y-3 text-lg text-gray-600">
              {[
                "+30% más leads calificados en 60 días",
                "−70% en tiempos de respuesta",
                "ROI comprobado desde el primer mes",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <p>{t}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as="a"
                href={BRAND.calendarLink}
                variant="primary"
                size="lg"
                className="px-7 btn-primary"
              >
                <img
                  src="/GoogleMeet.png"
                  alt="Google Meet"
                  className="mr-2 h-6 w-6"
                  style={{ display: "inline-block" }}
                />
                Agenda una Reunión
              </Button>
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors text-lg"
                style={{ minHeight: "48px" }}
              >
                <span className="mr-2 flex items-center">
                  <img
                    src="/WhatsApp4.png"
                    alt="WhatsApp"
                    className="h-7 w-7"
                    style={{ display: "inline-block" }}
                  />
                </span>
                Hablar por WhatsApp
              </a>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 mb-3">Confían en nosotros:</p>
              <div className="relative overflow-hidden py-2" style={{ height: 56 }}>
                <div className="flex gap-6 items-center animate-scroll-logos" style={{ minWidth: "200%" }}>
                  {logos.concat(logos).map((logo, i) => (
                    <div
                      key={logo.alt + i}
                      className="bg-gray-50 rounded-lg px-3 py-2 flex items-center border border-gray-100 shadow"
                      style={{ minHeight: 44 }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 w-auto object-contain"
                        style={{ maxWidth: 100 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <div className="bg-blue-900 rounded-xl p-6 shadow-lg">
              {/* Header del chat más oscuro */}
              <div className="flex items-center mb-4 bg-blue-950 rounded-lg px-4 py-3">
                <Bot className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <p className="font-semibold text-white">Agente IA Cognitiva</p>
                  <p className="text-sm text-blue-200">En línea • Respondiendo 24/7</p>
                </div>
              </div>
              {/* Mensajes del chat */}
              <div className="space-y-3">
                <div className="bg-gray-900 text-white rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">Hola 👋 ¿Necesitas automatizar tu atención al cliente?</p>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 mr-auto max-w-[80%]">
                  <p className="text-sm">Sí, quiero conocer más sobre sus agentes de IA.</p>
                </div>
                <div className="bg-gray-900 text-white rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-sm">Perfecto, cuéntame tu industria y objetivos 🎯</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input type="text" placeholder="Escribe tu mensaje..." className="flex-1 px-4 py-2 border rounded-full text-sm" />
                <button className="bg-blue-600 text-white p-2 rounded-full">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Stats flotantes */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2">
              <p className="text-2xl font-bold text-green-600">+87%</p>
              <p className="text-xs text-gray-600">Satisfacción</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2">
              <p className="text-2xl font-bold text-blue-600">3.2M</p>
              <p className="text-xs text-gray-600">Msgs/mes</p>
            </div>
          </div>
        </div>
      </div>
      <SocialProof />
    </section>
  );
}

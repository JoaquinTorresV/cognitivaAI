"use client";
import React from "react";
import { Calendar, MessageSquare, Bot, ArrowRight, Rocket, CheckCircle } from "lucide-react";
import { Button } from "../ui/Button";
import Badge from "../ui/Badge";
import SocialProof from "../common/SocialProof";
import { BRAND } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Hero() {
  const { ref } = useScrollAnimation();

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div ref={ref} className="container-padded animate-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
              <Rocket className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">Automatización con IA para crecer</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Multiplica tus ventas con <span className="gradient-text">Agentes de IA</span> que trabajan 24/7
            </h1>

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
              <Button as="a" href={BRAND.calendarLink} variant="primary" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Agenda una Reunión Gratis
              </Button>
              <Button as="a" href={BRAND.whatsappLink} variant="success" size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Hablar por WhatsApp
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 mb-3">Confían en nosotros:</p>
              <div className="flex flex-wrap gap-6 items-center">
                {["EMPRESA 1", "EMPRESA 2", "EMPRESA 3", "EMPRESA 4"].map((c) => (
                  <div key={c} className="text-gray-400 font-semibold">{c}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Bot className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Agente IA Cognitiva</p>
                    <p className="text-sm text-gray-500">En línea • Respondiendo 24/7</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 ml-auto max-w-[80%]">
                    <p className="text-sm">Hola 👋 ¿Necesitas automatizar tu atención al cliente?</p>
                  </div>
                  <div className="bg-blue-600 text-white rounded-lg p-3 mr-auto max-w-[80%]">
                    <p className="text-sm">Sí, quiero conocer más sobre sus agentes de IA.</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 ml-auto max-w-[80%]">
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
      </div>
      <SocialProof />
    </section>
  );
}

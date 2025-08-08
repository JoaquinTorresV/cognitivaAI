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
              <Button
                as="a"
                href={BRAND.calendarLink}
                variant="primary"
                size="lg"
                className="px-8"
              >
                <img
                  src="/GoogleMeet.png"
                  alt="Google Meet"
                  className="mr-2 h-5 w-5"
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
                <span className="mr-2 h-5 w-5 flex items-center">
                  {/* Logo WhatsApp blanco SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="20" height="20">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.693 4.607 2.006 6.553L4 29l7.684-2.006A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.521-5.59-1.507l-.398-.232-4.561 1.19 1.217-4.444-.26-.409A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.43c-.278-.139-1.646-.812-1.9-.904-.254-.093-.439-.139-.625.139-.186.278-.719.904-.881 1.09-.163.186-.325.209-.603.07-.278-.139-1.175-.433-2.238-1.38-.827-.736-1.386-1.644-1.549-1.922-.163-.278-.017-.428.122-.567.125-.124.278-.325.417-.488.139-.163.186-.278.278-.464.093-.186.047-.348-.023-.488-.07-.139-.625-1.507-.857-2.064-.226-.543-.456-.47-.625-.479l-.532-.009c-.163 0-.428.06-.652.278-.223.217-.853.833-.853 2.03s.874 2.353.996 2.518c.122.163 1.719 2.627 4.172 3.579.584.201 1.038.321 1.393.411.585.149 1.119.128 1.539.078.47-.056 1.646-.673 1.88-1.324.233-.651.233-1.209.163-1.324-.07-.116-.255-.186-.532-.325z"/>
                  </svg>
                </span>
                Hablar por WhatsApp
              </a>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 mb-3">Confían en nosotros:</p>
              <div className="flex flex-wrap gap-6 items-center">
                { [
                  { src: "/Capitalizarme.png", alt: "Capitalizarme" },
                  { src: "/DrGadget.png", alt: "Dr Gadget" },
                  { src: "/ProCasa.png", alt: "Pro Casa" },
                  { src: "/ProCasaAdvance.png", alt: "ProCasa Advance" },
                ].map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 w-auto object-contain"
                    style={{ maxWidth: 120 }}
                  />
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

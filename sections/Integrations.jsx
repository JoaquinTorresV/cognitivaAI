"use client";
import React from "react";
import { INTEGRATIONS } from "../utils/constants";
import { Code2, Clock, Shield } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Integrations() {
  const { ref } = useScrollAnimation();

  return (
    <section id="integraciones" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Integramos con tus herramientas</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {INTEGRATIONS.map((tool) => (
            <div key={tool.name} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:bg-blue-50 transition-colors">
              <img
                src={`/logos%20herramientas/${tool.img}`}
                alt={tool.name}
                className="h-10 w-auto object-contain"
                style={{ maxHeight: 40 }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl p-8 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Code2 className="h-8 w-8 text-blue-200 mx-auto mb-2" />
              <h4 className="font-semibold text-white">API/Webhooks</h4>
              <p className="text-sm text-blue-100">Integración en tiempo real</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-blue-200 mx-auto mb-2" />
              <h4 className="font-semibold text-white">Setup en 48hrs</h4>
              <p className="text-sm text-blue-100">Implementación express</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-blue-200 mx-auto mb-2" />
              <h4 className="font-semibold text-white">SLA 99.9%</h4>
              <p className="text-sm text-blue-100">Soporte enterprise 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

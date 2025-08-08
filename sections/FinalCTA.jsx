"use client";
import React from "react";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function FinalCTA() {
  const { ref } = useScrollAnimation();
  return (
    <section id="cta" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in max-w-4xl">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">¿Listo para multiplicar resultados?</h2>
          <p className="text-xl mb-8 opacity-90">Únete a +500 empresas que ya van un paso adelante</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              {["Diagnóstico sin costo", "ROI garantizado", "Implementación en 1 semana"].map((b) => (
                <div key={b} className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <Button variant="warning" size="lg" className="px-10">Agenda tu Diagnóstico Gratis</Button>
        </div>
      </div>
    </section>
  );
}

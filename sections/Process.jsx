"use client";
import React from "react";
import { PROCESS_STEPS } from "../utils/constants";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Process() {
  const { ref } = useScrollAnimation();

  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">¿Cómo trabajamos? Simple y efectivo</h2>
          <p className="text-xl text-gray-600">Proceso probado para resultados en tiempo récord</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.title} className="relative card p-6 border-t-4 border-blue-600">
              <div className="flex justify-between items-start mb-3">
                <span className="text-3xl font-bold text-gray-200">{i + 1}</span>
                <s.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-xs text-blue-600 font-semibold mb-2">{s.time}</p>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" className="px-12">
            Quiero mi Diagnóstico Gratis
          </Button>
        </div>
      </div>
    </section>
  );
}

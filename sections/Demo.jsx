"use client";
import React from "react";
import { PlayCircle } from "lucide-react";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Demo() {
  const { ref } = useScrollAnimation();

  return (
    <section id="demo" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Ve Cognitiva en acción</h2>
          <p className="text-xl text-gray-600">Demo de 90 segundos que cambia la perspectiva</p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
          <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
            <button className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all hover:scale-110">
              <PlayCircle className="h-12 w-12 text-blue-600" />
            </button>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Ver Demo Completa</Button>
            <Button variant="secondary">Agendar Demo en Vivo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { INDUSTRIES } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Industries() {
  const { ref } = useScrollAnimation();

  return (
    <section id="industrias" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Soluciones por industria</h2>
          <p className="text-xl text-blue-200">Experiencia específica en tu sector</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, pain, solution, kpi }) => (
            <div key={title} className="card p-6 border-l-4 border-blue-600 bg-blue-900 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-blue-950 p-3 rounded-lg"><Icon className="h-6 w-6 text-blue-400" /></div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2 text-white">{title}</h3>
                  <p className="text-sm text-red-300 mb-1"><span className="font-semibold">Dolor:</span> {pain}</p>
                  <p className="text-sm text-green-300 mb-1"><span className="font-semibold">Solución:</span> {solution}</p>
                  <p className="text-sm font-bold text-blue-300">KPI: {kpi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

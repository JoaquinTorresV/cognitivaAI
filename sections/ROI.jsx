"use client";
import React from "react";
import { ROI_METRICS } from "../utils/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ROI() {
  const { ref } = useScrollAnimation();

  return (
    <section id="roi" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div ref={ref} className="container-padded animate-in">
        {/* Ventaja principal */}
        <div className="max-w-2xl mx-auto mb-10 bg-blue-900 border border-blue-950 rounded-2xl p-6 shadow text-center">
          <h3 className="text-2xl font-bold text-blue-200 mb-2">¡Gana más clientes y aumenta tus ventas!</h3>
          <p className="text-lg text-blue-100 opacity-90">
            Con Cognitiva, tu negocio crece desde el primer mes. Automatizamos tu captación y atención para que ganes más dinero consiguiendo nuevos clientes.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">ROI garantizado desde el primer mes</h2>
          <p className="text-xl text-blue-200">Números reales de clientes reales</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROI_METRICS.map(({ icon: Icon, metric, suffix, label }) => (
            <div key={label} className="bg-blue-900 border border-blue-950 rounded-xl shadow p-8 text-center hover:shadow-lg transition-transform">
              <Icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <p className="text-5xl font-extrabold mb-2 text-blue-200 drop-shadow">
                <AnimatedCounter to={metric} duration={1100} decimals={Number.isInteger(metric) ? 0 : 1} suffix={suffix} />
              </p>
              <p className="text-lg text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

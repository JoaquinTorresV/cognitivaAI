"use client";
import React from "react";
import { ROI_METRICS } from "../utils/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import useScrollAnimation from "../hooks/useScrollAnimation";



export default function ROI() {
  const { ref } = useScrollAnimation();

  return (
    <section id="roi" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">ROI garantizado desde el primer mes</h2>
          <p className="text-xl opacity-90">Números reales de clientes reales</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROI_METRICS.map(({ icon: Icon, metric, suffix, label }) => (
            <div key={label} className="text-center">
              <Icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter to={metric} duration={1100} decimals={Number.isInteger(metric) ? 0 : 1} suffix={suffix} />
              </p>
              <p className="text-lg opacity-90">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

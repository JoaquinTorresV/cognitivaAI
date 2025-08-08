"use client";
import React from "react";
import { PRICING } from "../utils/constants";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Pricing() {
  const { ref } = useScrollAnimation();

  return (
    <section id="precios" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Planes diseñados para crecer contigo</h2>
          <p className="text-xl text-gray-600">Transparencia total, sin costos ocultos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={
                p.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white transform md:scale-105"
                  : "bg-white rounded-2xl shadow-lg p-8"
              }
            >
              {p.highlighted && (
                <div className="flex justify-center -mt-10 mb-2">
                  <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full shadow">MÁS POPULAR</span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className={p.highlighted ? "opacity-90 mb-6" : "text-gray-600 mb-6"}>{p.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{p.priceLabel}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                    <span className={p.highlighted ? "" : "text-gray-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={p.highlighted ? "warning" : p.name === "Enterprise" ? "dark" : "subtle"} className="w-full">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

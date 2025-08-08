"use client";
import React from "react";
import { CASE_STUDIES } from "../utils/constants";
import Badge from "../ui/Badge";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function CaseStudies() {
  const { ref } = useScrollAnimation();

  return (
    <section id="casos" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Resultados que hablan</h2>
          <p className="text-xl text-gray-600">Casos reales de transformación</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.company} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="mb-4"><Badge>{cs.tag}</Badge></div>
              <h3 className="text-xl font-bold mb-4">{cs.company}</h3>

              <div className="space-y-3 mb-6 text-sm">
                <p><span className="font-semibold text-red-600">Problema: </span><span className="text-gray-600">{cs.problem}</span></p>
                <p><span className="font-semibold text-green-600">Solución: </span><span className="text-gray-600">{cs.solution}</span></p>
                <p><span className="font-semibold text-blue-600">Resultados: </span><span className="font-bold">{cs.results}</span></p>
                <p className="text-gray-500">Stack: {cs.stack}</p>
              </div>

              <p className="text-sm text-gray-600 italic">"{cs.testimonial}"</p>
              <button className="mt-4 text-blue-600 font-semibold text-sm hover:text-blue-700">Quiero un caso similar →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

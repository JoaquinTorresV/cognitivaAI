"use client";
import React from "react";
import { SECURITY } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Security() {
  const { ref } = useScrollAnimation();

  return (
    <section id="seguridad" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Seguridad y cumplimiento</h2>
          <p className="text-xl text-blue-200">Protegemos tu data con estándares de clase mundial</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {SECURITY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center card p-6 bg-blue-900 rounded-xl border border-blue-950">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1 text-white">{title}</h3>
              <p className="text-sm text-blue-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

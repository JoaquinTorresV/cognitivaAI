"use client";
import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../utils/constants";

export default function FAQ() {
  const { ref } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      <div ref={ref} className="container-padded animate-in max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-white">Preguntas frecuentes</h2>
          <p className="text-xl text-blue-200">Respuestas claras y directas</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, idx) => {
            const open = openIndex === idx;
            return (
              <div key={f.q} className="bg-blue-900 rounded-xl shadow border border-blue-950">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-950 rounded-xl"
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <span className="font-semibold text-white">{f.q}</span>
                  {open ? <ChevronUp className="h-5 w-5 text-blue-200" /> : <ChevronDown className="h-5 w-5 text-blue-200" />}
                </button>
                {open && <div className="px-6 pb-4 text-blue-100">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../utils/constants";

export default function FAQ() {
  const { ref } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div ref={ref} className="container-padded animate-in max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Preguntas frecuentes</h2>
          <p className="text-xl text-gray-600">Respuestas claras y directas</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, idx) => {
            const open = openIndex === idx;
            return (
              <div key={f.q} className="bg-white rounded-xl shadow">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl"
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <span className="font-semibold">{f.q}</span>
                  {open ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {open && <div className="px-6 pb-4 text-gray-600">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

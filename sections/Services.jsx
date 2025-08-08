"use client";
import React from "react";
import { SERVICES } from "../utils/constants";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/Card";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Services() {
  const { ref } = useScrollAnimation();

  return (
    <section id="servicios" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Soluciones que transforman tu negocio</h2>
          <p className="text-xl text-gray-600">Tecnología de vanguardia adaptada a tu empresa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, bullets, cta }) => (
            <Card key={title} className="border-2 border-gray-100 hover:border-blue-500">
              <CardHeader>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                {bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-green-500"></span>
                    <p className="text-sm">{b}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm" className="px-12">
                  {cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/ui/Button";
import { BRAND, NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? // sólido en scroll (muy oscuro pero legible)
              "bg-[#0b1222]/95 border-b border-white/10 shadow-lg"
            : // glass + gradiente en tope (combina con el hero)
              "backdrop-blur-md border-b border-white/10 shadow-sm bg-[linear-gradient(90deg,#0a0f1fcc,#0d1a33cc_60%,#0a0f1fcc)]"
        }`}
    >
      <div className="container-padded px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-cognitiva-alargado.png"
              alt="Logo Cognitiva"
              height={32}
              width={120}
              className="h-8 w-auto md:h-10 md:w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/90 hover:text-blue-300 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Button 
            as="a" 
            href="https://cal.com/www.cognitiva-ai.agency" 
            target="_blank"
            rel="noopener noreferrer"
            variant="primary" 
            size="sm" 
            className="px-4"
          >
            Agenda Aquí
          </Button>
        </div>

        {/* Mobile btn */}
        <button
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1222]/95 backdrop-blur-md">
          <div className="container-padded px-4 py-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-left text-white/90 hover:text-blue-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button 
              as="a" 
              href="https://cal.com/www.cognitiva-ai.agency" 
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
            >
              Agenda una Reunión
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

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
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/95 shadow-lg backdrop-blur" : "bg-white/70 backdrop-blur-sm"}`}>
      <div className="container-padded h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-cognitiva-alargado.png"
              alt="Logo Cognitiva"
              height={40}
              width={160}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-700 hover:text-blue-600">
              {l.label}
            </Link>
          ))}
          <Button as="a" href={BRAND.calendarLink} variant="primary" size="sm" className="px-8">Agenda una Reunión</Button>
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2 rounded-md btn-focus" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-padded py-2 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-left text-gray-700 hover:text-blue-600">
                {l.label}
              </Link>
            ))}
            <Button as="a" href={BRAND.calendarLink} className="my-2">Agenda una Reunión</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

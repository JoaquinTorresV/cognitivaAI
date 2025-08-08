import React from "react";
import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 mt-20">
      <div className="container-padded">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Cognitiva</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformamos negocios con IA conversacional y automatización inteligente.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#casos" className="hover:text-white">Casos de Éxito</Link></li>
              <li><Link href="#servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="#precios" className="hover:text-white">Planes</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Integraciones</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>CRMs & ERPs</li>
              <li>WhatsApp Business</li>
              <li>Pasarelas de pago</li>
              <li>Cloud (AWS/GCP/Azure)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{BRAND.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{BRAND.email}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />{BRAND.city}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Cognitiva. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white">Términos</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

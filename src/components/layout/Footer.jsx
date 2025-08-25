"use client";
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Bot,
  Zap,
  Shield,
  Globe,
  Brain,
  Rocket,
  ArrowUpRight,
  Heart,
  Code2,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Activity,
  Users,
  Award,
  BarChart,
  Clock,
  Database,
  Cpu,
  Settings,
  HelpCircle,
  DollarSign,
  FileText,
  BookOpen,
  Video,
  Headphones,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/utils/businessConstants";
import { useConsistentRandomValues } from "@/hooks/useConsistentRandomValues";
import { useClientSideOnly } from "@/hooks/useClientSideOnly";
import DemoButton from "@/components/ui/DemoButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const hasMounted = useClientSideOnly();
  const particleElements = useConsistentRandomValues(30, 10);
  const lineElements = useConsistentRandomValues(5, 11);

  const footerLinks = {
    empresa: [
      { label: "Casos de Éxito", href: "#casos", icon: TrendingUp },
      { label: "Servicios IA", href: "#servicios", icon: Brain },
      { label: "Industrias", href: "#industrias", icon: Globe },
      { label: "Integraciones", href: "#integraciones", icon: Cpu },
      { label: "Proceso", href: "#proceso", icon: Settings },
      { label: "Seguridad", href: "#seguridad", icon: Shield },
      { label: "ROI Calculator", href: "#roi", icon: BarChart },
      { label: "Precios", href: "#precios", icon: DollarSign },
    ],
    recursos: [
      { label: "Centro de Ayuda", href: "/help", icon: HelpCircle },
      { label: "Blog IA", href: "/blog", icon: BookOpen },
      { label: "Documentación", href: "/docs", icon: FileText },
      { label: "API Reference", href: "/api", icon: Code2 },
      { label: "Video Tutoriales", href: "/tutorials", icon: Video },
      { label: "Webinars", href: "/webinars", icon: Globe },
      { label: "Certificaciones", href: "/certs", icon: Award },
      { label: "Soporte 24/7", href: "/support", icon: Headphones },
    ],
    legal: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos de Servicio", href: "/terminos" },
      { label: "Política de Cookies", href: "/cookies" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "ISO Certificaciones", href: "/compliance" },
      { label: "SLA Garantizado", href: "/sla" },
      { label: "Seguridad de Datos", href: "/security" },
      { label: "Licencias", href: "/licenses" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/cognitiva", label: "Twitter", color: "from-blue-400 to-blue-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/cognitiva", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { icon: Instagram, href: "https://instagram.com/cognitiva", label: "Instagram", color: "from-pink-500 to-purple-600" },
    { icon: Github, href: "https://github.com/cognitiva", label: "GitHub", color: "from-gray-600 to-gray-800" },
  ];

  const stats = [
    { value: "Clientes en LATAM", label: "en operación", icon: Users, trend: "" },
    { value: "Mensajería omnicanal", label: "escala elástica", icon: MessageCircle, trend: "" },
    { value: "SLA y monitoreo", label: "disponibilidad continua", icon: Activity, trend: "" },
    { value: "Soporte 24/7", label: "canal prioritario", icon: Shield, trend: "" },
  ];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <style>{`
        @keyframes auroraFooter {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.1; }
          33% { transform: rotate(120deg) scale(1.1); opacity: 0.15; }
          66% { transform: rotate(240deg) scale(0.9); opacity: 0.1; }
        }
        
        @keyframes riseUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes drawLine {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes scanFooter {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradientXY {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .aurora-footer { animation: auroraFooter 20s ease-in-out infinite; }
        .rise-up { animation: riseUp linear infinite; }
        .draw-line { animation: drawLine 10s linear infinite; }
        .scan-footer { animation: scanFooter 8s linear infinite; }
        .gradient-x { animation: gradientX 6s ease infinite; background-size: 200% 200%; }
        .gradient-xy { animation: gradientXY 15s ease infinite; background-size: 200% 200%; }
      `}</style>

      <div aria-hidden className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[1200px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-[150px] rounded-full aurora-footer" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[500px] bg-gradient-to-tl from-purple-600/10 via-pink-500/10 to-transparent blur-[120px] rounded-full aurora-footer" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        {hasMounted && (
          <div>
            {particleElements.map((element, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full rise-up"
                style={{
                  left: `${element.left}%`,
                  bottom: '-10px',
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`
                }}
              />
            ))}
          </div>
        )}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {hasMounted && (
            <g>
              {lineElements.map((element, i) => (
                <line
                  key={i}
                  x1={`${element.x1}%`}
                  y1={`${element.y1}%`}
                  x2={`${element.x2}%`}
                  y2={`${element.y2}%`}
                  stroke="url(#footer-gradient)"
                  strokeWidth="1"
                  className="draw-line"
                  style={{ animationDelay: `${i * 2}s` }}
                />
              ))}
            </g>
          )}
        </svg>
      </div>

      <div className="relative border-b border-white/5">
        <div className="container-padded py-12 sm:py-16 md:py-20">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 gradient-xy" />
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a0a0a]/90 to-[#0d0d0d]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-12 lg:p-16 text-center">
              <div className="inline-block mb-4 sm:mb-6 md:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-white/[0.1] to-white/[0.05] backdrop-blur-xl border border-white/20">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 animate-pulse" />
                    <span className="text-xs sm:text-sm font-light tracking-wide">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">IA empresarial</span> • <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Automatización</span> • <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Integraciones</span>
                    </span>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin mb-4 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Transforma tu negocio</span>
                <br />
                <span className="font-light text-white/90">con </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-extralight">
                  Inteligencia Artificial
                </span>
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-blue-200/70 max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Agentes de IA</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">automatizaciones</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">integraciones</span> con tus sistemas, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">marketing digital</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">desarrollo web</span> y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">analítica</span> para crecer con eficiencia. Empezamos rápido, nos integramos con tu stack y <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">medimos impacto desde el primer día</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm font-light text-white mb-6 sm:mb-8 md:mb-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-orange-400" />
                  </div>
                  <span>Inicio rápido</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <span>Impacto medible</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <span>Soporte 24/7</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <DemoButton 
                  variant="default"
                  size="large"
                  text="Ver demo de 30 min"
                  showSubtitle={false}
                  className="flex-1 max-w-xs"
                />
                <WhatsAppButton 
                  variant="outline"
                  size="large"
                  text="Hablar con un experto"
                  showSubtitle={false}
                  className="flex-1 max-w-xs"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs font-light text-blue-200/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">Sin tarjeta</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">Seguridad de datos</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">Go-live por fases</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">SLA y soporte 24/7</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container-padded py-20">
        <div className="max-w-2xl mx-auto text-center">
            <div className="mb-10">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/logo-cognitiva.png"
                  alt="Cognitiva AI"
                  className="relative h-14 w-auto"
                  style={{ maxWidth: 200 }}
                />
              </div>
              
              <p className="mt-6 text-lg font-light text-blue-200/70 leading-relaxed">
                Impulsamos empresas con <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">agentes de IA</span>, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">automatizaciones</span> e <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">integraciones</span> conectadas a tu stack. Operación continua, seguridad y soporte <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">24/7</span>.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 text-xs text-emerald-300">
                  ISO 27001
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0a0a0a]/60 to-[#0d0d0d]/60 border border-blue-500/20 text-xs text-blue-300">
                  Cumplimiento GDPR
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 text-xs text-purple-300">
                  SOC 2 (informes bajo NDA)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/20 transition-all duration-300 h-20 flex flex-col justify-center items-center text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-xs sm:text-sm font-thin text-white mb-1 leading-tight">
                          {stat.value === 'Clientes en LATAM' && (
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Clientes en LATAM</span>
                          )}
                          {stat.value === 'Mensajería omnicanal' && (
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Mensajería omnicanal</span>
                          )}
                          {stat.value === 'SLA y monitoreo' && (
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">SLA y monitoreo</span>
                          )}
                          {stat.value === 'Soporte 24/7' && (
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">Soporte 24/7</span>
                          )}
                        </div>
                        <div className="text-xs font-light text-blue-200/60 leading-tight text-center">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scan-footer" />
        
        <div className="container-padded py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-light text-blue-200/60">
              <span>© {currentYear} Cognitiva AI</span>
              <span className="text-cyan-400/50">•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="h-3 w-3 text-red-400" style={{ animation: 'pulse 1s ease-in-out infinite' }} /> 
                by humans & AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

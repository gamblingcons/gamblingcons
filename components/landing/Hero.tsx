import Link from "next/link";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Consultoría especializada en gambling
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Lleva tu operación de{" "}
            <span className="text-emerald-400">gambling</span> al siguiente
            nivel
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Asesoramos a operadoras, plataformas y emprendedores del sector de
            juego regulado. Licencias, compliance, entrada a mercados y
            estrategia — todo en un solo equipo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Solicitar consulta gratuita
              <ArrowRight size={16} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { icon: Shield, label: "Compliance regulatorio" },
              { icon: Globe, label: "20+ mercados" },
              { icon: TrendingUp, label: "Estrategia de crecimiento" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon size={18} className="text-emerald-400" />
                </div>
                <span className="text-xs text-slate-400 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

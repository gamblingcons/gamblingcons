"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const STATS = [
  { value: "15+", label: "Años en el sector" },
  { value: "50+", label: "Clientes en 4 continentes" },
  { value: "98%", label: "Éxito en licencias" },
  { value: "25+", label: "Jurisdicciones" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#07090F] overflow-hidden">
      {/* Subtle gold radial glows — no grid */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-3/4 h-[70%] bg-[radial-gradient(ellipse_80%_60%_at_80%_-10%,rgba(201,168,76,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_70%_60%_at_0%_110%,rgba(201,168,76,0.035)_0%,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-36 md:py-44">
        <div className="max-w-3xl">
          <motion.div
            {...f(0)}
            className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.28)] bg-[rgba(201,168,76,0.06)] rounded-full px-4 py-1.5 text-[#C9A84C] text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full" />
            ◆ iGaming Consulting · España &amp; LATAM
          </motion.div>

          <motion.h1
            {...f(0.1)}
            className="text-4xl md:text-[3.5rem] font-black text-[#ECE9E3] leading-[1.08] tracking-tight mb-6"
          >
            Consultoría{" "}
            <span className="text-[#C9A84C]">iGaming</span>{" "}
            para líderes del sector
          </motion.h1>

          <motion.p {...f(0.18)} className="text-lg md:text-xl text-[#8B95A8] mb-10 leading-relaxed max-w-2xl">
            Ayudamos a operadores, startups y grupos inversores a obtener licencias,
            navegar regulaciones y escalar operaciones en los mercados de gambling
            más competitivos del mundo.
          </motion.p>

          <motion.div {...f(0.24)} className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#07090F] px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-[0_8px_32px_rgba(201,168,76,0.22)]"
            >
              Consulta gratuita
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[rgba(201,168,76,0.35)] text-[#ECE9E3] px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.div
            {...f(0.32)}
            className="flex flex-wrap gap-x-10 gap-y-5 pt-6 border-t border-[rgba(255,255,255,0.05)]"
          >
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-[#C9A84C]">{s.value}</div>
                <div className="text-xs text-[#4E5669] mt-0.5 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

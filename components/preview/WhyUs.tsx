"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  "100% especialización iGaming — no somos una consultora generalista",
  "Expertos en el mercado hispanohablante: España, México, Colombia, Brasil y más",
  "Boutique = velocidad de respuesta y atención personal directa con el partner",
  "15+ años de experiencia en el sector, 50+ clientes en 4 continentes",
  "98% de éxito en procesos de licenciamiento (MGA, DGOJ, Coljuegos…)",
  "Ahorro medio del 35% en costes frente a procesos no guiados",
];

const STATS = [
  { value: "15+", label: "Años en el sector" },
  { value: "50+", label: "Clientes en 4 continentes" },
  { value: "98%", label: "Éxito en licencias" },
  { value: "35%", label: "Ahorro medio en costes" },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-28 bg-[#0B1019]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              Por qué GamblingCons
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-6">
              100% especialización{" "}
              <span className="text-[#C9A84C]">iGaming</span>
            </h2>
            <p className="text-[#8B95A8] mb-8 leading-relaxed">
              El sector del juego regulado es complejo, cambia constantemente y
              los errores salen caros. Llevamos más de 15 años navegando esta
              industria en España y LATAM — sabemos exactamente qué necesitas
              para crecer con seguridad.
            </p>

            <ul className="space-y-3.5">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[#8B95A8]">
                  <CheckCircle2 size={17} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#07090F] border border-[rgba(201,168,76,0.12)] rounded-2xl p-6 text-center hover:border-[rgba(201,168,76,0.26)] transition-colors duration-300"
              >
                <div className="text-3xl font-black text-[#C9A84C] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#8B95A8] text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";

const markets = [
  { flag: "🇪🇸", name: "España", detail: "DGOJ · Licencia nacional" },
  { flag: "🇲🇽", name: "México", detail: "SEGOB · Alta actividad" },
  { flag: "🇨🇴", name: "Colombia", detail: "Coljuegos · Mercado maduro" },
  { flag: "🇧🇷", name: "Brasil", detail: "Regulación en expansión" },
  { flag: "🇲🇹", name: "Malta", detail: "MGA · Hub europeo" },
  { flag: "🇸🇻", name: "El Salvador", detail: "Crypto-friendly" },
  { flag: "🇭🇳", name: "Honduras", detail: "SAG · Mercado emergente" },
  { flag: "🌍", name: "25+ más", detail: "Consulta tu jurisdicción" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Markets() {
  return (
    <section id="mercados" className="py-28 bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Mercados
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-4">
            España, LATAM y más allá
          </h2>
          <p className="text-[#8B95A8] max-w-xl mx-auto leading-relaxed">
            Operamos en más de 25 jurisdicciones activas. Nuestro foco principal
            es el mercado hispanohablante, donde tenemos red, contactos y
            experiencia directa con reguladores.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {markets.map((m) => (
            <motion.div
              key={m.name}
              variants={cardVariants}
              className="group bg-[#0B1019] border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.28)] rounded-2xl p-5 text-center transition-all duration-300 hover:bg-[#0D1420]"
            >
              <div className="text-3xl mb-3">{m.flag}</div>
              <div className="text-[#ECE9E3] font-semibold text-sm mb-1">{m.name}</div>
              <div className="text-[#4E5669] text-xs leading-relaxed">{m.detail}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

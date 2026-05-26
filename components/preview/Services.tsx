"use client";

import { MessageSquare, ShieldCheck, Globe, Trophy, Briefcase, Bitcoin } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: MessageSquare,
    title: "Estrategia CRM",
    description:
      "Diseñamos e implementamos estrategias de CRM completas para operadores iGaming: lifecycle, segmentación, automatizaciones, gamificación y bonos.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & AML",
    description:
      "Auditorías de compliance, políticas KYC/AML, programas de juego responsable y preparación para inspecciones regulatorias.",
  },
  {
    icon: Globe,
    title: "Market Entry & Estrategia",
    description:
      "Análisis de mercado, feasibility studies, posicionamiento competitivo y planes de entrada en nuevos territorios regulados.",
  },
  {
    icon: Trophy,
    title: "Sports Betting Consulting",
    description:
      "Estrategia de producto, selección de plataforma y proveedor de odds, gestión de riesgos, trading y optimización de márgenes.",
  },
  {
    icon: Briefcase,
    title: "M&A Advisory & Due Diligence",
    description:
      "Due diligence operativa y regulatoria para inversores y fondos PE. Buy-side y sell-side.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Gambling & Web3",
    description:
      "Consultoría especializada para casinos y operadores cripto: selección de licencia, integración de pagos, tokenización.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-[#0B1019]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-4">
            Especialización total en iGaming
          </h2>
          <p className="text-[#8B95A8] max-w-xl mx-auto leading-relaxed">
            No somos una consultora generalista. Cada servicio está diseñado
            exclusivamente para el sector del juego regulado en España y LATAM.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group bg-[#07090F] border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.28)] rounded-2xl p-6 transition-all duration-300 hover:bg-[#0D1420]"
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.16)] flex items-center justify-center mb-4 group-hover:bg-[rgba(201,168,76,0.14)] transition-colors duration-300">
                <s.icon size={20} className="text-[#C9A84C]" />
              </div>
              <h3 className="text-[#ECE9E3] font-semibold mb-2">{s.title}</h3>
              <p className="text-[#8B95A8] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

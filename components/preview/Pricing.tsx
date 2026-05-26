"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Lean",
    price: "€10.000",
    period: "/mes",
    description: "Para operadores que necesitan apoyo regulatorio y de compliance puntual.",
    features: [
      "Acceso directo al partner",
      "Hasta 10h de consultoría/mes",
      "Compliance & AML básico",
      "Revisión de documentación",
      "Soporte por email y videollamada",
      "Sin costes ocultos",
    ],
    cta: "Empezar con Lean",
    highlight: false,
  },
  {
    name: "Growth",
    price: "€15.000",
    period: "/mes",
    description: "El plan más completo para operadoras en crecimiento activo.",
    features: [
      "Todo lo del plan Lean",
      "Hasta 20h de consultoría/mes",
      "Estrategia CRM incluida",
      "Market entry en un mercado",
      "Soporte prioritario 5 días/sem",
      "Reporting mensual ejecutivo",
    ],
    cta: "Empezar con Growth",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    period: "",
    description: "Para grupos inversores, M&A, y proyectos de alto volumen.",
    features: [
      "Todo lo del plan Growth",
      "Horas ilimitadas",
      "M&A Advisory & Due Diligence",
      "Crypto Gambling & Web3",
      "Dedicación de equipo completo",
      "SLA garantizado",
    ],
    cta: "Contactar",
    highlight: false,
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

export default function Pricing() {
  return (
    <section id="precios" className="py-28 bg-[#0B1019]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-4">
            Transparencia total, sin letra pequeña
          </h2>
          <p className="text-[#8B95A8] max-w-xl mx-auto leading-relaxed">
            Tarifas fijas mensuales con acceso directo al partner. Sin sorpresas,
            sin facturación por horas ocultas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-[rgba(201,168,76,0.05)] border-2 border-[rgba(201,168,76,0.38)]"
                  : "bg-[#07090F] border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.22)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#07090F] text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[#ECE9E3] font-bold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-[#ECE9E3]">{plan.price}</span>
                  <span className="text-[#4E5669] text-sm">{plan.period}</span>
                </div>
                <p className="text-[#8B95A8] text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-[#8B95A8]">
                    <CheckCircle2 size={15} className="text-[#C9A84C] mt-0.5 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#C9A84C] hover:bg-[#E8C96A] text-[#07090F]"
                    : "border border-white/10 hover:border-[rgba(201,168,76,0.3)] text-[#ECE9E3]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

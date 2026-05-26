"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "GamblingCons nos guió en todo el proceso de licencia MGA. En 11 meses teníamos la licencia aprobada.",
    name: "Javier Morales",
    title: "CEO, operadora iGaming",
  },
  {
    quote:
      "Entramos al mercado colombiano con la estrategia correcta gracias a GamblingCons.",
    name: "Andrés Castro",
    title: "COO, plataforma de apuestas deportivas",
  },
  {
    quote:
      "GamblingCons entregó un informe exhaustivo que nos permitió tomar la decisión con confianza total.",
    name: "Pablo Rodríguez",
    title: "Investment Manager, fondo PE",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="group bg-[#0B1019] border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.22)] rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300"
            >
              <Quote size={22} className="text-[rgba(201,168,76,0.3)]" />
              <p className="text-[#8B95A8] text-sm leading-relaxed flex-1 group-hover:text-[#A8B2C4] transition-colors duration-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.05)]">
                <div className="text-[#ECE9E3] text-sm font-semibold">{t.name}</div>
                <div className="text-[#4E5669] text-xs mt-0.5">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#050710] border-t border-[rgba(201,168,76,0.08)] py-14"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="text-xl font-black text-[#ECE9E3]">
              Gambling<span className="text-[#C9A84C]">Cons</span>
            </span>
            <p className="text-[#4E5669] text-sm mt-3 leading-relaxed max-w-xs">
              Consultoría iGaming especializada en España y LATAM. 15+ años de
              experiencia. 50+ clientes en 4 continentes.
            </p>
            <div className="flex gap-2.5 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] hover:bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.14)] hover:border-[rgba(201,168,76,0.32)] flex items-center justify-center text-[#C9A84C] transition-all duration-200 text-xs font-bold"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[rgba(201,168,76,0.08)] hover:bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.14)] hover:border-[rgba(201,168,76,0.32)] flex items-center justify-center text-[#C9A84C] transition-all duration-200 text-xs font-bold"
              >
                𝕏
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#ECE9E3] text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-[#4E5669] text-sm">
              {[
                "Estrategia CRM",
                "Compliance & AML",
                "Market Entry",
                "Sports Betting",
                "M&A Advisory",
                "Crypto Gambling",
              ].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-[#8B95A8] transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#ECE9E3] text-xs font-semibold uppercase tracking-[0.15em] mb-5">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-[#4E5669] text-sm">
              {[
                { label: "Mercados", href: "#mercados" },
                { label: "Precios", href: "#precios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#8B95A8] transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="hover:text-[#8B95A8] transition-colors duration-200">
                  Panel interno
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(201,168,76,0.08)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[#4E5669] text-xs">
          <p>© 2026 GamblingCons. Todos los derechos reservados.</p>
          <p>admin@gamblingcons.com · España · Malta · LATAM</p>
        </div>
      </div>
    </motion.footer>
  );
}

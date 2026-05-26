"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Mercados", href: "#mercados" },
  { label: "Precios", href: "#precios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed top-8 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090F]/98 backdrop-blur-xl border-b border-[rgba(201,168,76,0.14)]"
          : "bg-[#07090F]/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/preview" className="text-[1.35rem] font-black tracking-tight text-[#ECE9E3]">
          Gambling<span className="text-[#C9A84C]">Cons</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-[#8B95A8]">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="hover:text-[#ECE9E3] transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#07090F] px-5 py-1.5 rounded-full font-semibold text-sm transition-all duration-200"
          >
            Consulta gratuita
          </a>
        </div>

        <button
          className="md:hidden text-[#ECE9E3] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#07090F] border-t border-[rgba(201,168,76,0.1)]"
          >
            <div className="px-6 py-5 flex flex-col gap-4 text-sm text-[#8B95A8]">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#ECE9E3] transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="text-[#C9A84C] font-semibold"
              >
                Consulta gratuita →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Mercados", href: "#mercados" },
  { label: "Precios", href: "#precios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          Gambling<span className="text-emerald-400">Cons</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-1.5 rounded-full font-medium transition-colors"
          >
            Consulta gratuita
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f1e] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-emerald-400 font-medium">
            Consulta gratuita →
          </a>
        </div>
      )}
    </nav>
  );
}

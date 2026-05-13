"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-white">
            gambling<span className="text-emerald-400">cons</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          <Link
            href="/dashboard"
            className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-1.5 rounded-full font-medium transition-colors"
          >
            Panel CRM
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0f1e] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-slate-300">
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#proceso" onClick={() => setOpen(false)}>Proceso</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
          <Link href="/dashboard" className="text-emerald-400 font-medium">Panel CRM →</Link>
        </div>
      )}
    </nav>
  );
}

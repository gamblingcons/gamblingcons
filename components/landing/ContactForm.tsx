"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/types";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Hubo un error al enviar. Escríbenos directamente a admin@gamblingcons.com");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="contacto" className="py-24 bg-[#0a0f1e]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
          <p className="text-slate-400">
            Nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Consulta gratuita
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10">
              Rellena el formulario y uno de nuestros partners se pondrá en
              contacto contigo en menos de 24 horas. Sin compromisos.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail size={14} className="text-emerald-400" />
                </div>
                admin@gamblingcons.com
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-emerald-400" />
                </div>
                España · Malta · LATAM
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Nombre *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Empresa *</label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Teléfono</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">País *</label>
                <input
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="España, México, Colombia…"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Servicio de interés *</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#0d1225] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                >
                  <option value="">Selecciona...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1.5">Cuéntanos tu proyecto</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                placeholder="¿En qué mercado quieres operar? ¿Qué tipo de licencia necesitas?…"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            >
              {loading ? "Enviando..." : "Solicitar consulta gratuita"}
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

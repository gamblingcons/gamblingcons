"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/types";
import { motion } from "motion/react";

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

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,168,76,0.12)] rounded-xl px-4 py-2.5 text-[#ECE9E3] text-sm focus:outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors placeholder:text-[#4E5669]";

  if (success) {
    return (
      <section id="contacto" className="py-28 bg-[#0B1019]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <CheckCircle2 size={48} className="text-[#C9A84C] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#ECE9E3] mb-2">¡Mensaje recibido!</h3>
          <p className="text-[#8B95A8]">
            Nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-28 bg-[#0B1019]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#ECE9E3] mb-4">
              Consulta gratuita
            </h2>
            <p className="text-[#8B95A8] leading-relaxed mb-10">
              Rellena el formulario y uno de nuestros partners se pondrá en
              contacto contigo en menos de 24 horas. Sin compromisos.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[#8B95A8] text-sm">
                <div className="w-9 h-9 rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.16)] flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#C9A84C]" />
                </div>
                admin@gamblingcons.com
              </div>
              <div className="flex items-center gap-3 text-[#8B95A8] text-sm">
                <div className="w-9 h-9 rounded-xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.16)] flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#C9A84C]" />
                </div>
                España · Malta · LATAM
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="bg-[#07090F] border border-[rgba(201,168,76,0.12)] rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">Nombre *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">Empresa *</label>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">Teléfono</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">País *</label>
                <input
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className={inputClass}
                  placeholder="España, México, Colombia…"
                />
              </div>
              <div>
                <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">
                  Servicio de interés *
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#07090F] border border-[rgba(201,168,76,0.12)] rounded-xl px-4 py-2.5 text-[#ECE9E3] text-sm focus:outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors"
                >
                  <option value="">Selecciona...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#8B95A8] mb-1.5 font-medium">
                Cuéntanos tu proyecto
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="¿En qué mercado quieres operar? ¿Qué tipo de licencia necesitas?…"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] disabled:opacity-60 text-[#07090F] px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            >
              {loading ? "Enviando..." : "Solicitar consulta gratuita"}
              <Send size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

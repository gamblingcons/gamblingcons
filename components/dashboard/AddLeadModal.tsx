"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { SERVICES, Lead } from "@/lib/types";

interface Props {
  onClose: () => void;
  onAdd: (lead: Lead) => void;
}

export default function AddLeadModal({ onClose, onAdd }: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    value: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, value: form.value ? Number(form.value) : undefined }),
    });
    const lead = await res.json();
    onAdd(lead);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#0d1225] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/8">
          <h2 className="text-white font-semibold">Nuevo lead</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { key: "name", label: "Nombre *", required: true },
              { key: "company", label: "Empresa *", required: true },
              { key: "email", label: "Email *", required: true, type: "email" },
              { key: "phone", label: "Teléfono" },
              { key: "country", label: "País *", required: true },
              { key: "value", label: "Valor estimado (€)", type: "number" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs text-slate-400 mb-1.5">{f.label}</label>
                <input
                  required={f.required}
                  type={f.type || "text"}
                  value={(form as Record<string, string>)[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Servicio *</label>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-[#070b17] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
            >
              <option value="">Selecciona...</option>
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1.5">Notas</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-white/10 text-slate-400 hover:text-white rounded-xl py-2.5 text-sm transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white rounded-xl py-2.5 text-sm font-medium transition-colors"
            >
              {loading ? "Guardando..." : "Crear lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

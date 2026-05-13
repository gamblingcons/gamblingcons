"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Lead, LEAD_STATUSES, SERVICES } from "@/lib/types";
import { ArrowLeft, Save, Trash2 } from "lucide-react";

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/leads/${id}`).then((r) => r.json()).then(setLead);
  }, [id]);

  const handleSave = async () => {
    if (!lead) return;
    setSaving(true);
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este lead?")) return;
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
    router.push("/dashboard/leads");
  };

  if (!lead) {
    return (
      <div className="p-8 text-slate-500 text-sm">Cargando...</div>
    );
  }

  const statusMeta = LEAD_STATUSES.find((s) => s.value === lead.status)!;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => router.back()}
          className="text-slate-500 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-white">{lead.name}</h1>
          <p className="text-slate-500 text-sm">{lead.company}</p>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full ${statusMeta.color}`}>
          {statusMeta.label}
        </span>
      </div>

      <div className="space-y-6">
        {/* Info básica */}
        <div className="bg-[#0d1225] border border-white/8 rounded-2xl p-6">
          <h2 className="text-white text-sm font-semibold mb-4">Información del contacto</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { key: "name", label: "Nombre" },
              { key: "company", label: "Empresa" },
              { key: "email", label: "Email" },
              { key: "phone", label: "Teléfono" },
              { key: "country", label: "País" },
            ].map((f) => (
              <div key={f.key}>
                <label className="block text-xs text-slate-500 mb-1.5">{f.label}</label>
                <input
                  value={(lead as unknown as Record<string, string>)[f.key] || ""}
                  onChange={(e) => setLead({ ...lead, [f.key]: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Valor estimado (€)</label>
              <input
                type="number"
                value={lead.value || ""}
                onChange={(e) => setLead({ ...lead, value: Number(e.target.value) })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        {/* Servicio y estado */}
        <div className="bg-[#0d1225] border border-white/8 rounded-2xl p-6">
          <h2 className="text-white text-sm font-semibold mb-4">Oportunidad</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Servicio</label>
              <select
                value={lead.service}
                onChange={(e) => setLead({ ...lead, service: e.target.value })}
                className="w-full bg-[#070b17] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
              >
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1.5">Estado del pipeline</label>
              <select
                value={lead.status}
                onChange={(e) =>
                  setLead({ ...lead, status: e.target.value as Lead["status"] })
                }
                className="w-full bg-[#070b17] border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50"
              >
                {LEAD_STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notas */}
        <div className="bg-[#0d1225] border border-white/8 rounded-2xl p-6">
          <h2 className="text-white text-sm font-semibold mb-4">Notas</h2>
          <textarea
            rows={6}
            value={lead.notes || ""}
            onChange={(e) => setLead({ ...lead, notes: e.target.value })}
            placeholder="Agrega notas, seguimientos, acuerdos..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 resize-none"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <Save size={14} /> {saving ? "Guardando..." : "Guardar cambios"}
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            <Trash2 size={14} /> Eliminar
          </button>
        </div>

        <p className="text-slate-600 text-xs">
          Creado: {new Date(lead.createdAt).toLocaleString("es-ES")} ·
          Actualizado: {new Date(lead.updatedAt).toLocaleString("es-ES")}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Lead, LeadStatus } from "@/lib/types";
import StatsBar from "@/components/dashboard/StatsBar";
import Pipeline from "@/components/dashboard/Pipeline";
import AddLeadModal from "@/components/dashboard/AddLeadModal";
import { Plus, LayoutList, Kanban } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [view, setView] = useState<"pipeline" | "list">("pipeline");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/leads").then((r) => r.json()).then(setLeads);
  }, []);

  const handleStatusChange = async (id: string, status: LeadStatus) => {
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status, updatedAt: new Date().toISOString() } : l))
    );
  };

  const handleAdd = (lead: Lead) => setLeads((prev) => [lead, ...prev]);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Pipeline de adquisición de clientes</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-white/5 border border-white/8 rounded-xl p-1">
            <button
              onClick={() => setView("pipeline")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                view === "pipeline" ? "bg-white/10 text-white" : "text-slate-500 hover:text-white"
              }`}
            >
              <Kanban size={13} /> Pipeline
            </button>
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-colors ${
                view === "list" ? "bg-white/10 text-white" : "text-slate-500 hover:text-white"
              }`}
            >
              <LayoutList size={13} /> Lista
            </button>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
          >
            <Plus size={15} /> Nuevo lead
          </button>
        </div>
      </div>

      <StatsBar leads={leads} />

      {view === "pipeline" ? (
        <Pipeline leads={leads.filter((l) => l.status !== "perdido")} onStatusChange={handleStatusChange} />
      ) : (
        <div className="bg-[#0d1225] border border-white/8 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8 text-slate-500 text-xs">
                  <th className="text-left py-3 px-4">Nombre</th>
                  <th className="text-left py-3 px-4">Empresa</th>
                  <th className="text-left py-3 px-4">País</th>
                  <th className="text-left py-3 px-4">Servicio</th>
                  <th className="text-left py-3 px-4">Estado</th>
                  <th className="text-left py-3 px-4">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-white/5 hover:bg-white/2 cursor-pointer">
                    <td className="py-3 px-4">
                      <Link href={`/dashboard/leads/${lead.id}`} className="text-white hover:text-emerald-400 font-medium">
                        {lead.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{lead.company}</td>
                    <td className="py-3 px-4 text-slate-400">{lead.country}</td>
                    <td className="py-3 px-4 text-slate-400 truncate max-w-40">{lead.service}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs bg-white/5 border border-white/10 rounded-full px-2 py-0.5 text-slate-400">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-xs">
                      {new Date(lead.createdAt).toLocaleDateString("es-ES")}
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-500 text-sm">
                      No hay leads todavía. Añade uno manualmente o espera contactos del formulario.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showModal && (
        <AddLeadModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
      )}
    </div>
  );
}

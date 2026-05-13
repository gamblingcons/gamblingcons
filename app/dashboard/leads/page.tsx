"use client";

import { useEffect, useState } from "react";
import { Lead } from "@/lib/types";
import LeadTable from "@/components/dashboard/LeadTable";
import AddLeadModal from "@/components/dashboard/AddLeadModal";
import { Plus, Search } from "lucide-react";

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/leads").then((r) => r.json()).then(setLeads);
  }, []);

  const filtered = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      l.country.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    await fetch(`/api/leads/${id}`, { method: "DELETE" });
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Leads</h1>
          <p className="text-slate-500 text-sm mt-1">{leads.length} contactos en total</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          <Plus size={15} /> Nuevo lead
        </button>
      </div>

      <div className="relative mb-6">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre, empresa, email o país..."
          className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      <div className="bg-[#0d1225] border border-white/8 rounded-2xl overflow-hidden">
        <LeadTable leads={filtered} onDelete={handleDelete} />
      </div>

      {showModal && (
        <AddLeadModal
          onClose={() => setShowModal(false)}
          onAdd={(lead) => setLeads((prev) => [lead, ...prev])}
        />
      )}
    </div>
  );
}

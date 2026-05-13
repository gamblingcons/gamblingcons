"use client";

import { Lead, LEAD_STATUSES } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

export default function LeadTable({ leads, onDelete }: {
  leads: Lead[];
  onDelete: (id: string) => void;
}) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/8 text-slate-500 text-xs">
            <th className="text-left py-3 px-4">Nombre</th>
            <th className="text-left py-3 px-4">Empresa</th>
            <th className="text-left py-3 px-4">Email</th>
            <th className="text-left py-3 px-4">País</th>
            <th className="text-left py-3 px-4">Servicio</th>
            <th className="text-left py-3 px-4">Estado</th>
            <th className="text-left py-3 px-4">Fecha</th>
            <th className="py-3 px-4" />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            const status = LEAD_STATUSES.find((s) => s.value === lead.status)!;
            return (
              <tr
                key={lead.id}
                className="border-b border-white/5 hover:bg-white/2 cursor-pointer transition-colors"
                onClick={() => router.push(`/dashboard/leads/${lead.id}`)}
              >
                <td className="py-3 px-4 text-white font-medium">{lead.name}</td>
                <td className="py-3 px-4 text-slate-400">{lead.company}</td>
                <td className="py-3 px-4 text-slate-400">{lead.email}</td>
                <td className="py-3 px-4 text-slate-400">{lead.country}</td>
                <td className="py-3 px-4 text-slate-400 max-w-32 truncate">{lead.service}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${status.color}`}>
                    {status.label}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-500 text-xs">
                  {new Date(lead.createdAt).toLocaleDateString("es-ES")}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("¿Eliminar este lead?")) onDelete(lead.id);
                    }}
                    className="text-slate-600 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            );
          })}
          {leads.length === 0 && (
            <tr>
              <td colSpan={8} className="py-12 text-center text-slate-500">
                No hay leads todavía. ¡Empieza añadiendo uno o espera contactos del formulario web.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

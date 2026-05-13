"use client";

import { Lead, LeadStatus, LEAD_STATUSES } from "@/lib/types";
import { useRouter } from "next/navigation";

const PIPELINE_COLS: LeadStatus[] = [
  "prospecto",
  "contactado",
  "reunion",
  "propuesta",
  "cliente",
];

export default function Pipeline({ leads, onStatusChange }: {
  leads: Lead[];
  onStatusChange: (id: string, status: LeadStatus) => void;
}) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-4 min-w-max">
        {PIPELINE_COLS.map((col) => {
          const colLeads = leads.filter((l) => l.status === col);
          const colMeta = LEAD_STATUSES.find((s) => s.value === col)!;

          return (
            <div key={col} className="w-64 flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colMeta.color}`}>
                  {colMeta.label}
                </span>
                <span className="text-xs text-slate-500">{colLeads.length}</span>
              </div>

              <div className="space-y-3">
                {colLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-[#0d1225] border border-white/8 hover:border-emerald-500/30 rounded-xl p-4 cursor-pointer transition-all group"
                    onClick={() => router.push(`/dashboard/leads/${lead.id}`)}
                  >
                    <p className="text-white text-sm font-medium truncate group-hover:text-emerald-400 transition-colors">
                      {lead.name}
                    </p>
                    <p className="text-slate-500 text-xs truncate mb-3">{lead.company}</p>
                    <p className="text-slate-400 text-xs mb-3">{lead.service}</p>

                    <div className="flex gap-1 flex-wrap">
                      {PIPELINE_COLS.filter((s) => s !== col).map((nextStatus) => {
                        const meta = LEAD_STATUSES.find((s) => s.value === nextStatus)!;
                        return (
                          <button
                            key={nextStatus}
                            onClick={(e) => {
                              e.stopPropagation();
                              onStatusChange(lead.id, nextStatus);
                            }}
                            className="text-xs text-slate-500 hover:text-white border border-white/10 hover:border-white/30 rounded px-1.5 py-0.5 transition-colors"
                            title={`Mover a ${meta.label}`}
                          >
                            → {meta.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {colLeads.length === 0 && (
                  <div className="h-24 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-slate-600 text-xs">
                    Sin leads
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

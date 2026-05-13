import { Lead, LEAD_STATUSES } from "@/lib/types";
import { Users, TrendingUp, DollarSign, Target } from "lucide-react";

export default function StatsBar({ leads }: { leads: Lead[] }) {
  const total = leads.length;
  const clients = leads.filter((l) => l.status === "cliente").length;
  const active = leads.filter((l) => !["perdido", "cliente"].includes(l.status)).length;
  const pipelineValue = leads
    .filter((l) => !["perdido"].includes(l.status))
    .reduce((sum, l) => sum + (l.value || 0), 0);

  const conversionRate = total > 0 ? Math.round((clients / total) * 100) : 0;

  const stats = [
    { label: "Total leads", value: total, icon: Users, color: "text-blue-400" },
    { label: "En pipeline", value: active, icon: Target, color: "text-yellow-400" },
    { label: "Clientes", value: clients, icon: TrendingUp, color: "text-emerald-400" },
    {
      label: "Tasa conversión",
      value: `${conversionRate}%`,
      icon: DollarSign,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-[#0d1225] border border-white/8 rounded-xl p-4 flex items-center gap-4"
        >
          <div className={`p-2 rounded-lg bg-white/5 ${s.color}`}>
            <s.icon size={18} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-slate-500">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

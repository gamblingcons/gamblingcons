import Link from "next/link";
import { LayoutDashboard, Users, ExternalLink } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070b17] flex">
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 border-r border-white/8 flex flex-col py-6 px-4">
        <Link href="/" className="text-xl font-black text-white mb-8 px-2">
          gambling<span className="text-emerald-400">cons</span>
        </Link>

        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
          <Link
            href="/dashboard/leads"
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Users size={16} />
            Leads
          </Link>
        </nav>

        <div className="mt-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-400 px-3 py-2 transition-colors"
          >
            <ExternalLink size={12} />
            Ver web pública
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

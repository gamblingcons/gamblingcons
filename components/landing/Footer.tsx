import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070b17] border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <span className="text-xl font-black text-white">
              Gambling<span className="text-emerald-400">Cons</span>
            </span>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-xs">
              Consultoría iGaming especializada en España y LATAM. 15+ años de
              experiencia. 50+ clientes en 4 continentes.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-xs font-bold"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-xs font-bold"
              >
                𝕏
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {[
                "Estrategia CRM",
                "Compliance & AML",
                "Market Entry",
                "Sports Betting",
                "M&A Advisory",
                "Crypto Gambling",
              ].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-slate-300 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {[
                { label: "Mercados", href: "#mercados" },
                { label: "Precios", href: "#precios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-slate-300 transition-colors">{l.label}</a>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="hover:text-slate-300 transition-colors">
                  Panel interno
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-600 text-xs">
          <p>© 2026 GamblingCons. Todos los derechos reservados.</p>
          <p>admin@gamblingcons.com · España · Malta · LATAM</p>
        </div>
      </div>
    </footer>
  );
}

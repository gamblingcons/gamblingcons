import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070b17] border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <span className="text-xl font-black text-white">
              gambling<span className="text-emerald-400">cons</span>
            </span>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-xs">
              Consultoría especializada en el sector del juego regulado. Tu
              socio estratégico para crecer con seguridad.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {["Licencias de juego", "Compliance & AML", "Entrada a mercados", "Estrategia de afiliados"].map((s) => (
                <li key={s}><a href="#servicios" className="hover:text-slate-300 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {["Nosotros", "Proceso", "Contacto"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-slate-300 transition-colors">{s}</a></li>
              ))}
              <li><Link href="/dashboard" className="hover:text-slate-300 transition-colors">Panel interno</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-600 text-xs">
          <p>© 2025 Gamblingcons. Todos los derechos reservados.</p>
          <p>Madrid · Malta · Ciudad de México</p>
        </div>
      </div>
    </footer>
  );
}

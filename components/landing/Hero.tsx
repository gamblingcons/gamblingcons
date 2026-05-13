import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            ◆ iGaming Consulting · España &amp; LATAM
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Consultoría{" "}
            <span className="text-emerald-400">iGaming</span>{" "}
            para líderes del sector
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Ayudamos a operadores, startups y grupos inversores a obtener licencias,
            navegar regulaciones y escalar operaciones en los mercados de gambling
            más competitivos del mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Consulta gratuita
              <ArrowRight size={16} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { value: "15+", label: "Años en el sector" },
              { value: "50+", label: "Clientes en 4 continentes" },
              { value: "98%", label: "Éxito en licencias" },
              { value: "25+", label: "Jurisdicciones" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-emerald-400">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

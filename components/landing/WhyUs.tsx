import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Especialistas 100% en el sector gambling, no generalistas",
  "Red de contactos en reguladores europeos y latinoamericanos",
  "Experiencia en más de 20 jurisdicciones activas",
  "Acompañamiento desde la idea hasta la operación real",
  "Equipo multidisciplinar: abogados, estrategas y operadores",
  "Tarifas transparentes sin letra pequeña",
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              ¿Por qué elegir{" "}
              <span className="text-emerald-400">gamblingcons</span>?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              El sector del juego regulado es complejo, cambia constantemente y
              los errores salen caros. Nosotros llevamos años navegando esta
              industria y sabemos exactamente qué necesita tu negocio para
              crecer sin riesgos.
            </p>

            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Mercados cubiertos" },
              { value: "50+", label: "Clientes asesorados" },
              { value: "98%", label: "Tasa de éxito en licencias" },
              { value: "5★", label: "Valoración media" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-black text-emerald-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

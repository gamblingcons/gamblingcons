import { CheckCircle2 } from "lucide-react";

const reasons = [
  "100% especialización iGaming — no somos una consultora generalista",
  "Expertos en el mercado hispanohablante: España, México, Colombia, Brasil y más",
  "Boutique = velocidad de respuesta y atención personal directa con el partner",
  "15+ años de experiencia en el sector, 50+ clientes en 4 continentes",
  "98% de éxito en procesos de licenciamiento (MGA, DGOJ, Coljuegos…)",
  "Ahorro medio del 35% en costes frente a procesos no guiados",
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Por qué GamblingCons
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              100% especialización{" "}
              <span className="text-emerald-400">iGaming</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              El sector del juego regulado es complejo, cambia constantemente y
              los errores salen caros. Llevamos más de 15 años navegando esta
              industria en España y LATAM — sabemos exactamente qué necesitas
              para crecer con seguridad.
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
              { value: "15+", label: "Años en el sector" },
              { value: "50+", label: "Clientes en 4 continentes" },
              { value: "98%", label: "Éxito en licencias" },
              { value: "35%", label: "Ahorro medio en costes" },
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

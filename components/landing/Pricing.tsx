import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Lean",
    price: "€10.000",
    period: "/mes",
    description: "Para operadores que necesitan apoyo regulatorio y de compliance puntual.",
    features: [
      "Acceso directo al partner",
      "Hasta 10h de consultoría/mes",
      "Compliance & AML básico",
      "Revisión de documentación",
      "Soporte por email y videollamada",
      "Sin costes ocultos",
    ],
    cta: "Empezar con Lean",
    highlight: false,
  },
  {
    name: "Growth",
    price: "€15.000",
    period: "/mes",
    description: "El plan más completo para operadoras en crecimiento activo.",
    features: [
      "Todo lo del plan Lean",
      "Hasta 20h de consultoría/mes",
      "Estrategia CRM incluida",
      "Market entry en un mercado",
      "Soporte prioritario 5 días/sem",
      "Reporting mensual ejecutivo",
    ],
    cta: "Empezar con Growth",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    period: "",
    description: "Para grupos inversores, M&A, y proyectos de alto volumen.",
    features: [
      "Todo lo del plan Growth",
      "Horas ilimitadas",
      "M&A Advisory & Due Diligence",
      "Crypto Gambling & Web3",
      "Dedicación de equipo completo",
      "SLA garantizado",
    ],
    cta: "Contactar",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Precios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Transparencia total, sin letra pequeña
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tarifas fijas mensuales con acceso directo al partner. Sin sorpresas,
            sin facturación por horas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-emerald-500/10 border-2 border-emerald-500/50"
                  : "bg-white/3 border border-white/8"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white"
                    : "border border-white/15 hover:border-white/30 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

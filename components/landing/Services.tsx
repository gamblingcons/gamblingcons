import { MessageSquare, ShieldCheck, Globe, Trophy, Briefcase, Bitcoin } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Estrategia CRM",
    description:
      "Diseñamos e implementamos estrategias de CRM completas para operadores iGaming: lifecycle, segmentación, automatizaciones, gamificación y bonos.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & AML",
    description:
      "Auditorías de compliance, políticas KYC/AML, programas de juego responsable y preparación para inspecciones regulatorias.",
  },
  {
    icon: Globe,
    title: "Market Entry & Estrategia",
    description:
      "Análisis de mercado, feasibility studies, posicionamiento competitivo y planes de entrada en nuevos territorios regulados.",
  },
  {
    icon: Trophy,
    title: "Sports Betting Consulting",
    description:
      "Estrategia de producto, selección de plataforma y proveedor de odds, gestión de riesgos, trading y optimización de márgenes.",
  },
  {
    icon: Briefcase,
    title: "M&A Advisory & Due Diligence",
    description:
      "Due diligence operativa y regulatoria para inversores y fondos PE. Buy-side y sell-side.",
  },
  {
    icon: Bitcoin,
    title: "Crypto Gambling & Web3",
    description:
      "Consultoría especializada para casinos y operadores cripto: selección de licencia, integración de pagos, tokenización.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Especialización total en iGaming
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            No somos una consultora generalista. Cada servicio está diseñado
            exclusivamente para el sector del juego regulado en España y LATAM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-emerald-500/30 rounded-2xl p-6 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <s.icon size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

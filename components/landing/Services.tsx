import {
  FileText,
  Globe,
  ShieldCheck,
  Users,
  Search,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Obtención de Licencias",
    description:
      "Gestionamos todo el proceso de obtención de licencias de juego en Malta (MGA), Gibraltar, Curaçao, España y otras jurisdicciones.",
  },
  {
    icon: Globe,
    title: "Entrada a Nuevos Mercados",
    description:
      "Analizamos viabilidad regulatoria, competencia y estrategia de go-to-market para lanzar tu operación en cualquier mercado.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & AML",
    description:
      "Diseñamos programas de cumplimiento, políticas AML/KYC y formamos a tus equipos para operar con total seguridad legal.",
  },
  {
    icon: Users,
    title: "Estrategia de Afiliados",
    description:
      "Construimos y optimizamos redes de afiliados para maximizar la adquisición de jugadores con el menor coste posible.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Análisis exhaustivos para inversores, adquisiciones o partnerships en el sector: legal, financiero y operativo.",
  },
  {
    icon: BarChart3,
    title: "Consultoría Estratégica",
    description:
      "Acompañamos a operadoras y startups en sus decisiones estratégicas, desde la estructura societaria hasta el modelo de negocio.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Nuestros servicios
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Cobertura completa para empresas que operan o quieren entrar en el
            mercado del juego regulado.
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

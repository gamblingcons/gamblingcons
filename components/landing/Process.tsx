const steps = [
  {
    num: "01",
    title: "Consulta gratuita",
    description:
      "Analizamos tu situación actual, objetivos y mercados de interés en una llamada de 30 minutos sin compromiso.",
  },
  {
    num: "02",
    title: "Diagnóstico y propuesta",
    description:
      "Elaboramos un informe personalizado con el roadmap regulatorio, riesgos y un plan de acción claro.",
  },
  {
    num: "03",
    title: "Ejecución",
    description:
      "Nuestro equipo se pone a trabajar: tramitaciones, documentación, negociaciones y comunicación con reguladores.",
  },
  {
    num: "04",
    title: "Seguimiento continuo",
    description:
      "El sector no para. Te acompañamos con actualizaciones regulatorias, renovaciones y nuevas oportunidades.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un proceso estructurado para que sepas en cada momento dónde
            estamos y qué esperar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-emerald-500/30 to-transparent z-10" />
              )}
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <div className="text-4xl font-black text-emerald-400/30 mb-4">
                  {step.num}
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

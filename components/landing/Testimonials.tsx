import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GamblingCons nos guió en todo el proceso de licencia MGA. En 11 meses teníamos la licencia aprobada.",
    name: "Javier Morales",
    title: "CEO, operadora iGaming",
  },
  {
    quote:
      "Entramos al mercado colombiano con la estrategia correcta gracias a GamblingCons.",
    name: "Andrés Castro",
    title: "COO, plataforma de apuestas deportivas",
  },
  {
    quote:
      "GamblingCons entregó un informe exhaustivo que nos permitió tomar la decisión con confianza total.",
    name: "Pablo Rodríguez",
    title: "Investment Manager, fondo PE",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/3 border border-white/8 rounded-2xl p-6 flex flex-col gap-4"
            >
              <Quote size={24} className="text-emerald-400/40" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-white text-sm font-semibold">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

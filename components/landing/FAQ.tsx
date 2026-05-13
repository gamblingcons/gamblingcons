"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué es una consultoría iGaming y para qué sirve?",
    a: "Una consultoría iGaming especializada ayuda a operadores, inversores y startups del sector a navegar la compleja regulación del juego online, obtener licencias, diseñar estrategias de entrada a nuevos mercados y optimizar sus operaciones. GamblingCons se especializa exclusivamente en el mercado hispanohablante.",
  },
  {
    q: "¿Cuánto cuesta obtener una licencia de gambling en España?",
    a: "El coste de una licencia DGOJ en España varía según el tipo (casino, apuestas deportivas, póker…). En general, entre tasas administrativas, constitución de garantías y gastos legales, el proceso puede oscilar entre €100.000 y €300.000. Nuestros clientes ahorran de media un 35% con nuestra guía.",
  },
  {
    q: "¿Cuál es la mejor licencia iGaming para operar en LATAM?",
    a: "Depende del mercado objetivo. Para operar en Colombia necesitas la licencia Coljuegos. Para México, la autorización SEGOB. Para una presencia regional más amplia, muchas operadoras combinan la licencia MGA de Malta con registros locales. Analizamos tu caso concreto y recomendamos la estrategia óptima.",
  },
  {
    q: "¿Trabajáis con startups iGaming o solo con operadores establecidos?",
    a: "Trabajamos con todo el espectro: desde startups iGaming en fase pre-seed que quieren entender el marco regulatorio, hasta grandes grupos con facturación de 9 cifras que necesitan due diligence para una adquisición. Cada proyecto recibe atención personalizada.",
  },
  {
    q: "¿Qué es el compliance KYC/AML en iGaming?",
    a: "KYC (Know Your Customer) y AML (Anti-Money Laundering) son los pilares del compliance en gambling. Incluyen verificación de identidad de jugadores, monitorización de transacciones sospechosas, reporte a autoridades y programas de juego responsable. Los reguladores exigen sistemas robustos bajo pena de multas y revocación de licencia.",
  },
  {
    q: "¿Cuánto tiempo lleva obtener una licencia MGA de Malta?",
    a: "El proceso MGA (Malta Gaming Authority) suele tardar entre 9 y 14 meses si la documentación está bien preparada desde el inicio. Con GamblingCons hemos completado procesos en tan solo 11 meses. Preparar bien la documentación desde el día uno es clave para evitar retrasos.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0d1225]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/8 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white text-sm font-medium">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const markets = [
  { flag: "🇪🇸", name: "España", detail: "DGOJ · Licencia nacional" },
  { flag: "🇲🇽", name: "México", detail: "SEGOB · Alta actividad" },
  { flag: "🇨🇴", name: "Colombia", detail: "Coljuegos · Mercado maduro" },
  { flag: "🇧🇷", name: "Brasil", detail: "Regulación en expansión" },
  { flag: "🇲🇹", name: "Malta", detail: "MGA · Hub europeo" },
  { flag: "🇸🇻", name: "El Salvador", detail: "Crypto-friendly" },
  { flag: "🇭🇳", name: "Honduras", detail: "SAG · Mercado emergente" },
  { flag: "🌍", name: "25+ más", detail: "Consulta tu jurisdicción" },
];

export default function Markets() {
  return (
    <section id="mercados" className="py-24 bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Mercados
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            España, LATAM y más allá
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Operamos en más de 25 jurisdicciones activas. Nuestro foco principal
            es el mercado hispanohablante, donde tenemos red, contactos y
            experiencia directa con reguladores.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {markets.map((m) => (
            <div
              key={m.name}
              className="bg-white/3 border border-white/8 hover:border-emerald-500/30 rounded-2xl p-5 text-center transition-all group"
            >
              <div className="text-3xl mb-2">{m.flag}</div>
              <div className="text-white font-semibold text-sm mb-1">{m.name}</div>
              <div className="text-slate-500 text-xs">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

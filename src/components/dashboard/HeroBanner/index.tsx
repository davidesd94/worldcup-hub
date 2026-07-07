import { FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-r
      from-emerald-700
      via-green-600
      to-lime-500
      p-10
      shadow-xl
    "
    >
      <div className="max-w-xl">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          FIFA WORLD CUP 2026
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Todos os dados da Copa
          em um único lugar.
        </h1>

        <p className="mt-4 text-lg text-white/90">
          Estatísticas, grupos, jogos ao vivo,
          classificação e desempenho das seleções.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">
            Ver Jogos
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 transition hover:bg-white/10">
            Classificação

            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
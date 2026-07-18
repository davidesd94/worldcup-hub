import { FaArrowRight, FaFutbol, FaGlobeAmericas } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import Button from "../../../components/ui/Button";

const HeroBanner = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-emerald-700
        via-green-600
        to-lime-500
        p-10
        shadow-2xl
      "
    >
      {/* Círculo decorativo */}
      <div
        className="
          absolute
          -right-28
          -top-28
          h-96
          w-96
          rounded-full
          border
          border-white/10
          bg-white/10
          blur-sm
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-2xl">

        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md">
          <FaFutbol />
          FIFA WORLD CUP 2026
        </span>

        <h1 className="mt-6 text-6xl font-black leading-tight">
          Todos os dados da Copa
          <br />
          em um único lugar.
        </h1>

        <p className="mt-5 max-w-xl text-lg text-white/90">
          Acompanhe jogos ao vivo, grupos, estatísticas,
          desempenho das seleções e muito mais.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button>
            Ver Jogos
          </Button>

          <Button variant="ghost">
            Classificação
            <FaArrowRight className="ml-2 inline" />
          </Button>
        </div>

        {/* Estatísticas */}
        <div className="mt-10 flex flex-wrap gap-8">

          <div>
            <p className="text-4xl font-black">48</p>
            <p className="text-sm text-white/80">
              Partidas
            </p>
          </div>

          <div>
            <p className="text-4xl font-black">32</p>
            <p className="text-sm text-white/80">
              Seleções
            </p>
          </div>

          <div>
            <p className="text-4xl font-black">16</p>
            <p className="text-sm text-white/80">
              Cidades
            </p>
          </div>

        </div>

      </div>

      {/* Ícones decorativos */}
      <FaGlobeAmericas
        className="
          absolute
          right-16
          bottom-16
          text-[140px]
          text-white/10
        "
      />

      <MdEmojiEvents
        className="
          absolute
          right-40
          top-16
          text-7xl
          text-white/20
        "
      />
    </section>
  );
};

export default HeroBanner;
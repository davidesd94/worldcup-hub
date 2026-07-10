import Card from "../../ui/Card";
import TeamBadge from "../../ui/TeamBadge";
import { FaFutbol } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import type { Match } from "../../../types/match";

type Props = Match;

const LiveMatchCard = ({
  status,
  homeCode,
  awayCode,
  homeScore,
  awayScore,
  minute,
  possession,
  shots,
  corners,
  yellowCards,
}: Props) => {
  return (
    <Card>

      <div className="flex items-center justify-between">

  <span
    className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-bold

      ${
        status === "live"
          ? "bg-red-500 text-white"
          : "bg-slate-700 text-slate-300"
      }
    `}
  >
    {status === "live"
      ? "🔴 AO VIVO"
      : "✔ FINALIZADO"}
  </span>

  <span className="text-lg font-bold">
    {minute}'
  </span>

</div>

      <div className="mt-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          <TeamBadge code={homeCode} />
        </h2>

        <span className="text-3xl font-black">
          {homeScore} x {awayScore}
        </span>

        <h2 className="text-xl font-bold">
          <TeamBadge code={awayCode} />
        </h2>

      </div>

      <div className="mt-6">

  <div className="mb-2 flex justify-between text-sm">

    <span>Posse de bola</span>

    <span>{possession}%</span>

  </div>

  <div className="h-3 overflow-hidden rounded-full bg-slate-800">

    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-green-400
        to-green-600
        transition-all
        duration-700
      "
      style={{
        width: `${possession}%`,
      }}
    />

  </div>

</div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-slate-800 p-4 text-center">

          <FaFutbol className="mx-auto mb-2 text-green-400" />

          <p>{shots}</p>

          <small>Finalizações</small>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">

          <GiSoccerField className="mx-auto mb-2 text-green-400" />

          <p>{corners}</p>

          <small>Escanteios</small>

        </div>

        <div className="rounded-xl bg-slate-800 p-4 text-center">

          <MdOutlineSportsSoccer className="mx-auto mb-2 text-yellow-400" />

          <p>{yellowCards}</p>

          <small>Cartões</small>

        </div>

      </div>

    </Card>
  );
};

export default LiveMatchCard;
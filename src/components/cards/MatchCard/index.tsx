import Card from "../../ui/Card";

type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute?: string;
  stadium: string;
  live?: boolean;
};

const MatchCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  minute,
  stadium,
  live = false,
}: MatchCardProps) => {
  return (
    <Card className="hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            live
              ? "bg-red-500/20 text-red-400"
              : "bg-slate-700 text-slate-300"
          }`}
        >
          {live ? "🔴 AO VIVO" : "EM BREVE"}
        </span>

        <span className="text-sm text-slate-400">
          {minute}
        </span>
      </div>

      <div className="my-6 flex items-center justify-between">

        <div className="text-center">
          <h3 className="text-xl font-semibold">
            {homeTeam}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-3xl font-bold">
          <span>{homeScore}</span>

          <span className="text-slate-500">x</span>

          <span>{awayScore}</span>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold">
            {awayTeam}
          </h3>
        </div>

      </div>

      <p className="text-sm text-slate-400">
        📍 {stadium}
      </p>
    </Card>
  );
};

export default MatchCard;
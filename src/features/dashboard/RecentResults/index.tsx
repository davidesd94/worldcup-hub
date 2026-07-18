import Card from "../../../components/ui/Card";
import { liveMatches } from "../../../data/liveMatches";
import TeamBadge from "../../../components/ui/TeamBadge";

const RecentResults = () => {
  const finishedMatches = liveMatches.filter(
    (match) => match.status === "finished"
  );

  return (
    <Card>
      <h2 className="mb-6 text-xl font-bold">
        Últimos Resultados
      </h2>

      <div className="space-y-4">
        {finishedMatches.map((match) => (
          <div
            key={match.id}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4"
          >
            <div className="flex items-center gap-4">
              <TeamBadge code={match.homeCode} />

              <span>
                {match.homeScore} x {match.awayScore}
              </span>

              <TeamBadge code={match.awayCode} />
            </div>

            <span className="text-sm text-slate-400">
              Finalizado
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentResults;
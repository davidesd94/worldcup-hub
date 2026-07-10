import PageTitle from "../../components/ui/PageTitle";
import LiveMatches from "../../features/dashboard/LiveMatches";

const Matches = () => {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Jogos"
        subtitle="Acompanhe todas as partidas da Copa do Mundo 2026"
      />

      <LiveMatches />
    </div>
  );
};

export default Matches;
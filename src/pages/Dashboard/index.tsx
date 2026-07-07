
import PageTitle from "../../components/ui/PageTitle";
import Section from "../../components/ui/Section";
import MatchCard from "../../components/cards/MatchCard";
import HeroBanner from "../../features/dashboard/HeroBanner";
import QuickStats from "../../features/dashboard/QuickStats";
import { matches } from "../../data/matches";


const Dashboard = () => {
  return (
    <>
      <PageTitle
        title="Bem-vindo 👋"
        subtitle="Acompanhe a Copa do Mundo em tempo real."
      />

      <HeroBanner />

      <Section title="Resumo da Copa">
    <QuickStats />
      </Section>

      <Section title="🔥 Jogos ao Vivo">

    <div className="grid gap-6 lg:grid-cols-2">

        {matches.map((match) => (

            <MatchCard
                key={match.id}
                {...match}
            />

        ))}

    </div>

</Section>
    </>
  );
};

export default Dashboard;
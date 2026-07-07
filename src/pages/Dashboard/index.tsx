
import PageTitle from "../../components/ui/PageTitle";
import Section from "../../components/ui/Section";
import StatCard from "../../components/cards/StatCard";
import MatchCard from "../../components/cards/MatchCard";
import HeroBanner from "../../components/dashboard/HeroBanner";
import { matches } from "../../data/matches";
import { dashboardStats } from "../../data/dashboardStats";

const Dashboard = () => {
  return (
    <>
      <PageTitle
        title="Bem-vindo 👋"
        subtitle="Acompanhe a Copa do Mundo em tempo real."
      />

      <HeroBanner />

      <Section title="Estatísticas">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    {dashboardStats.map((item) => (

        <StatCard
            key={item.title}
            {...item}
        />

    ))}

</div>
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
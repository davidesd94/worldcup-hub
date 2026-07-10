import PageTitle from "../../components/ui/PageTitle";
import Section from "../../components/ui/Section";

import HeroBanner from "../../features/dashboard/HeroBanner";
import QuickStats from "../../features/dashboard/QuickStats";
import LiveMatches from "../../features/dashboard/LiveMatches";
import GroupsPreview from "../../features/dashboard/GroupsPreview";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Dashboard"
        subtitle="Acompanhe tudo sobre a Copa do Mundo 2026"
      />

      <HeroBanner />

      <Section title="Resumo da Copa">
        <QuickStats />
      </Section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Section title="Jogos ao Vivo">
            <LiveMatches />
          </Section>
        </div>

        <div>
          <Section title="Grupo A">
            <GroupsPreview />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
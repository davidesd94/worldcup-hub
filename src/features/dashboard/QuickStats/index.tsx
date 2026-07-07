import { dashboardStats } from "../../../data/dashboardStats";

import StatCard from "../../../components/cards/StatCard";

const QuickStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
};

export default QuickStats;
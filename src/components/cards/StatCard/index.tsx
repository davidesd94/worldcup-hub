
import {
  FaFlag,
  FaFutbol,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";

import Card from "../../ui/Card";
import type { DashboardStat } from "../../../types/dashboard";

type StatCardProps = DashboardStat;

const icons = {
  flag: <FaFlag />,
  football: <FaFutbol />,
  globe: <FaGlobe />,
  trophy: <FaTrophy />,
};


const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Card className="hover:-translate-y-1 hover:border-green-500">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-green-500/10 p-4 text-3xl text-green-400">
          {icons[icon]}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
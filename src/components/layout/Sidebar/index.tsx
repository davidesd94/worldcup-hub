import {
  FaChartPie,
  FaFutbol,
  FaGlobe,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const menu = [
  {
    icon: <FaChartPie />,
    title: "Dashboard",
  },
  {
    icon: <FaFutbol />,
    title: "Jogos",
  },
  {
    icon: <FaGlobe />,
    title: "Grupos",
  },
  {
    icon: <FaUsers />,
    title: "Seleções",
  },
  {
    icon: <FaChartPie />,
    title: "Estatísticas",
  },
  {
    icon: <FaStar />,
    title: "Favoritos",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900">

      <div className="border-b border-slate-800 p-8">

        <h1 className="text-2xl font-bold">

          🌍 WorldCup Hub

        </h1>

      </div>

      <nav className="p-5">

        {menu.map((item) => (

          <button
            key={item.title}
            className="mb-2 flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-slate-800"
          >
            <span className="text-green-400">

              {item.icon}

            </span>

            {item.title}

          </button>

        ))}

      </nav>

    </aside>
  );
};

export default Sidebar;
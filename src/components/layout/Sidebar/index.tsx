import {
  FaHome,
  FaFutbol,
  FaGlobe,
  FaChartBar,
  FaStar,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    icon: <FaHome />,
    path: "/",
  },
  {
    label: "Jogos",
    icon: <FaFutbol />,
    path: "/matches",
  },
  {
    label: "Seleções",
    icon: <FaGlobe />,
    path: "/teams",
  },
  {
    label: "Grupos",
    icon: <FaChartBar />,
    path: "/groups",
  },
  {
    label: "Favoritos",
    icon: <FaStar />,
    path: "/favorites",
  },
];

<nav className="space-y-2">

{menuItems.map((item) => (

    <NavLink

    key={item.label}

    to={item.path}

    className={({ isActive }) =>

        `flex items-center gap-4 rounded-xl p-4 transition-all duration-300 ${
            isActive
                ? "bg-green-500 text-white shadow-lg"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`

    }

>

    <span>{item.icon}</span>

    <span>{item.label}</span>

</NavLink>

))}

</nav>

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 border-r border-slate-800 bg-slate-950 p-6">
      <h1 className="mb-10 text-2xl font-bold text-green-400">
        ⚽ WorldCup Hub
      </h1>

     <NavLink
        to="/matches"
        className={({ isActive }) =>
        isActive
        ? "bg-green-500 text-white"
        : "text-slate-400"
      }
      >
      Jogos
      </NavLink>

      <NavLink
        to="/teams"
        className={({ isActive }) =>
        isActive
        ? "bg-green-500 text-white"
        : "text-slate-400"
      }
      >
      Seleções
      </NavLink>

      <NavLink
        to="/groups"
        className={({ isActive }) =>
        isActive
        ? "bg-green-500 text-white"
        : "text-slate-400"
      }
      >
      Grupos
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) =>
        isActive
        ? "bg-green-500 text-white"
        : "text-slate-400"
      }
      >
      Favoritos
      </NavLink>
      
    </aside>
  );
};

export default Sidebar;
import { FaMoon, FaSearch, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">

      <div className="relative">

        <FaSearch className="absolute left-4 top-4 text-slate-500" />

        <input
          className="w-96 rounded-xl bg-slate-800 py-3 pl-12 pr-4 outline-none"
          placeholder="Pesquisar seleção..."
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="text-xl">

          <FaMoon />

        </button>

        <FaUserCircle size={34} />

      </div>

    </header>
  );
};

export default Navbar;
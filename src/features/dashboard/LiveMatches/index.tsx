import { useState } from "react";
import LiveMatchCard from "../../../components/cards/LiveMatchCard";
import { useMatches } from "../../../hooks/useMatches";
import FilterButton from "../../../components/ui/FilterButton";
import { getTeam } from "../../../utils/getTeam";

const LiveMatches = () => {

  const [filter, setFilter] = useState<
    "all" | "live" | "finished"
  >("all");
  const [search, setSearch] = useState("");
  const { matches, loading } = useMatches();

const filteredMatches = matches.filter((match) => {
  const statusFilter =
    filter === "all" || match.status === filter;

  const homeTeam =
    getTeam(match.homeCode)?.name ?? "";

  const awayTeam =
    getTeam(match.awayCode)?.name ?? "";

  const teamFilter =
    homeTeam
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    awayTeam
      .toLowerCase()
      .includes(search.toLowerCase());

  return statusFilter && teamFilter;
  
});

if (loading) {
  return (
    <div className="rounded-xl bg-slate-900 p-8 text-center">
      <p className="text-slate-400">
        Carregando partidas...
      </p>
    </div>
  );
}

return (
  <div className="space-y-6">

    {/* Campo de busca */}
    <input
      type="text"
      placeholder="Buscar seleção..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-4
        py-3
        text-white
        outline-none
        transition
        focus:border-green-500
      "
    />

    {/* Botões */}
    <div className="flex gap-3">
      <FilterButton
        active={filter === "all"}
        onClick={() => setFilter("all")}
      >
        Todos
      </FilterButton>

      <FilterButton
        active={filter === "live"}
        onClick={() => setFilter("live")}
      >
        🔴 Ao Vivo
      </FilterButton>

      <FilterButton
        active={filter === "finished"}
        onClick={() => setFilter("finished")}
      >
        ✔ Finalizados
      </FilterButton>
    </div>

    {/* Lista */}
    {filteredMatches.length === 0 ? (
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-8 text-center">
        <p className="text-slate-400">
          Nenhuma partida encontrada.
        </p>
      </div>
    ) : (
      filteredMatches.map((match) => (
        <LiveMatchCard
          key={match.id}
          {...match}
        />
      ))
    )}

  </div>
);
};

export default LiveMatches;
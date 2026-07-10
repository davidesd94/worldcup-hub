import { useState } from "react";
import LiveMatchCard from "../../../components/cards/LiveMatchCard";
import { liveMatches } from "../../../data/liveMatches";
import FilterButton from "../../../components/ui/FilterButton";

const LiveMatches = () => {

  const [filter, setFilter] = useState<
    "all" | "live" | "finished"
  >("all");

  const filteredMatches = liveMatches.filter((match) => {
    if (filter === "all") return true;

    return match.status === filter;
  });

  return (
    <div className="space-y-6">

      <div className="mb-6 flex gap-3">

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

      {filteredMatches.map((match) => (
        <LiveMatchCard
          key={match.id}
          {...match}
        />
      ))}
    </div>
  );
};

export default LiveMatches;
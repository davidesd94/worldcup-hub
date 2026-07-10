import { useEffect, useState } from "react";
import { getMatches } from "../services/matches";
import type { Match } from "../types/match";

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMatches = async () => {
      const data = await getMatches();

      setMatches(data as Match[]);
      setLoading(false);
    };

    loadMatches();
  }, []);

  return {
    matches,
    loading,
  };
};
import type { Match } from "../types/match";

export function mapFixtureToMatch(fixture: any): Match {
  return {
    id: fixture.fixture.id,

    homeTeam: fixture.teams.home.name,

    awayTeam: fixture.teams.away.name,

    homeScore: fixture.goals.home ?? 0,

    awayScore: fixture.goals.away ?? 0,

    status:
      fixture.fixture.status.short === "FT"
        ? "finished"
        : "live",
  };
}
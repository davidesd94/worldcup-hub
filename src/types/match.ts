export type MatchStatus = "live" | "finished";

export interface Match {
  id: number;

  homeTeam: string;
  awayTeam: string;

  homeScore: number;
  awayScore: number;

  status: MatchStatus;
}
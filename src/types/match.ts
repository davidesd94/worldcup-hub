export type MatchStatus = "live" | "finished";

export interface Match {
  id: number;

  status: MatchStatus;

  date: string;

  homeCode: string;
  awayCode: string;

  homeScore: number;
  awayScore: number;

  minute: number;

  possession: number;

  shots: number;
  corners: number;
  yellowCards: number;
}
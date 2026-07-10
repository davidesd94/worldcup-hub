export type MatchStatus = "live" | "finished";

export interface LiveMatch {
  id: number;
  status: MatchStatus;

  homeTeam: string;
  awayTeam: string;

  homeScore: number;
  awayScore: number;

  minute: number;

  possession: number;

  shots: number;
  corners: number;
  yellowCards: number;
}

export const liveMatches: LiveMatch[] = [
  {
    id: 1,
    status: "live",

    homeTeam: "Brasil",
    awayTeam: "Argentina",

    homeScore: 2,
    awayScore: 1,

    minute: 82,

    possession: 58,

    shots: 12,
    corners: 8,
    yellowCards: 3,
  },

  {
    id: 2,
    status: "finished",

    homeTeam: "França",
    awayTeam: "Japão",

    homeScore: 1,
    awayScore: 1,

    minute: 90,

    possession: 51,

    shots: 15,
    corners: 7,
    yellowCards: 4,
  },

  {
    id: 3,
    status: "live",

    homeTeam: "Portugal",
    awayTeam: "México",

    homeScore: 0,
    awayScore: 0,

    minute: 34,

    possession: 64,

    shots: 6,
    corners: 2,
    yellowCards: 1,
  },
];
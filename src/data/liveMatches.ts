import type { Match } from "../types/match";


export const liveMatches: Match[] = [
  {
    id: 1,
    status: "live",

    date:"today",

    homeCode: "BR",
    awayCode: "AR",

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

    date:"tomorrow",

    homeCode: "FR",
    awayCode: "JP",

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

    date:"today",

    homeCode: "PT",
    awayCode: "MX",

    homeScore: 0,
    awayScore: 0,

    minute: 34,

    possession: 64,

    shots: 6,
    corners: 2,
    yellowCards: 1,
  },
];
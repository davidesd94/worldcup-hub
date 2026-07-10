import { teams } from "../data/teams";

export const getTeam = (code: string) => {
  return teams.find((team) => team.code === code);
};
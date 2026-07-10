import { liveMatches } from "../data/liveMatches";

export const getMatches = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(liveMatches);
    }, 700);
  });
};
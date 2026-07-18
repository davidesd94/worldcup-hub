import { mapFixtureToMatch } from "../mappers/matchMapper";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getFixtures() {
  const response = await fetch(
    `${API_URL}/fixtures?league=1&season=2022`,
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar partidas");
  }

  const data = await response.json();

  return data.response.map(mapFixtureToMatch);
}
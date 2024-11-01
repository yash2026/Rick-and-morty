const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Fetch all characters from the API
export const fetchAllCharacters = async () => {
  const response = await fetch(`${API_URL}/character`);
  return response.json();
};

export const fetchEpisodes = async () => {
  const response = await fetch(`${API_URL}/episode`);
  return response.json();
};

export const fetchCharactersByEpisode = async (episodeId: string) => {
  const response = await fetch(`${API_URL}/episode/${episodeId}`);
  const data = await response.json();
  return data.characters;
};

export const fetchCharacterByUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

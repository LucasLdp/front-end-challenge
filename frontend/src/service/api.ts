export const api = async (url: string) => {
  const apiKey = process.env.NEXT_API_KEY;
  if (!apiKey) {
    throw new Error("API key is not defined in the environment variables.");
  }

  const response = await fetch(`https://api.themoviedb.org/3${url}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
};

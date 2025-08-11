const API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";

const fetchMovie = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "aplicattion/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovie;

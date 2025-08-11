const seeMovie = async (movieId) => {
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=pt-BR`;
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error(error);
  }
};

export default seeMovie;

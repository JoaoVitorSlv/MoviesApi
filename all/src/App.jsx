import { useEffect, useState } from "react";
import fetchMovie from "./services/api";
import seeMovie from "./services/movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [click, setClick] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMovie();
      setMovies(data.results);
    }
    loadMovies();
  }, []);

  async function trailerMovie(id) {
    const data = await seeMovie(id);
    setTrailer(data);
    console.log("Trailer data:", data);
  }

  function handleClick(id) {
    setClick(id);
    setIsModalOpen(true);
    trailerMovie(id);
  }

  function closeModal() {
    setIsModalOpen(false);
    setClick(null);
    setTrailer(null);
  }

  return (
    <div className="bg-neutral-900">
      <div>
        {movies.length > 0 ? (
          <div className="grid grid-cols-6 p-4 justify-items-center gap-4">
            {movies.map((movie, index) => (
              <button key={index} onClick={() => handleClick(movie.id)}>
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-52 rounded"
                  />
                </div>
              </button>
            ))}
            {isModalOpen && click && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-black rounded-xl shadow-lg p-6 w-full max-w-4xl text-center text-white">
                  {trailer ? (
                    <div className="aspect-video w-full flex items-center justify-center">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${trailer}`}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <p>Carregando trailer...</p>
                  )}

                  <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p>Carregando</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

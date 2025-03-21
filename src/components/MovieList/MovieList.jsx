import { fetchTrendingMovie } from "../http/http";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ClipLoader from "react-spinners/ClipLoader";
import MovieItem from "./../MovieItem/MovieItem";
export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchTrendingMovie();
        setMovies(data.results);
      } catch {
        setError(true);
        toast.error("Please reload there was an error!!!!");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1>Trending today!</h1>
      {error && <ErrorMessage></ErrorMessage>}{" "}
      <ClipLoader
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <ul>
        {movies.map((oneMovie) => {
          return (
            <li key={oneMovie.id}>
              <MovieItem movieInfo={oneMovie}></MovieItem>
            </li>
          );
        })}
      </ul>
    </>
  );
}

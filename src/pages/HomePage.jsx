import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovie } from "../components/http/http";
import { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
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
      {error && <ErrorMessage></ErrorMessage>}{" "}
      <ClipLoader
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <MovieList movies={movies}></MovieList>
    </>
  );
}

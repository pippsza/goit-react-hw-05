import { useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { fetchMovieByQuery } from "../components/http/http";
import MovieItem from "../components/MovieItem/MovieItem";
export default function MoviePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== "") {
      nextParams.set("query", event.target.value);
    } else {
      nextParams.delete("query");
    }

    setSearchParams(nextParams);
  };

  async function getMovies() {
    try {
      setIsLoading(true);
      setError(false);
      const data = await fetchMovieByQuery(query);
      setMovies(data);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (!query) return;
    getMovies();
  }, []);
  useEffect(() => {}, [movies]);
  return (
    <>
      <input
        onChange={changeSearchText}
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button onClick={getMovies} type="submit">
        Search
      </button>
      {isLoading && <b>Loading users...</b>}{" "}
      {error && <ErrorMessage></ErrorMessage>}
      {movies.results?.length > 0 && (
        <ul>
          {movies.results.map((oneMovie) => {
            return (
              <li key={oneMovie.id}>
                <MovieItem movieInfo={oneMovie}></MovieItem>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { fetchMovieDetails } from "../components/http/http";
import MovieDetails from "../components/MovieDetails/MovieDetails";
export default function MovieDetailPage() {
  const [movieDetail, setMovieDetail] = useState({});
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovieDetails(userId);
        setMovieDetail(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [userId]);

  return (
    <>
      {isLoading && <b>Loading...</b>}
      {error && <ErrorMessage></ErrorMessage>}

      <MovieDetails></MovieDetails>
    </>
  );
}

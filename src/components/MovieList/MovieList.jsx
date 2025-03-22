import MovieItem from "./../MovieItem/MovieItem";
export default function MovieList({ movies }) {
  return (
    <>
      <h1>Trending today!</h1>

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

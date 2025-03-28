import { fetchMovieReviews } from "../http/http";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function getPosts() {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    }

    getPosts();
  }, [movieId]);
  return (
    <>
      <ul>
        {reviews.results?.length > 0 ? (
          reviews.results.map((el) => {
            return (
              <li key={el.id}>
                <p>Author: {el.author}</p>
                <p>Notice: {el.content}</p>
              </li>
            );
          })
        ) : (
          <p>Nothing to show...</p>
        )}
      </ul>
    </>
  );
}

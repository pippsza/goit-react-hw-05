import { fetchMovieCredits } from "../http/http";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    async function getPosts() {
      const data = await fetchMovieCredits(userId);
      setCasts(data);
    }

    getPosts();
  }, [userId]);

  return (
    <>
      <ul>
        {casts?.cast?.length > 0 ? (
          casts.cast.map((el) => {
            return (
              <li key={el.id}>
                <p>Actor: {el.name}</p>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + el.profile_path}
                  alt=""
                />
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

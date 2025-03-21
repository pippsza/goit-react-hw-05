import css from "./MovieDetails.module.css";
import { useRef } from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation, Outlet } from "react-router";
import { fetchMovieDetails } from "../http/http";
export default function MovieDetails() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const [details, setDetails] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    async function getPosts() {
      const data = await fetchMovieDetails(userId);
      setDetails(data);
    }
    getPosts();
  }, [userId]);
  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <img
        className={css.img}
        src={"https://image.tmdb.org/t/p/w500/" + details.poster_path}
        alt={details.homepage}
      />{" "}
      <h1>{details.title}</h1>
      <p>released in {details.release_date}</p>
      <p>{details.tagline}</p>
      <p>popularity {details.popularity}</p>
      <ul>
        <li>
          <NavLink to="Cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="Reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

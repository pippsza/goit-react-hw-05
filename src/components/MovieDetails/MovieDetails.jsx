import css from "./MovieDetails.module.css";
import { useRef } from "react";
import { NavLink, Link, useLocation, Outlet } from "react-router";
export default function MovieDetails({ details }) {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

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
          <NavLink to="cast">Casts</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

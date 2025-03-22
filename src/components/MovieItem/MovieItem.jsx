import { Link } from "react-router";
import { useLocation } from "react-router";
export default function MovieItem({ movieInfo }) {
  const location = useLocation();
  return (
    <>
      <Link state={location} to={`/movies/${movieInfo.id}`}>
        {movieInfo.title}
      </Link>
    </>
  );
}

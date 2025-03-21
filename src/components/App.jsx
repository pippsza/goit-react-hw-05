import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";

import MoviePage from "../pages/MoviePage";
import MovieDetailPage from "../pages/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/movies" element={<MoviePage></MoviePage>}>
          {" "}
        </Route>
        <Route
          path="/movies/:userId"
          element={<MovieDetailPage></MovieDetailPage>}
        >
          <Route path="Cast" element={<MovieCast />} />
          <Route path="Reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

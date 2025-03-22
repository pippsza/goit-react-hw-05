import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import { lazy, Suspense } from "react";
const MoviePage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import(`./MovieReviews/MovieReviews`));
const NotFoundPage = lazy(() => import(`../pages/NotFoundPage`));

export default function App() {
  return (
    <>
      <Navigation></Navigation>
      <Suspense
        fallback={
          <p>
            <b>Loading page...</b>
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}>
            {" "}
          </Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

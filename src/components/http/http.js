import axios from "axios";

export const fetchTrendingMovie = async () => {
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE0ZjViZTYzOThiYmQ3YTU1MzRiMjU4YjM4NjNhZCIsIm5iZiI6MTc0MjU2ODYzMS40ODUsInN1YiI6IjY3ZGQ3Y2I3MWNkYTFkYmI0NjdhN2UyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9_GK66TCP117og7yPRWzeHr3CttNBbja8zWYeHecYM",
    },
  };
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
  const response = await axios
    .get(url, options)

    .catch((err) => console.error(err));
  return response.data;
};

export const fetchMovieByQuery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE0ZjViZTYzOThiYmQ3YTU1MzRiMjU4YjM4NjNhZCIsIm5iZiI6MTc0MjU2ODYzMS40ODUsInN1YiI6IjY3ZGQ3Y2I3MWNkYTFkYmI0NjdhN2UyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9_GK66TCP117og7yPRWzeHr3CttNBbja8zWYeHecYM",
    },
  };

  const response = await axios
    .get(url, options)

    .catch((err) => console.error(err));
  return response.data;
};
export const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE0ZjViZTYzOThiYmQ3YTU1MzRiMjU4YjM4NjNhZCIsIm5iZiI6MTc0MjU2ODYzMS40ODUsInN1YiI6IjY3ZGQ3Y2I3MWNkYTFkYmI0NjdhN2UyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9_GK66TCP117og7yPRWzeHr3CttNBbja8zWYeHecYM",
    },
  };

  const response = await axios
    .get(url, options)

    .catch((err) => console.error(err));
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE0ZjViZTYzOThiYmQ3YTU1MzRiMjU4YjM4NjNhZCIsIm5iZiI6MTc0MjU2ODYzMS40ODUsInN1YiI6IjY3ZGQ3Y2I3MWNkYTFkYmI0NjdhN2UyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9_GK66TCP117og7yPRWzeHr3CttNBbja8zWYeHecYM",
    },
  };

  const response = await axios
    .get(url, options)

    .catch((err) => console.error(err));
  return response.data;
};
export const fetchMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWE0ZjViZTYzOThiYmQ3YTU1MzRiMjU4YjM4NjNhZCIsIm5iZiI6MTc0MjU2ODYzMS40ODUsInN1YiI6IjY3ZGQ3Y2I3MWNkYTFkYmI0NjdhN2UyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9_GK66TCP117og7yPRWzeHr3CttNBbja8zWYeHecYM",
    },
  };
  const response = await axios
    .get(url, options)

    .catch((err) => console.error(err));
  return response.data;
};

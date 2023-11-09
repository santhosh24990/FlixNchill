export const AVATAR_URL =
  "https://occ-0-2041-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGVjZGZmZGIyZmY0ZmI2NzY4MGEyOGI3ZTQxOWUzMiIsInN1YiI6IjY1NDVjOTk4OWNjNjdiMDBhYjQ2ODM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90a8AYdK361nJ376iSIQ0j1eryu8WZMebrCEVTP9Qn8",
  },
};

export const API_KEY = "00ecdffdb2ff4fb67680a28b7e419e32";

// for showing in front page

export const NOW_PLAYING_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming";

// for getting genre id

export const GENRE_ID_URL = "https://api.themoviedb.org/3/genre/movie/list";

// for showing when genre is selected

export const MOVIES_BY_GENRE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=00ecdffdb2ff4fb67680a28b7e419e32&language=en-US&sort_by=release_date.desc&page=1&with_genres=";

// FOR GETTING MOVIE IMAGE

export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

// openAi gpt key

export const OPENAI_KEY = "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";

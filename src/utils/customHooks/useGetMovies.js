import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  options,
  NOW_PLAYING_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../reduxStore/Slice/movieSlice";

const useGetMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_URL, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useGetMovies;

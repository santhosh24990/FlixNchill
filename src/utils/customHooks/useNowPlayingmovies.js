import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options, NOW_PLAYING_URL } from "../constants";
import { addNowPlayingMovies } from "../movieSlice";

const useNowPlayingmovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  },[]);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_URL, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingmovies;

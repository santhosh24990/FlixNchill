import { useEffect } from "react";
import { options } from "../constants";
import { addVideodetails } from "../reduxStore/Slice/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const mainTrailer = filterData[1] ? filterData[1] : json.results[0];
    dispatch(addVideodetails(mainTrailer));
  };
  return null;
};

export default useMovieTrailer;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGenreDetails } from "../reduxStore/Slice/genreSlice";
import { options } from "../constants";

const useAddGenreDetails = () => {
  useEffect(() => {
    getGenreList();
  }, []);

  const dispatch = useDispatch();

  const getGenreList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      options
    );
    const json = await data.json();
    dispatch(addGenreDetails(json.genres));
  };
};

export default useAddGenreDetails;

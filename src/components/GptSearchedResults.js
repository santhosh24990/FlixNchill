import React from "react";
import { useSelector } from "react-redux";

const GptSearchedResults = () => {
  const searchResults = useSelector((store) => store.gpt.recommendedMovies);

  return <div className=" mt-[100px] flex flex-wrap ">GptSearchedResults</div>;
};

export default GptSearchedResults;

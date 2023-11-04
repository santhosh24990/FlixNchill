import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterId }) => {
  return (
    <div className="w-[175px]">
      <img alt="movie_card" src={MOVIE_IMAGE_URL + posterId} />
    </div>
  );
};

export default MovieCard;

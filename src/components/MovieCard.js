import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constants";
import posterNotAvailable from "./images/poster-not-available.jpg";

const MovieCard = ({ posterId }) => {
  console.log(posterId);
  if (posterId === undefined) return;

  if (posterId === null)
    return (
      <img className="w-[175px] aspect-square " src={posterNotAvailable} />
    );

  return (
    <div>
      <img
        className="w-[175px] aspect-square  "
        src={MOVIE_IMAGE_URL + posterId}
        alt={posterNotAvailable}
      />
    </div>
  );
};

export default MovieCard;

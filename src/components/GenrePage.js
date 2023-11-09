import React from "react";
import useGetGenreDetails from "../utils/customHooks/useGetGenreDetails";
import { useSelector } from "react-redux";
import MoviesByGenre from "./MoviesByGenre";

const GenrePage = () => {
  useGetGenreDetails();

  const genreList = useSelector((store) => store.genre.genreDetails);

  return (
    genreList && (
      <div>
        {genreList.map((genre) => (
          <MoviesByGenre key={genre.id} id={genre.id} name={genre.name} />
        ))}
      </div>
    )
  );
};

export default GenrePage;

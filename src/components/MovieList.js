import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="bg-black pt-6 ">
      <div className="flex flex-col w-[90%] mx-auto gap-5 text-white">
        <h1 className="text-3xl">{title}</h1>
        <div>
          <MovieCard posterId={movies[0].poster_path} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;

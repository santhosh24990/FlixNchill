import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };
  return (
    movies && (
      <div className="bg-black   ">
        <div className="w-[90%] mx-auto pb-[50px] bg-opacity-25  ">
          <div className="text-white text-3xl mb-5">{title}</div>

          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard key={movie.poster_path} posterId={movie.poster_path} />
            ))}
          </Slider>
        </div>
      </div>
    )
  );
};

export default MovieList;

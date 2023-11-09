import React, { useEffect, useState } from "react";
import { MOVIES_BY_GENRE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

const MoviesByGenre = ({ id, name }) => {
  const [moviesByGenre, setMoviesByGenre] = useState(null);

  useEffect(() => {
    getMoviesByGenre();
  }, []);

  const getMoviesByGenre = async () => {
    const data = await fetch(MOVIES_BY_GENRE_URL + id);
    const json = await data.json();
    setMoviesByGenre(json.results);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  return (
    moviesByGenre && (
      <div className="bg-black   ">
        <div className="w-[90%] mx-auto pb-[50px] bg-opacity-25  ">
          <div className="text-white text-3xl mb-5">{name}</div>

          <Slider {...settings}>
            {moviesByGenre.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard
                    key={movie.poster_path}
                    posterId={movie.poster_path}
                  />
                )
            )}
          </Slider>
        </div>
      </div>
    )
  );
};

export default MoviesByGenre;

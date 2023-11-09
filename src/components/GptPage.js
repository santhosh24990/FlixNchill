import React, { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import GptSearchedResults from "./GptSearchedResults";
import { addRecommendedmovies } from "../utils/reduxStore/Slice/gptSlice";
import MovieCard from "./MovieCard";

const GptPage = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchResults = useSelector((store) => store.gpt.recommendedMovies);

  const searchMovieTMDB = async (movie) => {
    console.log(movie);
    const [movieName, releaseYear] = movie.split("@");
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1&primary_release_year=" +
        releaseYear,
      options
    );
    const json = await data.json();
    console.log(json.results);
    if (json.results.length > 1) {
      const searchedMovie = json.results.filter((movie) => {
        if (movie.title.toLowerCase() === movieName.toLowerCase()) {
          console.log("movie matched");
          return movie;
        }
      });
      return searchedMovie;
    } else {
      return json.results;
    }
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ".only give me names of 30 movies with release year, comma seperated with no duplicates like the example result given ahead. Example Result: Gadar@2001, billa@2007, mangatha@2011, theri@2016, petta@2019";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addRecommendedmovies(tmdbResults));
  };
  return (
    <div className="text-black bg-black z-100 relative  mx-auto top-[100px]">
      <form
        className="w-[50%] mx-auto gap-2 flex"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" outline w-full rounded-lg px-3 py-2"
          type="text"
          placeholder="Enter what kind of movie you want"
        />
        <button
          onClick={() => handleSearch()}
          className="text-white bg-red-600 rounded-md px-3 py-2"
        >
          Search
        </button>
      </form>

      {searchResults && (
        <div className="mt-[100px]  w-[90%] mx-auto   gap-2 flex flex-wrap    ">
          {searchResults.map(
            (movie) =>
              movie && (
                <MovieCard
                  key={movie[0]?.id}
                  posterId={movie[0]?.poster_path}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default GptPage;

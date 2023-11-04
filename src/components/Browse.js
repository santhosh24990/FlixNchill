import Header from "./Header";
import useNowPlayingmovies from "../utils/customHooks/useNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
  useNowPlayingmovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
       Main container
         - video background
         - video title
       secondary container
           -movie list*n
           - cards *n
      */}
    </div>
  );
};

export default Browse;

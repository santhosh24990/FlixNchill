import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  const { id } = mainMovie;

  return <Videobackground id={id} />;
};

export default MainContainer;

import { useSelector } from "react-redux";
import Videobackground from "./Videobackground";
import VideoDetails from "./VideoDetails";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoDetails title={original_title} overview={overview} />
      <Videobackground id={id} />
    </div>
  );
};

export default MainContainer;

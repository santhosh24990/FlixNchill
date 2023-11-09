import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/customHooks/useMovieTrailer";
import VideoDetails from "./VideoDetails";
const Videobackground = (props) => {
  const { id } = props;
  useMovieTrailer(id);
  const videoDetails = useSelector((store) => store.movies?.videoDetails);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;

  return (
    videoDetails && (
      <div className=" relative  pointer-events-none select-none w-[100%]  mt-[-70px] ">
        <iframe
          className="  w-[100%] aspect-video   "
          src={
            "https://www.youtube.com/embed/" +
            videoDetails?.key +
            "?&autoplay=1&mute=1&rel=0&controls=0&modestbranding=0&"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
       {<VideoDetails title={original_title} overview={overview} />} 
      </div>
    )
  );
};

export default Videobackground;

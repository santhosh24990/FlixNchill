import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/customHooks/useMovieTrailer";
const Videobackground = (props) => {
  const { id } = props;
  useMovieTrailer(id);
  const videoDetails = useSelector((store) => store.movies?.videoDetails);
  return (
    videoDetails && (
      <div className=" pointer-events-none overflow-sc select-none	w-screen overflow-x-hidden ">
        <iframe
          className="  w-screen aspect-video overflow-x-hidden"
          src={
            "https://www.youtube.com/embed/" +
            videoDetails?.key +
            "?&autoplay=1&mute=1&rel=0&controls=0&modestbranding=0&"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    )
  );
};

export default Videobackground;

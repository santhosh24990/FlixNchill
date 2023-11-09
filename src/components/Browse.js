import Header from "./Header";
import useGetMovies from "../utils/customHooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GenrePage from "./GenrePage";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  useGetMovies();

  const toggle = useSelector((store) => store.toggle);

  return (
    <div className="h-screen bg-black">
      <Header />

      {toggle.toggleGenre && <GenrePage />}
      {toggle.toggleGpt && <GptPage />}

      {toggle.toggleHome && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

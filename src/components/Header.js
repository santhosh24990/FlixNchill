import Logo from "./images/logo3.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AVATAR_URL } from "../utils/constants";
import useUser from "../utils/customHooks/useUser";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {
  setToggleHome,
  setToggleGenre,
  setToggleGpt,
} from "../utils/reduxStore/Slice/toggleSlice";

const Header = () => {
  const [showmMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useUser();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleHome = () => {
    dispatch(setToggleHome());
  };
  const toggleGenre = () => {
    dispatch(setToggleGenre());
  };
  const toggleGpt = () => {
    dispatch(setToggleGpt());
  };

  return (
    <div className="fixed z-10 top-0  w-full flex items-center  ">
      <img className=" ml-10 w-[125px] h-[70px]  " src={Logo} alt="logo" />
      {user && (
        <div className="flex justify-between w-full items-center ml-[4%]">
          <div className="flex items-center text-white list-none text-2xl  ">
            <li
              onClick={() => toggleHome()}
              className="mr-3 text-3xl cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => {
                toggleGenre();
              }}
              className="mr-3 text-3xl cursor-pointer"
            >
              Genre
            </li>

            <button
              onClick={() => toggleGpt()}
              className=" bg-violet-600 rounded-md p-2 cursor-pointer"
            >
              GPT Search
            </button>
          </div>

          <div className="mr-[1%] mt-2">
            <div
              onMouseEnter={() => {
                setShowMenu(true);
              }}
              onMouseLeave={() => {
                setShowMenu(false);
              }}
              className="flex gap-2 items-center mr-12 cursor-pointer"
            >
              <img className="w-10 h-10 rounded" src={AVATAR_URL} />

              <div className="text-lg mt-1 mr-3 text-white ">
                {showmMenu ? "▼" : "▲"}
              </div>
            </div>
            {showmMenu && (
              <div
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
                id="dropdown"
                className=" absolute text-center bg-black text-white mt-[1px] px-5 py-1 opacity-75 "
              >
                <div className="mb-2 cursor-pointer hover:underline ">
                  My Account
                </div>
                <div className=" mb-2 cursor-pointer hover:underline">
                  Help Center
                </div>
                <div
                  onClick={handleSignOut}
                  className="mb-2 cursor-pointer hover:underline"
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;

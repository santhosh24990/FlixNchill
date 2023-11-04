import Logo from "./images/logo1.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL } from "../utils/constants";

const Header = () => {
  const [showmMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      //user is signed in
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts
    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute z-10  w-full flex  justify-between bg-gradient-to-b from-black ">
      <img className=" ml-10 w-[100px] h-[60px]  " src={Logo} alt="logo" />
      {user && (
        <div className="mr-10 mt-2">
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
              className=" text-center bg-black text-white mt-[1px] px-5 py-1 opacity-75 "
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
      )}
    </div>
  );
};
export default Header;

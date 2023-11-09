import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../reduxStore/Slice/userSlice";

const useUser = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const genre = useSelector((store) => store.genre);

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
};

export default useUser;

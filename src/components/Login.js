import { useState, useRef } from "react";
import Header from "./Header";
import bgN from "./images/bgN.jpg";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utis/Validate";

const Login = () => {
  const [isSigninForm, setIsSigninform] = useState(true);
  const [emailvalidateMessage, setEmailValidateMessage] = useState(null);
  const [passwordValidateMessage, setPasswordValidateMessage] = useState(null);
  const [nameValidateMessage, setNameValidateMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleform = () => {
    email.current.value = null;
    password.current.value = null;
    setEmailValidateMessage(null);
    setEmailValidateMessage(null);
    setPasswordValidateMessage(null);
    setNameValidateMessage(null);
    setIsSigninform(!isSigninForm);
  };

  const handlebuttonclick = () => {
    const emailValidation = validateEmail(email.current.value);
    setEmailValidateMessage(emailValidation);

    const passwordValidation = validatePassword(password.current.value);
    setPasswordValidateMessage(passwordValidation);

    if (isSigninForm === false) {
      const nameValidation = validateName(name.current.value);
      setNameValidateMessage(nameValidation);
    }
  };

  return (
    <div className="">
      <Header />
      <div className=" absolute z-1 w-screen h-screen">
        <img className="w-full h-full" src={bgN} />
      </div>
      <div className=" relative z-5 w-[500px] top-[90px] px-[65px] py-[50px] rounded-lg   mx-auto  text-white bg-[rgba(0,0,0,.75)] ">
        <h1 className=" text-2xl font-bold mb-10 ">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex  flex-col text-black"
        >
          {!isSigninForm && (
            <div>
              <input
                ref={name}
                type="text"
                className=" text-white p-3 w-full mb-3 rounded-md outline-none text-xl bg-[#333]  "
                placeholder="Name"
              ></input>
              <p className="text-red-600 text-sm font-bold mb-3">
                {nameValidateMessage}
              </p>
            </div>
          )}

          <input
            ref={email}
            type="text"
            className=" text-white p-3 mb-3 rounded-md outline-none text-xl bg-[#333]  "
            placeholder="Email Address"
          ></input>
          <p className="text-red-600 text-sm font-bold mb-3">
            {emailvalidateMessage}
          </p>
          <input
            ref={password}
            type="text"
            className=" text-white p-3 rounded-md outline-none text-xl bg-[#333] mb-3 "
            placeholder="Password"
          ></input>
          <p className="text-red-600 text-sm font-bold mb-3">
            {passwordValidateMessage}
          </p>
          <button
            onClick={handlebuttonclick}
            className="w-full bg-[#e50914] text-white rounded-lg py-2 mb-5  text-xl font-lg"
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[#737373]  ">
            {isSigninForm ? "New to FlixNchill ? " : "Already have account ? "}
            <span onClick={toggleform} className="text-white cursor-pointer">
              {isSigninForm ? " Sign Up Now" : " Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import Header from "./Header";
import bgN from "./images/bgN.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSigninForm, setIsSigninform] = useState(true);

  const toggleform = () => [setIsSigninform(!isSigninForm)];

  return (
    <div className="">
      <Header />
      <div className=" absolute z-1 w-screen h-screen">
        <img className="w-full h-full" src={bgN} />
      </div>
      <div className=" relative z-5 w-[500px] top-[90px] px-12 rounded-lg   mx-auto  text-white bg-[rgba(0,0,0,.75)] ">
        <h1 className=" text-2xl pt-10 font-bold mb-[25px]">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex  flex-col text-black">
          {!isSigninForm && (
            <input
              type="text"
              className=" text-white p-3 mb-10 rounded-md outline-none text-xl bg-[#333]  "
              placeholder="Name"
            ></input>
          )}
          <input
            type="email"
            className=" text-white p-3 mb-10 rounded-md outline-none text-xl bg-[#333]  "
            placeholder="Email Address"
          ></input>
          <input
            type="text"
            className=" text-white p-3 rounded-md mb-10 outline-none text-xl bg-[#333] "
            placeholder="Password"
          ></input>
          <button className="w-full bg-[#e50914] rounded-lg mb-10 py-3 text-2xl font-bold">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[#737373] mb-20">
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

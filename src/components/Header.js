import Logo from "./images/logo1.png";

const Header = () => {
  return (
    <div className="absolute z-10  w-full ">
      <img className=" ml-10 w-[125px] h-[75px]  " src={Logo} alt="logo" />
    </div>
  );
};
export default Header;

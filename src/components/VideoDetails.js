const VideoDetails = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute left-[5%] top-[50%] text-white ">
      <div className="text-3xl font-bold mb-4">{title}</div>
      <div className=" text-justify  w-[35%]">{overview}</div>
      <div className="mt-10">
        <button className="text-black bg-white   w-[100px] rounded-md px-3 py-2   hover:bg-opacity-80">
          ᐅ Play
        </button>
        <button className="ml-6 text-white bg-gray-500   rounded-md  px-3 py-2  bg-opacity-50% ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;

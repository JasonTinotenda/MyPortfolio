import profilePicture from "../assets/profilePicture.png";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image*/}
      <div className="w-44 h-44 rounded-full">
        <img
          className="w-full h-full rounded-full border-[1px] border-indigo-600 p-2 object-cover"
          src={profilePicture}
          alt="profilePicture"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-gray-900">Jason Kufakwatenzi</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-600 tracking-wide">
          Full Stack Developer
        </h3>
      </div>
    </div>
  );
};

export default Banner;

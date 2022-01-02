import HomeLeft from "./HomeLeft";

const Home = () => {
  return (
    <div className="text-white">
      <div className="mt-2 px-20 flex justify-around">
        <HomeLeft />
        {/* HomeRight */}
        <div className="flex-1 p-12 md:flex justify-center hidden">
          <img
            src="/images/home-1.png"
            alt="MineCraft"
            className="object-scale-down max-h-screen"
          />
        </div>
      </div>
      {/* HomeFooter */}
      <div className="py-6 text-center">
        <div className="text-5xl flex justify-center align-middle">
          <img
            src="/images/star-64.png"
            alt="Star"
            className="object-cover max-h-12 mx-1"
          />
          <div className="">Trustpilot</div>
        </div>
        <div className="my-2 pl-4 text-xl">Trust Score 4.6 - 35 Reviews</div>
      </div>
    </div>
  );
};

export default Home;

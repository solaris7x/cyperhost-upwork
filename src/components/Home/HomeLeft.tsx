const HomeLeft = () => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="text-5xl font-bold my-4">
        Revolutionary Minecraft Server Hosting
      </div>
      <div className="text-xl mb-4">Stop saving on Features</div>
      <div className="">
        <div className="">✅Reliable Network</div>
        <div className="">✅AMD Ryzen CPU</div>
        <div className="">✅Friendly Support</div>
        <div className="">✅Custom Control Panel</div>
        <div className="">✅Plans starting at $4/month</div>
      </div>
      <div className="mt-4">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-sm">
          {"Get Started >"}
        </button>
      </div>
      {/* Background till MD */}
      <div className="md:hidden w-full">
        <div className="bg-cyan-500">
          {/* <img
            src="/images/home-1.png"
            alt="MineCraft"
            className="object-contain"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;

const NavBar = () => {
  return (
    <div className="text-white px-20 text-lg font-semibold flex justify-center">
      <button className="p-2 m-2 pt-0 mr-auto ">
        <img src="/images/cyperhost.png" alt="CyperHost" className="max-h-16" />
      </button>
      <button className="p-2 mx-2 my-4 hover:text-purple-500">
        Minecraft Hosting
      </button>
      <button className="p-2 mx-2 my-4 hover:text-purple-500">
        Other Services
      </button>
      <button className="p-2 mx-2 my-4 hover:text-purple-500">
        Information
      </button>
      <div className="p-4 ml-auto">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-sm">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;

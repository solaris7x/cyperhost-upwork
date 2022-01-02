const NavBar = () => {
  return (
    <div className="text-white px-1 md:px-20 md:text-lg font-semibold flex justify-center">
      <button className="p-2 m-2 pt-0 md:mr-auto">
        <img src="/images/cyperhost.png" alt="CyperHost" className="max-h-16" />
      </button>
      <button className="hidden md:block p-2 mx-2 my-4 hover:text-purple-500">
        Minecraft Hosting
      </button>
      <button className="hidden md:block p-2 mx-2 my-4 hover:text-purple-500">
        Other Services
      </button>
      <button className="hidden md:block p-2 mx-2 my-4 hover:text-purple-500">
        Information
      </button>
      <div className="hidden md:block p-4 ml-auto">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-sm">
          Sign In
        </button>
      </div>
      <button className="md:hidden p-4 ml-auto w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavBar;

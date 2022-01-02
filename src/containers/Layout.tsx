import NavBar from "./NavBar";

const Layout = (props: any) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black">
      {/* <div className="h-20 bg-red-400">Nav Bar</div> */}
      <NavBar />
      <div className="">{props.children}</div>
    </div>
  );
};

export default Layout;

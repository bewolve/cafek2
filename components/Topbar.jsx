import { MdFastfood } from "react-icons/md";

const Topbar = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full h-[70px] bg-gradient-to-b from-black flex items-center justify-center">
      <div className="wrapper text-white font-thin w-full p-4 flex items-center justify-center gap-52">
        <div className="logo text-3xl">
          <h1 className="flex items-center justify-center gap-4">
            CAFE MISHKAK K2 <MdFastfood />
          </h1>
        </div>
        <div className="link hidden  md:flex items-center justify-center gap-6 text-2xl">
          <a href="#intro">Home</a>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;

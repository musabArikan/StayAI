import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link
        to="/"
        className="text-gray-800 hover:text-indigo-600 transition-all duration-300"
      >
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;

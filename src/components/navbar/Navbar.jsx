import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../images/brand-logo.png";
const Navbar = () => {
  return (
    <nav className="bg-slate-700 w-full flex flex-row justify-around items-center p-9 ">
      <div className="brand-name flex flex-row justify-start items-center gap-3">
        <img className="h-10 rounded-lg bg-white" src={brandLogo} alt="" />
        <Link to={"/home"} className="text-2xl font-bold text-green-600">
          <span className="text-amber-400"> School</span>
          <span className="text-white"> Finder</span> BD
        </Link>
      </div>
      <div className="menu-link text-white gap-x-5 flex flex-row font-semibold">
        <Link className="hover:text-pink-500" to={"/home"}>
          Home
        </Link>
        <Link
          className="hover:text-pink-500"
          to={"http://www.educationboardresults.gov.bd/"}
        >
          Board Result
        </Link>

        <Link className="hover:text-pink-500" to={"/news"}>
          News Portal
        </Link>
        <Link className="hover:text-pink-500" to={"/blogs"}>
          Blogs
        </Link>
        <Link className="hover:text-pink-500" to={"/about"}>
          About us
        </Link>
      </div>
      <div className="py-1 px-3 font-semibold bg-amber-400 rounded-lg hover:bg-pink-500">
        <Link to={""}>Get started</Link>
      </div>
    </nav>
  );
};

export default Navbar;

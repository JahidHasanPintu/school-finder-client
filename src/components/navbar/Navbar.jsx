import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../api/AuthContext";
const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className=" w-full flex flex-row justify-around items-center p-4 shadow-md bg-white sticky top-0 z-10 ">
      <div className="brand-name flex flex-row justify-start items-center gap-3">
        <img
          className="w-[60px] rounded-lg bg-white"
          src="https://cdn-icons-png.freepik.com/256/7756/7756969.png?uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=ais"
          alt=""
        />
        <Link
          to={"/home"}
          className="text-2xl font-bold text-green-600 font-serif"
        >
          <span className="text-blue-400"> School</span>
          <span className="text-green-600"> Explorer</span>
        </Link>
      </div>
      <div className="menu-link text-blue-900 gap-x-5 flex flex-row font-semibold">
        <Link className="hover:text-pink-500" to={"/home"}>
          Home
        </Link>
        <Link className="hover:text-pink-500" to={"/library"}>
          Online Library
        </Link>
        <Link
          target="_blank"
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
      <div className="py-2 px-6 font-semibold bg-blue-600 rounded-2xl hover:bg-pink-700 text-white">
        {user ? (
          <Link to="" onClick={handleSignOut}>
            <span onClick={logout}>Logout</span>
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import prince from "../../assets/prince.jpg";
import ProfileCard from "../ProfileCard";
import SearchBar from "../SearchBar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="sticky top-0 bg-white dark:bg-slate-800 max-md:pb-2 shadow-md">
      <div className="w-full h-14  flex justify-between items-center px-8 dark:bg-slate-800 dark:text-white ">
        <NavLink to={"/"}>
          <div className="w-44 max-md:w-32 max-sm:w-28">
            <img src={logo} className="rounded-md" alt="" />
          </div>
        </NavLink>
        <SearchBar hideSearchBar={"max-md:hidden"} searchWidth={"w-6/12"} />
        <button
          className="w-10 h-10 rounded-full  overflow-hidden"
          onClick={() => setShowProfile(!showProfile)}
        >
          <img src={prince} alt="image" />
        </button>
      </div>

      <div className="md:hidden">
        <SearchBar searchWidth={"w-11/12 mx-auto"} />
      </div>

      <div className={`${showProfile ? "block" : "hidden"}`}>
        <ProfileCard />
      </div>
    </nav>
  );
};

export default Header;

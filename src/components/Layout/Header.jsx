import React, { useState } from "react";

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
      </div>
    </nav>
  );
};

export default Header;

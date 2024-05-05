import React, { useContext, useEffect } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import Prince from "../../assets/prince.jpg";

const Footer = () => {
  let navigate = useNavigate();
  let { theme, setTheme } = useContext(ThemeContext);
  function openHome(link) {
    navigate(`${link}`);
  }
  useEffect(() => {
    let defaultTheme = localStorage.getItem("theme");
    if (defaultTheme === null) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    setTheme(localStorage.getItem("theme"));
  }, []);
  function darkAndLight() {
    if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    let a = localStorage.getItem("theme");
    setTheme(a);
  }
  return (
    <div className="sticky mx-auto bg-white  bottom-0 max-w-md md:rounded-full md:bg-slate-50 border  h-12  dark:bg-slate-800 dark:text-white flex items-center justify-evenly">
      <button
        className="w-10 h-10 p-1  flex justify-center items-center text-2xl"
        onClick={() => openHome("/")}
      >
        <TiHomeOutline />
      </button>
      <button
        className="w-10 h-10 p-1  flex justify-center items-center text-2xl"
        onClick={() => openHome("/search")}
      >
        <IoSearch />
      </button>
      <button
        className="w-10 h-10 p-1  flex justify-center items-center text-2xl"
        onClick={() => openHome("/upload")}
      >
        <FiUpload />
      </button>
      <button
        className="w-10 h-10 p-1  flex justify-center items-center text-2xl"
        onClick={darkAndLight}
      >
        {theme === "light" ? <CiDark /> : <CiLight />}
      </button>
      <button
        className="w-7 rounded-full  h-7 overflow-hidden flex justify-center items-center text-2xl"
        onClick={() => openHome("/profile")}
      >
        <img src={Prince} alt="" />
      </button>
    </div>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import Prince from "../assets/prince.jpg";

const LatestTopics = ({ question, name, id, link, description }) => {
  return (
    <div className="w-11/12 max-xl:w-96 h-auto  max-md:w-full my-2  bg-white dark:bg-gray-700  border-t dark:border-gray-600 p-2">
      <NavLink to={"/profile"}>
        <div className="h-10 w-[60%] flex items-center gap-2">
          <img src={Prince} className="w-8 h-8 rounded-full" alt="" />
          <h4 className="font-semibold">@Prince_nishad</h4>
        </div>
      </NavLink>

      <NavLink to={`/view/${name}/${id}`}>
        <div>
          <h4 className="title text-[1.1rem] font-medium">{question}</h4>
          <div className="description">
            <p className="description my-2">{description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default LatestTopics;

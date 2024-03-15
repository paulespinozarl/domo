import React from "react";
import config from "../config/index.json";
import { Link } from "react-scroll";

const Sidebar = ({ handleLinkClick }) => {
  const { navbar } = config;

  return (
    <div
      className={`absolute top-20 flex flex-col bg-slate-50 rounded-lg p-10 left-0 z-60 w-screen`}
    >
      {navbar.map((item) => (
        <Link
          spy={true}
          smooth={true}
          duration={1000}
          key={item.name}
          to={item.href}
          onClick={handleLinkClick}
          offset={-94}
          className="my-4 font-bold text-sm flex items-center z-50 cursor-pointer text-gray-800"
        >
          <span className="ml-2 z-50 bg-slate-50">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

import { useState } from "react";
import config from "../config/index.json";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "./Button";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";

const Navbar = () => {
  const { navbar } = config;
  const isLargeScreen = useMediaQuery("(min-width: 864px)");
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  const [isActive, setIsActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [open, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsActive(false);
    setShowMenu(false);
  };

  return (
    <>
      <header className="flex justify-between max-w-5xl mx-auto text-slate-50 font-semibold text-sm pt-10">
        <h3>compleet labs</h3>
        <nav>
          {isLargeScreen && (
            <span>
              {navbar.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="p-4 opacity-65 cursor-pointer"
                  offset={-94}
                >
                  {item.name}
                </Link>
              ))}
            </span>
          )}
          {isShortScreen && (
            <div className={`${isActive ? "w-screen" : ""}`}>
              <Button isActive={isActive} toggleActive={toggleActive} />
              <div className={`${isActive ? "" : "hidden"}`}>
                <Sidebar handleLinkClick={handleLinkClick} />
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export { Navbar };

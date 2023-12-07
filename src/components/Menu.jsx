/* eslint-disable react/prop-types */
import { menuOptions } from "../contstants/constants";
import { handleSmoothScroll } from "../logics/logics";
import { MenuIcon } from "./Icons";
import { useState } from "react";
export const Menu = () => {
  const [active, setActive] = useState(false);
  const animationClass = active ? "animate-fade-down" : "animate-fade-up";

  return (
    <>
      <button
        type="button"
        className="hamburger inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none   dark:text-gray-400 transform transition-transform"
        onClick={() => setActive(!active)}
        aria-expanded="false"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon isActive={active} />
      </button>

      <nav
        className={`${active ? "block" : "hidden"} w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul
          className={`relative ont-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ${animationClass} animate-fill-both animate-duration-[600ms]  md:animate-none`}
        >
          {menuOptions.map((option, index) => (
            <li
              key={index}
              className="group text-black text-lg hover:bg-black/5 rounded-lg px-2 py-1 transition-all duration-300 ease-in-out "
            >
              <a
                title={`ir a ${option.name}`}
                href={option.link}
                className={`cursor-pointer font-semibold`}
                onClick={(e) => handleSmoothScroll(e, option.link)}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

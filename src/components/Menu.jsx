/* eslint-disable react/prop-types */
import { menuOptions } from "../contstants/constants";
import { handleToggle, handleSmoothScroll } from "../logics/logics";
import { MenuIcon } from "./Icons";
import { useRef } from "react";
export const Menu = () => {
  const menuContainer = useRef(null);

  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => handleToggle(menuContainer.current)}
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon />
      </button>
      <nav
        ref={menuContainer}
        className="hidden w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul className="relative ont-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          {menuOptions.map((option, index) => (
            <li
              key={index}
              className="group text-black text-lg hover:bg-black/5 rounded-lg px-2 py-1 transition-all duration-300 ease-in-out"
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

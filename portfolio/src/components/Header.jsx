import { menuOptions, handleToggle } from "../contstants/constants";
import { MenuIcon } from "./Icons";
import { useRef } from "react";
export const Header = () => {
  const menuContainer = useRef(null);
  return (
    <header className="flex justify-between pt-3 w-full">
      <nav className="bg-white border-gray-200 w-full px-4 md:px-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-0">
          <ul className="flex items-center gap-2">
            <li className="bg-yellow-500 rounded-full h-5 w-5"></li>
            <li>
              <h1 className="font-semibold text-md">
                {"<"}Bryan Quintana{" />"}
              </h1>
            </li>
          </ul>
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
          <div
            ref={menuContainer}
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="relative ont-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {menuOptions.map((option, index) => (
                <li key={index} className="group text-black text-lg ">
                  <span
                    className={`hover:opacity-100 cursor-pointer ${
                      option.link === "/"
                        ? "opacity-100 font-semibold"
                        : "opacity-90"
                    }`}
                  >
                    {option.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

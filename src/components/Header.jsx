import { Menu } from "./Menu";
export const Header = () => {
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
          <Menu />
        </div>
      </nav>
    </header>
  );
};

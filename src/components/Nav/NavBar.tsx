import DarkModeToggle from "./DarkModeToggle";
import logo from "../../assets/logo.webp";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between py-2 px-2 top-0 z-10 items-center">
      <img src={logo} className="w-16" alt="logo" />
      <div className="flex flex-row gap-1 items-center focus-within:border-2 border-blue-500 rounded-3xl bg-gray-200 px-3 dark:bg-gray-700 dark:text-black  mx-2 p-1 w-full">
        <BsSearch size={16} />
        <input
          className="rounded-3xl px-10 py-1 pl-3 bg-gray-200 dark:bg-gray-700 dark:text-white w-full focus:outline-none"
          placeholder="Search games..."
        />
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default NavBar;
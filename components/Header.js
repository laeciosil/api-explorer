import React from "react";
import MenuDropdownCategories from "./MenuDropdownCategories";
import MenuDropdownLogin from "./MenuDropdownLogin";
import { MagnifyingGlass } from "phosphor-react";
import ToggleDarkMode from "./ToggleDarkMode";

function Header() {
  return (
    <header className='w-full h-24 bg-light-primary dark:bg-dark-primary flex items-center justify-around'>
      <span>APISearch</span>
      <div className="w-full max-w-xl relative flex">
        <span className="absolute left-4 top-3.5 text-gray-400 text-lg"> 
          <MagnifyingGlass />
        </span>
        <input
          type="text"
          className="w-full bg-light-background dark:bg-dark-background p-3 pl-12 border-r-0 rounded-l-md focus:outline-none text-light-text dark:text-dark-text"
          onChange={() => {}}
          placeholder="Search API's"
        />
        <button
          type="button"
          className="bg-light-secondary text-dark-text px-8 border-r-0 rounded-r-md hover:bg-[#5965E0]"
        >
          Search
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <MenuDropdownCategories />
        <MenuDropdownLogin />
        <ToggleDarkMode />
      </div>
    </header>)}

export default Header;
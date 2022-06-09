import React from "react";
import MenuDropdownCategories from "./MenuDropdownCategories";
import MenuDropdownLogin from "./MenuDropdownLogin";
import ToggleDarkMode from "./ToggleDarkMode";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
function Header() {
  return (
    <header className='w-full h-24 bg-light-primary dark:bg-dark-primary flex items-center justify-around border-b-2 border-[#374151] border-opacity-10 dark:border-opacity-70'>
      <Logo />
      <InputSearch />
      <div className="flex gap-5 items-center">
        <MenuDropdownCategories />
        <MenuDropdownLogin />
        <ToggleDarkMode />
      </div>
    </header>)}

export default Header;
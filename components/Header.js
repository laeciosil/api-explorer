import React from "react";
import MenuDropdownCategories from "./MenuDropdownCategories";
import MenuDropdownLogin from "./MenuDropdownLogin";
import ToggleDarkMode from "./ToggleDarkMode";
import Logo from "./Logo";
import InputSearch from "./InputSearch";
function Header() {
  return (
    <header className='grow-0 w-full py-5 bg-light-primary dark:bg-dark-primary flex items-center justify-center border-b-2 border-[#374151] border-opacity-10 dark:border-opacity-70'>
      <section className="w-[80rem] px-3 flex items-center justify-between">
        <Logo />
        <InputSearch />
        <div className="flex gap-5 items-center">
          <MenuDropdownCategories />
          <MenuDropdownLogin />
          <ToggleDarkMode />
        </div>
      </section>
    </header>)}

export default Header;
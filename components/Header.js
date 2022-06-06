import React from "react";
import Switch from "react-switch";
import { Sun, Moon, MagnifyingGlass } from "phosphor-react";
import { useTheme } from 'next-themes';


function Header() {
  const {theme, setTheme} = useTheme();
  return (
    <header className='w-full h-24 bg-light-primary dark:bg-dark-primary flex items-center justify-around'>
      <span>APISearch</span>
      <div className="w-full max-w-xl relative flex">
        <span className="absolute left-4 top-3.5 text-gray-400 text-lg"> 
          <MagnifyingGlass />
        </span>
        <input
          type="text"
          className="w-full border-black  bg-gray-100 p-3 pl-12 border-r-0 rounded-l-md focus:outline-none text-light-text dark:text-dark-text"
          onChange={() => {}}
          placeholder="Search API's"
        />
        <button
          type="button"
          className="bg-[#5a65e0ca] text-white px-8 border-r-0 rounded-r-md hover:bg-[#5965E0]"
        >
          Search
        </button>
      </div>
      <div className="flex gap-5 items-center">
        {/* <MenuDropdownCategories />
        <MenuDropdownLogin /> */}
        <Switch 
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          checked={theme === 'dark'}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "orange",
                fontSize: 20,
                paddingRight: 2
              }}
            >
              <Sun weight="fill"/>
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "orange",
                fontSize: 20,
                paddingRight: 2
              }}
            >
              <Moon weight="fill"/>
            </div>
          }
          onColor={'#5965E0'}
          offColor={'#5965E0'}
        />
      </div>
    </header>)}

export default Header;
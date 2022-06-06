import { UserCircle, CaretDown } from "phosphor-react";
import { Popover } from '@headlessui/react';
import { AiFillGithub } from 'react-icons/ai';

function MenuDropdownLogin() {
  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 focus:outline-none hover:text-light-secondary">
        <UserCircle size={30} weight="light"/>
        Login
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col justify-center items-center w-56 h-40 space-y-2 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md p-2 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <p>Login using github</p>
          <button 
            type="button"
            className="p-2 flex gap-2 justify-center items-center rounded-md border-transparent w-full border-2 text-[#5965E0] border-[#5965E0] hover:bg-[#5965E0] hover:text-dark-text"
            onClick={() => {}}
          >
          <AiFillGithub size={20}/>
            GITHUB
          </button>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownLogin;
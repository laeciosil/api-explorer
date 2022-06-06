import { CaretDown } from "phosphor-react";
import { Popover } from '@headlessui/react'
import Link from 'next/link'

function MenuDropdownCategories() {
  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 focus:outline-none hover:text-light-secondary">
        Categories
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col w-40 space-y-2 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md p-5 shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <Link 
            className=" p-5 hover:bg-dark-background rounded-md" href="/search">Categoria 1</Link>
          <Link className=" flex p-5 hover:bg-dark-background rounded-md" href="/search">Categoria 2</Link>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default MenuDropdownCategories;
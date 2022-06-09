import { CaretDown } from "phosphor-react";
import { Popover } from '@headlessui/react';

const categories = [
  { 
    id: 1,
    name:'Animals'
  },
  { 
    id: 2,
    name:'Animes'
  },
  { 
    id: 3,
    name:'Games'
  },
];

function MenuDropdownCategories() {
  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 hover:text-light-secondary">
        Categories
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col w-44  bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        {categories.map((item) => (
          <a
            key={item.name}
            href='#'
            className="flex items-center py-2 pl-3 pr-4 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {item.name}
          </a>
        ))}
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default MenuDropdownCategories;
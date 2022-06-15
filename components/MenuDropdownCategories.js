import { CaretDown } from "phosphor-react";
import { Popover } from '@headlessui/react';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from 'next/router';

function MenuDropdownCategories() {
  const {categories, setFilterAPi} = useContext(AppContext);
  const router = useRouter();
  const changeCategory = (value) => {
    setFilterAPi({type: 'category', value});
    router.push('/search');
  };
  return (
    <Popover className="relative text-base">
      <Popover.Button className="flex items-center gap-1 hover:text-light-secondary">
        Categorias
        <CaretDown />
      </Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="flex flex-col w-44 bg-light-primary dark:bg-dark-primary left-0 top-9 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-auto h-56 scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin">
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            className="flex items-center py-2 pl-3 pr-4 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 snap-start"
            onClick={() => changeCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default MenuDropdownCategories;